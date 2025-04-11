// src/components/Card/CardGrid.jsx
import React, { useMemo, useCallback } from "react";
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
    // Fonction pour obtenir la couleur d'une carte, mémorisée avec useCallback
    const getCardColor = useCallback(
        (type, name) => {
            // Couleurs par défaut
            const DEFAULT_COLORS = {
                famille: "#FFFDE7", // Jaune très clair
                propriete: "#E3F2FD", // Bleu très clair
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
        },
        [data]
    );

    // Fonction pour formater le contenu de la carte selon son type
    const formatCardContent = useCallback(
        (type, famille, propriete, valeur) => {
            if (type === "famille") {
                // Inclure des informations chronologiques si disponibles
                if (data.metadata?.chronologie?.[famille]) {
                    const chrono = data.metadata.chronologie[famille];
                    return `${famille} (${chrono.debut} à ${chrono.fin})`;
                }
                return `Famille: ${famille}`;
            } else {
                return `"${valeur}" est une valeur de "${propriete}" pour la famille "${famille}"`;
            }
        },
        [data]
    );

    // Générer les cartes selon le filtre
    const cards = useMemo(() => {
        const result = [];

        // Cartes de familles
        if (filter === "tout" || filter === "famille") {
            data.familles.forEach((famille) => {
                const colorHex = getCardColor("famille", famille);
                const content = formatCardContent("famille", famille);

                result.push({
                    id: `famille-${famille}`,
                    type: "famille",
                    title: famille,
                    content: content,
                    color: colorHex,
                });
            });
        }

        // Cartes de valeurs
        if (filter === "tout" || filter === "valeur") {
            data.familles.forEach((famille) => {
                data.proprietes.forEach((propriete) => {
                    const valeurs = data.valeurs[famille][propriete];
                    valeurs.forEach((valeur) => {
                        const colorHex = getCardColor("valeur", propriete);
                        const content = formatCardContent(
                            "valeur",
                            famille,
                            propriete,
                            valeur
                        );

                        result.push({
                            id: `valeur-${famille}-${propriete}-${valeur}`,
                            type: "valeur",
                            title: valeur,
                            content: content,
                            color: colorHex,
                            propertyName: propriete,
                        });
                    });
                });
            });
        }

        return result;
    }, [data, filter, getCardColor, formatCardContent]);

    // Si aucune carte à afficher
    if (cards.length === 0) {
        return (
            <div className="py-8 text-center">
                <p className="text-gray-500">
                    Aucune carte à afficher avec le filtre sélectionné.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    type={card.type}
                    title={card.title}
                    content={card.content}
                    color={card.color}
                    style={null}
                    data={data}
                    propertyName={card.propertyName}
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
        metadata: PropTypes.object,
    }).isRequired,
    filter: PropTypes.oneOf(["tout", "famille", "valeur"]),
};

CardGrid.defaultProps = {
    filter: "tout",
};

export default CardGrid;
