# Phase 1 : Authentification des utilisateurs

Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.

## Installation

- Installer et configurer Redux

## Fonctionnalités

### Accès général
- L'utilisateur peut visiter la page d'accueil

### Authentification
- L'utilisateur peut se connecter au système
- L'utilisateur peut se déconnecter du système

### Profil utilisateur
- L'utilisateur ne peut voir les informations relatives à son profil qu'après une connexion réussie
- L'utilisateur peut modifier son profil
- Les modifications sont sauvegardées en base de données


---

# Phase 2 : Transactions

Objectif : spécifier les endpoints d’API nécessaires pour une future implémentation.

## Fonctionnalités attendues

- Visualiser toutes les transactions du mois en cours, groupées par compte (wireframes)
- Visualiser les détails d'une transaction dans une vue dédiée (wireframes)

## Documentation API

- Créer un document décrivant les API des transactions
- Respecter les directives Swagger
- Exporter le document en fichier YAML


#### Question pour l’oral !!!!!

> Puisque vous gérez déjà l'application web pour la phase 1, comment pensez-vous que les API devraient être modélisées côté back-end ?


---

# Spécifications API

Pour chaque endpoint, préciser :

- **Méthode HTTP** (ex : GET, POST, PUT...)
- **Route** (ex : `/store/inventory`)
- **Description** de l’endpoint
- **Paramètres** (obligatoires et facultatifs)
- **Réponses possibles** avec codes HTTP :
(Exemple : `404` → ressource non trouvée)

## Recommandation

S’appuyer sur les maquettes de la page Transactions pour concevoir les endpoints (sans implémentation requise).


---

# Conclusion

## Gestion de l’état

Installer et configurer Redux pour gérer :
  - utilisateur
  - token
  - profil

## Authentification

Implémenter l’appel API :
  - `POST /api/v1/user/login` depuis le formulaire SignIn

Stocker le JWT :
  - dans Redux
  - dans le localStorage

## Sécurité

Protéger la route `/user`
  - redirection vers login si absence de token

## Profil utilisateur

Récupération des données :
  - `POST /api/v1/user/profile` avec token

Mise à jour du profil :
  - `PUT /api/v1/user/profile`