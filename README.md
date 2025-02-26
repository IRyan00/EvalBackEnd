<a id="readme-top"></a>

<h1 align="center">Portfolio</h1>
<h2 align="center">Projet pour l'évaluation de compétences back-end du TP DWWM Bayonne</h2>

<h3 align="center">À propos<h3>

<div align="center">

C'est un projet qui a pour but d'évaluer mes compétences back-end dans le cadre de la formation  
"TP - Développeur Web et Web Mobile" à l'AFEC de Bayonne.

</div>

## Table des matières

- [Sujet](#sujet)
- [Fonctionnalité](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation, configuration et lancement du projet](#installation-configuration-et-lancement-du-projet)
- [Dépendances](#dépendances)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Test en tant qu'admin](#test-en-tant-quadmin)
- [Arborescence](#arborescence)
- [Suivi](#suivi)
- [Tests et Visualisation](#tests-et-visualisation)
- [Demo](#demo)
  - [Backend - Render](#backend---render)
  - [Frontend - Vercel](#frontend---vercel)

## Sujet

Vous allez concevoir une application MERN permettant aux utilisateurs de gérer et afficher leurs compétences via un portfolio dynamique. L'application devra être sécurisée, responsive (mobile-first) et conforme aux exigences RGPD avec un système de gestion des cookies (Tarteaucitron.js) et un Captcha (Google reCAPTCHA ou Tarteaucitron) pour sécuriser l’authentification.

## Fonctionnalités

- Gestion des utilisateurs (création, affichage, modification, suppression, connexion)
- Gestion des compétences (création, affichage, modification, suppression)
- Authentification sécurisée (JWT & bcrypt)
- Gestion des rôles (user, admin) et protection de routes
- Logs pour suivre les actions des utilisateurs
- Formulaire de connexion avec Google reCAPTCHA
- Gestion des cookies avec Tarteaucitron.js

## Technologies utilisées

<div align="center">

[![My Skills](https://skillicons.dev/icons?i=vscode,git,github,postman,nodejs,npm,javascript,express,mongodb,vite,react,bootstrap,vercel)](https://skillicons.dev)

</div>

## Prérequis

- npm :

  ```sh
  npm install npm@latest -g
  ```

  </br>

## Installation, configuration et lancement du projet

1.  Cloner le répertoire :

    ```sh
    git clone <url-du-repo>
    ```

<br/>

2.  Installer les dépendances pour le backend et le frontend (sur deux terminaux différents):

    ```ini
    cd backEnd
    npm i

    cd frontEnd
    npm i
    ```

    <br/>

3.  Créer un fichier `.env` dans le dossier backEnd avec les variables suivantes :

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

<br/>

4.  Créer un fichier `.env` dans le dossier frontEnd avec les variables suivantes :

    ```ini
    VITE_API_URL = votre_api_url

    # Google reCaptcha
    VIT_CAPTCHA_SITE_KEY= votre_captcha_site_key
    ```

<br/>

5.  Lancer les serveurs backend et frontend (sur deux terminaux différents):

    ```ini
    cd backEnd
    npm start

    cd frontEnd
    npm run dev
    ```

    <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Dépendances

### Frontend

```ini
  "dependencies": {
    "axios": "^1.7.9",
    "bootstrap": "^5.3.3",
    "gitignore": "^0.7.0",
    "jwt-decode": "^4.0.0",
    "react": "^19.0.0",
    "react-bootstrap": "^2.10.9",
    "react-dom": "^19.0.0",
    "react-google-recaptcha": "^3.1.0",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.5"
  }
```

### Backend

```ini
  "dependencies": {
    "axios": "^1.7.9",
    "bcrypt": "^5.1.1",
    "cloudinary": "^2.5.1",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "express-async-handler": "^1.2.0",
    "fs": "^0.0.1-security",
    "gitignore": "^0.7.0",
    "helmet": "^8.0.0",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.13.0",
    "mongoose": "^8.10.0",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^3.1.9",
    "winston": "^3.17.0"
  }
```

## Test admin

```ini
Email : ryanadmin@mail.com

Mot de passe : ryan
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Arborescence

```bash
evalBackEnd/                             # Dossier racine du projet
├── backEnd/                             # Backend de l'application
│   ├── logs/
│   │   └── log.log                      # Fichier de logs de l'application
│   │
│   ├── src/
│   │   ├── config/                      # Configuration du backend
│   │   │   ├── db.js                    # Configuration de la connexion MongoDB
│   │   │   └── logg.js                  # Configuration des options de logs
│   │   │
│   │   ├── controllers/                 # Logique métier (fonctions appelées par les routes)
│   │   │   ├── authController.js        # Gestion de l'authentification et des utilisateurs
│   │   │   └── skillsController.js      # Gestion des compétences
│   │   │
│   │   ├── middlewares/                 # Fonctions intermédiaires pour les requêtes HTTP
│   │   │   ├── authMiddleware.js        # Vérification de l'authentification
│   │   │   ├── isAdmin.js               # Vérification des droits administrateurs
│   │   │   ├── morganMiddleware.js      # Middleware de gestion des logs HTTP avec Morgan
│   │   │   └── recaptchaMiddleware.js   # Vérification du reCaptcha
│   │   │
│   │   ├── models/                      # Modèles de données MongoDB (schemas Mongoose)
│   │   │   ├── User.js                  # Modèle utilisateur
│   │   │   ├── Skills.js                # Modèle compétence
│   │   │   └── Settings.js              # Modèle paramètres d'application
│   │   │
│   │   └── routes/                      # Définition des routes de l'API
│   │       ├── authRoutes.js            # Routes pour l'authentification et les utilisateurs
│   │       └── skillsRoutes.js          # Routes pour les compétences
│   │
│   ├── .env                            # Variables d'environnement (ex : clés API)
│   ├── .gitignore                      # Fichiers et dossiers à ignorer par Git
│   ├── package-lock.json                # Versionnement des dépendances Node.js
│   ├── package.json                     # Dépendances et scripts du projet backend
│   └── server.js                        # Point d'entrée du serveur Express
│
├── frontend/                           # Frontend de l'application (React)
│   ├── src/
│   │   ├── assets/                      # Fichiers statiques (images, polices, etc.)
│   │   │   └── carouselImages            # Images du carousel
│   │   │       ├── img1.jgp              # 1ère image du carousel
│   │   │       ├── img2.jgp              # 2ème image du carousel
│   │   │       └── img3.jgp              # 3ème image du carousel
│   │   │
│   │   ├── components/                  # Composants réutilisables React
│   │   │   ├── CarouselPage.jsx          # Composant carousel
│   │   │   ├── Footer.jsx                # Composant footer
│   │   │   ├── Navbar.jsx                # Composant barre de navigation
│   │   │   ├── Presentation.jsx          # Composant présentation
│   │   │   └── SkillCard.jsx             # Composant carte de compétence
│   │   │
│   │   ├── pages/                       # Pages principales du site
│   │   │   ├── Dashboard.jsx             # Page du tableau de bord (après connexion)
│   │   │   ├── Home.jsx                  # Page d'accueil
│   │   │   ├── Login.jsx                 # Page de connexion
│   │   │   ├── Register.jsx              # Page d'inscription
│   │   │   └── Skills.jsx                # Page d'affichage des compétences
│   │   │
│   │   ├── styles/                      # Feuilles de style CSS
│   │   │   └── navbar.css                # Style de la barre de navigation
│   │   │
│   │   ├── App.css                      # Style global de l'application
│   │   ├── App.jsx                      # Composant racine de l'application React
│   │   ├── index.css                    # Styles globaux
│   │   └── main.jsx                     # Point d'entrée React
│   │
│   ├── utils/                          # Fonctions utilitaires
│   │   └── ProtectedRoutes.jsx           # Protection des routes (authentification)
│   │
│   ├── .env                            # Variables d'environnement pour le frontend
│   ├── .gitignore                      # Fichiers à ignorer par Git (frontend)
│   ├── eslint.config.js                 # Configuration ESLint (linting du code)
│   ├── index.html                       # Page HTML principale
│   ├── package-lock.json                # Versionnement des dépendances Node.js
│   └── package.json                     # Dépendances et scripts du projet frontend
│
└── README.md                           # Documentation du projet (installation, usage)

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Suivi

- **GitHub** : Suivi du code
- **Trello** : Suivi des tâches

## Tests et Visualisation

- **MongoDB Compass** : Visualisation des données
- **Postman** : Tests des routes API - [Collection postman](https://www.postman.com/iryan00/my-workspace/collection/3b0arvv/evalbackend?action=share&creator=6356318)

</br>
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

## Déploiement

### [ Backend - Render ](https://evalbackend-sp7c.onrender.com)

### [ Frontend - Vercel ](https://eval-back-end.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
