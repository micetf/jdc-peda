// src/components/Card/Card.jsx
import React from "react";
import PropTypes from "prop-types";
import EmojiIcon from "../UI/EmojiIcon";

/**
 * Composant de carte pédagogique
 * @param {Object} props - Propriétés du composant
 * @param {string} props.type - Type de carte (famille, valeur)
 * @param {string} props.title - Titre de la carte
 * @param {string} props.content - Contenu de la carte
 * @param {string} props.color - Couleur de la carte (hex)
 * @param {string} props.icon - Icône de la carte (nom de l'emoji)
 * @param {Object} props.style - Styles additionnels
 * @returns {JSX.Element} Carte pédagogique
 */
const Card = ({ type, title, content, color = "#FFFFFF", icon, style }) => {
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

    // Combiner les styles
    const cardStyle = {
        ...(style || {}),
    };

    return (
        <div className={`card ${getTypeStyle()} h-full`} style={cardStyle}>
            <div className="card-header flex items-center justify-between">
                <h3 className="text-lg font-bold">{title}</h3>
                {icon && <EmojiIcon name={icon} size={28} />}
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
    type: PropTypes.oneOf(["famille", "valeur"]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
};

Card.defaultProps = {
    content: "",
    color: "#FFFFFF",
    icon: null,
    style: null,
};

export default Card;
