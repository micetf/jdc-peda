import React from "react";
import PropTypes from "prop-types";

/**
 * Composant de sélection réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.id - ID du select
 * @param {Array} props.options - Options du select
 * @param {string} props.value - Valeur sélectionnée
 * @param {Function} props.onChange - Fonction de changement
 * @param {string} props.className - Classes CSS additionnelles
 * @param {Object} props.rest - Autres propriétés HTML
 * @returns {JSX.Element} Select
 */
const Select = ({ id, options, value, onChange, className, ...rest }) => {
    return (
        <select
            id={id}
            value={value}
            onChange={onChange}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 ${className}`}
            {...rest}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

Select.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
};

Select.defaultProps = {
    className: "",
};

export default Select;
