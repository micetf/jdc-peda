// src/data/DataJeu.js

/**
 * Classe représentant un jeu de cartes pédagogique
 */
class DataJeu {
    /**
     * Crée une nouvelle instance de jeu de cartes pédagogique
     * @param {Object} options - Options de configuration du jeu
     * @param {string} options.id - Identifiant unique du jeu
     * @param {string} options.titre - Titre du jeu
     * @param {string} options.description - Description détaillée du jeu
     * @param {string[]} options.familles - Liste des familles du jeu
     * @param {string[]} options.proprietes - Liste des propriétés communes à toutes les familles
     * @param {Object} options.valeurs - Dictionnaire des valeurs par famille et propriété
     * @param {Object} options.metadata - Métadonnées du jeu (niveau, objectifs, regles, colors, images, chronologie, contextes)
     */
    constructor(options) {
        // Validation des propriétés obligatoires
        const requiredProps = [
            "id",
            "titre",
            "description",
            "familles",
            "proprietes",
            "valeurs",
            "metadata",
        ];
        for (const prop of requiredProps) {
            if (!options[prop]) {
                throw new Error(
                    `La propriété ${prop} est obligatoire pour créer un jeu`
                );
            }
        }

        // Propriétés de base
        this.id = options.id;
        this.titre = options.titre;
        this.description = options.description;
        this.familles = options.familles;
        this.proprietes = options.proprietes;
        this.valeurs = options.valeurs;

        // Métadonnées
        this.metadata = {
            niveau: options.metadata.niveau || "Non spécifié",
            objectifs: options.metadata.objectifs || [],
            regles: options.metadata.regles || [],
            colors: options.metadata.colors || {},
            // Modification ici : Initialisation de la structure complète pour les images
            images: {
                families:
                    (options.metadata.images &&
                        options.metadata.images.families) ||
                    {},
                properties:
                    (options.metadata.images &&
                        options.metadata.images.properties) ||
                    {},
                // Ajout de la structure pour les images spécifiques aux valeurs
                values:
                    (options.metadata.images &&
                        options.metadata.images.values) ||
                    {},
            },
            chronologie: options.metadata.chronologie || {},
            contextes: options.metadata.contextes || {},
        };

        // Validation de la structure des valeurs
        this.validateValeurs();
    }

    /**
     * Vérifie que chaque famille a des valeurs pour chaque propriété
     * @private
     */
    validateValeurs() {
        for (const famille of this.familles) {
            if (!this.valeurs[famille]) {
                throw new Error(
                    `La famille "${famille}" n'a pas de valeurs définies`
                );
            }

            for (const propriete of this.proprietes) {
                if (!this.valeurs[famille][propriete]) {
                    throw new Error(
                        `La propriété "${propriete}" n'est pas définie pour la famille "${famille}"`
                    );
                }

                if (!Array.isArray(this.valeurs[famille][propriete])) {
                    throw new Error(
                        `Les valeurs de ${propriete} pour ${famille} doivent être un tableau`
                    );
                }
            }
        }
    }

    /**
     * Obtient les valeurs d'une propriété pour une famille spécifique
     * @param {string} famille - Nom de la famille
     * @param {string} propriete - Nom de la propriété
     * @returns {string[]} Liste des valeurs
     */
    getValeurs(famille, propriete) {
        if (!this.familles.includes(famille)) {
            console.error(`Famille "${famille}" non trouvée dans le jeu.`);
            return []; // Retourne un tableau vide au lieu de lancer une erreur pour la flexibilité
        }

        if (!this.proprietes.includes(propriete)) {
            console.error(`Propriété "${propriete}" non trouvée dans le jeu.`);
            return []; // Retourne un tableau vide
        }

        return this.valeurs[famille]?.[propriete] || []; // Utilise optional chaining pour plus de sécurité
    }

    /**
     * Obtient la description chronologique d'une famille
     * @param {string} famille - Nom de la famille
     * @returns {Object|null} Informations chronologiques ou null si non disponibles
     */
    getChronologie(famille) {
        return this.metadata.chronologie[famille] || null;
    }

    /**
     * Obtient le contexte d'une famille
     * @param {string} famille - Nom de la famille
     * @returns {string|null} Contexte ou null si non disponible
     */
    getContexte(famille) {
        return this.metadata.contextes[famille] || null;
    }

    /**
     * Obtient le chemin de l'image prioritaire pour une carte donnée (valeur, propriété, ou famille).
     * La priorité est : Valeur spécifique > Propriété > null.
     * @param {string} famille - Nom de la famille
     * @param {string|null} propriete - Nom de la propriété (null si type 'famille')
     * @param {string|null} valeur - Nom de la valeur (null si type 'famille' ou si l'on cherche l'image de la propriété)
     * @returns {string|null} Chemin de l'image ou null si non disponible
     */
    getImagePourCarte(famille, propriete, valeur) {
        const imagesMeta = this.metadata.images || {};
        const valuesImages = imagesMeta.values || {};
        const propertiesImages = imagesMeta.properties || {};

        if (
            valeur &&
            famille &&
            propriete &&
            valuesImages[famille] &&
            valuesImages[famille][propriete] &&
            valuesImages[famille][propriete][valeur]
        ) {
            return valuesImages[famille][propriete][valeur];
        }

        // 2. Vérifier l'image de la propriété (priorité moyenne)
        if (propriete && propertiesImages[propriete]) {
            return propertiesImages[propriete];
        }

        // 3. Aucune image spécifique trouvée pour valeur ou propriété
        return null;
    }

    /**
     * Obtient le chemin de l'image d'une famille (pour la carte famille).
     * @param {string} famille - Nom de la famille
     * @returns {string|null} Chemin de l'image ou null si non disponible
     * @deprecated Utiliser `this.metadata.images.families[famille]` directement si besoin ou ajuster la logique de carte famille.
     */
    getImageFamille(famille) {
        console.warn("getImageFamille est dépréciée.");
        return this.metadata.images.families[famille] || null;
    }

    /**
     * Obtient la couleur d'une carte (famille ou valeur).
     * @param {string} type - Type ('famille' ou 'valeur')
     * @param {string} nom - Nom de la famille (si type='famille') ou de la propriété (si type='valeur')
     * @returns {string} Couleur au format hexadécimal
     */
    getColor(type, nom) {
        // Couleurs par défaut
        const defaultColors = {
            famille: "#FFFDE7", // Jaune très clair par défaut pour les familles
            valeur: "#E3F2FD", // Bleu très clair par défaut pour les valeurs (basé sur propriété)
        };

        // Couleur spécifique au nom (famille ou propriété) a la priorité
        if (this.metadata.colors[nom]) {
            return this.metadata.colors[nom];
        }

        // Couleur spécifique au type (famille ou valeur) si pas de couleur spécifique au nom
        if (this.metadata.colors[type]) {
            return this.metadata.colors[type];
        }

        // Couleur par défaut pour le type
        return defaultColors[type] || "#FFFFFF"; // Fallback blanc
    }

    /**
     * Obtient les familles triées par ordre chronologique si disponible, sinon par ordre d'origine.
     * @returns {string[]} Liste des familles triées
     */
    getFamillesTriees() {
        if (Object.keys(this.metadata.chronologie).length === 0) {
            return [...this.familles]; // Retourne l'ordre d'origine si pas de chrono
        }

        return [...this.familles].sort((a, b) => {
            const chronoA = this.metadata.chronologie[a];
            const chronoB = this.metadata.chronologie[b];

            // Priorité 1 : Champ 'ordre' numérique
            if (
                chronoA &&
                typeof chronoA.ordre === "number" &&
                chronoB &&
                typeof chronoB.ordre === "number"
            ) {
                return chronoA.ordre - chronoB.ordre;
            }
            if (chronoA && typeof chronoA.ordre === "number") return -1; // A a un ordre, B non
            if (chronoB && typeof chronoB.ordre === "number") return 1; // B a un ordre, A non

            // Priorité 2 : Champ 'debut' (chaîne ou nombre)
            if (
                chronoA &&
                chronoA.debut !== undefined &&
                chronoB &&
                chronoB.debut !== undefined
            ) {
                // Gestion simple pour année numérique ou chaîne 'YYYY' ou '-YYYY' (av. J.-C.)
                const debutA = parseInt(String(chronoA.debut).trim(), 10);
                const debutB = parseInt(String(chronoB.debut).trim(), 10);
                if (!isNaN(debutA) && !isNaN(debutB)) {
                    return debutA - debutB;
                }
                // Fallback pour comparaison de chaînes si non numérique
                return String(chronoA.debut).localeCompare(
                    String(chronoB.debut)
                );
            }
            if (chronoA && chronoA.debut !== undefined) return -1; // A a un début, B non
            if (chronoB && chronoB.debut !== undefined) return 1; // B a un début, A non

            // Fallback : Ordre d'origine si aucune info de tri exploitable
            return this.familles.indexOf(a) - this.familles.indexOf(b);
        });
    }

    /**
     * Obtient toutes les cartes du jeu selon le filtre spécifié
     * @param {string} filter - Filtre à appliquer ('tout', 'famille', 'valeur')
     * @returns {Object[]} Liste des cartes avec leur image prioritaire
     */
    getCards(filter = "tout") {
        const cards = [];
        const famillesTriees = this.getFamillesTriees(); // Utiliser les familles triées
        const root = "src/assets/illustrations/";
        // Cartes de familles
        if (filter === "tout" || filter === "famille") {
            famillesTriees.forEach((famille) => {
                const color = this.getColor("famille", famille);
                // Pour une carte famille, on prend l'image définie pour la famille
                const familyImage = this.metadata.images.families[famille];
                const image = familyImage ? root + familyImage : null;

                cards.push({
                    id: `famille-${famille}`,
                    type: "famille",
                    title: famille,
                    content: "", // Content n'est plus utilisé pour les familles
                    color,
                    image,
                    familyName: famille,
                });
            });
        }

        // Cartes de valeurs
        if (filter === "tout" || filter === "valeur") {
            famillesTriees.forEach((famille) => {
                this.proprietes.forEach((propriete) => {
                    const valeurs = this.getValeurs(famille, propriete);
                    const color = this.getColor("valeur", propriete); // Couleur basée sur la propriété pour les cartes valeur

                    valeurs.forEach((valeur) => {
                        // Utilisation de la nouvelle méthode pour obtenir l'image prioritaire
                        const image =
                            root +
                            this.getImagePourCarte(famille, propriete, valeur);
                        cards.push({
                            id: `valeur-${famille}-${propriete}-${valeur}`,
                            type: "valeur",
                            title: propriete, // Mettre le nom de la propriété comme titre
                            content: valeur, // Mettre uniquement la valeur comme contenu
                            color,
                            image, // Image prioritaire ajoutée
                            familyName: famille,
                            propertyName: propriete,
                        });
                    });
                });
            });
        }

        return cards;
    }

    /**
     * Sérialise le jeu en objet JSON standard
     * @returns {Object} Objet JSON représentant le jeu
     */
    toJSON() {
        return {
            id: this.id,
            titre: this.titre,
            description: this.description,
            familles: this.familles,
            proprietes: this.proprietes,
            valeurs: this.valeurs,
            metadata: this.metadata,
        };
    }
}

export default DataJeu;
