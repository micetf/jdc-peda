// src/data/dataPedagogy.js
import DataJeu from "./DataJeu";

const dataPedagogy = new DataJeu({
    id: "pedagogy",
    titre: "Pratiques pédagogiques efficaces",
    description:
        "Jeu de cartes sur les temps forts d'une séance et leurs points d'attention",

    familles: [
        "Accueil",
        "Entrée de séance",
        "Lancement d'activité",
        "Mise en activité",
        "Mise en commun",
        "Institutionnalisation",
    ],

    proprietes: [
        "Objectifs visés",
        "Écueils possibles",
        "Gestes professionnels",
        "Tâches concrètes",
    ],

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
                difficulte: "Facile",
                joueurs: "2-6",
                materiel: "Cartes Famille uniquement",
                duree: "10-15 minutes",
                deroulement:
                    "Mélangez les cartes Famille et distribuez-les. Les joueurs doivent placer leurs cartes dans l'ordre logique d'une séance d'enseignement.",
            },
            {
                nom: "Objectifs & Gestes",
                description:
                    "Associer les objectifs visés et gestes professionnels à chaque temps fort",
                difficulte: "Intermédiaire",
                joueurs: "2-4",
                materiel:
                    "Cartes Famille et Valeur (Objectifs visés et Gestes professionnels)",
                duree: "15-20 minutes",
                deroulement:
                    "Placez les cartes Famille en ligne. Mélangez les cartes Objectifs et Gestes et distribuez-les. À tour de rôle, chaque joueur place une carte sous la famille correspondante en justifiant son choix.",
            },
            {
                nom: "Défis et Solutions",
                description:
                    "Identifier les écueils possibles et les tâches concrètes pour chaque temps fort",
                difficulte: "Avancé",
                joueurs: "2-4",
                materiel:
                    "Cartes Famille et Valeur (Écueils possibles et Tâches concrètes)",
                duree: "20-30 minutes",
                deroulement:
                    "Pour chaque famille, retrouvez les écueils possibles et proposez les tâches concrètes qui permettent de les éviter.",
            },
        ],

        // Couleurs spécifiques à ce corpus
        colors: {
            famille: "#FFFDE7", // Jaune très clair (tempsForts)
            "Objectifs visés": "#E8F5E9", // Vert très clair
            "Gestes professionnels": "#E3F2FD", // Bleu très clair
            "Écueils possibles": "#FFEBEE", // Rouge très clair
            "Tâches concrètes": "#F3E5F5", // Violet très clair
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

        // Information chronologique pour chaque temps fort (remplace 'ordre')
        chronologie: {
            Accueil: {
                ordre: 1,
                description:
                    "Moment initial de la séance où l'enseignant établit le contact avec les élèves et crée un climat propice à l'apprentissage.",
            },
            "Entrée de séance": {
                ordre: 2,
                description:
                    "Moment où l'enseignant introduit le sujet, active les connaissances antérieures et présente les objectifs d'apprentissage.",
            },
            "Lancement d'activité": {
                ordre: 3,
                description:
                    "Moment où l'enseignant présente les consignes et organise le travail pour l'activité principale.",
            },
            "Mise en activité": {
                ordre: 4,
                description:
                    "Moment où les élèves travaillent activement sur la tâche proposée et où l'enseignant accompagne leurs apprentissages.",
            },
            "Mise en commun": {
                ordre: 5,
                description:
                    "Moment où les élèves partagent et comparent leurs productions et où l'enseignant organise la confrontation des résultats.",
            },
            Institutionnalisation: {
                ordre: 6,
                description:
                    "Moment final où l'enseignant formalise les savoirs construits pendant la séance et vérifie les acquis des élèves.",
            },
        },

        // Descriptions contextuelles pour les temps forts (équivalent aux 'contextes' de l'histoire)
        contextes: {
            Accueil:
                "Phase d'entrée en classe où l'enseignant accueille les élèves, prend en compte leur état émotionnel et crée un climat propice à l'apprentissage. Ce temps permet de marquer la transition et de préparer mentalement les élèves.",
            "Entrée de séance":
                "Phase d'introduction qui donne du sens à l'apprentissage en suscitant la curiosité et en explicitant les objectifs. Elle permet de faire le lien avec les connaissances antérieures et d'engager les élèves.",
            "Lancement d'activité":
                "Moment charnière où l'enseignant présente clairement les tâches à réaliser, vérifie la compréhension des consignes et organise les conditions matérielles du travail.",
            "Mise en activité":
                "Cœur de la séance où les élèves sont en situation d'apprentissage actif. L'enseignant observe, accompagne, et différencie son action selon les besoins identifiés.",
            "Mise en commun":
                "Phase d'échanges où les élèves confrontent leurs résultats et démarches. L'enseignant organise la discussion, favorise les interactions entre pairs et fait émerger les savoirs essentiels.",
            Institutionnalisation:
                "Phase finale qui permet d'ancrer les apprentissages en formalisant les savoirs et savoir-faire construits pendant la séance. Elle assure la transition vers les apprentissages futurs.",
        },
        aiImageCredit:
            "Les illustrations utilisées dans ce jeu sont basées sur des émoticônes Unicode capturés via des captures d'écran. Aucune image générée par IA n'a été utilisée pour ce corpus pédagogique.",
    },
});

export default dataPedagogy;
