btnBlague.addEventListener('click', async () => {
  try {
    const res = await fetch('https://carambar-landingpage-backproject.onrender.com/api/v1/blagues/random');
    const data = await res.json();

    questionEl.textContent = data.question;
    answerEl.textContent = data.answer;

    // Cacher la réponse
    answerEl.classList.add('hidden');
    // Afficher le bouton réponse
    btnReponse.classList.remove('hidden');
  } catch (err) {
    questionEl.textContent = "Erreur lors du chargement";
    answerEl.textContent = "";
    btnReponse.classList.add('hidden');
    console.error(err);
  }
});

btnReponse.addEventListener('click', () => {
  // Afficher la réponse
  answerEl.classList.remove('hidden');
  // Cacher le bouton réponse
  btnReponse.classList.add('hidden');
});