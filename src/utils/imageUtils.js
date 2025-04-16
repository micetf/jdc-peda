// src/utils/imageUtils.js

/**
 * Base path pour les images d'illustrations
 */
export const ILLUSTRATIONS_BASE_PATH = "/assets/illustrations";

/**
 * Transforme un chemin relatif en URL complète avec le bon préfixe
 * @param {string} relativePath - Chemin relatif de l'image
 * @returns {string|null} - URL complète ou null si chemin invalide
 */
export const getImageUrl = (relativePath) => {
    if (!relativePath) return null;

    // Normaliser le chemin
    let fullPath;
    if (
        relativePath.startsWith("/") ||
        relativePath.includes(ILLUSTRATIONS_BASE_PATH.replace(/^\//, ""))
    ) {
        fullPath = relativePath;
    } else {
        fullPath = `${ILLUSTRATIONS_BASE_PATH}/${relativePath}`;
    }

    // Nettoyer le chemin
    const cleanPath = fullPath.startsWith("/") ? fullPath : `/${fullPath}`;

    // Ajouter BASE_URL pour le déploiement
    const basePath =
        import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;

    return `${basePath}${cleanPath}`;
};

/**
 * Vérifie si une image existe
 * @param {string} imagePath - Chemin de l'image à vérifier
 * @returns {Promise<boolean>} - true si l'image existe
 */
export const imageExists = async (imagePath) => {
    try {
        const response = await fetch(imagePath, { method: "HEAD" });
        return response.ok;
    } catch (error) {
        console.warn(
            `Erreur lors de la vérification de l'image ${imagePath}:`,
            error
        );
        return false;
    }
};

export default {
    ILLUSTRATIONS_BASE_PATH,
    getImageUrl,
    imageExists,
};
