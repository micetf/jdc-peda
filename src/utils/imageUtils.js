// src/utils/imageUtils.js

/**
 * Utilitaire pour gérer les chemins d'images des cartes
 */

/**
 * Base path pour les images d'illustrations
 */
const ILLUSTRATIONS_BASE_PATH = "/src/assets/illustrations";

/**
 * Chemin des images par défaut
 */
const DEFAULT_IMAGES = {
    families: `${ILLUSTRATIONS_BASE_PATH}/default/families.jpg`,
    properties: `${ILLUSTRATIONS_BASE_PATH}/default/properties.jpg`,
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
            return `${ILLUSTRATIONS_BASE_PATH}/${data.metadata.images.families[familyName]}`;
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
            return `${ILLUSTRATIONS_BASE_PATH}/${data.metadata.images.properties[propertyName]}`;
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
};
