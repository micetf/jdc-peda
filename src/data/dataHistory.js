// src/data/dataHistory.js
import DataJeu from "@data/DataJeu";

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
                {
                    id: "grottes-ornees",
                    texte: "Grottes ornées de peintures servant d'abris contre les intempéries et les prédateurs",
                },
                {
                    id: "campements-nomades",
                    texte: "Campements nomades de tentes en peaux d'animaux, déplacés selon les migrations des troupeaux",
                },
                {
                    id: "premiers-villages",
                    texte: "Premiers villages de huttes en bois et torchis, apparus avec la sédentarisation et l'agriculture",
                },
            ],
            "Personnages importants": [
                {
                    id: "homo-habilis",
                    texte: "Homo habilis, premier fabricant d'outils en pierre taillée, apparu il y a environ 2,5 millions d'années",
                },
                {
                    id: "homo-erectus",
                    texte: "Homo erectus, découvreur du feu et premier à quitter l'Afrique pour explorer d'autres continents",
                },
                {
                    id: "homo-sapiens",
                    texte: "Homo sapiens, notre espèce capable de pensée abstraite, d'art et de langage complexe",
                },
            ],
            "Inventions et découvertes": [
                {
                    id: "maitrise-feu",
                    texte: "Maîtrise du feu permettant de cuire les aliments, se réchauffer et repousser les prédateurs",
                },
                {
                    id: "outils-pierre",
                    texte: "Outils en pierre taillée comme les bifaces et grattoirs, utilisés pour chasser et travailler les matériaux",
                },
                {
                    id: "agriculture",
                    texte: "Agriculture et élevage menant à la sédentarisation et au développement des premières civilisations",
                },
            ],
            "Vie quotidienne": [
                {
                    id: "chasse-cueillette",
                    texte: "Chasse et cueillette assurant la survie des groupes nomades pendant des millénaires",
                },
                {
                    id: "peintures-rupestres",
                    texte: "Peintures rupestres témoignant d'une pensée symbolique et de rituels liés à la chasse",
                },
                {
                    id: "rituels-funeraires",
                    texte: "Premiers rituels funéraires révélant des croyances spirituelles et une conscience de la mort",
                },
            ],
        },

        Antiquité: {
            "Habitat et architecture": [
                {
                    id: "temples-grecs",
                    texte: "Temples grecs aux colonnes et proportions harmonieuses, dédiés aux divinités de l'Olympe",
                },
                {
                    id: "colisee-romain",
                    texte: "Colisée romain, amphithéâtre gigantesque accueillant combats de gladiateurs et spectacles de masse",
                },
                {
                    id: "pyramides-egyptiennes",
                    texte: "Pyramides égyptiennes, tombeaux monumentaux des pharaons conçus pour assurer leur vie éternelle",
                },
            ],
            "Personnages importants": [
                {
                    id: "jules-cesar",
                    texte: "Jules César, général et homme d'État romain qui a transformé la République en Empire",
                },
                {
                    id: "cleopatre",
                    texte: "Cléopâtre, dernière reine d'Égypte, femme cultivée et stratège politique face à Rome",
                },
                {
                    id: "alexandre-grand",
                    texte: "Alexandre le Grand, conquérant macédonien créant un empire de la Grèce à l'Inde en seulement 12 ans",
                },
            ],
            "Inventions et découvertes": [
                {
                    id: "ecriture",
                    texte: "Écriture permettant de consigner lois, comptes et récits, fondement des administrations et de la littérature",
                },
                {
                    id: "democratie",
                    texte: "Démocratie athénienne, première forme de gouvernement où les citoyens participent directement aux décisions",
                },
                {
                    id: "aqueduc",
                    texte: "Aqueduc romain, système ingénieux acheminant l'eau sur de longues distances vers les villes",
                },
            ],
            "Vie quotidienne": [
                {
                    id: "jeux-olympiques",
                    texte: "Jeux olympiques, compétitions sportives et religieuses réunissant les cités grecques tous les quatre ans",
                },
                {
                    id: "thermes-romains",
                    texte: "Thermes romains, bains publics où les citoyens se lavaient, socialisaient et pratiquaient le sport",
                },
                {
                    id: "commerce-maritime",
                    texte: "Commerce maritime méditerranéen reliant les civilisations et favorisant les échanges culturels",
                },
            ],
        },

        "Moyen Âge": {
            "Habitat et architecture": [
                {
                    id: "chateaux-forts",
                    texte: "Châteaux forts aux épaisses murailles et donjons, résidences seigneuriales offrant protection en temps de guerre",
                },
                {
                    id: "cathedrales-gothiques",
                    texte: "Cathédrales gothiques aux arcs-boutants et vitraux colorés, s'élevant vers le ciel comme prière de pierre",
                },
                {
                    id: "villages-fortifies",
                    texte: "Villages fortifiés regroupés autour d'une église, protégés par des remparts contre les attaques",
                },
            ],
            "Personnages importants": [
                {
                    id: "charlemagne",
                    texte: "Charlemagne, roi des Francs sacré empereur en 800, unificateur de l'Europe et promoteur de l'éducation",
                },
                {
                    id: "jeanne-arc",
                    texte: "Jeanne d'Arc, paysanne devenue chef de guerre, symbole de résistance française pendant la guerre de Cent Ans",
                },
                {
                    id: "guillaume-conquerant",
                    texte: "Guillaume le Conquérant, duc normand devenu roi d'Angleterre après la bataille d'Hastings en 1066",
                },
            ],
            "Inventions et découvertes": [
                {
                    id: "moulin-eau",
                    texte: "Moulin à eau transformant la force hydraulique en énergie mécanique pour moudre, scier ou forger",
                },
                {
                    id: "horloge-mecanique",
                    texte: "Horloge mécanique régulant la vie urbaine et religieuse, marquant une nouvelle perception du temps",
                },
                {
                    id: "boussole",
                    texte: "Boussole facilitant la navigation maritime et les grandes explorations, même par temps couvert",
                },
            ],
            "Vie quotidienne": [
                {
                    id: "tournois-chevalerie",
                    texte: "Tournois de chevalerie, compétitions militaires et fêtes où les nobles démontraient leur bravoure",
                },
                {
                    id: "foires-marches",
                    texte: "Foires et marchés, centres d'échanges commerciaux attirant marchands et voyageurs de toute l'Europe",
                },
                {
                    id: "vie-monastique",
                    texte: "Vie monastique dans les abbayes, lieux de prière, de copie de manuscrits et de préservation du savoir",
                },
            ],
        },

        Renaissance: {
            "Habitat et architecture": [
                {
                    id: "chateaux-loire",
                    texte: "Châteaux de la Loire alliant élégance française et influences italiennes, symboles de prestige royal",
                },
                {
                    id: "dome-florence",
                    texte: "Dôme de Florence conçu par Brunelleschi, prouesse technique mêlant mathématiques et beauté architecturale",
                },
                {
                    id: "palais-venitiens",
                    texte: "Palais vénitiens aux façades ornées donnant sur les canaux, mêlant styles gothique et antique",
                },
            ],
            "Personnages importants": [
                {
                    id: "leonard-vinci",
                    texte: "Léonard de Vinci, artiste et savant italien incarnant l'idéal de l'homme universel par ses multiples talents",
                },
                {
                    id: "gutenberg",
                    texte: "Gutenberg, inventeur de l'imprimerie moderne en Europe, révolutionnant la diffusion des idées et du savoir",
                },
                {
                    id: "francois-premier",
                    texte: "François Ier, roi de France et mécène invitant artistes italiens à sa cour et fondant le Collège de France",
                },
            ],
            "Inventions et découvertes": [
                {
                    id: "imprimerie",
                    texte: "Imprimerie à caractères mobiles rendant les livres plus accessibles et accélérant la diffusion des connaissances",
                },
                {
                    id: "perspective",
                    texte: "Perspective en peinture créant l'illusion de profondeur, fondée sur des principes scientifiques et mathématiques",
                },
                {
                    id: "caravelle",
                    texte: "Caravelle, navire innovant permettant les explorations lointaines et la découverte du Nouveau Monde",
                },
            ],
            "Vie quotidienne": [
                {
                    id: "mecenat-artistique",
                    texte: "Mécénat artistique par nobles et riches marchands, finançant artistes et savants pour affirmer leur prestige",
                },
                {
                    id: "humanisme",
                    texte: "Humanisme redécouvrant les textes antiques et plaçant l'homme au centre de la réflexion philosophique",
                },
                {
                    id: "explorations-maritimes",
                    texte: "Grandes explorations maritimes vers les Amériques et l'Asie, élargissant la vision européenne du monde",
                },
            ],
        },

        "Époque moderne": {
            "Habitat et architecture": [
                {
                    id: "versailles",
                    texte: "Château de Versailles, immense palais aux 700 pièces et jardins à la française, symbole du pouvoir absolu",
                },
                {
                    id: "hotels-particuliers",
                    texte: "Hôtels particuliers urbains affichant la richesse des élites par leurs décorations raffinées et leur confort",
                },
                {
                    id: "manufactures",
                    texte: "Manufactures rassemblant artisans et ouvriers dans de grands bâtiments organisés pour une production efficace",
                },
            ],
            "Personnages importants": [
                {
                    id: "louis-xiv",
                    texte: "Louis XIV, le Roi Soleil, monarque absolu régnant 72 ans et contrôlant la noblesse à Versailles",
                },
                {
                    id: "napoleon",
                    texte: "Napoléon Bonaparte, général devenu empereur, réformateur administratif étendant son empire sur l'Europe",
                },
                {
                    id: "marie-antoinette",
                    texte: "Marie-Antoinette, reine d'origine autrichienne, symbole du luxe de la cour, guillotinée pendant la Révolution",
                },
            ],
            "Inventions et découvertes": [
                {
                    id: "machine-vapeur",
                    texte: "Machine à vapeur convertissant l'énergie thermique en force mécanique, moteur de la révolution industrielle",
                },
                {
                    id: "montgolfiere",
                    texte: "Montgolfière, premier aérostat permettant à l'homme de s'élever dans les airs, créée en France en 1783",
                },
                {
                    id: "vaccin",
                    texte: "Vaccin contre la variole, première immunisation efficace contre une maladie mortelle, développé par Jenner en 1796",
                },
            ],
            "Vie quotidienne": [
                {
                    id: "salons-litteraires",
                    texte: "Salons littéraires animés par des femmes cultivées, lieux de discussions intellectuelles et de nouvelles idées",
                },
                {
                    id: "revolution-francaise",
                    texte: "Révolution française abolissant les privilèges et la monarchie absolue au nom de la liberté et de l'égalité",
                },
                {
                    id: "colonies",
                    texte: "Colonies européennes en Amérique, Afrique et Asie, sources de richesses mais basées sur l'exploitation",
                },
            ],
        },

        "Époque contemporaine": {
            "Habitat et architecture": [
                {
                    id: "tour-eiffel",
                    texte: "Tour Eiffel, structure métallique de 324 mètres construite pour l'Exposition universelle de 1889, symbole de Paris",
                },
                {
                    id: "gratte-ciels",
                    texte: "Gratte-ciels en acier et verre s'élevant toujours plus haut, transformant le paysage urbain des grandes villes",
                },
                {
                    id: "hlm",
                    texte: "HLM construits en masse après 1945 pour loger familles modestes et faire face à la crise du logement",
                },
            ],
            "Personnages importants": [
                {
                    id: "marie-curie",
                    texte: "Marie Curie, physicienne découvreuse du radium et du polonium, première femme à recevoir deux prix Nobel",
                },
                {
                    id: "charles-de-gaulle",
                    texte: "Charles de Gaulle, chef de la France libre pendant l'Occupation puis fondateur de la Ve République en 1958",
                },
                {
                    id: "simone-veil",
                    texte: "Simone Veil, rescapée des camps nazis, ministre ayant fait adopter la loi sur l'IVG et symbole des droits des femmes",
                },
            ],
            "Inventions et découvertes": [
                {
                    id: "electricite",
                    texte: "Électricité domestique révolutionnant le quotidien avec l'éclairage, les appareils ménagers et les communications",
                },
                {
                    id: "automobile",
                    texte: "Automobile individuelle transformant les déplacements, l'urbanisme et l'aménagement du territoire",
                },
                {
                    id: "internet",
                    texte: "Internet connectant les ordinateurs du monde entier, bouleversant l'accès à l'information et la communication",
                },
            ],
            "Vie quotidienne": [
                {
                    id: "cinema",
                    texte: "Cinéma, invention des frères Lumière devenue art majeur et divertissement populaire mondial",
                },
                {
                    id: "television",
                    texte: "Télévision diffusant programmes et informations dans les foyers, influençant fortement opinions et cultures",
                },
                {
                    id: "telephone-portable",
                    texte: "Téléphone portable évoluant en smartphone multifonction, connectant personnes et services en permanence",
                },
            ],
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
                        "grottes-ornees":
                            "history/values/prehistoire/habitat/grottes.jpg",
                        "campements-nomades":
                            "history/values/prehistoire/habitat/campements.jpg",
                        "premiers-villages":
                            "history/values/prehistoire/habitat/villages.jpg",
                    },
                    "Personnages importants": {
                        "homo-habilis":
                            "history/values/prehistoire/personnages/habilis.jpg",
                        "homo-erectus":
                            "history/values/prehistoire/personnages/erectus.jpg",
                        "homo-sapiens":
                            "history/values/prehistoire/personnages/sapiens.jpg",
                    },
                    "Inventions et découvertes": {
                        "maitrise-feu":
                            "history/values/prehistoire/inventions/feu.jpg",
                        "outils-pierre":
                            "history/values/prehistoire/inventions/outils.jpg",
                        agriculture:
                            "history/values/prehistoire/inventions/agriculture.jpg",
                    },
                    "Vie quotidienne": {
                        "chasse-cueillette":
                            "history/values/prehistoire/vie/chasse.jpg",
                        "peintures-rupestres":
                            "history/values/prehistoire/vie/peintures.jpg",
                        "rituels-funeraires":
                            "history/values/prehistoire/vie/rituels.jpg",
                    },
                },
                Antiquité: {
                    "Habitat et architecture": {
                        "temples-grecs":
                            "history/values/antiquite/habitat/temples.jpg",
                        "colisee-romain":
                            "history/values/antiquite/habitat/colisee.jpg",
                        "pyramides-egyptiennes":
                            "history/values/antiquite/habitat/pyramides.jpg",
                    },
                    "Personnages importants": {
                        "jules-cesar":
                            "history/values/antiquite/personnages/jules.jpg",
                        cleopatre:
                            "history/values/antiquite/personnages/cleopatre.jpg",
                        "alexandre-grand":
                            "history/values/antiquite/personnages/alexandre.jpg",
                    },
                    "Inventions et découvertes": {
                        ecriture:
                            "history/values/antiquite/inventions/ecriture.jpg",
                        democratie:
                            "history/values/antiquite/inventions/democratie.jpg",
                        aqueduc:
                            "history/values/antiquite/inventions/aqueduc.jpg",
                    },
                    "Vie quotidienne": {
                        "jeux-olympiques":
                            "history/values/antiquite/vie/jeux-olympiques.jpg",
                        "thermes-romains":
                            "history/values/antiquite/vie/thermes-romains.jpg",
                        "commerce-maritime":
                            "history/values/antiquite/vie/commerce-maritime.jpg",
                    },
                },
                "Moyen Âge": {
                    "Habitat et architecture": {
                        "chateaux-forts":
                            "history/values/moyen-age/habitat/chateaux-forts.jpg",
                        "cathedrales-gothiques":
                            "history/values/moyen-age/habitat/cathedrales-gothiques.jpg",
                        "villages-fortifies":
                            "history/values/moyen-age/habitat/villages-fortifies.jpg",
                    },
                    "Personnages importants": {
                        charlemagne:
                            "history/values/moyen-age/personnages/charlemagne.jpg",
                        "jeanne-arc":
                            "history/values/moyen-age/personnages/jeanne.jpg",
                        "guillaume-conquerant":
                            "history/values/moyen-age/personnages/guillaume.jpg",
                    },
                    "Inventions et découvertes": {
                        "moulin-eau":
                            "history/values/moyen-age/inventions/moulin-a-eau.jpg",
                        "horloge-mecanique":
                            "history/values/moyen-age/inventions/horloge-mecanique.jpg",
                        boussole:
                            "history/values/moyen-age/inventions/boussole.jpg",
                    },
                    "Vie quotidienne": {
                        "tournois-chevalerie":
                            "history/values/moyen-age/vie/tournois.jpg",
                        "foires-marches":
                            "history/values/moyen-age/vie/foires.jpg",
                        "vie-monastique":
                            "history/values/moyen-age/vie/vie-monastique.jpg",
                    },
                },
                Renaissance: {
                    "Habitat et architecture": {
                        "chateaux-loire":
                            "history/values/renaissance/habitat/chateaux.jpg",
                        "dome-florence":
                            "history/values/renaissance/habitat/dome.jpg",
                        "palais-venitiens":
                            "history/values/renaissance/habitat/palais.jpg",
                    },
                    "Personnages importants": {
                        "leonard-vinci":
                            "history/values/renaissance/personnages/leonard.jpg",
                        gutenberg:
                            "history/values/renaissance/personnages/gutenberg.jpg",
                        "francois-premier":
                            "history/values/renaissance/personnages/francois.jpg",
                    },
                    "Inventions et découvertes": {
                        imprimerie:
                            "history/values/renaissance/inventions/imprimerie.jpg",
                        perspective:
                            "history/values/renaissance/inventions/perspective.jpg",
                        caravelle:
                            "history/values/renaissance/inventions/caravelle.jpg",
                    },
                    "Vie quotidienne": {
                        "mecenat-artistique":
                            "history/values/renaissance/vie/mecenat.jpg",
                        humanisme:
                            "history/values/renaissance/vie/humanisme.jpg",
                        "explorations-maritimes":
                            "history/values/renaissance/vie/explorations.jpg",
                    },
                },
                "Époque moderne": {
                    "Habitat et architecture": {
                        versailles:
                            "history/values/epoque-moderne/habitat/versailles.jpg",
                        "hotels-particuliers":
                            "history/values/epoque-moderne/habitat/hotels.jpg",
                        manufactures:
                            "history/values/epoque-moderne/habitat/manufactures.jpg",
                    },
                    "Personnages importants": {
                        "louis-xiv":
                            "history/values/epoque-moderne/personnages/louis.jpg",
                        napoleon:
                            "history/values/epoque-moderne/personnages/napoleon.jpg",
                        "marie-antoinette":
                            "history/values/epoque-moderne/personnages/marie.jpg",
                    },
                    "Inventions et découvertes": {
                        "machine-vapeur":
                            "history/values/epoque-moderne/inventions/machine.jpg",
                        montgolfiere:
                            "history/values/epoque-moderne/inventions/montgolfiere.jpg",
                        vaccin: "history/values/epoque-moderne/inventions/vaccine.jpg",
                    },
                    "Vie quotidienne": {
                        "salons-litteraires":
                            "history/values/epoque-moderne/vie/salons.jpg",
                        "revolution-francaise":
                            "history/values/epoque-moderne/vie/revolution.jpg",
                        colonies:
                            "history/values/epoque-moderne/vie/colonies.jpg",
                    },
                },
                "Époque contemporaine": {
                    "Habitat et architecture": {
                        "tour-eiffel":
                            "history/values/epoque-contemporaine/habitat/tour.jpg",
                        "gratte-ciels":
                            "history/values/epoque-contemporaine/habitat/gratte-ciels.jpg",
                        hlm: "history/values/epoque-contemporaine/habitat/habitation.jpg",
                    },
                    "Personnages importants": {
                        "marie-curie":
                            "history/values/epoque-contemporaine/personnages/marie.jpg",
                        "charles-de-gaulle":
                            "history/values/epoque-contemporaine/personnages/charles.jpg",
                        "simone-veil":
                            "history/values/epoque-contemporaine/personnages/simone.jpg",
                    },
                    "Inventions et découvertes": {
                        electricite:
                            "history/values/epoque-contemporaine/inventions/electricite.jpg",
                        automobile:
                            "history/values/epoque-contemporaine/inventions/automobile.jpg",
                        internet:
                            "history/values/epoque-contemporaine/inventions/internet.jpg",
                    },
                    "Vie quotidienne": {
                        cinema: "history/values/epoque-contemporaine/vie/cinema.jpg",
                        television:
                            "history/values/epoque-contemporaine/vie/television.jpg",
                        "telephone-portable":
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
