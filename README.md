# 🌍 Travel Agency - Application SPA

## 📝 Description du projet

Ce projet est une application **Single Page** pour une agence de voyage. Il ne doit donc pas y avoir de rechargement de page.  
Les fonctionnalités principales incluent :

- Ajout, modification et suppression de forfaits
- Visualisation des forfaits à partir d’un fichier JSON
- Simulation d’un serveur **Node.js** pour altérer dynamiquement les données

## ⚙️ Technologies utilisées

- **Frontend** : Vue.js, Tailwind CSS, Axios, PrimeIcons  
- **Backend** : Node.js, Express, Sequelize, MySQL2, Body-Parser, CORS, Dotenv  
- **Base de données** : MySQL

---

## 🚀 Commandes d’installation

### 🔧 Interface (frontend)

```bash
vue create travel-agency-vue
cd travel-agency-vue
npm install tailwindcss@3 postcss autoprefixer --force
npx tailwindcss init -p
npm install axios
npm install primeicons
npm run serve
```

### 🖥️ Serveur (backend)

```sql
CREATE DATABASE travel_agency;
```

```bash
cd server
npm init
npm install express sequelize mysql2 body-parser cors
npm install dotenv
npm run start
```

---

## 🛠️ Fichier `.env` requis (côté serveur)

Créez un fichier `.env` à la racine du dossier `server` :

```
DB_HOST=localhost
DB_USER=     # À remplir selon votre config locale
DB_PASSWORD= # À remplir selon votre config locale
DB_NAME=travel_agency
DB_DIALECT=mysql
DB_PORT=     # Optionnel (par défaut 3306)
```

---

## 📦 Installation du projet

1. Télécharger l’archive
2. Décompresser le dossier
3. Dans le dossier `interface` :  
   ```bash
   npm install
   # ou en cas de problème :
   npm install --force
   ```

4. Dans le dossier `server` :  
   ```bash
   npm install
   ```

5. Créer le fichier `.env` comme indiqué plus haut
6. Lancer le serveur :  
   ```bash
   npm run start
   ```

7. Lancer l’interface :  
   ```bash
   npm run serve
   ```

---

## 💡 Retour d’expérience

Ce TP m’a permis de **consolider mes compétences en JavaScript**.  
J’ai particulièrement apprécié la **partie serveur**, qui m’a passionné : travailler avec une **architecture MVC en JavaScript** était à la fois stimulant et enrichissant.

La découverte de certaines bibliothèques, comme **Sequelize**, a grandement facilité le développement.  
J’ai notamment aimé travailler sur la **validation**, un aspect que j’ai trouvé à la fois utile et amusant.

Mettre en place la **transmission des validations du backend vers le frontend** par moi-même a représenté un excellent défi que j’ai pris plaisir à relever.

---

🧑‍💻 Projet réalisé dans le cadre d’un TP — Session 4 – Cégep Maisonneuve
