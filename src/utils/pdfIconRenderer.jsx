// src/utils/pdfIconRenderer.js
import React from "react";
import { renderToString } from "react-dom/server";
import { heroIconMapping } from "./iconMapping";

/**
 * Convertit une icône Heroicon en Data URL PNG
 * @param {string} iconName - Nom du concept
 * @param {string} type - Type d'icône (famille ou valeur)
 * @param {number} size - Taille souhaitée en pixels
 * @returns {Promise<string>} Data URL de l'image PNG
 */
export const heroIconToDataUrl = async (
    iconName,
    type = "default",
    size = 96
) => {
    // Récupérer le composant d'icône
    const IconComponent =
        heroIconMapping[iconName] ||
        (type === "famille"
            ? heroIconMapping.default_famille
            : heroIconMapping.default_valeur);

    // Convertir l'icône en chaîne SVG
    const svgString = renderToString(
        <IconComponent width={size} height={size} color="#000000" />
    );

    // Créer une image à partir du SVG
    return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");

        const img = new Image();
        const blob = new Blob([svgString], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        img.onload = () => {
            ctx.drawImage(img, 0, 0, size, size);
            const dataUrl = canvas.toDataURL("image/png");
            URL.revokeObjectURL(url);
            resolve(dataUrl);
        };

        img.src = url;
    });
};

/**
 * Précharge toutes les icônes du mapping et retourne leurs Data URLs
 * @param {number} size - Taille souhaitée en pixels
 * @returns {Promise<Object>} Objet avec les noms de concepts comme clés et Data URLs comme valeurs
 */
export const preloadAllIcons = async (size = 96) => {
    const icons = {};

    for (const [name, component] of Object.entries(heroIconMapping)) {
        try {
            icons[name] = await heroIconToDataUrl(name, "default", size);
        } catch (error) {
            console.error(
                `Erreur lors du préchargement de l'icône ${name}:`,
                error
            );
            // Continuer malgré l'erreur
        }
    }

    // Ajouter des icônes par défaut si elles n'existent pas déjà
    if (!icons.default_famille) {
        try {
            icons.default_famille = await createDefaultIcon(size, "#3B82F6"); // Bleu
        } catch (error) {
            console.error(
                "Erreur lors de la création de l'icône par défaut pour famille:",
                error
            );
        }
    }

    if (!icons.default_valeur) {
        try {
            icons.default_valeur = await createDefaultIcon(size, "#8B5CF6"); // Violet
        } catch (error) {
            console.error(
                "Erreur lors de la création de l'icône par défaut pour valeur:",
                error
            );
        }
    }

    return icons;
};

/**
 * Crée une icône par défaut simple
 * @param {number} size - Taille de l'icône
 * @param {string} color - Couleur de l'icône (hex)
 * @returns {Promise<string>} Data URL de l'icône par défaut
 */
const createDefaultIcon = (size, color = "#000000") => {
    return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");

        // Dessiner un cercle rempli
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 3, 0, Math.PI * 2);
        ctx.fill();

        // Ajouter un contour
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        ctx.stroke();

        const dataUrl = canvas.toDataURL("image/png");
        resolve(dataUrl);
    });
};

export default {
    heroIconToDataUrl,
    preloadAllIcons,
};
