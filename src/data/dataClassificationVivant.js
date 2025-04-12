// src/data/dataClassificationVivant.js

import DataJeu from "./DataJeu";

const dataClassificationVivant = new DataJeu({
    id: "classification-vivant-primaire",
    titre: "Qui vit où ? Explore le monde animal !",
    description:
        "Un jeu de cartes pour découvrir les grandes familles d'animaux (mammifères, oiseaux, reptiles...), où ils vivent, ce qu'ils mangent et comment ils sont adaptés. Parfait pour les explorateurs en herbe du primaire (Cycle 2 et 3) !",
    familles: [
        "Mammifères",
        "Oiseaux",
        "Reptiles",
        "Amphibiens",
        "Poissons",
        "Insectes",
    ],
    proprietes: [
        "Où vivent-ils ?",
        "Comment font-ils des bébés ?",
        "Qu'est-ce qu'ils mangent ?",
        "Leurs super-pouvoirs !",
    ],
    valeurs: {
        // ... (Les valeurs restent identiques à la version précédente)
        Mammifères: {
            "Où vivent-ils ?": [
                "Dans la forêt",
                "Dans la savane (herbes hautes)",
                "À la montagne",
            ],
            "Comment font-ils des bébés ?": [
                "Bébé grandit dans le ventre (presque tous)",
                "Maman allaite ses petits (donne du lait)",
                "Parents s'occupent bien des petits",
            ],
            "Qu'est-ce qu'ils mangent ?": [
                "Herbe et feuilles (vache, cerf)",
                "Viande (lion, loup)",
                "Un peu de tout (ours, humain)",
            ],
            "Leurs super-pouvoirs !": [
                "Poils pour rester au chaud",
                "Oreilles qui bougent pour bien entendre",
                "Dents différentes pour tout manger",
            ],
        },
        Oiseaux: {
            "Où vivent-ils ?": [
                "Dans les arbres tropicaux",
                "Au bord de la mer",
                "Dans le grand froid (toundra)",
            ],
            "Comment font-ils des bébés ?": [
                "Pondent des œufs avec une coquille dure",
                "Papa et maman couvent les œufs",
                "Construisent des nids",
            ],
            "Qu'est-ce qu'ils mangent ?": [
                "Graines (moineau)",
                "Poissons (aigle pêcheur)",
                "Nectar des fleurs (colibri)",
            ],
            "Leurs super-pouvoirs !": [
                "Plumes pour voler",
                "Os légers (creux)",
                "Bec dur sans dents",
            ],
        },
        Reptiles: {
            "Où vivent-ils ?": [
                "Dans le désert chaud",
                "Dans les mangroves (forêt humide)",
                "Sur les rochers au soleil",
            ],
            "Comment font-ils des bébés ?": [
                "Pondent des œufs sur la terre",
                "Bébé se développe tout seul dans l'œuf",
                "Parents ne s'occupent pas des petits (souvent)",
            ],
            "Qu'est-ce qu'ils mangent ?": [
                "Insectes (lézard)",
                "Autres animaux (serpent)",
                "Plantes (tortue terrestre)",
            ],
            "Leurs super-pouvoirs !": [
                "Écailles protectrices",
                "Ont besoin du soleil pour se réchauffer",
                "Langue fourchue pour sentir (serpents, certains lézards)",
            ],
        },
        Amphibiens: {
            "Où vivent-ils ?": [
                "Près des mares",
                "Dans la forêt humide",
                "Au bord des rivières calmes",
            ],
            "Comment font-ils des bébés ?": [
                "Pondent des œufs mous dans l'eau (grappes)",
                "Se transforment (têtard devient grenouille)",
                "Respirent par la peau",
            ],
            "Qu'est-ce qu'ils mangent ?": [
                "Insectes (adultes)",
                "Plantes aquatiques (têtards)",
                "Minuscules choses dans l'eau (larves)",
            ],
            "Leurs super-pouvoirs !": [
                "Peau perméable (laisse passer l'eau)",
                "Gros yeux qui voient bien",
                "Doigts collants pour grimper (certaines grenouilles)",
            ],
        },
        Poissons: {
            "Où vivent-ils ?": [
                "Près des coraux colorés",
                "Tout au fond de l'océan",
                "Dans les fleuves chauds",
            ],
            "Comment font-ils des bébés ?": [
                "Œufs et 'graines' se rencontrent dans l'eau",
                "Pondent beaucoup d'œufs",
                "Parents ne s'occupent pas des petits (souvent)",
            ],
            "Qu'est-ce qu'ils mangent ?": [
                "Plancton (tout petit)",
                "Autres poissons",
                "Restes au fond de l'eau",
            ],
            "Leurs super-pouvoirs !": [
                "Ligne sur le côté pour sentir les mouvements",
                "Ballon interne pour flotter (vessie natatoire)",
                "Queue puissante pour nager",
            ],
        },
        Insectes: {
            "Où vivent-ils ?": [
                "Dans les arbres tropicaux",
                "Sous les feuilles mortes",
                "Dans l'eau douce",
            ],
            "Comment font-ils des bébés ?": [
                "Se transforment complètement (chenille > papillon)",
                "Maman pond sans papa (parfois)",
                "Parents s'occupent rarement des petits (sauf abeilles, fourmis)",
            ],
            "Qu'est-ce qu'ils mangent ?": [
                "Feuilles et plantes (puceron)",
                "Autres insectes (mante religieuse)",
                "Pollen des fleurs (abeille)",
            ],
            "Leurs super-pouvoirs !": [
                "Carapace externe (exosquelette)",
                "Antennes pour sentir et toucher",
                "Ailes fines pour voler (souvent)",
            ],
        },
    },
    metadata: {
        niveau: "Cycle 2 / Cycle 3 (Primaire)",
        objectifs: [
            "Reconnaître les grandes familles d'animaux",
            "Savoir où vivent et ce que mangent différents animaux",
            "Comprendre comment les animaux sont adaptés à leur milieu",
            "Apprendre à classer comme un petit scientifique !",
            "Découvrir des exemples d'animaux pour chaque famille",
        ],
        regles: [
            // ... (Les règles restent identiques)
            {
                nom: "Trio Gagnant",
                description:
                    "Associe une carte 'Où vivent-ils ?', 'Qu'est-ce qu'ils mangent ?' et 'Leurs super-pouvoirs !' à la bonne famille d'animaux.",
                difficulte: "Facile",
                joueurs: "1-4",
                materiel: "Cartes Famille + Cartes Caractéristiques",
                duree: "10 min",
                deroulement:
                    "Pose les cartes Famille. Pioche 3 cartes Caractéristique et trouve à quelle famille elles appartiennent toutes les trois.",
            },
            {
                nom: "Qui suis-je ?",
                description:
                    "Fais deviner une famille d'animaux en lisant ses caractéristiques.",
                difficulte: "Facile",
                joueurs: "3+",
                materiel:
                    "Cartes Famille (pour choisir) + Cartes Caractéristiques",
                duree: "15 min",
                deroulement:
                    "Un joueur choisit une famille (sans la montrer). Il pioche et lit des cartes Caractéristique de cette famille. Le premier qui devine gagne la carte Famille.",
            },
            {
                nom: "Collection d'Animaux",
                description:
                    "Essaie de réunir toutes les cartes Caractéristiques d'une famille.",
                difficulte: "Moyen",
                joueurs: "2-4",
                materiel: "Toutes les cartes",
                duree: "20 min",
                deroulement:
                    "Distribue 5 cartes Caractéristique à chacun. Pose les cartes Famille. À ton tour, demande une carte précise (ex: 'Est-ce que tu as une carte Où vivent les oiseaux ?') à un autre joueur. Si oui, il te la donne. Sinon, pioche. Le premier à compléter une famille gagne.",
            },
        ],
        colors: {
            // ... (Les couleurs restent identiques)
            famille: "#FFFDE7",
            Mammifères: "#A1887F",
            Oiseaux: "#90CAF9",
            Reptiles: "#A5D6A7",
            Amphibiens: "#CE93D8",
            Poissons: "#80DEEA",
            Insectes: "#FFAB91",
            "Où vivent-ils ?": "#E0F2F1",
            "Comment font-ils des bébés ?": "#EDE7F6",
            "Qu'est-ce qu'ils mangent ?": "#FFF3E0",
            "Leurs super-pouvoirs !": "#E3F2FD",
        },
        images: {
            // ... (La structure des images reste identique)
            families: {
                Mammifères: "classification-vivant/families/mammiferes.jpg",
                Oiseaux: "classification-vivant/families/oiseaux.jpg",
                Reptiles: "classification-vivant/families/reptiles.jpg",
                Amphibiens: "classification-vivant/families/amphibiens.jpg",
                Poissons: "classification-vivant/families/poissons.jpg",
                Insectes: "classification-vivant/families/insectes.jpg",
            },
            properties: {
                "Où vivent-ils ?":
                    "classification-vivant/properties/habitat_icone.png",
                "Comment font-ils des bébés ?":
                    "classification-vivant/properties/reproduction_icone.png",
                "Qu'est-ce qu'ils mangent ?":
                    "classification-vivant/properties/alimentation_icone.png",
                "Leurs super-pouvoirs !":
                    "classification-vivant/properties/adaptation_icone.png",
            },
            values: {
                // Chemins hypothétiques pour les images des valeurs spécifiques
                Mammifères: {
                    "Où vivent-ils ?": {
                        "Dans la forêt":
                            "classification-vivant/values/mammiferes/habitat/foret.jpg",
                        "Dans la savane (herbes hautes)":
                            "classification-vivant/values/mammiferes/habitat/savane.jpg",
                        "À la montagne":
                            "classification-vivant/values/mammiferes/habitat/montagne.jpg",
                    },
                    "Comment font-ils des bébés ?": {
                        "Bébé grandit dans le ventre (presque tous)":
                            "classification-vivant/values/mammiferes/reproduction/ventre.jpg",
                        "Maman allaite ses petits (donne du lait)":
                            "classification-vivant/values/mammiferes/reproduction/lait.jpg",
                        "Parents s'occupent bien des petits":
                            "classification-vivant/values/mammiferes/reproduction/soutien.jpg",
                    },
                    "Leurs super-pouvoirs !": {
                        "Poils pour rester au chaud":
                            "classification-vivant/values/mammiferes/adaptation/poils.jpg",
                    },
                    "Qu'est-ce qu'ils mangent ?": {
                        "Herbe et feuilles (vache, cerf)":
                            "classification-vivant/values/mammiferes/alimentation/herbe.jpg",
                    },
                },
                Oiseaux: {
                    "Comment font-ils des bébés ?": {
                        "Pondent des œufs avec une coquille dure":
                            "classification-vivant/values/oiseaux/reproduction/oeuf_coquille.jpg",
                    },
                    "Leurs super-pouvoirs !": {
                        "Plumes pour voler":
                            "classification-vivant/values/oiseaux/adaptation/plume.jpg",
                    },
                },
                Reptiles: {
                    "Leurs super-pouvoirs !": {
                        "Écailles protectrices":
                            "classification-vivant/values/reptiles/adaptation/ecailles.jpg",
                        "Ont besoin du soleil pour se réchauffer":
                            "classification-vivant/values/reptiles/adaptation/soleil.jpg",
                    },
                },
                Amphibiens: {
                    "Comment font-ils des bébés ?": {
                        "Se transforment (têtard devient grenouille)":
                            "classification-vivant/values/amphibiens/reproduction/metamorphose.jpg",
                    },
                    "Leurs super-pouvoirs !": {
                        "Peau perméable (laisse passer l'eau)":
                            "classification-vivant/values/amphibiens/adaptation/peau_humide.jpg",
                    },
                },
                Poissons: {
                    "Leurs super-pouvoirs !": {
                        "Nageoire puissante pour nager":
                            "classification-vivant/values/poissons/adaptation/nageoire.jpg",
                    },
                },
                Insectes: {
                    "Comment font-ils des bébés ?": {
                        "Se transforment complètement (chenille > papillon)":
                            "classification-vivant/values/insectes/reproduction/transformation.jpg",
                    },
                    "Leurs super-pouvoirs !": {
                        "Carapace externe (exosquelette)":
                            "classification-vivant/values/insectes/adaptation/carapace.jpg",
                        "Antennes pour sentir et toucher":
                            "classification-vivant/values/insectes/adaptation/antennes.jpg",
                    },
                },
                // ... Ajouter d'autres images pertinentes si disponibles
            },
        },
        // Modification ici : Ajout de chronologie.description
        chronologie: {
            Mammifères: {
                description:
                    "Nous sommes des mammifères ! Comme le chat, le chien, la vache, le lion. On a des poils, les mamans donnent du lait à leurs bébés. \n**Le savais-tu ?** La baleine bleue est le plus grand mammifère du monde !",
                // On peut ajouter un ordre si on veut forcer un affichage, même si ce n'est pas strictement chronologique
                ordre: 1,
            },
            Oiseaux: {
                description:
                    "Les oiseaux ont des plumes, un bec et la plupart peuvent voler ! Pense au moineau, à l'aigle ou au perroquet. \n**Le savais-tu ?** Le colibri peut battre des ailes jusqu'à 80 fois par seconde !",
                ordre: 2,
            },
            Reptiles: {
                description:
                    "Les reptiles ont des écailles et ont besoin de soleil pour se réchauffer. C'est la famille du serpent, du lézard et de la tortue. \n**Le savais-tu ?** Certains reptiles, comme le caméléon, peuvent changer de couleur !",
                ordre: 3,
            },
            Amphibiens: {
                description:
                    "Les amphibiens commencent leur vie dans l'eau (comme les têtards) puis vivent sur terre. Ils ont la peau humide. Pense à la grenouille ou au crapaud. \n**Le savais-tu ?** Les amphibiens peuvent respirer par la peau !",
                ordre: 4,
            },
            Poissons: {
                description:
                    "Les poissons vivent dans l'eau, respirent avec des branchies et nagent avec des nageoires. Comme le poisson rouge ou le requin ! \n**Le savais-tu ?** Il y a plus de 30 000 espèces de poissons différentes !",
                ordre: 5,
            },
            Insectes: {
                description:
                    "Les insectes ont 6 pattes et un corps en 3 parties (tête, thorax, abdomen). C'est la famille de la fourmi, du papillon, de la coccinelle. \n**Le savais-tu ?** Les insectes sont le groupe d'animaux le plus nombreux sur Terre !",
                ordre: 6,
            },
        },
        contextes: {}, // Laissé vide car l'info est maintenant dans chronologie
    },
}); // Fin de l'instanciation de DataJeu

export default dataClassificationVivant;
