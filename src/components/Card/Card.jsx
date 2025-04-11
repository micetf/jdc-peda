import React from "react";
import PropTypes from "prop-types";

/**
 * Composant de carte pédagogique
 * @param {Object} props - Propriétés du composant
 * @param {string} props.type - Type de carte (famille, propriété, valeur)
 * @param {string} props.title - Titre de la carte
 * @param {string} props.content - Contenu de la carte
 * @param {string} props.color - Couleur de la carte
 * @param {string} props.icon - Icône de la carte
 * @returns {JSX.Element} Carte pédagogique
 */
const Card = ({ type, title, content, color = "bg-white", icon }) => {
    const getTypeStyle = () => {
        switch (type) {
            case "famille":
                return "border-l-4 border-primary";
            case "propriete":
                return "border-l-4 border-secondary";
            case "valeur":
                return "border-l-4 border-info";
            default:
                return "";
        }
    };

    return (
        <div className={`card ${getTypeStyle()} ${color} h-full`}>
            <div className="card-header flex items-center justify-between">
                <h3 className="text-lg font-bold">{title}</h3>
                {icon && <span className="text-2xl">{icon}</span>}
            </div>
            <div className="card-body">
                <p>{content}</p>
            </div>
            <div className="card-footer text-xs text-gray-500 italic">
                Type: {type}
            </div>
        </div>
    );
};

Card.propTypes = {
    type: PropTypes.oneOf(["famille", "propriete", "valeur"]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
};

Card.defaultProps = {
    content: "",
    color: "bg-white",
    icon: null,
};

export default Card;
