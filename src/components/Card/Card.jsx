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
 * @param {Object} props.style - Styles additionnels
 * @param {Object} props.data - Data contenant les informations du jeu
 * @param {string} props.propertyName - Nom de la propriété (pour les cartes valeur)
 * @returns {JSX.Element} Carte pédagogique
 */
const Card = ({
    type,
    title,
    content,
    color = "#FFFFFF",
    style,
    data,
    propertyName,
}) => {
    const [imageError, setImageError] = useState(false);

    const getTypeStyle = () => {
        switch (type) {
            case "famille":
                return "border-l-4 border-primary";
            case "valeur":
                return "border-l-4 border-info";
            default:
                return "";
        }
    };

    /**
     * Obtient le chemin de l'image en fonction du type de carte
     */
    const getImagePath = () => {
        if (!data || !data.metadata || !data.metadata.images) return null;

        try {
            // Pour les cartes de type famille
            if (type === "famille" && data.metadata.images.families) {
                const imageName = data.metadata.images.families[title];
                if (imageName) {
                    return `/src/assets/illustrations/${imageName}`;
                }
            }
            // Pour les cartes de type valeur
            else if (
                type === "valeur" &&
                propertyName &&
                data.metadata.images.properties
            ) {
                const imageName = data.metadata.images.properties[propertyName];
                if (imageName) {
                    return `/src/assets/illustrations/${imageName}`;
                }
            }
        } catch (error) {
            console.error(
                "Erreur lors de la récupération du chemin de l'image:",
                error
            );
        }

        return null;
    };

    /**
     * Obtient la description de la famille (pour les cartes famille)
     */
    const getFamilyDescription = () => {
        if (type === "famille" && data?.metadata?.chronologie?.[title]) {
            return data.metadata.chronologie[title].description;
        }
        return null;
    };

    /**
     * Formatte le contenu de la carte valeur en supprimant les parenthèses avec le nom de la famille
     */
    const formatValueContent = () => {
        if (type === "valeur") {
            // Supprimer la partie entre parenthèses (nom de la famille)
            return content.replace(/\s*\([^)]*\)/, "");
        }
        return content;
    };

    // Obtenir le chemin de l'image
    const imagePath = getImagePath();
    // Obtenir la description de la famille si disponible
    const familyDescription = getFamilyDescription();
    // Formater le contenu pour les cartes valeur
    const formattedContent = formatValueContent();

    // Combiner les styles
    const cardStyle = {
        ...(style || {}),
        backgroundColor: color,
    };

    // Rendu pour les cartes de type "famille"
    if (type === "famille") {
        return (
            <div
                className={`card ${getTypeStyle()} h-full overflow-hidden flex flex-col`}
                style={cardStyle}
            >
                {/* Titre de la carte - 1/3 de l'espace */}
                <div className="pt-4 pb-2 px-4">
                    <h3 className="text-xl font-bold text-center">{title}</h3>
                </div>

                {/* Image centrée - 1/3 de l'espace */}
                <div className="flex-1 flex items-center justify-center p-2">
                    {imagePath && !imageError ? (
                        <img
                            src={imagePath}
                            alt={`Illustration pour ${title}`}
                            className="max-h-32 max-w-full object-contain transition-opacity duration-200"
                            onError={() => {
                                console.warn(
                                    `Erreur de chargement de l'image: ${imagePath}`
                                );
                                setImageError(true);
                            }}
                            onLoad={() => setImageError(false)}
                        />
                    ) : (
                        <div className="text-center p-4 text-gray-500 italic">
                            {title}
                        </div>
                    )}
                </div>

                {/* Description - 1/3 de l'espace */}
                <div className="p-4 mt-auto border-t border-gray-200">
                    {familyDescription ? (
                        <p className="text-sm">{familyDescription}</p>
                    ) : (
                        <p className="text-sm italic text-gray-500">
                            Pas de description disponible
                        </p>
                    )}
                </div>
            </div>
        );
    }

    // Rendu pour les cartes de type "valeur"
    return (
        <div
            className={`card ${getTypeStyle()} h-full overflow-hidden flex flex-col`}
            style={cardStyle}
        >
            {/* En-tête de la carte avec titre */}
            <div className="card-header">
                <h3 className="text-lg font-bold truncate">{title}</h3>
            </div>

            {/* Image de la carte centrée */}
            <div className="flex-grow flex items-center justify-center py-2">
                {imagePath && !imageError ? (
                    <img
                        src={imagePath}
                        alt={`Illustration pour ${title}`}
                        className="max-h-32 max-w-full object-contain transition-opacity duration-200"
                        onError={() => {
                            console.warn(
                                `Erreur de chargement de l'image: ${imagePath}`
                            );
                            setImageError(true);
                        }}
                        onLoad={() => setImageError(false)}
                    />
                ) : (
                    <div className="text-center p-4 text-gray-500 italic">
                        {title}
                    </div>
                )}
            </div>

            {/* Contenu de la carte */}
            <div className="card-body mt-auto">
                <p className="text-sm">{formattedContent}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    type: PropTypes.oneOf(["famille", "valeur"]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
    propertyName: PropTypes.string,
};

Card.defaultProps = {
    content: "",
    color: "#FFFFFF",
    style: null,
    data: null,
    propertyName: "",
};

export default Card;
