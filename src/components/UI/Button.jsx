import React from "react";
import PropTypes from "prop-types";

/**
 * Composant de bouton réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.variant - Variante du bouton (primary, secondary, etc.)
 * @param {React.ReactNode} props.children - Contenu du bouton
 * @param {Function} props.onClick - Fonction de clic
 * @param {string} props.className - Classes CSS additionnelles
 * @param {Object} props.rest - Autres propriétés HTML
 * @returns {JSX.Element} Bouton
 */
const Button = ({ variant, children, onClick, className, ...rest }) => {
    const baseClasses = "btn";
    const variantClasses = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        danger: "bg-danger text-white hover:bg-danger/80",
        success: "bg-success text-white hover:bg-success/80",
        info: "bg-info text-white hover:bg-info/80",
        warning: "bg-warning text-white hover:bg-warning/80",
        outline: "bg-transparent border border-gray-300 hover:bg-gray-100",
    };

    const classes = `${baseClasses} ${variantClasses[variant] || ""} ${className || ""}`;

    return (
        <button className={classes} onClick={onClick} {...rest}>
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "danger",
        "success",
        "info",
        "warning",
        "outline",
    ]),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

Button.defaultProps = {
    variant: "primary",
    onClick: () => {},
    className: "",
};

export default Button;
