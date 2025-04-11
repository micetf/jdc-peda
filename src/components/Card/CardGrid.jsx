import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

/**
 * Grille de cartes pédagogiques
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.data - Data de données
 * @param {string} props.filter - Filtre à appliquer (famille, valeur, tout)
 * @returns {JSX.Element} Grille de cartes
 */
const CardGrid = ({ data, filter }) => {
    // Fonction pour obtenir la couleur d'une carte
    const getCardColor = (type, name) => {
        // Couleurs par défaut
        const DEFAULT_COLORS = {
            famille: "#FFFDE7", // Jaune très clair
            valeur: "#F3E5F5", // Violet très clair
        };

        // Si le corpus a des couleurs spécifiques, les utiliser
        if (data.metadata && data.metadata.colors) {
            if (data.metadata.colors[name]) {
                return data.metadata.colors[name];
            } else if (data.metadata.colors[type]) {
                return data.metadata.colors[type];
            }
        }

        return DEFAULT_COLORS[type] || "#FFFFFF";
    };

    // Fonction pour obtenir l'emoji d'une carte
    const getCardEmoji = (type, name) => {
        // Si le corpus a des emojis spécifiques, les utiliser
        if (data.metadata && data.metadata.emojis) {
            if (data.metadata.emojis[name]) {
                return data.metadata.emojis[name];
            }
        }

        // Emojis par défaut selon le type
        const defaultEmojis = {
            famille: "books",
            valeur: "clipboard",
        };

        return defaultEmojis[type] || "page_facing_up";
    };

    const cards = useMemo(() => {
        const result = [];

        // Cartes de familles
        if (filter === "tout" || filter === "famille") {
            data.familles.forEach((famille) => {
                const colorHex = getCardColor("famille", famille);

                result.push({
                    id: `famille-${famille}`,
                    type: "famille",
                    title: famille,
                    content: `Famille: ${famille}`,
                    color: colorHex,
                    icon: getCardEmoji("famille", famille),
                });
            });
        }

        // Nous ne générons plus de cartes de propriétés

        // Cartes de valeurs
        if (filter === "tout" || filter === "valeur") {
            data.familles.forEach((famille) => {
                data.proprietes.forEach((propriete) => {
                    const valeurs = data.valeurs[famille][propriete];
                    valeurs.forEach((valeur) => {
                        const colorHex = getCardColor("valeur", propriete);

                        result.push({
                            id: `valeur-${famille}-${propriete}-${valeur}`,
                            type: "valeur",
                            title: valeur,
                            content: `Valeur de "${propriete}" pour la famille "${famille}"`,
                            color: colorHex,
                            icon: getCardEmoji("valeur", propriete),
                        });
                    });
                });
            });
        }

        return result;
    }, [data, filter]);

    // Convertir les couleurs hex en classes Tailwind ou en styles inline
    const getColorStyle = (hexColor) => {
        return { backgroundColor: hexColor };
    };

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
                    style={getColorStyle(card.color)}
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
    filter: PropTypes.oneOf(["tout", "famille", "valeur"]),
};

CardGrid.defaultProps = {
    filter: "tout",
};

export default CardGrid;
