import React from "react";
import useData from "./useData"; // Import mis à jour
import Select from "../UI/Select";

/**
 * Composant de sélection de data
 * @returns {JSX.Element} Sélecteur de data
 */
const DataSelector = () => {
    const { dataList, selectedData, changeData } = useData();

    const handleChange = (e) => {
        changeData(e.target.value);
    };

    const options = dataList.map((data) => ({
        value: data.id,
        label: data.titre,
    }));

    return (
        <div className="mb-6">
            <label
                htmlFor="data-select"
                className="block text-sm font-medium text-gray-700 mb-2"
            >
                Choisir un data
            </label>
            <Select
                id="data-select"
                options={options}
                value={selectedData.id}
                onChange={handleChange}
                className="w-full"
            />
            <p className="mt-2 text-sm text-gray-500">
                {selectedData.description}
            </p>
        </div>
    );
};

export default DataSelector;
