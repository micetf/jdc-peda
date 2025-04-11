// src/components/Card/Card.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import HeroIconDisplay from "../UI/HeroIconDisplay";
import {
    getFamilyImagePath,
    getPropertyImagePath,
} from "../../utils/imageUtils";

/**
 * Composant de carte pédagogique
 * @param {Object} props - Propriétés du composant
 * @param {string} props.type - Type de carte (famille, valeur)
 * @param {string} props.title - Titre de la carte
 * @param {string} props.content - Contenu de la carte
 * @param {string} props.color - Couleur de la carte (hex)
 * @param {string} props.icon - Icône de la carte (nom de l'emoji)
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
    icon,
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
        if (!data) return null;

        try {
            // Pour les cartes de type famille
            if (type === "famille") {
                return getFamilyImagePath(data, title);
            }
            // Pour les cartes de type valeur
            else if (type === "valeur" && propertyName) {
                return getPropertyImagePath(data, propertyName);
            }
        } catch (error) {
            console.error(
                "Erreur lors de la récupération du chemin de l'image:",
                error
            );
        }

        return null;
    };

    // Obtenir le chemin de l'image
    const imagePath = getImagePath();

    // Combiner les styles
    const cardStyle = {
        ...(style || {}),
        backgroundColor: color, // Utilisation de la propriété color
    };

    return (
        <div
            className={`card ${getTypeStyle()} h-full overflow-hidden`}
            style={cardStyle}
        >
            {/* En-tête de la carte avec titre et icône */}
            <div className="card-header flex items-center justify-between">
                <h3 className="text-lg font-bold">{title}</h3>
                {icon && <HeroIconDisplay name={icon} type={type} size={28} />}
            </div>

            {/* Image de la carte si disponible */}
            {imagePath && (
                <div className="h-40 overflow-hidden">
                    {!imageError ? (
                        <img
                            src={imagePath}
                            alt={`Illustration pour ${title}`}
                            className="w-full h-full object-cover"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <img
                            src={
                                type === "famille"
                                    ? "/src/assets/illustrations/default/families.jpg"
                                    : "/src/assets/illustrations/default/properties.jpg"
                            }
                            alt={`Illustration par défaut pour ${title}`}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            )}

            {/* Contenu de la carte */}
            <div className="card-body">
                <p>{content}</p>
            </div>

            {/* Pied de la carte avec type */}
            <div className="card-footer text-xs text-gray-500 italic">
                Type: {type}
            </div>
        </div>
    );
};

Card.propTypes = {
    type: PropTypes.oneOf(["famille", "valeur"]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
    propertyName: PropTypes.string,
};

Card.defaultProps = {
    content: "",
    color: "#FFFFFF",
    icon: null,
    style: null,
    data: null,
    propertyName: "",
};

export default Card;
