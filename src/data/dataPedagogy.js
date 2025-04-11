/**
 * Corpus de données sur les pratiques pédagogiques efficaces
 */
const dataPedagogy = {
    id: "pedagogy",
    titre: "Pratiques pédagogiques efficaces",
    description:
        "Jeu de cartes sur les temps forts d'une séance et leurs points d'attention",

    // Les "tempsForts" du fichier original deviennent nos "familles"
    familles: [
        "Accueil",
        "Entrée de séance",
        "Lancement d'activité",
        "Mise en activité",
        "Mise en commun",
        "Institutionnalisation",
    ],

    // Les "typesPointsAttention" du fichier original deviennent nos "proprietes"
    proprietes: [
        "Objectifs visés",
        "Écueils possibles",
        "Gestes professionnels",
        "Tâches concrètes",
    ],

    // Les "pointsAttention" du fichier original deviennent nos "valeurs"
    valeurs: {
        Accueil: {
            "Objectifs visés": [
                "Créer un climat de confiance",
                "Établir le contact avec les élèves",
                "Préparer mentalement les élèves",
            ],
            "Écueils possibles": [
                "Commencer sans avoir l'attention de tous",
                "Négliger les rituels d'accueil",
                "Ignorer l'état émotionnel des élèves",
            ],
            "Gestes professionnels": [
                "Être présent à l'entrée de la salle",
                "Établir un contact visuel avec chaque élève",
                "Utiliser des rituels d'accueil constants",
            ],
            "Tâches concrètes": [
                "Vérifier les présences",
                "Rappeler les règles de classe",
                "Annoncer le programme de la séance",
            ],
        },
        "Entrée de séance": {
            "Objectifs visés": [
                "Mobiliser les connaissances antérieures",
                "Susciter l'intérêt et la curiosité",
                "Clarifier les objectifs d'apprentissage",
            ],
            "Écueils possibles": [
                "Entrer directement dans le vif du sujet",
                "Proposer une activité trop longue",
                "Ne pas faire de lien avec les séances précédentes",
            ],
            "Gestes professionnels": [
                "Utiliser un déclencheur motivant",
                "Formuler clairement les objectifs",
                "Faire le lien avec les connaissances antérieures",
            ],
            "Tâches concrètes": [
                "Présenter la problématique",
                "Vérifier les prérequis",
                "Expliciter les critères de réussite",
            ],
        },
        "Lancement d'activité": {
            "Objectifs visés": [
                "Donner des consignes claires",
                "Vérifier la compréhension des consignes",
                "Engager les élèves dans la tâche",
            ],
            "Écueils possibles": [
                "Donner trop de consignes à la fois",
                "Ne pas vérifier la compréhension",
                "Laisser des élèves inactifs",
            ],
            "Gestes professionnels": [
                "Formuler des consignes précises et concises",
                "Faire reformuler les consignes par les élèves",
                "Prévoir le matériel nécessaire à l'avance",
            ],
            "Tâches concrètes": [
                "Distribuer les supports",
                "Organiser les groupes si nécessaire",
                "Préciser le temps alloué à l'activité",
            ],
        },
        "Mise en activité": {
            "Objectifs visés": [
                "Accompagner les élèves dans leur travail",
                "Observer les stratégies des élèves",
                "Différencier selon les besoins",
            ],
            "Écueils possibles": [
                "Rester au bureau",
                "Aider trop rapidement",
                "Se focaliser sur un seul groupe",
            ],
            "Gestes professionnels": [
                "Circuler dans la classe",
                "Encourager l'autonomie",
                "Valoriser les réussites",
            ],
            "Tâches concrètes": [
                "Prendre des notes sur les productions",
                "Réguler le bruit et le temps",
                "Gérer les élèves en difficulté",
            ],
        },
        "Mise en commun": {
            "Objectifs visés": [
                "Mettre en commun les résultats",
                "Confronter les démarches",
                "Identifier les points essentiels",
            ],
            "Écueils possibles": [
                "Faire une synthèse trop longue",
                "Parler à la place des élèves",
                "Négliger certaines productions",
            ],
            "Gestes professionnels": [
                "Impliquer les élèves dans la synthèse",
                "Utiliser un support visuel",
                "Structurer les échanges",
            ],
            "Tâches concrètes": [
                "Organiser la prise de parole",
                "Noter les éléments importants",
                "Corriger les erreurs fréquentes",
            ],
        },
        Institutionnalisation: {
            "Objectifs visés": [
                "Formaliser les savoirs",
                "Vérifier la compréhension",
                "Ancrer les apprentissages",
            ],
            "Écueils possibles": [
                "Manquer de temps",
                "Donner une trace écrite sans explication",
                "Ne pas faire de lien avec les objectifs initiaux",
            ],
            "Gestes professionnels": [
                "Prévoir un temps suffisant",
                "Co-construire la trace écrite",
                "Utiliser un vocabulaire précis",
            ],
            "Tâches concrètes": [
                "Rédiger la trace écrite",
                "Proposer des exemples concrets",
                "Faire un bilan de la séance",
            ],
        },
    },

    // Métadonnées spécifiques à ce corpus
    metadata: {
        niveau: "Formation enseignants",
        objectifs: [
            "Comprendre la structure d'une séance pédagogique",
            "Identifier les points d'attention pour chaque temps fort",
            "Développer des pratiques pédagogiques efficaces",
        ],
        regles: [
            {
                nom: "La Séquence Parfaite",
                description:
                    "Remettre les temps forts dans l'ordre chronologique d'une séance",
            },
            {
                nom: "Objectifs & Gestes",
                description:
                    "Associer les objectifs visés et gestes professionnels à chaque temps fort",
            },
            {
                nom: "Défis et Solutions",
                description:
                    "Identifier les écueils possibles et les tâches concrètes pour chaque temps fort",
            },
        ],
        // Mapping des emojis spécifiques à ce corpus
        emojis: {
            Accueil: "wave",
            "Entrée de séance": "door",
            "Lancement d'activité": "rocket",
            "Mise en activité": "hammer_and_wrench",
            "Mise en commun": "bulb",
            Institutionnalisation: "books",
            "Objectifs visés": "dart",
            "Écueils possibles": "warning",
            "Gestes professionnels": "white_check_mark",
            "Tâches concrètes": "clipboard",
        },
        // Couleurs spécifiques à ce corpus
        colors: {
            famille: "#FFFDE7", // Jaune très clair (tempsForts)
            "Objectifs visés": "#E8F5E9", // Vert très clair
            "Gestes professionnels": "#E3F2FD", // Bleu très clair
            "Écueils possibles": "#FFEBEE", // Rouge très clair
            "Tâches concrètes": "#F3E5F5", // Violet très clair
        },
        // Ordre chronologique des familles, repris du fichier data.js original
        ordre: {
            Accueil: 1,
            "Entrée de séance": 2,
            "Lancement d'activité": 3,
            "Mise en activité": 4,
            "Mise en commun": 5,
            Institutionnalisation: 6,
        },
        // Structure pour les images
        images: {
            // Chemins des images pour les familles
            families: {
                Accueil: "pedagogy/families/accueil.jpg",
                "Entrée de séance": "pedagogy/families/entree-de-seance.jpg",
                "Lancement d'activité":
                    "pedagogy/families/lancement-activite.jpg",
                "Mise en activité": "pedagogy/families/mise-en-activite.jpg",
                "Mise en commun": "pedagogy/families/mise-en-commun.jpg",
                Institutionnalisation:
                    "pedagogy/families/institutionnalisation.jpg",
            },
            // Chemins des images pour les propriétés
            properties: {
                "Objectifs visés": "pedagogy/properties/objectifs.jpg",
                "Écueils possibles": "pedagogy/properties/ecueils.jpg",
                "Gestes professionnels": "pedagogy/properties/gestes.jpg",
                "Tâches concrètes": "pedagogy/properties/taches.jpg",
            },
        },
    },
};

export default dataPedagogy;
