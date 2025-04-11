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
    image, // Nouvelle prop pour le chemin de l'image
    style,
    data, // Conservé pour getFamilyDescription
    // propertyName, // Supprimé
}) => {
    const [imageError, setImageError] = useState(false);
    console.log(image);
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

    /**
     * Formatte le contenu de la carte valeur - Conservé
     */
    const formatValueContent = () => {
        if (type === "valeur") {
            return content.replace(/\s*\([^)]*\)/, "");
        }
        return content;
    };

    const familyDescription = getFamilyDescription();
    const formattedContent = formatValueContent();
    const cardStyle = {
        ...(style || {}),
        backgroundColor: color,
    };

    // Fonction pour rendre l'image si elle existe et n'a pas généré d'erreur
    const renderImage = () => {
        // Vérifier si la prop 'image' contient un chemin valide et si une erreur n'est pas survenue
        if (image && !imageError) {
            return (
                <img
                    // Utilise directement la prop 'image'. Assurez-vous que le chemin est correct
                    // (ex: relatif au dossier public)
                    src={image}
                    alt={`Illustration pour ${title}`} // Alt text descriptif
                    className="w-full h-32 object-cover mb-2 rounded-t-md" // Ajustez les classes Tailwind si besoin
                    // Gestion de l'erreur si l'image ne peut être chargée
                    onError={() => setImageError(true)}
                />
            );
        }
        // Ne rien rendre si pas d'image ou si erreur de chargement
        return null;
    };

    // Rendu pour les cartes de type "famille"
    if (type === "famille") {
        return (
            <div
                className={`bg-white rounded-md shadow-md overflow-hidden ${getTypeStyle()}`}
                style={cardStyle}
            >
                {renderImage()} {/* Affiche l'image si disponible */}
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{title}</h3>
                    {familyDescription ? (
                        <p className="text-xs text-gray-500 italic mb-2">
                            ({familyDescription})
                        </p>
                    ) : null}
                    <p className="text-sm text-gray-700">{formattedContent}</p>
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
            {renderImage()} {/* Affiche l'image si disponible */}
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{formattedContent}</p>
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
    image: PropTypes.string, // Ajout de la prop image (string ou null/undefined)
    style: PropTypes.object,
    data: PropTypes.object, // Conservé pour getFamilyDescription, le rendre optionnel si possible
};

export default Card;
