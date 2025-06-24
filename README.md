🎨 Landing Page Carambar

Cette mini-application affiche des blagues aléatoires depuis l’API Carambar.

🔗 Liens utiles

GitHub Pages : [https://ikay-gh.github.io/Carambar-LandingPage-FrontProject-/](https://ikay-gh.github.io/Carambar-LandingPage-FrontProject-/)
API : [https://carambar-landingpage-backproject.onrender.com](https://carambar-landingpage-backproject.onrender.com)

⚙️ Tech stack

- HTML
- CSS
- JavaScript
- API REST Carambar

💡 Fonctionnalités

- Un bouton "Afficher une blague"
- Un bouton "Voir la réponse"
- Appel `fetch` vers l’API déployée sur Render
- Affichage dynamique de la question et de la réponse

▶️ Lancer en local

git clone https://github.com/ikay-gh/Carambar-LandingPage-FrontProject-.git
cd Carambar-LandingPage-FrontProject-
Ouvrir le fichier index.html dans un navigateur.

🔄 Communication avec l'API

Les appels vers l’API sont effectués via fetch() :

fetch('https://carambar-landingpage-backproject.onrender.com/api/v1/blagues/random')
✅ Le backend autorise cette origine (CORS) pour permettre la communication.

✨ Autrice
CAYUELA Annick
