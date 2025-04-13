import React, { useState } from "react";
import DataSelector from "../components/Data/DataSelector";
import CardGrid from "../components/Card/CardGrid";
import CardPDFGenerator from "../components/Card/CardPDFGenerator";
import Button from "../components/UI/Button";
import Select from "../components/UI/Select";
import useData from "../components/Data/useData";

/**
 * Page de génération de cartes
 * @returns {JSX.Element} Page de génération
 */
const CardGenerator = () => {
    const { selectedData } = useData();
    const [filter, setFilter] = useState("tout");
    const [showPreview, setShowPreview] = useState(false);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filterOptions = [
        { value: "tout", label: "Toutes les cartes" },
        { value: "famille", label: "Cartes Famille" },
        { value: "valeur", label: "Cartes Valeur" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">
                Générateur de Jeux de Cartes
            </h1>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Configuration du jeu</h2>

                <DataSelector />

                <div className="mb-6">
                    <label
                        htmlFor="filter-select"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Type de cartes à afficher
                    </label>
                    <Select
                        id="filter-select"
                        options={filterOptions}
                        value={filter}
                        onChange={handleFilterChange}
                        className="w-full"
                    />
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <Button
                        variant="secondary"
                        onClick={() => setShowPreview(!showPreview)}
                        className="w-full sm:w-auto"
                    >
                        {showPreview ? "Masquer l'aperçu" : "Afficher l'aperçu"}
                    </Button>

                    <CardPDFGenerator filter={filter} />
                </div>
            </div>

            {showPreview && (
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Aperçu des cartes
                    </h2>
                    <CardGrid data={selectedData} filter={filter} />
                </div>
            )}
        </div>
    );
};

export default CardGenerator;
