# Projet Argent Bank (React / Redux / Swagger)


Le projet est découpé en deux phases distinctes

S'aider de ceci : "https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/blob/master/.github/ISSUE_TEMPLATE/home-page-feature.md"

---

<!-- PHASE 1 : DÉVELOPPEMENT FRONT-END (REACT & REDUX) -->

## Phase 1 : Authentification et Profil Utilisateur

**Objectif :** Créer l'interface permettant aux clients de se connecter, de se déconnecter, de voir et de modifier leur profil.

### Architecture technique (Rappel)
- **React :** Pour la création des composants UI (complets et responsives).
- **Redux :** Pour gérer l'état global de l'application (Token JWT, données de l'utilisateur, état de connexion).
- **Séparation UI / API :** Les appels réseau (`fetch`) ne doivent pas être codés directement dans les composants React. Ils doivent être isolés dans des fichiers dédiés (ex: `src/api/` ou `src/services/`) pour séparer la logique d'affichage de la logique de récupération de données. 
- **Models :** Utiliser des classes/models pour formater les données API reçues avant de les envoyer dans le store Redux.

### Fonctionnalités à implémenter

1. **Page d'accueil**
   - Affichage classique de la page d'accueil (Home Page).

2. **Authentification (Sign-In / Sign-Out)**
   - L'utilisateur peut se connecter via le formulaire de connexion.
   - Envoi des identifiants (email/password) à l'API.
   - Récupération du **Token JWT** depuis la réponse de l'API.
   - Stockage du Token dans le store **Redux** (et potentiellement dans le `localStorage` pour persister la session).
   - L'utilisateur peut se déconnecter (suppression du Token du store Redux).

3. **Protection de la Route Profil (`/user`)**
   - Cette route est **privée**. 
   - L'utilisateur ne peut y accéder que s'il possède un Token valide dans son state Redux.
   - Si un utilisateur non connecté tente d'y accéder, il doit être redirigé vers la page de connexion.

4. **Gestion du Profil**
   - Une fois connecté, récupération des données du profil (Nom, Prénom) via l'API en utilisant le Token JWT pour s'authentifier.
   - L'utilisateur peut modifier son profil (Nom, Prénom) via un formulaire dédié.
   - L'application doit envoyer la mise à jour à la base de données via l'API.
   - Mettre à jour le store Redux avec les nouvelles informations pour que l'interface React se rafraîchisse.

---

<!-- PHASE 2 : CONCEPTION D'API (SWAGGER / YAML) -->

## Phase 2 : Modélisation des Transactions 

**Objectif :** Rédiger la documentation des futures routes d'API pour la gestion des transactions bancaires, afin d'aider l'équipe Back-end. 

*Attention : Il ne s'agit pas de coder ces routes ni de créer l'interface React correspondante. C'est un travail de conception pur.*

### Outils et Livrable
- Utiliser l'éditeur en ligne : [Swagger Editor](https://editor.swagger.io/)
- Respecter la syntaxe Swagger.
- Livrable final : **Un fichier `.yaml`** exporté depuis l'éditeur.

### Ce que les futures routes d'API doivent permettre de faire
1. Récupérer et visualiser toutes les transactions du mois en cours, regroupées par compte.
2. Récupérer les détails d'une transaction spécifique.
3. Ajouter, modifier ou supprimer des "informations" (notes, catégories) sur une transaction spécifique.
*(Se référer au wireframe `transactions.png` dans `/designs/wireframes/` pour comprendre les besoins en données).*

### Spécifications requises pour chaque endpoint (Route)
Dans le fichier YAML, chaque route doit obligatoirement inclure :
- **La méthode HTTP :** `GET`, `POST`, `PUT`, `DELETE` (selon l'action).
- **Le chemin (URL) :** ex: `/accounts/{accountId}/transactions`.
- **Une description :** Ce que fait la route.
- **Les paramètres :** Requis ou facultatifs (ex: `transactionId` dans l'URL, ou le mois dans la query).
- **Le Body (Payload) :** Quelles données envoyer pour un `POST` ou `PUT`.
- **Les Réponses (Responses) :** 
  - Code `200` (Succès) avec un exemple de format JSON retourné (Model).
  - Code `400` / `401` / `404` avec la gestion des erreurs.