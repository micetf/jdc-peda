// src/components/UI/HeroIconDisplay.jsx
import React from "react";
import PropTypes from "prop-types";
import { getHeroIcon } from "../../utils/iconMapping";

/**
 * Composant pour afficher une icône Heroicon
 * @param {Object} props - Propriétés du composant
 * @param {string} props.name - Nom du concept à représenter
 * @param {string} props.type - Type d'icône (famille ou valeur)
 * @param {number} props.size - Taille de l'icône en pixels
 * @param {string} props.className - Classes CSS additionnelles
 * @returns {JSX.Element} Icône Heroicon
 */
const HeroIconDisplay = ({
    name,
    type = "default",
    size = 24,
    className = "",
}) => {
    const IconComponent = getHeroIcon(name, type);

    return (
        <span
            className={`inline-block ${className}`}
            style={{ width: `${size}px`, height: `${size}px` }}
            title={`Icône: ${name}`}
        >
            <IconComponent width={size} height={size} />
        </span>
    );
};

HeroIconDisplay.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["famille", "valeur", "default"]),
    size: PropTypes.number,
    className: PropTypes.string,
};

export default HeroIconDisplay;
