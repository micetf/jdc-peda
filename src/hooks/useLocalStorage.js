import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour utiliser le localStorage
 * @param {string} key - Clé de stockage
 * @param {*} initialValue - Valeur initiale
 * @returns {Array} [storedValue, setValue] - Valeur stockée et fonction de mise à jour
 */
const useLocalStorage = (key, initialValue) => {
    // Fonction d'état qui récupère la valeur du localStorage ou utilise la valeur initiale
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(
                `Erreur lors de la récupération de ${key} depuis localStorage:`,
                error
            );
            return initialValue;
        }
    });

    // Mise à jour du localStorage lorsque la valeur change
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(
                `Erreur lors de l'enregistrement de ${key} dans localStorage:`,
                error
            );
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};

export default useLocalStorage;
