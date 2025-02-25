<a id="readme-top"></a>

  <h1 align="center">Portfolio</h1>
  <h2 align="center">Projet pour l'évaluation de compétences back-end du TP DWWM Bayonne</h2>

<h3 align="center">À propos de ce projet<h3>

C'est un projet qui a pour but d'évaluer mes compétences back-end dans le cadre de la formation "TP DWWM" à l'AFEC de Bayonne.

### Sujet ?

Vous allez concevoir une application MERN permettant aux utilisateurs de gérer et afficher leurs compétences via un portfolio dynamique. L'application devra être sécurisée, responsive (mobile-first) et conforme aux exigences RGPD avec un système de gestion des cookies (Tarteaucitron.js) et un Captcha (Google reCAPTCHA ou Tarteaucitron) pour sécuriser l’authentification.

### Développement

- Initialisation de l’application backend :

  - Mise en place de Node.js avec Express.
  - Configuration de MongoDB avec Mongoose.

- Création des routes et controllers :

  - Gestion des utilisateurs (inscription, connexion, affichage, modification et suppresssion | utilisation de JWT et bcrypt pour la sécurité).
  - Création, affichage, modification et suppression des skills.

- Test des routes
  - Test des routes avec Postman (collection : https://www.postman.com/iryan00/my-workspace/collection/3b0arvv/evalbackend?action=share&creator=6356318 ).

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

- Démonstration et Déploiement Local
  - Test complet des fonctionnalités.
  - Démonstration du projet devant un jury.

```bash
evalBackEnd/
├── backEnd/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js         # Configuration de la connexion MongoDB
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js     # Gestion des utilisateurs
│   │   │   ├── skillsController.js   # Gestion de skills
│   │   │   └── settingsController.js # Gestion des paramètres
│   │   │
│   │   ├── models/
│   │   │   ├── User.js             # Modèle utilisateur
│   │   │   ├── Skills.js           # Modèle skills
│   │   │   └── Settings.js         # Modèle settings
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js       # Routes pour les utilisateurs
│   │   │   ├── skillsRoutes.js     # Routes pour les skills
│   │   │   └── settingsRoutes.js   # Routes pour les paramètres
│   │   │
│   │   └── middlewares/
│   │       ├── authMiddleware.js   # Middleware d'authentification
│   │       └── isAdmin.js          # Gestion des administrateurs
│   │
│   ├── public/                     # Dossier pour les fichiers statiques
│   │
│   ├── .env                        # Variables d'environnement
│   ├── .gitignore                  # Fichiers à ignorer par Git
│   ├── package.json                # Dépendances et scripts du projet
│   ├── server.js                   # Point d'entrée du serveur
├── frontend/             # Vide
└── README.md                       # Documentation du projet
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies utilisées

### Backend

[![My Skills](https://skillicons.dev/icons?i=vscode,git,github,postman,nodejs,npm,javascript,express,mongodb,react,bootstrap,vercel)](https://skillicons.dev)

### Suivi

- **_GitHub_** : Suivi du code.
- **_Trello_** : Suivi des tâches.

### Tests et Visualisation

- **_Postman_** : Tests des routes API.
- **_MongoDB_** Compass : Visualisation des données.

### Documentation

- Utilisation de **_Swagger_** ou d’un fichier **_markdown_** structuré.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Prérequis

- npm :

```sh
npm install npm@latest -g
```

## Installation, préparation et lancement du projet

1. Cloner le répertoire :
   ```sh
   git clone <url-du-repo>
   ```
2. Installer les dépendances pour le backend et le frontend (sur deux terminaux différents):

   ```ini
   cd backEnd
   npm i

   cd frontEnd
   npm i
   ```

3. Lancer les serveurs backend et frontend (sur deux terminaux différents):

   ```ini
   cd backEnd
   npm start

   cd frontEnd
   npm run dev
   ```

## Configuration

Créer un fichier `.env` à la racine du projet avec les variables suivantes :

```ini
PORT = le_port_sohaité (e.g 3000)

MONGO_URI = votre_uri_mongodb

JWT_SECRET= votre_phrase_secrète

CLOUD_NAME= votre_cloud_name
API_KEY= votre_api_key
API_SECRET= votre_api_secret
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Démo

### [ Backend - Render ]()

### [ Frontend - Vercel ]()

## Liens Utiles

- <a href="https://trello.com/b/eJTXoZUS/geekproject">Trello</a>
- <a href="https://docs.google.com/document/d/18_fqENGk0fTR6b3LnP3UKBsF_1hyelgP4yCyLKKQpjs/edit?tab=t.0">Google docs</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
