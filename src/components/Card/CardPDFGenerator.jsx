// src/components/Card/CardPDFGenerator.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import useData from "@components/Data/useData";
import Button from "@components/UI/Button";
import CardPDFService from "@services/pdf/cardPDFService";

/**
 * Composant pour générer un PDF de cartes pédagogiques
 * @param {Object} props Props du composant
 * @param {string} props.filter Filtre à appliquer
 * @returns {JSX.Element} Bouton de génération
 */
const CardPDFGenerator = ({ filter }) => {
    const { selectedData } = useData();
    const [isGenerating, setIsGenerating] = useState(false);

    // Instance du service PDF
    const pdfService = new CardPDFService();

    /**
     * Gère la génération du PDF
     */
    const handleGeneratePDF = async () => {
        if (!selectedData || typeof selectedData.getCards !== "function") {
            alert(
                "Erreur: Les données du jeu ne sont pas chargées correctement."
            );
            return;
        }

        if (isGenerating) return;
        setIsGenerating(true);

        try {
            // Utiliser le service pour générer le PDF
            const pdf = await pdfService.generatePDF(selectedData, filter);

            // Sauvegarder le PDF
            pdf.save(`jeu-cartes-${selectedData.id}-${filter}.pdf`);

            alert(
                "PDF généré avec succès! Le téléchargement devrait démarrer automatiquement."
            );
        } catch (error) {
            console.error("Erreur lors de la génération du PDF:", error);
            alert(
                `Une erreur est survenue lors de la génération du PDF: ${error.message}`
            );
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <Button
            variant="primary"
            onClick={handleGeneratePDF}
            className="flex items-center justify-center gap-2"
            disabled={isGenerating}
        >
            {isGenerating ? (
                <>
                    <span
                        className="spinner-border spinner-border-sm mr-2"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    Génération en cours...
                </>
            ) : (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm4 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0V10a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Générer le PDF ({filter})
                </>
            )}
        </Button>
    );
};

CardPDFGenerator.propTypes = {
    filter: PropTypes.oneOf(["tout", "famille", "valeur"]),
};

CardPDFGenerator.defaultProps = {
    filter: "tout",
};

export default CardPDFGenerator;
