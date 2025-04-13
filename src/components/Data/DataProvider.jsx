// src/components/Data/DataProvider.jsx
// Ce fichier contient UNIQUEMENT le composant Provider
import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { getAllData } from "../../data";
import useLocalStorage from "../../hooks/useLocalStorage";
import DataContext from "./DataContext";

/**
 * Fournisseur du contexte des data
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Composants enfants
 * @returns {JSX.Element} Fournisseur de contexte
 */
function DataProvider({ children }) {
    // Initialiser avec un callback pour performance
    const [dataList] = useState(() => getAllData());

    const [selectedDataId, setSelectedDataId] = useLocalStorage(
        "selectedDataId",
        dataList[0]?.id || ""
    );

    const [selectedData, setSelectedData] = useState(
        () => dataList.find((data) => data.id === selectedDataId) || dataList[0]
    );

    // Mémoriser la fonction avec useCallback
    const changeData = useCallback(
        (dataId) => {
            setSelectedDataId(dataId);
        },
        [setSelectedDataId]
    );

    // Gestion de la sélection de données
    useEffect(() => {
        const data = dataList.find((data) => data.id === selectedDataId);
        if (data) {
            setSelectedData(data);
        } else if (dataList.length > 0) {
            setSelectedData(dataList[0]);
            setSelectedDataId(dataList[0].id);
        }
    }, [selectedDataId, dataList, setSelectedDataId]);

    // Mémoriser la valeur du contexte
    const contextValue = useMemo(
        () => ({
            dataList,
            selectedData,
            changeData,
        }),
        [dataList, selectedData, changeData]
    );

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DataProvider;
