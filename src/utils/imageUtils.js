// src/utils/imageUtils.js

/**
 * Utilitaire pour gérer les chemins d'images des cartes
 */

/**
 * Base path pour les images d'illustrations
 * Ce chemin fonctionne en développement et en production
 */
const ILLUSTRATIONS_BASE_PATH = "/assets/illustrations";

/**
 * Fonction utilitaire pour préfixer les chemins d'images avec le chemin de base correct
 * @param {string} path - Chemin relatif de l'image
 * @returns {string} Chemin complet avec préfixe correct
 */
export const getImageUrl = (path) => {
    if (!path) return null;

    // 1. Normaliser le chemin en supprimant les slashes initiaux
    const cleanPath = path.replace(/^\/+/, "");

    // 2. Extraire le préfixe de base sans slashes (jdc-peda)
    const basePath = import.meta.env.BASE_URL.replace(/^\/+/, "").replace(
        /\/+$/,
        ""
    );

    // 3. Vérifier si le chemin contient déjà le préfixe de base
    const hasBasePath = basePath && cleanPath.startsWith(basePath + "/");

    // 4. Construire l'URL finale
    if (import.meta.env.DEV) {
        // En développement, ajouter simplement un slash initial
        return `/${cleanPath}`;
    } else {
        // En production:
        if (hasBasePath) {
            // Si le chemin contient déjà le préfixe, juste ajouter un slash initial
            return `/${cleanPath}`;
        } else {
            // Sinon, ajouter le préfixe
            return `/${basePath}/${cleanPath}`;
        }
    }
};

/**
 * Chemin des images par défaut
 */
const DEFAULT_IMAGES = {
    families: getImageUrl(`${ILLUSTRATIONS_BASE_PATH}/default/families.jpg`),
    properties: getImageUrl(
        `${ILLUSTRATIONS_BASE_PATH}/default/properties.jpg`
    ),
};

/**
 * Obtient le chemin d'une image de famille
 * @param {Object} data - Données du jeu
 * @param {string} familyName - Nom de la famille
 * @returns {string} Chemin de l'image
 */
export const getFamilyImagePath = (data, familyName) => {
    try {
        if (data?.metadata?.images?.families?.[familyName]) {
            return getImageUrl(
                `${ILLUSTRATIONS_BASE_PATH}/${data.metadata.images.families[familyName]}`
            );
        }
    } catch (error) {
        console.warn(
            `Impossible de trouver l'image pour la famille ${familyName}`,
            error
        );
    }

    return DEFAULT_IMAGES.families;
};

/**
 * Obtient le chemin d'une image de propriété
 * @param {Object} data - Données du jeu
 * @param {string} propertyName - Nom de la propriété
 * @returns {string} Chemin de l'image
 */
export const getPropertyImagePath = (data, propertyName) => {
    try {
        if (data?.metadata?.images?.properties?.[propertyName]) {
            return getImageUrl(
                `${ILLUSTRATIONS_BASE_PATH}/${data.metadata.images.properties[propertyName]}`
            );
        }
    } catch (error) {
        console.warn(
            `Impossible de trouver l'image pour la propriété ${propertyName}`,
            error
        );
    }

    return DEFAULT_IMAGES.properties;
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
        console.log(error);
        return false;
    }
};

export default {
    getFamilyImagePath,
    getPropertyImagePath,
    imageExists,
    DEFAULT_IMAGES,
    getImageUrl,
};
