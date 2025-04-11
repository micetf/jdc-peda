import dataHistory from "./dataHistory";
import dataPedagogy from "./dataPedagogy";

/**
 * Liste de tous les data disponibles
 */
const allData = [dataHistory, dataPedagogy];

/**
 * Récupère tous les data disponibles
 * @returns {Array} Liste des data
 */
export const getAllData = () => allData;

/**
 * Récupère un data par son ID
 * @param {string} id - ID du data
 * @returns {Object|null} Data correspondant ou null
 */
export const getDataById = (id) => {
    return allData.find((data) => data.id === id) || null;
};

export default {
    getAllData,
    getDataById,
};
