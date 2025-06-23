const btn = document.getElementById('btn-blague');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');

btn.addEventListener('click', async () => {
  try {
    const res = await fetch('https://carambar-landingpage-backproject.onrender.com/api/v1/blagues/random');
    const data = await res.json();
    questionEl.textContent = data.question;
    answerEl.textContent = data.answer;
  } catch (err) {
    questionEl.textContent = "Erreur lors du chargement";
    answerEl.textContent = "";
    console.error(err);
  }
});
