# Générateur de Jeux de Cartes Pédagogiques

Ce projet est une application web permettant de générer des jeux de cartes pédagogiques basés sur différents corpus thématiques. L'application permet de créer des supports ludiques et interactifs pour l'apprentissage, adaptés à différents contextes éducatifs.

## Fonctionnalités

- Sélection parmi différents corpus thématiques (pratiques pédagogiques, histoire, etc.)
- Filtrage des cartes par type (famille, valeur)
- Prévisualisation des cartes
- Génération de PDF contenant les cartes et les règles du jeu
- Interface utilisateur intuitive et responsive

## Structure du jeu de cartes

Chaque jeu de cartes est structuré selon le modèle suivant :

- **Familles** : Représentent les catégories principales (ex: périodes historiques, temps forts d'une séance pédagogique)
- **Propriétés** : Caractéristiques communes à toutes les familles (ex: habitat, personnages importants, objectifs visés). Ces propriétés ne sont pas représentées par des cartes distinctes, mais servent à organiser les valeurs.
- **Valeurs** : Pour chaque propriété de chaque famille, des valeurs spécifiques (ex: "Grottes ornées" comme habitat pour la Préhistoire)

## Corpus disponibles

### Pratiques pédagogiques efficaces

Un jeu de cartes sur les temps forts d'une séance pédagogique et leurs points d'attention :

- 6 familles (Accueil, Entrée de séance, Lancement d'activité, etc.)
- 4 propriétés (Objectifs visés, Écueils possibles, Gestes professionnels, Tâches concrètes)
- 3 valeurs par propriété et par famille

### Chronologie de l'Histoire

Un jeu de cartes sur les grandes périodes de l'histoire :

- 6 familles (Préhistoire, Antiquité, Moyen Âge, etc.)
- 4 propriétés (Habitat et architecture, Personnages importants, Inventions et découvertes, Vie quotidienne)
- 3 valeurs par propriété et par famille

## Modes de jeu

L'application propose deux modes de jeu principaux, adaptables à tous les corpus :

1. **Chronologie** : Remettre les familles dans leur ordre chronologique ou logique

    - Pour le corpus pédagogique : Ordonner les temps forts d'une séance de classe
    - Pour le corpus historique : Ordonner les périodes historiques

2. **Association** : Pour une propriété donnée, retrouver quelle valeur correspond à quelle famille
    - Pour le corpus pédagogique : Associer les objectifs, écueils, gestes ou tâches aux temps forts
    - Pour le corpus historique : Associer les habitats, personnages, inventions ou aspects de la vie quotidienne aux périodes historiques

## Technologies utilisées

- React.js avec Hooks et Context API
- Tailwind CSS pour le style
- Vite comme outil de build
- jsPDF pour la génération de PDF
- JSDoc pour la documentation
- PropTypes pour la validation des props

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-utilisateur/jeu-cartes-pedagogiques.git
cd jeu-cartes-pedagogiques

# Installer les dépendances avec pnpm
pnpm install

# Lancer l'application en mode développement
pnpm dev
```

## Utilisation

1. Accédez à l'application dans votre navigateur (par défaut : http://localhost:5173)
2. Sélectionnez un corpus thématique dans le menu déroulant
3. Choisissez le type de cartes à afficher (Tout, Famille, Valeur)
4. Cliquez sur "Afficher l'aperçu" pour prévisualiser les cartes
5. Cliquez sur "Générer le PDF" pour créer un fichier PDF téléchargeable contenant les cartes et les règles du jeu

## Personnalisation

Vous pouvez ajouter vos propres corpus thématiques en créant un nouveau fichier dans le dossier `src/data/` en suivant la structure des fichiers existants (`dataHistory.js` et `dataPedagogy.js`).

Chaque corpus doit définir :

- Un identifiant unique
- Un titre et une description
- Une liste de familles
- Une liste de propriétés
- Les valeurs pour chaque propriété de chaque famille
- Des métadonnées (niveau scolaire, objectifs pédagogiques, règles du jeu)
- Optionnellement, des emojis et couleurs spécifiques

## Structure du projet

```
jeu-cartes-pedagogiques/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   ├── CardGrid.jsx
│   │   │   └── CardPDFGenerator.jsx
│   │   ├── Corpus/
│   │   │   ├── CorpusSelector.jsx
│   │   │   └── CorpusContext.jsx
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── UI/
│   │       ├── Button.jsx
│   │       └── Select.jsx
│   ├── data/
│   │   ├── dataHistory.js
│   │   ├── dataPedagogy.js
│   │   └── index.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CardGenerator.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Différences avec la version Node.js

Cette application web est une généralisation de la version Node.js originale qui était spécifiquement conçue pour le jeu "Pratiques efficaces et équitables". Les principales différences sont :

- **Structure de données généralisée** : Les "tempsForts" deviennent des "familles", les "typesPointsAttention" deviennent des "propriétés", et les "pointsAttention" deviennent des "valeurs"
- **Interface utilisateur** : Ajout d'une interface web interactive remplaçant le script Node.js
- **Corpus multiples** : Support de plusieurs corpus thématiques au lieu d'un seul
- **Emojis** : Utilisation d'emojis Unicode au lieu d'images téléchargées
- **Personnalisation** : Possibilité de personnaliser les couleurs et emojis pour chaque corpus

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Remerciements

Ce projet est inspiré des méthodes pédagogiques actives et des jeux de cartes éducatifs utilisés dans l'enseignement. Il vise à faciliter la création de supports ludiques pour l'apprentissage.
