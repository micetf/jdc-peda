// src/data/dataClassificationVivant.js

import DataJeu from "@data/DataJeu";

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
        Mammifères: {
            "Où vivent-ils ?": [
                {
                    id: "foret",
                    texte: "Dans les forêts denses où les arbres les protègent des prédateurs, comme les cerfs",
                },
                {
                    id: "savane",
                    texte: "Dans les savanes aux herbes jaunes où ils peuvent courir, comme les lions",
                },
                {
                    id: "montagne",
                    texte: "En haute montagne où l'air est frais, comme les bouquetins aux cornes imposantes",
                },
            ],
            "Comment font-ils des bébés ?": [
                {
                    id: "ventre",
                    texte: "Le bébé se développe dans le ventre de la mère pendant plusieurs mois avant de naître",
                },
                {
                    id: "lait",
                    texte: "Les mamans allaitent leurs petits avec du lait nutritif pendant leurs premiers mois",
                },
                {
                    id: "soin",
                    texte: "Les parents protègent leurs petits jusqu'à ce qu'ils soient autonomes",
                },
            ],
            "Qu'est-ce qu'ils mangent ?": [
                {
                    id: "herbe",
                    texte: "Des végétaux : herbe pour les vaches, feuilles pour les girafes",
                },
                {
                    id: "viande",
                    texte: "D'autres animaux chassés : gazelles pour les guépards, poissons pour les ours",
                },
                {
                    id: "omnivore",
                    texte: "De tout : plantes, fruits, insectes et petits animaux, comme les sangliers",
                },
            ],
            "Leurs super-pouvoirs !": [
                {
                    id: "poils",
                    texte: "Leur fourrure les isole du froid et des blessures grâce à des poils épais",
                },
                {
                    id: "oreilles",
                    texte: "Leurs oreilles mobiles captent les sons les plus faibles autour d'eux",
                },
                {
                    id: "dents",
                    texte: "Leurs dents spécialisées broient herbes, viandes ou noix avec précision",
                },
            ],
        },
        Oiseaux: {
            "Où vivent-ils ?": [
                {
                    id: "arbres",
                    texte: "Dans la canopée des forêts tropicales, comme les perroquets colorés",
                },
                {
                    id: "mer",
                    texte: "Sur les côtes rocheuses où ils plongent pour pêcher, comme les mouettes",
                },
                {
                    id: "toundra",
                    texte: "Dans la toundra glaciale où ils nichent au sol, comme les lagopèdes",
                },
            ],
            "Comment font-ils des bébés ?": [
                {
                    id: "oeufs",
                    texte: "Ils pondent des œufs à coquille dure dans des nids bien cachés",
                },
                {
                    id: "couvaison",
                    texte: "Les parents couvent les œufs à tour de rôle pour les garder au chaud",
                },
                {
                    id: "nid",
                    texte: "Ils bâtissent des nids avec brindilles, plumes et mousse, comme le rouge-gorge",
                },
            ],
            "Qu'est-ce qu'ils mangent ?": [
                {
                    id: "graines",
                    texte: "Des graines picorées au sol ou dans les plantes, comme les moineaux",
                },
                {
                    id: "poissons",
                    texte: "Des poissons attrapés en plongeant rapidement, comme les sternes",
                },
                {
                    id: "nectar",
                    texte: "Du nectar puisé dans les fleurs avec leur long bec, comme les colibris",
                },
            ],
            "Leurs super-pouvoirs !": [
                {
                    id: "plumes",
                    texte: "Leurs plumes légères et aérodynamiques permettent un vol précis",
                },
                {
                    id: "os",
                    texte: "Leurs os creux et légers allègent leur corps pour mieux voler",
                },
                {
                    id: "bec",
                    texte: "Leur bec adapté à leur régime : crochu pour déchirer, fin pour picorer",
                },
            ],
        },
        Reptiles: {
            "Où vivent-ils ?": [
                {
                    id: "desert",
                    texte: "Dans les déserts arides où ils résistent à la chaleur, comme les geckos",
                },
                {
                    id: "mangrove",
                    texte: "Dans les zones humides comme les mangroves, habitat des crocodiles",
                },
                {
                    id: "rochers",
                    texte: "Sur les rochers chauffés par le soleil où ils digèrent, comme les lézards",
                },
            ],
            "Comment font-ils des bébés ?": [
                {
                    id: "oeufs-terre",
                    texte: "Ils enterrent leurs œufs dans le sable chaud pour les faire éclore",
                },
                {
                    id: "autonomie",
                    texte: "Les bébés sortent seuls de l'œuf avec une dent spéciale pour casser la coquille",
                },
                {
                    id: "sans-parents",
                    texte: "Les petits doivent se débrouiller seuls après l'éclosion",
                },
            ],
            "Qu'est-ce qu'ils mangent ?": [
                {
                    id: "insectes",
                    texte: "Des insectes attrapés avec leur langue collante, comme les caméléons",
                },
                {
                    id: "proies",
                    texte: "Des proies entières avalées grâce à leur mâchoire extensible",
                },
                {
                    id: "plantes",
                    texte: "Des plantes riches en eau pour s'hydrater, comme les tortues terrestres",
                },
            ],
            "Leurs super-pouvoirs !": [
                {
                    id: "ecailles",
                    texte: "Leur peau écailleuse les protège des blessures et de la déshydratation",
                },
                {
                    id: "soleil",
                    texte: "Ils régulent leur température en s'exposant au soleil ou à l'ombre",
                },
                {
                    id: "langue",
                    texte: "Leur langue fourchue capte les odeurs pour localiser leurs proies",
                },
            ],
        },
        Amphibiens: {
            "Où vivent-ils ?": [
                {
                    id: "mare",
                    texte: "Près des mares où ils pondent leurs œufs, comme les grenouilles vertes",
                },
                {
                    id: "foret-humide",
                    texte: "Dans les forêts humides où leur peau reste mouillée",
                },
                {
                    id: "riviere",
                    texte: "Le long des rivières à courant lent où les têtards grandissent",
                },
            ],
            "Comment font-ils des bébés ?": [
                {
                    id: "oeufs-eau",
                    texte: "Ils pondent des grappes d'œufs gélatineux dans l'eau stagnante",
                },
                {
                    id: "tetard",
                    texte: "Les têtards respirent dans l'eau avant de devenir adultes terrestres",
                },
                {
                    id: "respiration",
                    texte: "Adultes : peau humide pour respirer. Têtards : branchies dans l'eau",
                },
            ],
            "Qu'est-ce qu'ils mangent ?": [
                {
                    id: "insectes-adultes",
                    texte: "Des insectes attrapés avec leur langue collante ultra-rapide",
                },
                {
                    id: "plantes-tetards",
                    texte: "Des algues et débris végétaux quand ils sont têtards",
                },
                {
                    id: "microbes",
                    texte: "Des micro-organismes filtrés dans l'eau pendant leur phase larvaire",
                },
            ],
            "Leurs super-pouvoirs !": [
                {
                    id: "peau",
                    texte: "Leur peau perméable absorbe l'eau et l'oxygène sans boire",
                },
                {
                    id: "yeux",
                    texte: "Leurs yeux globuleux voient dans toutes les directions pour surveiller",
                },
                {
                    id: "doigts",
                    texte: "Leurs doigts collants leur permettent de grimper aux surfaces verticales",
                },
            ],
        },
        Poissons: {
            "Où vivent-ils ?": [
                {
                    id: "corail",
                    texte: "Dans les récifs coralliens colorés, comme le poisson-clown et son anémone",
                },
                {
                    id: "profondeur",
                    texte: "Dans les abysses obscures où certains produisent leur propre lumière",
                },
                {
                    id: "fleuve",
                    texte: "Dans les fleuves à courant rapide où ils remontent le courant, comme les saumons",
                },
            ],
            "Comment font-ils des bébés ?": [
                {
                    id: "rencontre",
                    texte: "La femelle pond des œufs que le mâle féconde ensuite dans l'eau",
                },
                {
                    id: "nombreux",
                    texte: "Ils pondent des milliers d'œufs car peu survivront jusqu'à l'âge adulte",
                },
                {
                    id: "independance",
                    texte: "Les alevins doivent se nourrir seuls dès la naissance",
                },
            ],
            "Qu'est-ce qu'ils mangent ?": [
                {
                    id: "plancton",
                    texte: "Du plancton filtré grâce à leurs branchies spécialisées",
                },
                {
                    id: "poissons",
                    texte: "D'autres poissons chassés en bancs organisés",
                },
                {
                    id: "debris",
                    texte: "Des restes organiques trouvés sur le fond marin",
                },
            ],
            "Leurs super-pouvoirs !": [
                {
                    id: "ligne",
                    texte: "Leur ligne latérale détecte les vibrations et mouvements dans l'eau",
                },
                {
                    id: "vessie",
                    texte: "Leur vessie natatoire est une poche d'air pour flotter à la bonne profondeur",
                },
                {
                    id: "nageoire",
                    texte: "Leur queue puissante propulse leur corps dans l'eau avec précision",
                },
            ],
        },
        Insectes: {
            "Où vivent-ils ?": [
                {
                    id: "canopee",
                    texte: "Dans la canopée des forêts tropicales où ils butinent les fleurs",
                },
                {
                    id: "litiere",
                    texte: "Sous les feuilles mortes où ils recyclent la matière organique",
                },
                {
                    id: "eau-douce",
                    texte: "Dans les mares où les larves se développent avant de devenir adultes",
                },
            ],
            "Comment font-ils des bébés ?": [
                {
                    id: "metamorphose",
                    texte: "De la chenille au papillon : transformation complète en chrysalide",
                },
                {
                    id: "parthenogenese",
                    texte: "Certaines femelles pondent des œufs sans mâle, comme les pucerons",
                },
                {
                    id: "colonies",
                    texte: "Dans les sociétés organisées, les ouvrières élèvent les petits",
                },
            ],
            "Qu'est-ce qu'ils mangent ?": [
                {
                    id: "feuilles",
                    texte: "Des feuilles découpées avec leurs mandibules puissantes",
                },
                {
                    id: "proies-insectes",
                    texte: "D'autres insectes capturés vivants avec leurs pattes préhensiles",
                },
                {
                    id: "pollen",
                    texte: "Du pollen récolté et transformé en miel dans la ruche",
                },
            ],
            "Leurs super-pouvoirs !": [
                {
                    id: "exosquelette",
                    texte: "Leur carapace externe rigide les protège comme une armure",
                },
                {
                    id: "antennes",
                    texte: "Leurs antennes détectent odeurs, vibrations et contacts",
                },
                {
                    id: "ailes",
                    texte: "Leurs ailes membraneuses battent jusqu'à 1000 fois par seconde",
                },
            ],
        },
    },

    metadata: {
        niveau: "Cycle 2 / Cycle 3 (CE2-CM1-CM2)",
        objectifs: [
            "Reconnaître les principales familles d'animaux et leurs caractéristiques",
            "Comprendre comment les animaux sont adaptés à leur environnement",
            "Découvrir les bases de la classification du vivant",
            "Apprendre le vocabulaire scientifique adapté au cycle 3",
            "Développer la curiosité pour la biodiversité",
        ],
        regles: [
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
                Mammifères: {
                    "Où vivent-ils ?": {
                        foret: "classification-vivant/values/mammiferes/habitat/foret.jpg",
                        savane: "classification-vivant/values/mammiferes/habitat/savane.jpg",
                        montagne:
                            "classification-vivant/values/mammiferes/habitat/montagne.jpg",
                    },
                    "Comment font-ils des bébés ?": {
                        ventre: "classification-vivant/values/mammiferes/reproduction/ventre.jpg",
                        lait: "classification-vivant/values/mammiferes/reproduction/allaitement.jpg",
                        soin: "classification-vivant/values/mammiferes/reproduction/soutien.jpg",
                    },
                    "Leurs super-pouvoirs !": {
                        poils: "classification-vivant/values/mammiferes/adaptation/poils.jpg",
                        oreilles:
                            "classification-vivant/values/mammiferes/adaptation/oreilles.jpg",
                        dents: "classification-vivant/values/mammiferes/adaptation/dents.jpg",
                    },
                    "Qu'est-ce qu'ils mangent ?": {
                        herbe: "classification-vivant/values/mammiferes/alimentation/herbe.jpg",
                        viande: "classification-vivant/values/mammiferes/alimentation/carnivore.jpg",
                        omnivore:
                            "classification-vivant/values/mammiferes/alimentation/omnivore.jpg",
                    },
                },
                Oiseaux: {
                    "Où vivent-ils ?": {
                        arbres: "classification-vivant/values/oiseaux/habitat/arbres-tropicaux.jpg",
                        mer: "classification-vivant/values/oiseaux/habitat/mer.jpg",
                        toundra:
                            "classification-vivant/values/oiseaux/habitat/toundra.jpg",
                    },
                    "Comment font-ils des bébés ?": {
                        oeufs: "classification-vivant/values/oiseaux/reproduction/ponte.jpg",
                        couvaison:
                            "classification-vivant/values/oiseaux/reproduction/couvaison.jpg",
                        nid: "classification-vivant/values/oiseaux/reproduction/nidification.jpg",
                    },
                    "Qu'est-ce qu'ils mangent ?": {
                        graines:
                            "classification-vivant/values/oiseaux/alimentation/granivore.jpg",
                        poissons:
                            "classification-vivant/values/oiseaux/alimentation/piscivore.jpg",
                        nectar: "classification-vivant/values/oiseaux/alimentation/nectar.jpg",
                    },
                    "Leurs super-pouvoirs !": {
                        plumes: "classification-vivant/values/oiseaux/adaptation/plumes.jpg",
                        os: "classification-vivant/values/oiseaux/adaptation/os.jpg",
                        bec: "classification-vivant/values/oiseaux/adaptation/bec.jpg",
                    },
                },
                Reptiles: {
                    "Où vivent-ils ?": {
                        desert: "classification-vivant/values/reptiles/habitat/desert.jpg",
                        mangrove:
                            "classification-vivant/values/reptiles/habitat/mangrove.jpg",
                        rochers:
                            "classification-vivant/values/reptiles/habitat/rochers.jpg",
                    },
                    "Comment font-ils des bébés ?": {
                        "oeufs-terre":
                            "classification-vivant/values/reptiles/reproduction/ponte.jpg",
                        autonomie:
                            "classification-vivant/values/reptiles/reproduction/eclosion.jpg",
                        "sans-parents":
                            "classification-vivant/values/reptiles/reproduction/parents.jpg",
                    },
                    "Qu'est-ce qu'ils mangent ?": {
                        insectes:
                            "classification-vivant/values/reptiles/alimentation/insectivore.jpg",
                        proies: "classification-vivant/values/reptiles/alimentation/carnivore.jpg",
                        plantes:
                            "classification-vivant/values/reptiles/alimentation/herbivore.jpg",
                    },
                    "Leurs super-pouvoirs !": {
                        ecailles:
                            "classification-vivant/values/reptiles/adaptation/ecailles.jpg",
                        soleil: "classification-vivant/values/reptiles/adaptation/soleil.jpg",
                        langue: "classification-vivant/values/reptiles/adaptation/langue.jpg",
                    },
                },
                Amphibiens: {
                    "Où vivent-ils ?": {
                        mare: "classification-vivant/values/amphibiens/habitat/mare.jpg",
                        "foret-humide":
                            "classification-vivant/values/amphibiens/habitat/foret.jpg",
                        riviere:
                            "classification-vivant/values/amphibiens/habitat/riviere.jpg",
                    },
                    "Comment font-ils des bébés ?": {
                        tetard: "classification-vivant/values/amphibiens/reproduction/tetard.jpg",
                        respiration:
                            "classification-vivant/values/amphibiens/reproduction/respiration.jpg",
                        "oeufs-eau":
                            "classification-vivant/values/amphibiens/reproduction/grappe.jpg",
                    },
                    "Qu'est-ce qu'ils mangent ?": {
                        "insectes-adultes":
                            "classification-vivant/values/amphibiens/alimentation/insectivore.jpg",
                        "plantes-tetards":
                            "classification-vivant/values/amphibiens/alimentation/herbivore.jpg",
                        microbes:
                            "classification-vivant/values/amphibiens/alimentation/larve.jpg",
                    },
                    "Leurs super-pouvoirs !": {
                        peau: "classification-vivant/values/amphibiens/adaptation/permeable.jpg",
                        yeux: "classification-vivant/values/amphibiens/adaptation/gros-yeux.jpg",
                        doigts: "classification-vivant/values/amphibiens/adaptation/gluant.jpg",
                    },
                },
                Poissons: {
                    "Où vivent-ils ?": {
                        corail: "classification-vivant/values/poissons/habitat/coraux.jpg",
                        profondeur:
                            "classification-vivant/values/poissons/habitat/ocean.jpg",
                        fleuve: "classification-vivant/values/poissons/habitat/fleuve.jpg",
                    },
                    "Comment font-ils des bébés ?": {
                        rencontre:
                            "classification-vivant/values/poissons/reproduction/rencontre-oeufs-graines.jpg",
                        nombreux:
                            "classification-vivant/values/poissons/reproduction/beaucoup-oeufs.jpg",
                        independance:
                            "classification-vivant/values/poissons/reproduction/autonomie.jpg",
                    },
                    "Qu'est-ce qu'ils mangent ?": {
                        plancton:
                            "classification-vivant/values/poissons/alimentation/plancton.jpg",
                        poissons:
                            "classification-vivant/values/poissons/alimentation/poissons.jpg",
                        debris: "classification-vivant/values/poissons/alimentation/restes.jpg",
                    },
                    "Leurs super-pouvoirs !": {
                        nageoire:
                            "classification-vivant/values/poissons/adaptation/nageoire.jpg",
                        ligne: "classification-vivant/values/poissons/adaptation/ligne.jpg",
                        vessie: "classification-vivant/values/poissons/adaptation/ballon.jpg",
                    },
                },
                Insectes: {
                    "Où vivent-ils ?": {
                        canopee:
                            "classification-vivant/values/insectes/habitat/arbres-tropicaux.jpg",
                        litiere:
                            "classification-vivant/values/insectes/habitat/feuilles-mortes.jpg",
                        "eau-douce":
                            "classification-vivant/values/insectes/habitat/eau-douce.jpg",
                    },
                    "Comment font-ils des bébés ?": {
                        metamorphose:
                            "classification-vivant/values/insectes/reproduction/transformation.jpg",
                        parthenogenese:
                            "classification-vivant/values/insectes/reproduction/ponte.jpg",
                        colonies:
                            "classification-vivant/values/insectes/reproduction/autonomie.jpg",
                    },
                    "Qu'est-ce qu'ils mangent ?": {
                        feuilles:
                            "classification-vivant/values/insectes/alimentation/herbivore.jpg",
                        "proies-insectes":
                            "classification-vivant/values/insectes/alimentation/insectivore.jpg",
                        pollen: "classification-vivant/values/insectes/alimentation/pollen.jpg",
                    },
                    "Leurs super-pouvoirs !": {
                        exosquelette:
                            "classification-vivant/values/insectes/adaptation/carapace.jpg",
                        antennes:
                            "classification-vivant/values/insectes/adaptation/antennes.jpg",
                        ailes: "classification-vivant/values/insectes/adaptation/ailes.jpg",
                    },
                },
            },
        },
        chronologie: {
            Mammifères: {
                description:
                    "Nous sommes des mammifères ! Comme le chat, le chien, la vache ou le lion. On a des poils, et les mamans donnent du lait à leurs bébés. Le savais-tu ? La baleine bleue est le plus grand mammifère du monde !",
                ordre: 1,
            },
            Oiseaux: {
                description:
                    "Les oiseaux ont des plumes, un bec et la plupart peuvent voler ! Pense au moineau, à l'aigle ou au perroquet. Le savais-tu ? Le colibri peut battre des ailes jusqu'à 80 fois par seconde !",
                ordre: 2,
            },
            Reptiles: {
                description:
                    "Les reptiles ont des écailles et ont besoin du soleil pour se réchauffer. C'est la famille du serpent, du lézard et de la tortue. Le savais-tu ? Certains reptiles, comme le caméléon, peuvent changer de couleur !",
                ordre: 3,
            },
            Amphibiens: {
                description:
                    "Les amphibiens commencent leur vie dans l'eau (comme les têtards) puis vivent sur terre. Ils ont la peau humide. Pense à la grenouille ou au crapaud. Le savais-tu ? Les amphibiens peuvent respirer par la peau !",
                ordre: 4,
            },
            Poissons: {
                description:
                    "Les poissons vivent dans l'eau, respirent avec des branchies et nagent avec des nageoires. Comme le poisson rouge ou le requin ! Le savais-tu ? Il existe plus de 30 000 espèces de poissons différentes !",
                ordre: 5,
            },
            Insectes: {
                description:
                    "Les insectes ont 6 pattes et un corps en 3 parties (tête, thorax, abdomen). C'est la famille de la fourmi, du papillon, de la coccinelle. Le savais-tu ? Les insectes sont les animaux les plus nombreux sur Terre !",
                ordre: 6,
            },
        },
        contextes: {},
        aiImageCredit:
            "Les illustrations utilisées dans ce jeu ont été générées par Microsoft Copilot. Ces images sont utilisées à des fins pédagogiques uniquement.",
    },
});

export default dataClassificationVivant;
