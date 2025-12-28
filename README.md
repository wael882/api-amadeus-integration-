# Skyboard

Ce projet a été généré en utilisant [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Serveur de développement

**IMPORTANT : Vous devez d'abord lancer le serveur backend, puis Angular.**

### 1. Lancer le serveur backend (port 3000)

Dans un premier terminal, exécutez :

```bash
node backend/server.js
```

Le serveur backend sera accessible sur `http://localhost:3000`. Ce serveur sert de proxy sécurisé pour l'API Amadeus.

**Configuration requise :** Assurez-vous d'avoir un fichier `.env` dans le dossier `backend` avec vos clés Amadeus :
```
AMADEUS_CLIENT_ID=votre_client_id
AMADEUS_CLIENT_SECRET=votre_client_secret
```

### 2. Lancer le serveur Angular (port 4200)

Dans un second terminal, exécutez :

```bash
ng serve
```

Une fois le serveur lancé, ouvrez votre navigateur et accédez à `http://localhost:4200/`. L'application se rechargera automatiquement à chaque modification des fichiers sources.


## Génération de code

Angular CLI inclut des outils puissants de génération de code. Pour générer un nouveau composant, exécutez :

```bash
ng generate component nom-du-composant
```

Pour une liste complète des schémas disponibles (tels que `components`, `directives` ou `pipes`), exécutez :

```bash
ng generate --help
```

## Compilation

Pour compiler le projet, exécutez :

```bash
ng build
```

Cela compilera votre projet et stockera les artefacts de compilation dans le répertoire `dist/`. Par défaut, la compilation de production optimise votre application pour les performances et la vitesse.

## Exécution des tests unitaires

Pour exécuter les tests unitaires avec le framework de test [Vitest](https://vitest.dev/), utilisez la commande suivante :

```bash
ng test
```

## Exécution des tests end-to-end

Pour les tests end-to-end (e2e), exécutez :

```bash
ng e2e
```

Angular CLI n'inclut pas de framework de tests end-to-end par défaut. Vous pouvez choisir celui qui correspond à vos besoins.

## Ressources supplémentaires

Pour plus d'informations sur l'utilisation d'Angular CLI, y compris des références détaillées de commandes, visitez la page [Présentation d'Angular CLI et référence des commandes](https://angular.dev/tools/cli).
