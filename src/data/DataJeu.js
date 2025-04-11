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
     * @param {Object} options.metadata - Métadonnées du jeu
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
            images: options.metadata.images || { families: {}, properties: {} },
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
            throw new Error(`Famille "${famille}" non trouvée`);
        }

        if (!this.proprietes.includes(propriete)) {
            throw new Error(`Propriété "${propriete}" non trouvée`);
        }

        return this.valeurs[famille][propriete] || [];
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
     * Obtient le chemin de l'image d'une famille
     * @param {string} famille - Nom de la famille
     * @returns {string|null} Chemin de l'image ou null si non disponible
     */
    getImageFamille(famille) {
        return this.metadata.images.families[famille] || null;
    }

    /**
     * Obtient le chemin de l'image d'une propriété
     * @param {string} propriete - Nom de la propriété
     * @returns {string|null} Chemin de l'image ou null si non disponible
     */
    getImagePropriete(propriete) {
        return this.metadata.images.properties[propriete] || null;
    }

    /**
     * Obtient la couleur d'une famille ou d'une propriété
     * @param {string} type - Type (famille ou propriété)
     * @param {string} nom - Nom de la famille ou de la propriété
     * @returns {string} Couleur au format hexadécimal
     */
    getColor(type, nom) {
        // Couleurs par défaut
        const defaultColors = {
            famille: "#FFFDE7", // Jaune très clair
            propriete: "#E3F2FD", // Bleu très clair
            valeur: "#F3E5F5", // Violet très clair
        };

        if (this.metadata.colors[nom]) {
            return this.metadata.colors[nom];
        }

        if (this.metadata.colors[type]) {
            return this.metadata.colors[type];
        }

        return defaultColors[type] || "#FFFFFF";
    }

    /**
     * Obtient les familles triées par ordre chronologique
     * @returns {string[]} Liste des familles triées
     */
    getFamillesTriees() {
        // Trier les familles selon la chronologie si elle existe
        if (Object.keys(this.metadata.chronologie).length > 0) {
            return [...this.familles].sort((a, b) => {
                const chronoA = this.metadata.chronologie[a];
                const chronoB = this.metadata.chronologie[b];

                // Si les deux familles ont une chronologie, comparer les valeurs
                if (chronoA && chronoB) {
                    // Si la chronologie contient un champ ordre, l'utiliser
                    if (
                        typeof chronoA.ordre === "number" &&
                        typeof chronoB.ordre === "number"
                    ) {
                        return chronoA.ordre - chronoB.ordre;
                    }

                    // Sinon, comparer les dates de début
                    const debutA =
                        typeof chronoA.debut === "string" ? chronoA.debut : "";
                    const debutB =
                        typeof chronoB.debut === "string" ? chronoB.debut : "";
                    return debutA.localeCompare(debutB);
                }

                // Si une seule famille a une chronologie, la mettre en premier
                if (chronoA) return -1;
                if (chronoB) return 1;

                // Sinon, garder l'ordre d'origine
                return this.familles.indexOf(a) - this.familles.indexOf(b);
            });
        }

        // Si pas de chronologie, retourner l'ordre d'origine
        return [...this.familles];
    }

    /**
     * Obtient toutes les cartes du jeu selon le filtre spécifié
     * @param {string} filter - Filtre à appliquer (tout, famille, valeur)
     * @returns {Object[]} Liste des cartes
     */
    getCards(filter = "tout") {
        const cards = [];

        // Cartes de familles
        if (filter === "tout" || filter === "famille") {
            this.familles.forEach((famille) => {
                const color = this.getColor("famille", famille);
                const content = this.getContexte(famille) || famille;

                cards.push({
                    id: `famille-${famille}`,
                    type: "famille",
                    title: famille,
                    content,
                    color,
                    familyName: famille,
                });
            });
        }

        // Cartes de valeurs
        if (filter === "tout" || filter === "valeur") {
            this.familles.forEach((famille) => {
                this.proprietes.forEach((propriete) => {
                    const valeurs = this.getValeurs(famille, propriete);
                    const color = this.getColor("valeur", propriete);

                    valeurs.forEach((valeur) => {
                        cards.push({
                            id: `valeur-${famille}-${propriete}-${valeur}`,
                            type: "valeur",
                            title: valeur,
                            content: `Valeur de "${propriete}" pour la famille "${famille}"`,
                            color,
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
     * Sérialise le jeu en objet JSON
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
