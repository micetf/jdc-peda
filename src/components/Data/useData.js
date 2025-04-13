// src/components/Data/useData.js
// Ce fichier contient UNIQUEMENT le hook personnalisé
import { useContext } from "react";
import DataContext from "./DataContext";

/**
 * Hook personnalisé pour utiliser le contexte des data
 * @returns {Object} Contexte des data
 */
function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error(
            "useData doit être utilisé à l'intérieur d'un DataProvider"
        );
    }
    return context;
}

export default useData;
