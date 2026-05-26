<!-- PRÉREQUIS ET INSTALLATION -->

## Préparation du projet

### 1. Initialisation React
Le projet doit être initialisé avec **Vite** (Create-React-App est déprécié).
```bash
npm create vite@latest argent-bank-app -- --template react
```

### 2. Configuration du Back-end local
Le back-end est fourni via le repo `Project-10-Bank-API`.
- **Prérequis :** Node.js v12 et MongoDB Community Server
- **Installation :**
```bash
npm install
npm run dev:server
npm run populate-db
```
*Note : Le script `populate-db` crée les utilisateurs de test (Tony Stark et Steve Rogers).*
- L'API tournera sur : `http://localhost:3001`
- La documentation API (Swagger) est dispo sur : `http://localhost:3001/api-docs`

### 3. Ressources Front-end fournies
- Maquettes statiques (HTML/CSS) disponibles dans `Document` du repo.
