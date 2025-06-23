const btnBlague = document.getElementById('btn-blague');
const btnReponse = document.getElementById('btn-reponse');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');

btnBlague.addEventListener('click', async () => {
  try {
    const res = await fetch('https://carambar-landingpage-backproject.onrender.com/api/v1/blagues/random');
    const data = await res.json();

    questionEl.textContent = data.question;
    answerEl.textContent = data.answer;

    
    answerEl.classList.add('hidden');
    btnReponse.classList.remove('hidden');
  } catch (err) {
    questionEl.textContent = "Erreur lors du chargement";
    answerEl.textContent = "";
    btnReponse.classList.add('hidden');
    console.error(err);
  }
});

btnReponse.addEventListener('click', () => {
  answerEl.classList.remove('hidden');
  btnReponse.classList.add('hidden');
});