// src/components/Card/CardGrid.jsx
import React, { useMemo } from "react"; // useCallback n'est plus nécessaire ici
import PropTypes from "prop-types";
import Card from "@components/Card/Card"; // Le composant Card modifié

/**
 * Grille de cartes pédagogiques
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.data - Instance de DataJeu contenant les données et méthodes
 * @param {string} props.filter - Filtre à appliquer ('famille', 'valeur', 'tout')
 * @returns {JSX.Element} Grille de cartes
 */
const CardGrid = ({ data, filter }) => {
    // Obtenir directement les cartes formatées depuis l'instance DataJeu
    // useMemo est utilisé pour éviter de recalculer les cartes si data ou filter ne changent pas
    const cards = useMemo(() => {
        if (!data || typeof data.getCards !== "function") {
            console.error(
                "CardGrid: La prop 'data' doit être une instance valide de DataJeu."
            );
            return [];
        }
        try {
            // Appel de la méthode centralisée de DataJeu
            return data.getCards(filter);
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des cartes depuis DataJeu:",
                error
            );
            return [];
        }
    }, [data, filter]); // Dépendances de useMemo

    // Si aucune carte à afficher
    if (!cards || cards.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-8">
                Aucune carte à afficher avec le filtre "{filter}" sélectionné.
            </div>
        );
    }

    // Rendu de la grille
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {cards.map((carte) => (
                <Card
                    key={carte.id}
                    type={carte.type}
                    title={carte.title}
                    content={carte.content}
                    color={carte.color}
                    image={carte.image}
                    data={data}
                />
            ))}
        </div>
    );
};

CardGrid.propTypes = {
    // S'assurer que data est un objet avec la méthode getCards (ou une instance de DataJeu si on utilise instanceof)
    data: PropTypes.shape({
        getCards: PropTypes.func.isRequired,
        // Ajoutez d'autres propriétés/méthodes de DataJeu si nécessaire pour la validation
        metadata: PropTypes.object, // Gardé car Card.jsx l'utilise via la prop data
    }).isRequired,
    filter: PropTypes.oneOf(["tout", "famille", "valeur"]).isRequired,
};

export default CardGrid;
