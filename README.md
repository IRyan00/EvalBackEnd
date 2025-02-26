<a id="readme-top"></a>

  <h1 align="center">Portfolio</h1>
  <h2 align="center">Projet pour l'évaluation de compétences back-end du TP DWWM Bayonne</h2>

<h3 align="center">À propos de ce projet<h3>

C'est un projet qui a pour but d'évaluer mes compétences back-end dans le cadre de la formation "TP DWWM" à l'AFEC de Bayonne.

## Sujet

Vous allez concevoir une application MERN permettant aux utilisateurs de gérer et afficher leurs compétences via un portfolio dynamique. L'application devra être sécurisée, responsive (mobile-first) et conforme aux exigences RGPD avec un système de gestion des cookies (Tarteaucitron.js) et un Captcha (Google reCAPTCHA ou Tarteaucitron) pour sécuriser l’authentification.

## Technologies utilisées

[![My Skills](https://skillicons.dev/icons?i=vscode,git,github,postman,nodejs,npm,javascript,express,mongodb,vite,react,bootstrap,vercel)](https://skillicons.dev)

## Arborescence

```bash
evalBackEnd/
├── backEnd/
│   ├── logs/
│   │   └── log.log           # Logs
│   │
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js         # Configuration de la connexion MongoDB
│   │   │   └── logg.js       # Configuration des logs
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js     # Gestion des utilisateurs
│   │   │   └── skillsController.js   # Gestion de compétences
│   │   │
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.js       # Middleware d'authentification
│   │   │   ├── isAdmin.js              # Gestion des administrateurs
│   │   │   ├── morganMiddleware.js     # Gestion des logs
│   │   │   └── recaptchaMiddleware.js  # Gestion du reCaptcha
│   │   │
│   │   ├── models/
│   │   │   ├── User.js             # Modèle utilisateur
│   │   │   ├── Skills.js           # Modèle compétence
│   │   │   └── Settings.js         # Modèle paramètres
│   │   │
│   │   └── routes/
│   │       ├── authRoutes.js       # Routes pour les utilisateurs
│   │       └── skillsRoutes.js     # Routes pour les compétences
│   │
│   ├── .env                        # Variables d'environnement
│   ├── .gitignore                  # Fichiers à ignorer par Git
│   ├── package-lock.json
│   ├── package.json                # Dépendances et scripts du projet
│   └── server.js                   # Point d'entrée du serveur
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   └── carouselImages
│   │   │       ├── img1.jgp       # 1ère image du carousel
│   │   │       ├── img2.jgp       # 2ème image du carousel
│   │   │       └── img3.jgp       # 3ème image du carousel
│   │   │
│   │   ├── components/
│   │   │   ├── CarouselPage.jsx   # Composant carousel
│   │   │   ├── Footer.jsx         # Composant footer
│   │   │   ├── Navbar.jsx         # Composant barre de navigation
│   │   │   ├── Presentation.jsx   # Composant présentation
│   │   │   └── SkillCard.jsx      # Composant carte de compétence
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx     # Page du dashboard
│   │   │   ├── Home.jsx          # Page d'accueil
│   │   │   ├── Login.jsx         # Page de connexion
│   │   │   ├── Register.jsx      # Page d'inscrption
│   │   │   └── Skills.jsx        # Page d'affichage des compétences
│   │   │
│   │   ├── styles/
│   │   │   └── navbar.css        # Style de la barre de navigation
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx               # Point d'entrée
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── utils/
│   │   └── ProtectedRoutes.jsx   # Protection des routes
│   │
│   ├── .env                      # Variables d'environnement
│   ├── .gitignore                # Fichiers à ignorer par Git
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   └── package.json              # Dépendances et scripts du projet
│
└── README.md                     # Documentation du projet
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Suivi

- **GitHub** : Suivi du code
- **Trello** : Suivi des tâches

## Tests et Visualisation

- **MongoDB Compass** : Visualisation des données
- **Postman** : Tests des routes API (collection : https://www.postman.com/iryan00/my-workspace/collection/3b0arvv/evalbackend?action=share&creator=6356318 ).

<div align="center">

| Method | Path                        | Desc                            |
| :----- | :-------------------------- | :------------------------------ |
| POST   | /api/auth/register          | Créer un utilisateur            |
| GET    | /api/auth/getallusers       | Afficher tous les utilisateurs  |
| PUT    | /api/auth/updateuser/:id    | Modifier un utilisateur         |
| DEL    | /api/auth/deleteuser/:id    | Supprimer un utilisateur        |
| POST   | /api/auth/login.            | Connecter un utilisateur        |
| POST   | /api/skills/addskill        | Ajouter une compétence          |
| GET    | /api/skills/getallskills    | Afficher toutes les compétences |
| PUT    | /api/skills/updateskill/:id | Modifier une compétence         |
| DEL    | /api/skills/deleteskill/:id | Supprimer une compétence        |

</div>

## Prérequis

- npm :

  ```sh
  npm install npm@latest -g
  ```

## Installation, configuration et lancement du projet

1.  Cloner le répertoire :

    ```sh
    git clone <url-du-repo>
    ```

2.  Installer les dépendances pour le backend et le frontend (sur deux terminaux différents):

    ```ini
    cd backEnd
    npm i

    cd frontEnd
    npm i
    ```

3.  1.  Créer un fichier `.env` dans le dossier backEnd avec les variables suivantes :

    ```ini
    PORT = le_port_sohaité (e.g 3000)

    # MongoDB
    MONGO_URI = votre_uri_mongodb

    # JsonWebToken
    JWT_SECRET= votre_phrase_secrète

    # Cloudinary
    CLOUD_NAME= votre_cloud_name
    API_KEY= votre_api_key
    API_SECRET= votre_api_secret

    # Google reCaptcha
    CAPTCHA_SECRET_KEY= votre_captcha_secret_key
    ```

4.  Créer un fichier `.env` dans le dossier frontEnd avec les variables suivantes :

    ```ini
    VITE_API_URL = votre_api_url

    # Google reCaptcha
    VIT_CAPTCHA_SITE_KEY= votre_captcha_site_key
    ```

5.  Lancer les serveurs backend et frontend (sur deux terminaux différents):

    ```ini
    cd backEnd
    npm start

    cd frontEnd
    npm run dev
    ```

## Démo

### [ Backend - Render ](https://evalbackend-sp7c.onrender.com)

### [ Frontend - Vercel ](https://eval-back-end.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
