// src/data/index.js
import dataHistory from "./dataHistory";
import dataPedagogy from "./dataPedagogy";
import dataSystemeSolaire from "./dataSystemeSolaire";
import dataClassificationVivant from "./dataClassificationVivant";
/**
 * Liste de tous les jeux de cartes disponibles
 */
const allData = [
    dataHistory,
    dataPedagogy,
    dataSystemeSolaire,
    dataClassificationVivant,
];

/**
 * Récupère tous les jeux de cartes disponibles
 * @returns {Array} Liste des jeux
 */
export const getAllData = () => allData;

/**
 * Récupère un jeu de cartes par son ID
 * @param {string} id - ID du jeu
 * @returns {Object|null} Jeu correspondant ou null
 */
export const getDataById = (id) => {
    return allData.find((data) => data.id === id) || null;
};

export default {
    getAllData,
    getDataById,
};
