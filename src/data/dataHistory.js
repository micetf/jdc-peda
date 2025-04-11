/**
 * Data de données sur l'histoire
 */
const dataHistory = {
    id: "history",
    titre: "Chronologie de l'Histoire",
    description:
        "Jeu de cartes pédagogique sur les grandes périodes de l'histoire",

    familles: [
        "Préhistoire",
        "Antiquité",
        "Moyen Âge",
        "Renaissance",
        "Époque moderne",
        "Époque contemporaine",
    ],

    proprietes: [
        "Habitat et architecture",
        "Personnages importants",
        "Inventions et découvertes",
        "Vie quotidienne",
    ],

    valeurs: {
        Préhistoire: {
            "Habitat et architecture": [
                "Grottes ornées",
                "Campements nomades",
                "Premiers villages",
            ],
            "Personnages importants": [
                "Homo habilis",
                "Homo erectus",
                "Homo sapiens",
            ],
            "Inventions et découvertes": [
                "Maîtrise du feu",
                "Outils en pierre taillée",
                "Agriculture",
            ],
            "Vie quotidienne": [
                "Chasse et cueillette",
                "Peintures rupestres",
                "Premiers rituels",
            ],
        },

        Antiquité: {
            "Habitat et architecture": [
                "Temples grecs",
                "Colisée romain",
                "Pyramides égyptiennes",
            ],
            "Personnages importants": [
                "Jules César",
                "Cléopâtre",
                "Alexandre le Grand",
            ],
            "Inventions et découvertes": ["Écriture", "Démocratie", "Aqueduc"],
            "Vie quotidienne": [
                "Jeux olympiques",
                "Thermes romains",
                "Commerce maritime",
            ],
        },

        "Moyen Âge": {
            "Habitat et architecture": [
                "Châteaux forts",
                "Cathédrales gothiques",
                "Villages fortifiés",
            ],
            "Personnages importants": [
                "Charlemagne",
                "Jeanne d'Arc",
                "Guillaume le Conquérant",
            ],
            "Inventions et découvertes": [
                "Moulin à eau",
                "Horloge mécanique",
                "Boussole",
            ],
            "Vie quotidienne": [
                "Tournois de chevalerie",
                "Foires et marchés",
                "Vie monastique",
            ],
        },

        Renaissance: {
            "Habitat et architecture": [
                "Châteaux de la Loire",
                "Dôme de Florence",
                "Palais vénitiens",
            ],
            "Personnages importants": [
                "Léonard de Vinci",
                "Gutenberg",
                "François Ier",
            ],
            "Inventions et découvertes": [
                "Imprimerie",
                "Perspective en peinture",
                "Caravelle",
            ],
            "Vie quotidienne": [
                "Mécénat artistique",
                "Humanisme",
                "Grandes explorations",
            ],
        },

        "Époque moderne": {
            "Habitat et architecture": [
                "Château de Versailles",
                "Hôtels particuliers",
                "Manufactures",
            ],
            "Personnages importants": [
                "Louis XIV",
                "Napoléon Bonaparte",
                "Marie-Antoinette",
            ],
            "Inventions et découvertes": [
                "Machine à vapeur",
                "Montgolfière",
                "Vaccine",
            ],
            "Vie quotidienne": [
                "Salons littéraires",
                "Révolution française",
                "Colonies",
            ],
        },

        "Époque contemporaine": {
            "Habitat et architecture": [
                "Tour Eiffel",
                "Gratte-ciels",
                "Habitations à loyer modéré",
            ],
            "Personnages importants": [
                "Marie Curie",
                "Charles de Gaulle",
                "Simone Veil",
            ],
            "Inventions et découvertes": [
                "Électricité",
                "Automobile",
                "Internet",
            ],
            "Vie quotidienne": ["Cinéma", "Télévision", "Téléphone portable"],
        },
    },

    metadata: {
        niveau: "Cycle 3",
        objectifs: [
            "Renforcer l'acquisition d'une culture historique",
            "Développer la compréhension de la chronologie",
            "Mémoriser les caractéristiques essentielles de chaque période historique",
        ],
        regles: [
            {
                nom: "Chronologie",
                description: "Remettre les familles dans l'ordre chronologique",
            },
            {
                nom: "Association",
                description:
                    "Pour une propriété donnée, retrouver quelle valeur correspond à quelle famille",
            },
        ],
        // Emojis spécifiques à ce data
        emojis: {
            Préhistoire: "books",
            Antiquité: "books",
            "Moyen Âge": "books",
            Renaissance: "books",
            "Époque moderne": "books",
            "Époque contemporaine": "books",
            "Habitat et architecture": "hammer_and_wrench",
            "Personnages importants": "wave",
            "Inventions et découvertes": "bulb",
            "Vie quotidienne": "clipboard",
        },
        // Couleurs spécifiques à ce data
        colors: {
            famille: "#FFFDE7", // Jaune très clair
            "Habitat et architecture": "#E8F5E9", // Vert très clair
            "Personnages importants": "#E3F2FD", // Bleu très clair
            "Inventions et découvertes": "#F3E5F5", // Violet très clair
            "Vie quotidienne": "#FFF3E0", // Orange très clair
        },
    },
};

export default dataHistory;
