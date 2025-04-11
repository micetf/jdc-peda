// src/utils/emojiDrawing.js
/**
 * Utilitaire pour dessiner des émojis directement dans un PDF
 * en utilisant les primitives de dessin de jsPDF
 */

/**
 * Collection de fonctions pour dessiner différents émojis
 */
const EMOJI_DRAWINGS = {
    // Salut (main qui salue)
    wave: (pdf, x, y, size) => {
        // Cercle pour la main
        pdf.setFillColor(255, 204, 77); // jaune
        pdf.circle(x + size / 2, y + size / 2, size / 2, "F");

        // Contour
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.circle(x + size / 2, y + size / 2, size / 2, "S");

        // Doigts (lignes)
        pdf.setDrawColor(0);
        pdf.setLineWidth(1.5);

        // Pouce
        pdf.line(
            x + size * 0.3,
            y + size * 0.3,
            x + size * 0.1,
            y + size * 0.5
        );

        // Index
        pdf.line(x + size * 0.4, y + size * 0.2, x + size * 0.4, y);

        // Majeur
        pdf.line(
            x + size * 0.5,
            y + size * 0.2,
            x + size * 0.5,
            y - size * 0.1
        );

        // Annulaire
        pdf.line(x + size * 0.6, y + size * 0.2, x + size * 0.6, y);

        // Auriculaire
        pdf.line(
            x + size * 0.7,
            y + size * 0.3,
            x + size * 0.8,
            y + size * 0.1
        );
    },

    // Porte
    door: (pdf, x, y, size) => {
        // Rectangle principal (porte)
        pdf.setFillColor(130, 90, 70); // marron
        pdf.rect(x, y, size * 0.8, size, "F");

        // Contour
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.rect(x, y, size * 0.8, size, "S");

        // Panneau intérieur de la porte
        pdf.setFillColor(216, 191, 178); // beige
        pdf.rect(x + size * 0.1, y + size * 0.1, size * 0.6, size * 0.8, "F");

        // Poignée
        pdf.setFillColor(0);
        pdf.circle(x + size * 0.6, y + size * 0.5, size * 0.05, "F");
    },

    // Fusée
    rocket: (pdf, x, y, size) => {
        // Corps de la fusée
        pdf.setFillColor(231, 59, 54); // rouge
        pdf.triangle(
            x + size / 2,
            y, // sommet
            x,
            y + size, // bas gauche
            x + size,
            y + size // bas droite
        );

        // Fenêtre
        pdf.setFillColor(160, 217, 242); // bleu clair
        pdf.circle(x + size / 2, y + size * 0.4, size * 0.15, "F");

        // Contour de la fenêtre
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.circle(x + size / 2, y + size * 0.4, size * 0.15, "S");

        // Flammes
        pdf.setFillColor(255, 204, 77); // jaune
        pdf.triangle(
            x + size * 0.3,
            y + size, // haut gauche
            x + size * 0.7,
            y + size, // haut droite
            x + size / 2,
            y + size * 1.3 // bas centre
        );
    },

    // Outils (marteau et clé)
    hammer_and_wrench: (pdf, x, y, size) => {
        // Marteau
        pdf.setFillColor(150, 150, 150); // gris

        // Manche
        pdf.rect(x + size * 0.1, y + size * 0.4, size * 0.5, size * 0.2, "F");

        // Tête
        pdf.rect(x + size * 0.6, y + size * 0.3, size * 0.3, size * 0.4, "F");

        // Clé
        pdf.setFillColor(100, 100, 100); // gris foncé

        // Corps de la clé
        pdf.rect(x + size * 0.2, y + size * 0.7, size * 0.6, size * 0.15, "F");

        // Tête de la clé (cercle)
        pdf.circle(x + size * 0.2, y + size * 0.775, size * 0.15, "F");

        // Trou dans la tête
        pdf.setFillColor(255); // blanc
        pdf.circle(x + size * 0.2, y + size * 0.775, size * 0.075, "F");

        // Dents de la clé
        pdf.setFillColor(100, 100, 100); // gris foncé
        pdf.rect(x + size * 0.8, y + size * 0.65, size * 0.1, size * 0.1, "F");
        pdf.rect(x + size * 0.8, y + size * 0.8, size * 0.1, size * 0.1, "F");
    },

    // Ampoule
    bulb: (pdf, x, y, size) => {
        // Partie lumineuse (cercle jaune)
        pdf.setFillColor(255, 215, 100); // jaune
        pdf.circle(x + size / 2, y + size / 3, size * 0.4, "F");

        // Contour
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.circle(x + size / 2, y + size / 3, size * 0.4, "S");

        // Base de l'ampoule
        pdf.setFillColor(200, 200, 200); // gris clair
        pdf.rect(
            x + size / 2 - size * 0.15,
            y + size / 3 + size * 0.4,
            size * 0.3,
            size * 0.3,
            "F"
        );

        // Rayons lumineux
        pdf.setDrawColor(255, 215, 100); // jaune
        pdf.setLineWidth(1);

        // Rayon haut
        pdf.line(x + size / 2, y - size * 0.1, x + size / 2, y);
        // Rayon haut-droit
        pdf.line(x + size * 0.7, y, x + size * 0.6, y + size * 0.1);
        // Rayon haut-gauche
        pdf.line(x + size * 0.3, y, x + size * 0.4, y + size * 0.1);
        // Rayon droit
        pdf.line(x + size * 0.9, y + size / 3, x + size * 0.7, y + size / 3);
        // Rayon gauche
        pdf.line(x + size * 0.1, y + size / 3, x + size * 0.3, y + size / 3);
    },

    // Livres
    books: (pdf, x, y, size) => {
        // Premier livre (rouge)
        pdf.setFillColor(214, 85, 58); // rouge
        pdf.rect(x, y, size * 0.6, size * 0.8, "F");

        // Contour
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.rect(x, y, size * 0.6, size * 0.8, "S");

        // Deuxième livre (bleu)
        pdf.setFillColor(60, 138, 243); // bleu
        pdf.rect(x + size * 0.15, y - size * 0.2, size * 0.6, size * 0.8, "F");

        // Contour
        pdf.rect(x + size * 0.15, y - size * 0.2, size * 0.6, size * 0.8, "S");

        // Troisième livre (jaune)
        pdf.setFillColor(255, 218, 68); // jaune
        pdf.rect(x + size * 0.3, y - size * 0.4, size * 0.6, size * 0.8, "F");

        // Contour
        pdf.rect(x + size * 0.3, y - size * 0.4, size * 0.6, size * 0.8, "S");

        // Lignes sur les livres (pages)
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.2);

        // Pages livre 1
        pdf.line(x + size * 0.1, y, x + size * 0.1, y + size * 0.8);
        pdf.line(x + size * 0.2, y, x + size * 0.2, y + size * 0.8);

        // Pages livre 2
        pdf.line(
            x + size * 0.25,
            y - size * 0.2,
            x + size * 0.25,
            y + size * 0.6
        );
        pdf.line(
            x + size * 0.35,
            y - size * 0.2,
            x + size * 0.35,
            y + size * 0.6
        );

        // Pages livre 3
        pdf.line(
            x + size * 0.4,
            y - size * 0.4,
            x + size * 0.4,
            y + size * 0.4
        );
        pdf.line(
            x + size * 0.5,
            y - size * 0.4,
            x + size * 0.5,
            y + size * 0.4
        );
    },

    // Cible
    dart: (pdf, x, y, size) => {
        // Cercle extérieur (rouge)
        pdf.setFillColor(224, 79, 95); // rouge
        pdf.circle(x + size / 2, y + size / 2, size / 2, "F");

        // Cercle blanc
        pdf.setFillColor(255);
        pdf.circle(x + size / 2, y + size / 2, size * 0.35, "F");

        // Cercle rouge intérieur
        pdf.setFillColor(224, 79, 95);
        pdf.circle(x + size / 2, y + size / 2, size * 0.2, "F");

        // Point central (noir)
        pdf.setFillColor(0);
        pdf.circle(x + size / 2, y + size / 2, size * 0.05, "F");

        // Fléchette
        pdf.setDrawColor(0);
        pdf.setLineWidth(1);
        pdf.setFillColor(92, 145, 59); // vert

        // Tige de la fléchette
        pdf.line(x + size * 0.85, y - size * 0.2, x + size / 2, y + size / 2);

        // Empennage
        pdf.triangle(
            x + size * 0.85,
            y - size * 0.2,
            x + size * 0.9,
            y - size * 0.15,
            x + size * 0.83,
            y - size * 0.1
        );
    },

    // Avertissement
    warning: (pdf, x, y, size) => {
        // Triangle jaune
        pdf.setFillColor(255, 218, 68); // jaune
        pdf.triangle(
            x + size / 2,
            y, // sommet
            x,
            y + size, // bas gauche
            x + size,
            y + size // bas droite
        );

        // Contour
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.triangle(x + size / 2, y, x, y + size, x + size, y + size);

        // Point d'exclamation
        pdf.setFillColor(0);

        // Point du bas
        pdf.circle(x + size / 2, y + size * 0.85, size * 0.05, "F");

        // Barre du haut
        pdf.rect(x + size * 0.45, y + size * 0.3, size * 0.1, size * 0.4, "F");
    },

    // Marque de validation
    white_check_mark: (pdf, x, y, size) => {
        // Cercle bleu
        pdf.setFillColor(77, 166, 255); // bleu
        pdf.circle(x + size / 2, y + size / 2, size / 2, "F");

        // Contour
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.circle(x + size / 2, y + size / 2, size / 2, "S");

        // Coche blanche
        pdf.setDrawColor(255);
        pdf.setLineWidth(size * 0.08);

        // Dessiner la coche
        pdf.lines(
            [
                [size * 0.25, size * 0.15], // de
                [size * 0.1, size * -0.1], // à (diagonale gauche)
                [size * 0.3, size * 0.2], // à (diagonale droite)
            ],
            x + size * 0.25,
            y + size * 0.5
        );
    },

    // Presse-papiers
    clipboard: (pdf, x, y, size) => {
        // Rectangle principal (presse-papiers)
        pdf.setFillColor(232, 237, 238); // gris clair
        pdf.rect(x, y, size * 0.8, size, "F");

        // Contour
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.rect(x, y, size * 0.8, size, "S");

        // Partie supérieure (clip)
        pdf.setFillColor(176, 182, 187); // gris
        pdf.rect(x + size * 0.2, y - size * 0.1, size * 0.4, size * 0.15, "F");

        // Contour du clip
        pdf.rect(x + size * 0.2, y - size * 0.1, size * 0.4, size * 0.15, "S");

        // Lignes de texte simulées
        pdf.setDrawColor(176, 182, 187);
        pdf.setLineWidth(1);
        pdf.line(
            x + size * 0.1,
            y + size * 0.3,
            x + size * 0.7,
            y + size * 0.3
        );
        pdf.line(
            x + size * 0.1,
            y + size * 0.5,
            x + size * 0.7,
            y + size * 0.5
        );
        pdf.line(
            x + size * 0.1,
            y + size * 0.7,
            x + size * 0.7,
            y + size * 0.7
        );
    },

    // Document (page avec texte)
    page_facing_up: (pdf, x, y, size) => {
        // Rectangle blanc (page)
        pdf.setFillColor(242, 242, 242); // blanc-gris très clair
        pdf.rect(x, y, size * 0.8, size, "F");

        // Contour
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.rect(x, y, size * 0.8, size, "S");

        // Coin plié
        pdf.setFillColor(220, 220, 220); // gris clair
        pdf.triangle(
            x + size * 0.8,
            y, // coin haut-droit
            x + size * 0.6,
            y, // milieu haut
            x + size * 0.8,
            y + size * 0.2 // milieu droit
        );

        // Lignes de texte simulées
        pdf.setDrawColor(150, 150, 150);
        pdf.setLineWidth(0.5);

        // Lignes de texte
        pdf.line(
            x + size * 0.1,
            y + size * 0.2,
            x + size * 0.7,
            y + size * 0.2
        );
        pdf.line(
            x + size * 0.1,
            y + size * 0.3,
            x + size * 0.7,
            y + size * 0.3
        );
        pdf.line(
            x + size * 0.1,
            y + size * 0.4,
            x + size * 0.7,
            y + size * 0.4
        );
        pdf.line(
            x + size * 0.1,
            y + size * 0.5,
            x + size * 0.5,
            y + size * 0.5
        );

        // Seconde section
        pdf.line(
            x + size * 0.1,
            y + size * 0.7,
            x + size * 0.7,
            y + size * 0.7
        );
        pdf.line(
            x + size * 0.1,
            y + size * 0.8,
            x + size * 0.7,
            y + size * 0.8
        );
        pdf.line(
            x + size * 0.1,
            y + size * 0.9,
            x + size * 0.5,
            y + size * 0.9
        );
    },
};

/**
 * Dessine un emoji dans un document PDF
 * @param {Object} pdf - Instance de jsPDF
 * @param {string} emojiName - Nom de l'emoji à dessiner
 * @param {number} x - Position X
 * @param {number} y - Position Y
 * @param {number} size - Taille de l'emoji
 */
export const drawEmoji = (pdf, emojiName, x, y, size) => {
    // Vérifier si l'emoji existe dans notre collection
    if (EMOJI_DRAWINGS[emojiName]) {
        EMOJI_DRAWINGS[emojiName](pdf, x, y, size);
    } else {
        // Emoji par défaut (document)
        EMOJI_DRAWINGS.page_facing_up(pdf, x, y, size);
    }
};

export default {
    drawEmoji,
    EMOJI_DRAWINGS,
};
