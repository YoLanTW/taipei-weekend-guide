const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const pages = ['index.html', 'destinations.html', 'itinerary.html', 'tips.html'];

function run(name, callback) {
  try {
    callback();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    throw error;
  }
}

run('the project has four connected HTML pages with shared navigation and CSS', () => {
  for (const page of pages) {
    const source = fs.readFileSync(path.join(root, page), 'utf8');
    assert.match(source, /href="css\/style\.css(?:\?[^\"]*)?"/);
    assert.match(source, /src="js\/script\.js"/);
    for (const destination of pages) {
      assert.match(source, new RegExp(`href="${destination}"`));
    }
  }
});

run('the website contains the required HTML teaching examples', () => {
  const source = pages.map((page) => fs.readFileSync(path.join(root, page), 'utf8')).join('\n');
  assert.match(source, /<img[^>]+alt="[^"]+"/);
  assert.match(source, /<ul(?:\s|>)|<ol(?:\s|>)/);
  assert.match(source, /<table[\s>]/);
  assert.match(source, /href="https?:\/\//);
  assert.match(source, /class="[^"]*grid/);
});

run('planner summary reports selected activity count, duration, and names', () => {
  const { getPlannerSummary } = require('../js/script.js');
  const activities = [
    { id: 'morning', name: 'Morning walk', duration: 90 },
    { id: 'market', name: 'Night market', duration: 120 },
  ];
  assert.deepEqual(getPlannerSummary(['morning', 'market'], activities), {
    count: 2,
    duration: 210,
    items: ['Morning walk', 'Night market'],
  });
});

run('quiz result gives a recommendation from the answer choices', () => {
  const { calculateQuizResult } = require('../js/script.js');
  const result = calculateQuizResult({ food: 'food', pace: 'slow', time: 'night' }, {
    food: 'food',
    pace: 'slow',
    time: 'night',
  });
  assert.equal(result.score, 3);
  assert.equal(result.label, 'Night-market explorer');
  assert.match(result.message, /food/i);
});

