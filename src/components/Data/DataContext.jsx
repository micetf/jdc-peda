import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { getAllData } from "../../data";
import useLocalStorage from "../../hooks/useLocalStorage";

/**
 * Contexte pour gérer les data de cartes pédagogiques
 * @type {React.Context}
 */
const DataContext = createContext();

/**
 * Hook personnalisé pour utiliser le contexte des data
 * @returns {Object} Contexte des data
 */
export const useData = () => useContext(DataContext);

/**
 * Fournisseur du contexte des data
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Composants enfants
 * @returns {JSX.Element} Fournisseur de contexte
 */
export const DataProvider = ({ children }) => {
    const [dataList] = useState(getAllData());
    const [selectedDataId, setSelectedDataId] = useLocalStorage(
        "selectedDataId",
        dataList[0]?.id || ""
    );
    const [selectedData, setSelectedData] = useState(
        dataList.find((data) => data.id === selectedDataId) || dataList[0]
    );

    useEffect(() => {
        const data = dataList.find((data) => data.id === selectedDataId);
        if (data) {
            setSelectedData(data);
        } else if (dataList.length > 0) {
            setSelectedData(dataList[0]);
            setSelectedDataId(dataList[0].id);
        }
    }, [selectedDataId, dataList, setSelectedDataId]);

    /**
     * Change le data sélectionné
     * @param {string} dataId - ID du data à sélectionner
     */
    const changeData = (dataId) => {
        setSelectedDataId(dataId);
    };

    const value = {
        dataList,
        selectedData,
        changeData,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
