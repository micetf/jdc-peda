// src/data/dataSystemeSolaire.js

import DataJeu from "./DataJeu";

const dataSystemeSolaire = new DataJeu({
    id: "systemeSolaire",
    titre: "Le Système Solaire",
    description:
        "Jeu de cartes sur les astres principaux du Système Solaire et leurs caractéristiques.",
    // Les familles sont les principaux corps célestes du corpus
    familles: ["Le Soleil", "Mercure", "Vénus", "Terre", "Mars", "Jupiter"],
    // Propriétés communes (en adaptant celles du Soleil)
    proprietes: [
        "Composition",
        "Température",
        "Position/Rôle dans le système solaire", // Regroupe "Position..." pour les planètes et "Rôle..." pour le Soleil
        "Caractéristiques particulières", // Regroupe "Caractéristiques..." pour les planètes et "Phénomènes..." pour le Soleil
    ],
    valeurs: {
        "Le Soleil": {
            Composition: ["Hydrogène", "Hélium", "Gaz ionisés"],
            Température: [
                "5500°C en surface",
                "15 millions de degrés au centre",
                "Fusion nucléaire",
            ],
            "Position/Rôle dans le système solaire": [
                "Centre de gravité",
                "Source d'énergie",
                "99,8% de la masse du système",
            ],
            "Caractéristiques particulières": [
                "Taches solaires",
                "Éruptions solaires",
                "Vent solaire",
            ],
        },
        Mercure: {
            Composition: [
                "Roche et métal",
                "Noyau de fer",
                "Surface cratérisée",
            ],
            Température: [
                "430°C côté jour",
                "-180°C côté nuit",
                "Amplitude thermique extrême",
            ],
            "Position/Rôle dans le système solaire": [
                "Première planète",
                "58 millions de km du Soleil",
                "Orbite la plus rapide",
            ],
            "Caractéristiques particulières": [
                "Pas d'atmosphère",
                "Pas de satellite",
                "Plus petite planète",
            ],
        },
        Vénus: {
            Composition: [
                "Roche volcanique",
                "Atmosphère dense",
                "Dioxyde de carbone",
            ],
            Température: [
                "465°C en surface",
                "Effet de serre",
                "Planète la plus chaude",
            ],
            "Position/Rôle dans le système solaire": [
                "Deuxième planète",
                "108 millions de km du Soleil",
                '"Étoile du Berger"',
            ],
            "Caractéristiques particulières": [
                "Rotation rétrograde",
                "Pas de satellite",
                "Taille similaire à la Terre",
            ],
        },
        Terre: {
            Composition: [
                "Croûte rocheuse",
                "Manteau et noyau",
                "71% d'eau en surface",
            ],
            Température: [
                "15°C en moyenne",
                "Atmosphère protectrice",
                "Zone habitable",
            ],
            "Position/Rôle dans le système solaire": [
                "Troisième planète",
                "150 millions de km du Soleil",
                "Orbite presque circulaire",
            ],
            "Caractéristiques particulières": [
                "Présence de vie",
                "Un satellite (Lune)",
                "Champ magnétique",
            ],
        },
        Mars: {
            Composition: [
                "Roche et fer",
                "Oxyde de fer (rouille)",
                "Calottes polaires glacées",
            ],
            Température: [
                "-63°C en moyenne",
                "Atmosphère fine",
                "Grandes variations saisonnières",
            ],
            "Position/Rôle dans le système solaire": [
                "Quatrième planète",
                "228 millions de km du Soleil",
                '"Planète rouge"',
            ],
            "Caractéristiques particulières": [
                "Deux petits satellites",
                "Plus grand volcan du système solaire",
                "Anciens lits de rivières",
            ],
        },
        Jupiter: {
            Composition: [
                "Planète gazeuse",
                "Hydrogène et hélium",
                "Grande tache rouge",
            ],
            Température: [
                "-145°C en surface",
                "Tempêtes violentes",
                "Pression extrême au centre",
            ],
            "Position/Rôle dans le système solaire": [
                "Cinquième planète",
                "778 millions de km du Soleil",
                "Plus grande planète",
            ],
            "Caractéristiques particulières": [
                "Plus de 79 satellites",
                "Anneaux fins",
                "Magnétosphère puissante",
            ],
        },
    },
    metadata: {
        niveau: "Cycle 3",
        objectifs: [
            "Identifier les principaux astres du Système Solaire (Soleil et planètes jusqu'à Jupiter)",
            "Connaître les caractéristiques majeures de chaque astre",
            "Comprendre l'ordre des planètes par rapport au Soleil",
            "Se familiariser avec le vocabulaire scientifique lié à l'astronomie",
        ],
        regles: [
            {
                nom: "Ordre Planétaire",
                description:
                    "Remettre les astres (cartes Famille) dans l'ordre correct en partant du Soleil.",
                difficulte: "Facile",
                joueurs: "1-6",
                materiel: "Cartes Famille uniquement",
                duree: "5-10 minutes",
                deroulement:
                    "Mélanger les cartes Famille. Les joueurs doivent les aligner dans l'ordre : Soleil, Mercure, Vénus, Terre, Mars, Jupiter.",
            },
            {
                nom: "Qui suis-je Solaire ?",
                description:
                    "Associer les caractéristiques (cartes Valeur) à l'astre correct (carte Famille).",
                difficulte: "Intermédiaire",
                joueurs: "2-4",
                materiel: "Toutes les cartes",
                duree: "15-20 minutes",
                deroulement:
                    "Placer les cartes Famille visibles. Mélanger les cartes Valeur. À tour de rôle, un joueur pioche une carte Valeur et doit la placer sous la bonne Famille en justifiant son choix.",
            },
            {
                nom: "Mémo Solaire",
                description:
                    "Retrouver les paires Famille-Valeur correspondantes.",
                difficulte: "Avancé",
                joueurs: "2-4",
                materiel:
                    "6 cartes Famille + 24 cartes Valeur sélectionnées (ou toutes)",
                duree: "20-25 minutes",
                deroulement:
                    "Étaler toutes les cartes (Familles et Valeurs) face cachée. À tour de rôle, retourner 2 cartes. Si elles forment une paire cohérente (ex: 'Terre' et 'Présence de vie'), le joueur les garde et rejoue. Sinon, il les retourne face cachée. Le joueur avec le plus de paires gagne.",
            },
        ],
        // Couleurs suggérées
        colors: {
            famille: "#FFE0B2", // Orange très clair pour les astres
            Composition: "#E1F5FE", // Bleu très clair
            Température: "#FFCDD2", // Rouge très clair
            "Position/Rôle dans le système solaire": "#C8E6C9", // Vert très clair
            "Caractéristiques particulières": "#F3E5F5", // Violet très clair
        },
        // Chemins d'images (hypothétiques, à adapter)
        images: {
            families: {
                "Le Soleil": "systeme-solaire/families/soleil.jpg",
                Mercure: "systeme-solaire/families/mercure.jpg",
                Vénus: "systeme-solaire/families/venus.jpg",
                Terre: "systeme-solaire/families/terre.jpg",
                Mars: "systeme-solaire/families/mars.jpg",
                Jupiter: "systeme-solaire/families/jupiter.jpg",
            },
            properties: {
                Composition: "systeme-solaire/properties/composition.jpg",
                Température: "systeme-solaire/properties/temperature.jpg",
                "Position/Rôle dans le système solaire":
                    "systeme-solaire/properties/position.jpg",
                "Caractéristiques particulières":
                    "systeme-solaire/properties/caracteristiques.jpg",
            },
            // Les images pour les valeurs spécifiques pourraient être ajoutées ici si nécessaire
            values: {}, // Laisser vide pour l'instant ou remplir si des images spécifiques existent
        },
        // Ordre des planètes + Soleil pour le tri
        chronologie: {
            "Le Soleil": {
                ordre: 0,
                description: "L'étoile au centre de notre système.",
            },
            Mercure: {
                ordre: 1,
                description: "Planète la plus proche du Soleil.",
            },
            Vénus: {
                ordre: 2,
                description:
                    "Deuxième planète depuis le Soleil, la plus chaude.",
            },
            Terre: {
                ordre: 3,
                description: "Notre planète, la troisième depuis le Soleil.",
            },
            Mars: {
                ordre: 4,
                description: "La planète rouge, quatrième depuis le Soleil.",
            },
            Jupiter: {
                ordre: 5,
                description:
                    "La plus grande planète, cinquième depuis le Soleil.",
            },
        },
        // Descriptions contextuelles brèves pour chaque astre
        contextes: {
            "Le Soleil":
                "Étoile centrale fournissant lumière et chaleur, composée principalement d'hydrogène et d'hélium en fusion.",
            Mercure:
                "Petite planète rocheuse très proche du Soleil, sans atmosphère et aux températures extrêmes.",
            Vénus: "Planète rocheuse de taille similaire à la Terre, avec une atmosphère très dense créant un puissant effet de serre.",
            Terre: "Notre planète bleue, unique connue pour abriter la vie, possédant de l'eau liquide et une atmosphère riche en oxygène.",
            Mars: "Planète rocheuse de couleur rouge due à l'oxyde de fer, avec une atmosphère fine, des volcans géants et des traces d'eau passée.",
            Jupiter:
                "Géante gazeuse massive, la plus grande planète, composée d'hydrogène et d'hélium, célèbre pour sa Grande Tache Rouge et ses nombreuses lunes.",
        },
    },
});

export default dataSystemeSolaire;
