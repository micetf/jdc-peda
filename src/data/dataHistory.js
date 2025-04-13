// src/data/dataHistory.js
import DataJeu from "./DataJeu";

const dataHistory = new DataJeu({
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

        // Couleurs spécifiques à ce corpus
        colors: {
            famille: "#FFFDE7", // Jaune très clair
            "Habitat et architecture": "#E8F5E9", // Vert très clair
            "Personnages importants": "#E3F2FD", // Bleu très clair
            "Inventions et découvertes": "#F3E5F5", // Violet très clair
            "Vie quotidienne": "#FFF3E0", // Orange très clair
        },

        // Structure pour les images
        images: {
            // Chemins des images pour les familles
            families: {
                Préhistoire: "history/families/prehistoire.jpg",
                Antiquité: "history/families/antiquite.jpg",
                "Moyen Âge": "history/families/moyen-age.jpg",
                Renaissance: "history/families/renaissance.jpg",
                "Époque moderne": "history/families/epoque-moderne.jpg",
                "Époque contemporaine":
                    "history/families/epoque-contemporaine.jpg",
            },
            // Chemins des images pour les propriétés
            properties: {
                "Habitat et architecture": "history/properties/habitat.jpg",
                "Personnages importants": "history/properties/personnages.jpg",
                "Inventions et découvertes":
                    "history/properties/inventions.jpg",
                "Vie quotidienne": "history/properties/vie-quotidienne.jpg",
            },
            values: {
                Préhistoire: {
                    "Habitat et architecture": {
                        "Grottes ornées":
                            "history/values/prehistoire/habitat/grottes.jpg",
                        "Campements nomades":
                            "history/values/prehistoire/habitat/campements.jpg",
                        "Premiers villages":
                            "history/values/prehistoire/habitat/villages.jpg",
                    },
                    "Personnages importants": {
                        "Homo habilis":
                            "history/values/prehistoire/personnages/habilis.jpg",
                        "Homo erectus":
                            "history/values/prehistoire/personnages/erectus.jpg",
                        "Homo sapiens":
                            "history/values/prehistoire/personnages/sapiens.jpg",
                    },
                    "Inventions et découvertes": {
                        "Maîtrise du feu":
                            "history/values/prehistoire/inventions/feu.jpg",
                        "Outils en pierre taillée":
                            "history/values/prehistoire/inventions/outils.jpg",
                        Agriculture:
                            "history/values/prehistoire/inventions/agriculture.jpg",
                    },
                    "Vie quotidienne": {
                        "Chasse et cueillette":
                            "history/values/prehistoire/vie/chasse.jpg",
                        "Peintures rupestres":
                            "history/values/prehistoire/vie/peintures.jpg",
                        "Premiers rituels":
                            "history/values/prehistoire/vie/rituels.jpg",
                    },
                },
                Antiquité: {
                    "Habitat et architecture": {
                        "Temples grecs":
                            "history/values/antiquite/habitat/temples.jpg",
                        "Colisée romain":
                            "history/values/antiquite/habitat/colisee.jpg",
                        "Pyramides égyptiennes":
                            "history/values/antiquite/habitat/pyramides.jpg",
                    },
                    "Personnages importants": {
                        "Jules César":
                            "history/values/antiquite/personnages/jules.jpg",
                        Cléopâtre:
                            "history/values/antiquite/personnages/cleopatre.jpg",
                        "Alexandre le Grand":
                            "history/values/antiquite/personnages/alexandre.jpg",
                    },
                    "Inventions et découvertes": {
                        Écriture:
                            "history/values/antiquite/inventions/ecriture.jpg",
                        Démocratie:
                            "history/values/antiquite/inventions/democratie.jpg",
                        Aqueduc:
                            "history/values/antiquite/inventions/aqueduc.jpg",
                    },
                    "Vie quotidienne": {
                        "Jeux olympiques":
                            "history/values/antiquite/vie/jeux-olympiques.jpg",
                        "Thermes romains":
                            "history/values/antiquite/vie/thermes-romains.jpg",
                        Commerce:
                            "history/values/antiquite/vie/commerce-maritime.jpg",
                    },
                },
                "Moyen Âge": {
                    "Habitat et architecture": {
                        "Châteaux forts":
                            "history/values/moyen-age/habitat/chateaux-forts.jpg",
                        "Cathédrales gothiques":
                            "history/values/moyen-age/habitat/cathedrales-gothiques.jpg",
                        "Villages fortifiés":
                            "history/values/moyen-age/habitat/villages-fortifies.jpg",
                    },
                    "Personnages importants": {
                        Charlemagne:
                            "history/values/moyen-age/personnages/charlemagne.jpg",
                        "Jeanne d'Arc":
                            "history/values/moyen-age/personnages/jeanne.jpg",
                        "Guillaume le Conquérant":
                            "history/values/moyen-age/personnages/guillaume.jpg",
                    },
                    "Inventions et découvertes": {
                        "Moulin à eau":
                            "history/values/moyen-age/inventions/moulin-a-eau.jpg",
                        "Horloge mécanique":
                            "history/values/moyen-age/inventions/horloge-mecanique.jpg",
                        Boussole:
                            "history/values/moyen-age/inventions/boussole.jpg",
                    },
                    "Vie quotidienne": {
                        "Tournois de chevalerie":
                            "history/values/moyen-age/vie/tournois.jpg",
                        "Foires et marchés":
                            "history/values/moyen-age/vie/foires.jpg",
                        "Vie monastique":
                            "history/values/moyen-age/vie/vie-monastique.jpg",
                    },
                },
                Renaissance: {
                    "Habitat et architecture": {
                        "Châteaux de la Loire":
                            "history/values/renaissance/habitat/chateaux.jpg",
                        "Dôme de Florence":
                            "history/values/renaissance/habitat/dome.jpg",
                        "Palais vénitiens":
                            "history/values/renaissance/habitat/palais.jpg",
                    },
                    "Personnages importants": {
                        "Léonard de Vinci":
                            "history/values/renaissance/personnages/leonard.jpg",
                        Gutenberg:
                            "history/values/renaissance/personnages/gutenberg.jpg",
                        "François Ier":
                            "history/values/renaissance/personnages/francois.jpg",
                    },
                    "Inventions et découvertes": {
                        Imprimerie:
                            "history/values/renaissance/inventions/imprimerie.jpg",
                        Perspective:
                            "history/values/renaissance/inventions/perspective.jpg",
                        Caravelle:
                            "history/values/renaissance/inventions/caravelle.jpg",
                    },
                    "Vie quotidienne": {
                        "Mécénat artistique":
                            "history/values/renaissance/vie/mecenat.jpg",
                        Humanisme:
                            "history/values/renaissance/vie/humanisme.jpg",
                        "Grandes explorations":
                            "history/values/renaissance/vie/explorations.jpg",
                    },
                },
                "Époque moderne": {
                    "Habitat et architecture": {
                        "Château de Versailles":
                            "history/values/epoque-moderne/habitat/versailles.jpg",
                        "Hôtels particuliers":
                            "history/values/epoque-moderne/habitat/hotels.jpg",
                        Manufactures:
                            "history/values/epoque-moderne/habitat/manufactures.jpg",
                    },
                    "Personnages importants": {
                        "Louis XIV":
                            "history/values/epoque-moderne/personnages/louis.jpg",
                        "Napoléon Bonaparte":
                            "history/values/epoque-moderne/personnages/napoleon.jpg",
                        "Marie-Antoinette":
                            "history/values/epoque-moderne/personnages/marie.jpg",
                    },
                    "Inventions et découvertes": {
                        "Machine à vapeur":
                            "history/values/epoque-moderne/inventions/machine.jpg",
                        Montgolfière:
                            "history/values/epoque-moderne/inventions/montgolfiere.jpg",
                        Vaccine:
                            "history/values/epoque-moderne/inventions/vaccine.jpg",
                    },
                    "Vie quotidienne": {
                        "Salons littéraires":
                            "history/values/epoque-moderne/vie/salons.jpg",
                        "Révolution française":
                            "history/values/epoque-moderne/vie/revolution.jpg",
                        Colonies:
                            "history/values/epoque-moderne/vie/colonies.jpg",
                    },
                },
                "Époque contemporaine": {
                    "Habitat et architecture": {
                        "Tour Eiffel":
                            "history/values/epoque-contemporaine/habitat/tour.jpg",
                        "Gratte-ciels":
                            "history/values/epoque-contemporaine/habitat/gratte-ciels.jpg",
                        "Habitations à loyer modéré":
                            "history/values/epoque-contemporaine/habitat/habitation.jpg",
                    },
                    "Personnages importants": {
                        "Marie Curie":
                            "history/values/epoque-contemporaine/personnages/marie.jpg",
                        "Charles de Gaulle":
                            "history/values/epoque-contemporaine/personnages/charles.jpg",
                        "Simone Veil":
                            "history/values/epoque-contemporaine/personnages/simone.jpg",
                    },
                    "Inventions et découvertes": {
                        Électricité:
                            "history/values/epoque-contemporaine/inventions/electricite.jpg",
                        Automobile:
                            "history/values/epoque-contemporaine/inventions/automobile.jpg",
                        Internet:
                            "history/values/epoque-contemporaine/inventions/internet.jpg",
                    },
                    "Vie quotidienne": {
                        Cinéma: "history/values/epoque-contemporaine/vie/cinema.jpg",
                        Télévision:
                            "history/values/epoque-contemporaine/vie/television.jpg",
                        "Téléphone portable":
                            "history/values/epoque-contemporaine/vie/telephone.jpg",
                    },
                },
            },
        },

        // Informations chronologiques pour chaque famille
        chronologie: {
            Préhistoire: {
                debut: "-3 000 000",
                fin: "-3 000",
                ordre: 1,
                description:
                    "De l'apparition des premiers hominidés jusqu'à l'invention de l'écriture",
            },
            Antiquité: {
                debut: "-3 000",
                fin: "476",
                ordre: 2,
                description:
                    "De l'invention de l'écriture jusqu'à la chute de l'Empire romain d'Occident",
            },
            "Moyen Âge": {
                debut: "476",
                fin: "1492",
                ordre: 3,
                description:
                    "De la chute de l'Empire romain d'Occident jusqu'à la découverte de l'Amérique",
            },
            Renaissance: {
                debut: "1492",
                fin: "1610",
                ordre: 4,
                description:
                    "De la découverte de l'Amérique jusqu'à l'assassinat d'Henri IV",
            },
            "Époque moderne": {
                debut: "1610",
                fin: "1789",
                ordre: 5,
                description:
                    "De l'assassinat d'Henri IV jusqu'à la Révolution française",
            },
            "Époque contemporaine": {
                debut: "1789",
                fin: "aujourd'hui",
                ordre: 6,
                description: "De la Révolution française jusqu'à nos jours",
            },
        },

        // Descriptions contextuelles pour chaque famille
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
        aiImageCredit:
            "Images des périodes historiques générées par Flux AI via Perplexity.ai. Images de l'habitat, architecture, inventions, découvertes, vie quotidienne et personnages générées par Mistral AI via Perplexity.ai",
    },
});

export default dataHistory;
