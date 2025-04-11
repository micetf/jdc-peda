import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

/**
 * Grille de cartes pédagogiques
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.data - Data de données
 * @param {string} props.filter - Filtre à appliquer (famille, propriété, tout)
 * @returns {JSX.Element} Grille de cartes
 */
const CardGrid = ({ data, filter }) => {
    const cards = useMemo(() => {
        const result = [];

        // Cartes de familles
        if (filter === "tout" || filter === "famille") {
            data.familles.forEach((famille) => {
                result.push({
                    id: `famille-${famille}`,
                    type: "famille",
                    title: famille,
                    content: `Famille: ${famille}`,
                    color: "bg-blue-50",
                });
            });
        }

        // Cartes de propriétés
        if (filter === "tout" || filter === "propriete") {
            data.proprietes.forEach((propriete) => {
                result.push({
                    id: `propriete-${propriete}`,
                    type: "propriete",
                    title: propriete,
                    content: `Propriété: ${propriete}`,
                    color: "bg-yellow-50",
                });
            });
        }

        // Cartes de valeurs
        if (filter === "tout" || filter === "valeur") {
            data.familles.forEach((famille) => {
                data.proprietes.forEach((propriete) => {
                    const valeurs = data.valeurs[famille][propriete];
                    valeurs.forEach((valeur) => {
                        result.push({
                            id: `valeur-${famille}-${propriete}-${valeur}`,
                            type: "valeur",
                            title: valeur,
                            content: `Valeur de "${propriete}" pour la famille "${famille}"`,
                            color: "bg-purple-50",
                        });
                    });
                });
            });
        }

        return result;
    }, [data, filter]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    type={card.type}
                    title={card.title}
                    content={card.content}
                    color={card.color}
                    icon={card.icon}
                />
            ))}
        </div>
    );
};

CardGrid.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        titre: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        familles: PropTypes.arrayOf(PropTypes.string).isRequired,
        proprietes: PropTypes.arrayOf(PropTypes.string).isRequired,
        valeurs: PropTypes.object.isRequired,
    }).isRequired,
    filter: PropTypes.oneOf(["tout", "famille", "propriete", "valeur"]),
};

CardGrid.defaultProps = {
    filter: "tout",
};

export default CardGrid;
