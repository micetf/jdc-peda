/**
 * Data de données sur l'histoire, enrichi avec références d'images
 */
const dataHistory = {
    id: "history",
    titre: "Chronologie de l'Histoire",
    description:
        "Jeu de cartes pédagogique sur les grandes périodes de l'histoire et leurs caractéristiques essentielles",

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
            "Associer des éléments visuels aux connaissances historiques",
        ],
        regles: [
            {
                nom: "Chronologie",
                description: "Remettre les familles dans l'ordre chronologique",
                difficulte: "Facile",
                joueurs: "2-6",
                materiel: "Cartes Famille uniquement",
                duree: "10-15 minutes",
                deroulement:
                    "Mélangez les cartes Famille et distribuez-les équitablement. Chaque joueur doit placer ses cartes dans l'ordre chronologique. Le premier joueur qui termine correctement gagne la partie.",
            },
            {
                nom: "Association",
                description:
                    "Pour une propriété donnée, retrouver quelle valeur correspond à quelle famille",
                difficulte: "Intermédiaire",
                joueurs: "2-4",
                materiel: "Toutes les cartes",
                duree: "15-20 minutes",
                deroulement:
                    "Placez les cartes Famille en ligne. Mélangez les cartes Valeur et distribuez-les équitablement. À tour de rôle, chaque joueur doit placer une carte Valeur sous la Famille correspondante en expliquant son choix. Si correct, le joueur marque un point.",
            },
            {
                nom: "Mémoire historique",
                description:
                    "Retrouver les paires de cartes (Famille + Valeur correspondante)",
                difficulte: "Avancé",
                joueurs: "2-4",
                materiel: "6 cartes Famille + 24 cartes Valeur sélectionnées",
                duree: "20-30 minutes",
                deroulement:
                    "Placez toutes les cartes face cachée. À tour de rôle, retournez 2 cartes. Si vous formez une paire cohérente (ex: 'Moyen Âge' + 'Châteaux forts'), conservez-les et rejouez. Sinon, retournez-les et passez au joueur suivant. Le joueur avec le plus de paires gagne.",
            },
        ],

        // Illustrations pour les familles et propriétés (format SVG)
        illustrations: {
            // Illustrations des familles
            Préhistoire:
                "src/assets/illustrations/history/families/prehistoire.jpg",
            Antiquité:
                "src/assets/illustrations/history/families/antiquite.jpg",
            "Moyen Âge":
                "src/assets/illustrations/history/families/moyen-age.jpg",
            Renaissance:
                "src/assets/illustrations/history/families/renaissance.jpg",
            "Époque moderne":
                "src/assets/illustrations/history/families/epoque-moderne.jpg",
            "Époque contemporaine":
                "src/assets/illustrations/history/families/epoque-contemporaine.jpg",

            // Illustrations des propriétés
            "Habitat et architecture":
                "src/assets/illustrations/history/properties/habitat.jpg",
            "Personnages importants":
                "src/assets/illustrations/history/properties/personnages.jpg",
            "Inventions et découvertes":
                "src/assets/illustrations/history/properties/inventions.jpg",
            "Vie quotidienne":
                "src/assets/illustrations/history/properties/vie-quotidienne.jpg",
        },

        // Couleurs spécifiques à ce data
        colors: {
            famille: "#FFFDE7", // Jaune très clair
            "Habitat et architecture": "#E8F5E9", // Vert très clair
            "Personnages importants": "#E3F2FD", // Bleu très clair
            "Inventions et découvertes": "#F3E5F5", // Violet très clair
            "Vie quotidienne": "#FFF3E0", // Orange très clair
        },

        // Informations chronologiques pour chaque famille
        chronologie: {
            Préhistoire: {
                debut: "-3 000 000",
                fin: "-3 000",
                description:
                    "De l'apparition des premiers hominidés jusqu'à l'invention de l'écriture",
            },
            Antiquité: {
                debut: "-3 000",
                fin: "476",
                description:
                    "De l'invention de l'écriture jusqu'à la chute de l'Empire romain d'Occident",
            },
            "Moyen Âge": {
                debut: "476",
                fin: "1492",
                description:
                    "De la chute de l'Empire romain d'Occident jusqu'à la découverte de l'Amérique",
            },
            Renaissance: {
                debut: "1492",
                fin: "1610",
                description:
                    "De la découverte de l'Amérique jusqu'à l'assassinat d'Henri IV",
            },
            "Époque moderne": {
                debut: "1610",
                fin: "1789",
                description:
                    "De l'assassinat d'Henri IV jusqu'à la Révolution française",
            },
            "Époque contemporaine": {
                debut: "1789",
                fin: "aujourd'hui",
                description: "De la Révolution française jusqu'à nos jours",
            },
        },

        // Références des images pour chaque valeur (format JPG)
        images: {
            // Préhistoire - Habitat et architecture
            "Préhistoire/Habitat et architecture/Grottes ornées":
                "src/assets/illustrations/history/values/prehistoire/habitat/grottes-ornees.jpg",
            "Préhistoire/Habitat et architecture/Campements nomades":
                "src/assets/illustrations/history/values/prehistoire/habitat/campements-nomades.jpg",
            "Préhistoire/Habitat et architecture/Premiers villages":
                "src/assets/illustrations/history/values/prehistoire/habitat/premiers-villages.jpg",

            // Préhistoire - Personnages importants
            "Préhistoire/Personnages importants/Homo habilis":
                "src/assets/illustrations/history/values/prehistoire/personnages/homo-habilis.jpg",
            "Préhistoire/Personnages importants/Homo erectus":
                "src/assets/illustrations/history/values/prehistoire/personnages/homo-erectus.jpg",
            "Préhistoire/Personnages importants/Homo sapiens":
                "src/assets/illustrations/history/values/prehistoire/personnages/homo-sapiens.jpg",

            // Préhistoire - Inventions et découvertes
            "Préhistoire/Inventions et découvertes/Maîtrise du feu":
                "src/assets/illustrations/history/values/prehistoire/inventions/maitrise-du-feu.jpg",
            "Préhistoire/Inventions et découvertes/Outils en pierre taillée":
                "src/assets/illustrations/history/values/prehistoire/inventions/outils-pierre.jpg",
            "Préhistoire/Inventions et découvertes/Agriculture":
                "src/assets/illustrations/history/values/prehistoire/inventions/agriculture.jpg",

            // Préhistoire - Vie quotidienne
            "Préhistoire/Vie quotidienne/Chasse et cueillette":
                "src/assets/illustrations/history/values/prehistoire/vie/chasse-cueillette.jpg",
            "Préhistoire/Vie quotidienne/Peintures rupestres":
                "src/assets/illustrations/history/values/prehistoire/vie/peintures-rupestres.jpg",
            "Préhistoire/Vie quotidienne/Premiers rituels":
                "src/assets/illustrations/history/values/prehistoire/vie/premiers-rituels.jpg",

            // Antiquité - Habitat et architecture
            "Antiquité/Habitat et architecture/Temples grecs":
                "src/assets/illustrations/history/values/antiquite/habitat/temples-grecs.jpg",
            "Antiquité/Habitat et architecture/Colisée romain":
                "src/assets/illustrations/history/values/antiquite/habitat/colisee.jpg",
            "Antiquité/Habitat et architecture/Pyramides égyptiennes":
                "src/assets/illustrations/history/values/antiquite/habitat/pyramides.jpg",

            // Antiquité - Personnages importants
            "Antiquité/Personnages importants/Jules César":
                "src/assets/illustrations/history/values/antiquite/personnages/jules-cesar.jpg",
            "Antiquité/Personnages importants/Cléopâtre":
                "src/assets/illustrations/history/values/antiquite/personnages/cleopatre.jpg",
            "Antiquité/Personnages importants/Alexandre le Grand":
                "src/assets/illustrations/history/values/antiquite/personnages/alexandre.jpg",

            // Antiquité - Inventions et découvertes
            "Antiquité/Inventions et découvertes/Écriture":
                "src/assets/illustrations/history/values/antiquite/inventions/ecriture.jpg",
            "Antiquité/Inventions et découvertes/Démocratie":
                "src/assets/illustrations/history/values/antiquite/inventions/democratie.jpg",
            "Antiquité/Inventions et découvertes/Aqueduc":
                "src/assets/illustrations/history/values/antiquite/inventions/aqueduc.jpg",

            // Antiquité - Vie quotidienne
            "Antiquité/Vie quotidienne/Jeux olympiques":
                "src/assets/illustrations/history/values/antiquite/vie/jeux-olympiques.jpg",
            "Antiquité/Vie quotidienne/Thermes romains":
                "src/assets/illustrations/history/values/antiquite/vie/thermes.jpg",
            "Antiquité/Vie quotidienne/Commerce maritime":
                "src/assets/illustrations/history/values/antiquite/vie/commerce-maritime.jpg",

            // Moyen Âge - Habitat et architecture
            "Moyen Âge/Habitat et architecture/Châteaux forts":
                "src/assets/illustrations/history/values/moyen-age/habitat/chateaux-forts.jpg",
            "Moyen Âge/Habitat et architecture/Cathédrales gothiques":
                "src/assets/illustrations/history/values/moyen-age/habitat/cathedrales.jpg",
            "Moyen Âge/Habitat et architecture/Villages fortifiés":
                "src/assets/illustrations/history/values/moyen-age/habitat/villages-fortifies.jpg",

            // Moyen Âge - Personnages importants
            "Moyen Âge/Personnages importants/Charlemagne":
                "src/assets/illustrations/history/values/moyen-age/personnages/charlemagne.jpg",
            "Moyen Âge/Personnages importants/Jeanne d'Arc":
                "src/assets/illustrations/history/values/moyen-age/personnages/jeanne-arc.jpg",
            "Moyen Âge/Personnages importants/Guillaume le Conquérant":
                "src/assets/illustrations/history/values/moyen-age/personnages/guillaume-conquerant.jpg",

            // Moyen Âge - Inventions et découvertes
            "Moyen Âge/Inventions et découvertes/Moulin à eau":
                "src/assets/illustrations/history/values/moyen-age/inventions/moulin-eau.jpg",
            "Moyen Âge/Inventions et découvertes/Horloge mécanique":
                "src/assets/illustrations/history/values/moyen-age/inventions/horloge.jpg",
            "Moyen Âge/Inventions et découvertes/Boussole":
                "src/assets/illustrations/history/values/moyen-age/inventions/boussole.jpg",

            // Moyen Âge - Vie quotidienne
            "Moyen Âge/Vie quotidienne/Tournois de chevalerie":
                "src/assets/illustrations/history/values/moyen-age/vie/tournois.jpg",
            "Moyen Âge/Vie quotidienne/Foires et marchés":
                "src/assets/illustrations/history/values/moyen-age/vie/marches.jpg",
            "Moyen Âge/Vie quotidienne/Vie monastique":
                "src/assets/illustrations/history/values/moyen-age/vie/monastere.jpg",

            // Renaissance - Habitat et architecture
            "Renaissance/Habitat et architecture/Châteaux de la Loire":
                "src/assets/illustrations/history/values/renaissance/habitat/chateaux-loire.jpg",
            "Renaissance/Habitat et architecture/Dôme de Florence":
                "src/assets/illustrations/history/values/renaissance/habitat/dome-florence.jpg",
            "Renaissance/Habitat et architecture/Palais vénitiens":
                "src/assets/illustrations/history/values/renaissance/habitat/palais-venitiens.jpg",

            // Renaissance - Personnages importants
            "Renaissance/Personnages importants/Léonard de Vinci":
                "src/assets/illustrations/history/values/renaissance/personnages/leonard-vinci.jpg",
            "Renaissance/Personnages importants/Gutenberg":
                "src/assets/illustrations/history/values/renaissance/personnages/gutenberg.jpg",
            "Renaissance/Personnages importants/François Ier":
                "src/assets/illustrations/history/values/renaissance/personnages/francois-1er.jpg",

            // Renaissance - Inventions et découvertes
            "Renaissance/Inventions et découvertes/Imprimerie":
                "src/assets/illustrations/history/values/renaissance/inventions/imprimerie.jpg",
            "Renaissance/Inventions et découvertes/Perspective en peinture":
                "src/assets/illustrations/history/values/renaissance/inventions/perspective.jpg",
            "Renaissance/Inventions et découvertes/Caravelle":
                "src/assets/illustrations/history/values/renaissance/inventions/caravelle.jpg",

            // Renaissance - Vie quotidienne
            "Renaissance/Vie quotidienne/Mécénat artistique":
                "src/assets/illustrations/history/values/renaissance/vie/mecenat.jpg",
            "Renaissance/Vie quotidienne/Humanisme":
                "src/assets/illustrations/history/values/renaissance/vie/humanisme.jpg",
            "Renaissance/Vie quotidienne/Grandes explorations":
                "src/assets/illustrations/history/values/renaissance/vie/explorations.jpg",

            // Époque moderne - Habitat et architecture
            "Époque moderne/Habitat et architecture/Château de Versailles":
                "src/assets/illustrations/history/values/moderne/habitat/versailles.jpg",
            "Époque moderne/Habitat et architecture/Hôtels particuliers":
                "src/assets/illustrations/history/values/moderne/habitat/hotels-particuliers.jpg",
            "Époque moderne/Habitat et architecture/Manufactures":
                "src/assets/illustrations/history/values/moderne/habitat/manufactures.jpg",

            // Époque moderne - Personnages importants
            "Époque moderne/Personnages importants/Louis XIV":
                "src/assets/illustrations/history/values/moderne/personnages/louis-14.jpg",
            "Époque moderne/Personnages importants/Napoléon Bonaparte":
                "src/assets/illustrations/history/values/moderne/personnages/napoleon.jpg",
            "Époque moderne/Personnages importants/Marie-Antoinette":
                "src/assets/illustrations/history/values/moderne/personnages/marie-antoinette.jpg",

            // Époque moderne - Inventions et découvertes
            "Époque moderne/Inventions et découvertes/Machine à vapeur":
                "src/assets/illustrations/history/values/moderne/inventions/machine-vapeur.jpg",
            "Époque moderne/Inventions et découvertes/Montgolfière":
                "src/assets/illustrations/history/values/moderne/inventions/montgolfiere.jpg",
            "Époque moderne/Inventions et découvertes/Vaccine":
                "src/assets/illustrations/history/values/moderne/inventions/vaccine.jpg",

            // Époque moderne - Vie quotidienne
            "Époque moderne/Vie quotidienne/Salons littéraires":
                "src/assets/illustrations/history/values/moderne/vie/salons-litteraires.jpg",
            "Époque moderne/Vie quotidienne/Révolution française":
                "src/assets/illustrations/history/values/moderne/vie/revolution.jpg",
            "Époque moderne/Vie quotidienne/Colonies":
                "src/assets/illustrations/history/values/moderne/vie/colonies.jpg",

            // Époque contemporaine - Habitat et architecture
            "Époque contemporaine/Habitat et architecture/Tour Eiffel":
                "src/assets/illustrations/history/values/contemporaine/habitat/tour-eiffel.jpg",
            "Époque contemporaine/Habitat et architecture/Gratte-ciels":
                "src/assets/illustrations/history/values/contemporaine/habitat/gratte-ciels.jpg",
            "Époque contemporaine/Habitat et architecture/Habitations à loyer modéré":
                "src/assets/illustrations/history/values/contemporaine/habitat/hlm.jpg",

            // Époque contemporaine - Personnages importants
            "Époque contemporaine/Personnages importants/Marie Curie":
                "src/assets/illustrations/history/values/contemporaine/personnages/marie-curie.jpg",
            "Époque contemporaine/Personnages importants/Charles de Gaulle":
                "src/assets/illustrations/history/values/contemporaine/personnages/de-gaulle.jpg",
            "Époque contemporaine/Personnages importants/Simone Veil":
                "src/assets/illustrations/history/values/contemporaine/personnages/simone-veil.jpg",

            // Époque contemporaine - Inventions et découvertes
            "Époque contemporaine/Inventions et découvertes/Électricité":
                "src/assets/illustrations/history/values/contemporaine/inventions/electricite.jpg",
            "Époque contemporaine/Inventions et découvertes/Automobile":
                "src/assets/illustrations/history/values/contemporaine/inventions/automobile.jpg",
            "Époque contemporaine/Inventions et découvertes/Internet":
                "src/assets/illustrations/history/values/contemporaine/inventions/internet.jpg",

            // Époque contemporaine - Vie quotidienne
            "Époque contemporaine/Vie quotidienne/Cinéma":
                "src/assets/illustrations/history/values/contemporaine/vie/cinema.jpg",
            "Époque contemporaine/Vie quotidienne/Télévision":
                "src/assets/illustrations/history/values/contemporaine/vie/television.jpg",
            "Époque contemporaine/Vie quotidienne/Téléphone portable":
                "src/assets/illustrations/history/values/contemporaine/vie/telephone-portable.jpg",
        },

        // Illustration par défaut pour les familles et valeurs manquantes
        default_illustrations: {
            famille: "src/assets/illustrations/default/famille.jpg",
            propriete: "src/assets/illustrations/default/propriete.jpg",
            valeur: "src/assets/illustrations/default/valeur.jpg",
        },

        // Contextes historiques pour enrichir les cartes
        contextes: {
            Préhistoire:
                "Période la plus longue de l'histoire humaine, marquée par l'évolution biologique de l'homme, la fabrication des premiers outils et le développement des premières sociétés.",
            Antiquité:
                "Période fondatrice des civilisations méditerranéennes qui voit l'émergence de l'État, des premières écritures, des arts monumentaux et des religions organisées.",
            "Moyen Âge":
                "Période caractérisée par la féodalité, l'essor des villes, la chrétienté et de grandes innovations techniques malgré sa réputation obscure injustifiée.",
            Renaissance:
                "Période de transition vers les temps modernes, marquée par un renouveau artistique et intellectuel inspiré de l'Antiquité et d'importantes découvertes scientifiques et géographiques.",
            "Époque moderne":
                "Période d'affirmation des États-nations, de l'absolutisme, des Lumières et des premières révolutions politiques et industrielles.",
            "Époque contemporaine":
                "Période de profonds bouleversements technologiques, politiques et sociaux, marquée par l'industrialisation, la mondialisation et les conflits mondiaux.",
        },

        // Repères pédagogiques par niveau
        reperes_pedagogiques: {
            CM1: [
                "Préhistoire : les premiers outils",
                "Antiquité : la démocratie athénienne",
                "Moyen Âge : le rôle de l'Église",
            ],
            CM2: [
                "Renaissance : les grandes découvertes",
                "Époque moderne : la Révolution française",
                "Époque contemporaine : les grandes inventions",
            ],
            "6ème": [
                "Préhistoire : l'art pariétal",
                "Antiquité : la civilisation romaine",
                "Moyen Âge : la société féodale",
            ],
            "5ème": [
                "Renaissance : l'humanisme",
                "Époque moderne : Louis XIV",
                "Époque contemporaine : la Révolution industrielle",
            ],
        },

        // Sources des images (attribution)
        sources_images: {
            general:
                "Images adaptées de contenus du domaine public ou sous licence Creative Commons, provenant principalement des collections de Wikimedia Commons, des Archives nationales et de la Bibliothèque nationale de France.",
            specifique: {
                "prehistoire/habitat/grottes-ornees.jpg":
                    "Photo © Centre des Monuments Nationaux, domaine public",
                "antiquite/habitat/temples-grecs.jpg":
                    "Photo par Harrieta171, licence CC BY-SA 3.0, Wikimedia Commons",
                "antiquite/habitat/pyramides.jpg":
                    "Photo par Ricardo Liberato, licence CC BY-SA 2.0, Wikimedia Commons",
                "moderne/habitat/versailles.jpg":
                    "Domaine public, Wikimedia Commons",
                "contemporaine/habitat/tour-eiffel.jpg":
                    "Photo par Benh LIEU SONG, licence CC BY-SA 3.0, Wikimedia Commons",
                // Autres attributions spécifiques pourraient être ajoutées
            },
        },
    },
};

export default dataHistory;
