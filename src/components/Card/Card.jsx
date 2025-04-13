// src/components/Card/Card.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Composant de carte pédagogique
 * @param {Object} props - Propriétés du composant
 * @param {string} props.type - Type de carte (famille, valeur)
 * @param {string} props.title - Titre de la carte
 * @param {string} props.content - Contenu de la carte
 * @param {string} props.color - Couleur de la carte (hex)
 * @param {string|null} props.image - Chemin vers l'image prioritaire de la carte (ou null)
 * @param {Object} props.style - Styles additionnels
 * @param {Object} props.data - Instance DataJeu (utilisé pour getFamilyDescription)
 * @returns {JSX.Element} Carte pédagogique
 */
const Card = ({
    type,
    title,
    content,
    color = "#FFFFFF",
    image,
    style,
    data,
}) => {
    const [imageError, setImageError] = useState(false);

    const getTypeStyle = () => {
        switch (type) {
            case "famille":
                return "border-l-4 border-primary"; // Assurez-vous que 'border-primary' est défini dans Tailwind
            case "valeur":
                return "border-l-4 border-info"; // Assurez-vous que 'border-info' est défini dans Tailwind
            default:
                return "";
        }
    };

    /**
     * Obtient la description de la famille (pour les cartes famille) - Conservé
     */
    const getFamilyDescription = () => {
        // Vérifie si 'data' existe avant d'essayer d'y accéder
        if (type === "famille" && data?.metadata?.chronologie?.[title]) {
            return data.metadata.chronologie[title].description;
        }
        return null;
    };

    const familyDescription = getFamilyDescription();
    const cardStyle = {
        ...(style || {}),
        backgroundColor: color,
    };

    // Fonction pour rendre l'image si elle existe et n'a pas généré d'erreur
    const renderImage = () => {
        if (image && !imageError) {
            return (
                <div className="px-2">
                    <img
                        src={image}
                        alt={`Illustration pour ${title}`}
                        className="w-full h-40 object-cover rounded-md mx-auto"
                        onError={() => setImageError(true)}
                    />
                </div>
            );
        }
        return null;
    };

    // Rendu pour les cartes de type "famille"
    if (type === "famille") {
        return (
            <div
                className={`bg-white rounded-md shadow-md overflow-hidden ${getTypeStyle()}`}
                style={cardStyle}
            >
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-3 text-center">
                        {title}
                    </h3>
                </div>
                {renderImage()}
                <div className="p-4">
                    {familyDescription ? (
                        <p className="text-sm text-gray-700 text-left">
                            {familyDescription}
                        </p>
                    ) : null}
                </div>
            </div>
        );
    }

    // Rendu pour les cartes de type "valeur"
    return (
        <div
            className={`bg-white rounded-md shadow-md overflow-hidden ${getTypeStyle()}`}
            style={cardStyle}
        >
            {renderImage()}
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{content}</p>
            </div>
        </div>
    );
};

// Mise à jour des PropTypes
Card.propTypes = {
    type: PropTypes.oneOf(["famille", "valeur"]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    color: PropTypes.string,
    image: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
};

export default Card;
