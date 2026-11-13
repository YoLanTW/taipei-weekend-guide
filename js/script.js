const defaultActivities = [
  { id: 'tea', name: 'Tea and old streets', duration: 90 },
  { id: 'gondola', name: 'Gondola to Maokong', duration: 150 },
  { id: 'bookstore', name: 'Quiet bookstore stop', duration: 60 },
  { id: 'market', name: 'Night-market supper', duration: 120 },
];

function getPlannerSummary(selectedIds, activities = defaultActivities) {
  const selected = selectedIds
    .map((id) => activities.find((activity) => activity.id === id))
    .filter(Boolean);

  return {
    count: selected.length,
    duration: selected.reduce((total, activity) => total + activity.duration, 0),
    items: selected.map((activity) => activity.name),
  };
}

function calculateQuizResult(answers, answerKey) {
  const score = Object.keys(answerKey).reduce((total, question) => (
    total + (answers[question] === answerKey[question] ? 1 : 0)
  ), 0);

  if (score === 3) {
    return {
      score,
      label: 'Night-market explorer',
      message: 'You are happiest following food, lights, and one more interesting turn.',
    };
  }

  if (score === 2) {
    return {
      score,
      label: 'Balanced browser',
      message: 'Mix one anchor destination with room for a spontaneous side street.',
    };
  }

  return {
    score,
    label: 'Slow morning planner',
    message: 'Start with tea, green space, and a gentle route before the city gets busy.',
  };
}

function bindPlanner() {
  const form = document.querySelector('#planner-form');
  const list = document.querySelector('#plan-list');
  const count = document.querySelector('#plan-count');
  const duration = document.querySelector('#plan-duration');
  if (!form || !list || !count || !duration) return;

  const checkboxes = [...form.querySelectorAll('[data-activity-id]')];
  const activities = checkboxes.map((checkbox) => ({
    id: checkbox.dataset.activityId,
    name: checkbox.dataset.activityName,
    duration: Number(checkbox.dataset.activityDuration),
  }));

  function renderPlan() {
    const selectedIds = checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.dataset.activityId);
    const summary = getPlannerSummary(selectedIds, activities);
    count.textContent = summary.count;
    duration.textContent = summary.duration;
    list.innerHTML = summary.items.length
      ? summary.items.map((item) => `<li>${item}</li>`).join('')
      : '<li class="empty-plan">Choose a stop to start your list.</li>';
  }

  checkboxes.forEach((checkbox) => checkbox.addEventListener('change', renderPlan));
  renderPlan();
}

function bindQuiz() {
  const form = document.querySelector('#style-quiz');
  const resultElement = document.querySelector('#quiz-result');
  if (!form || !resultElement) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const answers = {
      food: formData.get('food'),
      pace: formData.get('pace'),
      time: formData.get('time'),
    };

    if (Object.values(answers).some((answer) => !answer)) {
      resultElement.className = 'form-message form-error';
      resultElement.textContent = 'Choose one answer in each question to see your result.';
      return;
    }

    const result = calculateQuizResult(answers, { food: 'food', pace: 'slow', time: 'night' });
    resultElement.className = 'form-message result-ready';
    resultElement.innerHTML = `<strong>${result.label}</strong><br>${result.message}`;
  });
}

function initSite() {
  bindPlanner();
  bindQuiz();
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initSite);
}

if (typeof module !== 'undefined') {
  module.exports = { getPlannerSummary, calculateQuizResult };
}
