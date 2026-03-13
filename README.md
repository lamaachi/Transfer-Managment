# Gestion de Virements - Transfer Management System

Ce projet est une application complète de gestion de virements bancaires, comprenant un backend Spring Boot et un frontend Angular moderne utilisant Ng Zorro.

## Architecture du Projet

Le projet est divisé en deux parties principales :
*   **Backend** (`Transfer-Managment-Backend`) : API REST développée avec Spring Boot, utilisant Java 17+, JPA/Hibernate et une base de données H2 (en mémoire).
*   **Frontend** (`Transfer-managment-front`) : Application Single Page développée avec Angular 21, utilisant Ng Zorro Ant Design pour l'interface utilisateur.

## Fonctionnalités Clés

*   **Initiation de Virement** : Formulaire complet avec validation en temps réel pour créer de nouveaux virements.
*   **Consultation des Virements** : Tableau dynamique affichant l'historique des virements avec leur statut actuel.
*   **Gestion des Statuts** : Possibilité de Valider ou Rejeter des virements en attente avec mise à jour réactive de l'interface.
*   **Design Premium** : Interface utilisateur professionnelle, responsive et intuitive.

## Technologies Utilisées

### Backend
*   **Java 21**
*   **Spring Boot 3**
*   **Spring Data JPA**
*   **H2 Database**
*   **Lombok**
*   **Jakarta Validation**

### Frontend
*   **Angular 21**
*   **Ng Zorro Ant Design**
*   **TypeScript**
*   **Reactive Forms**
*   **RxJS**

## Guide de Démarrage

### Prérequis
*   JDK 17 ou plus récent
*   Node.js (version 20+) et npm
*   Angular CLI (`npm install -g @angular/cli`)

### Installation et Lancement

#### 1. Backend (Spring Boot)
1.  Naviguez dans le dossier `Transfer-Managment-Backend`.
2.  Lancez l'application via votre IDE ou en ligne de commande :
    ```bash
    ./mvnw spring-boot:run
    ```
    L'API sera accessible sur `http://localhost:8081`.

#### 2. Frontend (Angular)
1.  Naviguez dans le dossier `Transfer-managment-front`.
2.  Installez les dépendances :
    ```bash
    npm install
    ```
3.  Lancez le serveur de développement :
    ```bash
    npm start
    ```
    L'application sera accessible sur `http://localhost:4200`.

## Configuration de la Base de Données
Le backend utilise une base de données H2 en mémoire. La console H2 est accessible à l'adresse `http://localhost:8081/h2-console` avec les paramètres configurés dans `application.yaml`.

---
Développé avec ❤️ pour la gestion de virements.
