// src/utils/imageUtils.js

/**
 * Base path pour les images d'illustrations
 * Ce chemin commence depuis la racine publique
 */
export const ILLUSTRATIONS_BASE_PATH = "/assets/illustrations";

/**
 * Fonction utilitaire pour préfixer les chemins d'images avec le chemin de base correct
 * @param {string} relativePath - Chemin relatif de l'image (après illustrations/)
 * @returns {string} Chemin complet avec préfixe correct
 */
export const getImageUrl = (relativePath) => {
    if (!relativePath) return null;

    // Si le chemin commence déjà par un slash ou contient le chemin de base, on l'utilise tel quel
    // Sinon on le préfixe avec le chemin de base
    let fullPath;
    if (
        relativePath.startsWith("/") ||
        relativePath.includes(ILLUSTRATIONS_BASE_PATH.replace(/^\//, ""))
    ) {
        fullPath = relativePath;
    } else {
        fullPath = `${ILLUSTRATIONS_BASE_PATH}/${relativePath}`;
    }

    // Normaliser le chemin (supprime les slashes initiaux dupliqués)
    const cleanPath = fullPath.startsWith("/") ? fullPath : `/${fullPath}`;

    // En développement, le chemin commence directement par /assets
    // En production, il doit être préfixé par BASE_URL (ex: /jdc-peda/assets)
    const basePath =
        import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;

    // Construire le chemin final
    // Si BASE_URL est '/', on évite la duplication de slash
    return `${basePath}${cleanPath}`;
};

/**
 * Vérifie si une image existe
 * @param {string} imagePath - Chemin de l'image
 * @returns {Promise<boolean>} true si l'image existe, false sinon
 */
export const imageExists = async (imagePath) => {
    try {
        const response = await fetch(imagePath, { method: "HEAD" });
        return response.ok;
    } catch (error) {
        console.warn(
            `Erreur lors de la vérification de l'existence de l'image ${imagePath}:`,
            error
        );
        return false;
    }
};

/**
 * Obtient le chemin d'une image de famille
 * @param {Object} data - Données du jeu
 * @param {string} familyName - Nom de la famille
 * @returns {string|null} Chemin de l'image ou null si non disponible
 */
export const getFamilyImagePath = (data, familyName) => {
    try {
        if (data?.metadata?.images?.families?.[familyName]) {
            const relativePath = data.metadata.images.families[familyName];
            return getImageUrl(relativePath);
        }
    } catch (error) {
        console.warn(
            `Impossible de trouver l'image pour la famille ${familyName}:`,
            error
        );
    }
    return null;
};

/**
 * Obtient le chemin d'une image de propriété
 * @param {Object} data - Données du jeu
 * @param {string} propertyName - Nom de la propriété
 * @returns {string|null} Chemin de l'image ou null si non disponible
 */
export const getPropertyImagePath = (data, propertyName) => {
    try {
        if (data?.metadata?.images?.properties?.[propertyName]) {
            const relativePath = data.metadata.images.properties[propertyName];
            return getImageUrl(relativePath);
        }
    } catch (error) {
        console.warn(
            `Impossible de trouver l'image pour la propriété ${propertyName}:`,
            error
        );
    }
    return null;
};

/**
 * Obtient le chemin d'une image de valeur spécifique
 * @param {Object} data - Données du jeu
 * @param {string} familyName - Nom de la famille
 * @param {string} propertyName - Nom de la propriété
 * @param {string|Object} value - Valeur ou objet avec id et texte
 * @returns {string|null} Chemin de l'image ou null si non disponible
 */
export const getValueImagePath = (data, familyName, propertyName, value) => {
    try {
        const valueId = value?.id || value;
        if (
            data?.metadata?.images?.values?.[familyName]?.[propertyName]?.[
                valueId
            ]
        ) {
            const relativePath =
                data.metadata.images.values[familyName][propertyName][valueId];
            return getImageUrl(relativePath);
        }
    } catch (error) {
        console.warn(
            `Impossible de trouver l'image pour la valeur ${value?.id || value}:`,
            error
        );
    }
    return null;
};

// Exporter un objet par défaut pour faciliter l'import
export default {
    ILLUSTRATIONS_BASE_PATH,
    getImageUrl,
    imageExists,
    getFamilyImagePath,
    getPropertyImagePath,
    getValueImagePath,
};
