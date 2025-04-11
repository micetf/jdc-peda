// src/components/PDF/CardPDFGenerator.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useData } from "../Data/DataContext"; // Conserve l'accès aux données globales
import Button from "../UI/Button";
import jsPDF from "jspdf";

/**
 * Composant pour générer un PDF de cartes pédagogiques avec des illustrations
 * @param {Object} props - Propriétés du composant
 * @param {string} props.filter - Filtre à appliquer (famille, valeur, tout)
 * @returns {JSX.Element} Bouton de génération de PDF
 */
const CardPDFGenerator = ({ filter }) => {
    const { selectedData } = useData(); // Récupère l'instance DataJeu modifiée
    const [isGenerating, setIsGenerating] = useState(false);

    // Configuration des cartes - 9 cartes par page (3x3)
    const CARD_WIDTH = 172; // Environ 6 cm
    const CARD_HEIGHT = 254; // Environ 9 cm
    const MARGIN = 15; // Marge intérieure
    const CARDS_PER_ROW = 3;
    const CARDS_PER_PAGE = 9;

    /**
     * Charge une image à partir d'une URL/chemin et la convertit en Data URL base64.
     * IMPORTANT: L'URL/chemin doit être accessible publiquement par le navigateur
     * (ex: dans le dossier /public ou une URL externe).
     * @param {string} url - URL/chemin de l'image
     * @returns {Promise} - Promise contenant les données de l'image (Data URL) et ses dimensions
     */
    const loadImageForPDF = async (url) => {
        // Vérifie si l'URL est valide (non null, non vide)
        if (!url) {
            return Promise.reject(
                new Error("URL d'image non valide ou manquante.")
            );
        }
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous"; // Nécessaire pour charger des images cross-domain dans le canvas
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                try {
                    // Utiliser JPEG pour une meilleure compression, ajuster si besoin (png)
                    const imageData = canvas.toDataURL("image/jpeg", 0.9); // Qualité 0.9
                    resolve({
                        data: imageData, // Data URL (base64)
                        width: img.width,
                        height: img.height,
                    });
                } catch (e) {
                    console.error(
                        "Erreur lors de la conversion de l'image en Data URL:",
                        url,
                        e
                    );
                    reject(e);
                }
            };
            img.onerror = (e) => {
                console.error("Erreur lors du chargement de l'image:", url, e);
                reject(new Error(`Impossible de charger l'image: ${url}`));
            };
            img.src = url; // L'URL/chemin fourni par DataJeu (ex: /img/...)
        });
    };

    // Fonction pour convertir une couleur hexadécimale en RGB (conservée)
    const hexToRgb = (hex) => {
        // Gestion basique si hex est null ou undefined
        if (!hex) return [255, 255, 255]; // Blanc par défaut
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? [
                  parseInt(result[1], 16),
                  parseInt(result[2], 16),
                  parseInt(result[3], 16),
              ]
            : [255, 255, 255]; // Blanc si format invalide
    };

    // SUPPRIMÉ : getCardColor - la couleur vient de carte.color

    /**
     * Dessine une carte individuelle dans le PDF.
     * Utilise les données de l'objet carte fourni par DataJeu.getCards().
     * @param {jsPDF} pdf - Instance jsPDF
     * @param {Object} carte - Objet carte ({ id, type, title, content, color, image, ... })
     * @param {number} x - Position X du coin supérieur gauche
     * @param {number} y - Position Y du coin supérieur gauche
     */
    const drawCard = async (pdf, carte, x, y) => {
        const { type, title, content, color, image } = carte; // Utilise les données de la carte

        // Convertir la couleur hex en RGB
        const rgbColor = hexToRgb(color || "#FFFFFF"); // Utilise la couleur de la carte ou blanc par défaut

        // Fond de la carte
        pdf.setFillColor(rgbColor[0], rgbColor[1], rgbColor[2]);
        pdf.roundedRect(x, y, CARD_WIDTH, CARD_HEIGHT, 8, 8, "F");

        // Contour de la carte
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.roundedRect(x, y, CARD_WIDTH, CARD_HEIGHT, 8, 8, "S");

        // Barre colorée latérale (optionnel, conservé de l'original)
        if (type === "famille") {
            pdf.setFillColor(59, 130, 246); // bleu primaire
            pdf.rect(x, y + 4, 6, CARD_HEIGHT - 8, "F"); // Ajusté pour être à l'intérieur du arrondi
        } else if (type === "valeur") {
            pdf.setFillColor(99, 102, 241); // indigo
            pdf.rect(x, y + 4, 6, CARD_HEIGHT - 8, "F");
        }

        // --- Contenu de la carte ---
        const contentX = x + MARGIN + 6; // Espace après la barre latérale
        const contentWidth = CARD_WIDTH - MARGIN * 2 - 6;
        let currentY = y + MARGIN;

        // 1. Titre
        pdf.setFontSize(14);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        // Centrer le titre dans l'espace disponible
        pdf.text(title, x + CARD_WIDTH / 2, currentY + 10, {
            // Ajuster Y pour centrer verticalement
            align: "center",
            maxWidth: contentWidth,
        });
        currentY += 30; // Espace après le titre

        // 2. Image (si disponible)
        let imageSectionHeight = 0;
        if (image) {
            // Utilise carte.image
            imageSectionHeight = CARD_HEIGHT * 0.45; // Hauteur allouée à l'image
            const maxWidth = contentWidth - MARGIN; // Largeur max pour l'image
            const maxHeight = imageSectionHeight; // Hauteur max pour l'image
            try {
                const imageData = await loadImageForPDF(image); // Charge l'image à partir du chemin/URL fourni

                const ratio = Math.min(
                    maxWidth / imageData.width,
                    maxHeight / imageData.height
                );
                const imgWidth = imageData.width * ratio;
                const imgHeight = imageData.height * ratio;

                // Centrer l'image horizontalement et verticalement dans sa section
                const imgX = contentX + (contentWidth - imgWidth) / 2;
                const imgY = currentY + (maxHeight - imgHeight) / 2;

                pdf.addImage(
                    imageData.data,
                    "JPEG",
                    imgX,
                    imgY,
                    imgWidth,
                    imgHeight
                );
            } catch (error) {
                console.warn(
                    `Impossible d'afficher l'image pour la carte "${title}": ${error.message}`
                );
                // Afficher un texte de remplacement si l'image échoue
                pdf.setFontSize(10);
                pdf.setFont("helvetica", "italic");
                pdf.setTextColor(150, 150, 150);
                pdf.text(
                    "Image non disponible",
                    x + CARD_WIDTH / 2,
                    currentY + maxHeight / 2,
                    { align: "center" }
                );
            }
            currentY += imageSectionHeight + MARGIN / 2; // Espace après l'image
        } else {
            // Si pas d'image, allouer un peu d'espace ou afficher un texte ?
            // Pour l'instant, on ne fait rien de spécial, le contenu viendra après le titre.
            currentY += MARGIN / 2; // Petit espace
        }

        // 3. Contenu / Description
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(0, 0, 0);

        // Calculer l'espace restant pour le contenu
        const remainingHeight = y + CARD_HEIGHT - currentY - MARGIN;
        const textLines = pdf.splitTextToSize(content, contentWidth); // Utilise carte.content

        // Positionner le texte de contenu au centre de l'espace restant
        const lineHeight = 12; // Ajuster si nécessaire
        const totalTextHeight = textLines.length * lineHeight;
        let textStartY = currentY + (remainingHeight - totalTextHeight) / 2;

        // S'assurer que le texte ne commence pas trop haut (empiète sur l'image/titre)
        textStartY = Math.max(currentY, textStartY);

        textLines.forEach((line) => {
            // S'assurer que la ligne ne dépasse pas le bas de la carte
            if (textStartY + lineHeight < y + CARD_HEIGHT - MARGIN / 2) {
                pdf.text(line, x + CARD_WIDTH / 2, textStartY, {
                    // Centrer chaque ligne
                    align: "center",
                    maxWidth: contentWidth, // Limiter la largeur pour le centrage
                });
                textStartY += lineHeight;
            }
        });
    };

    const handleGeneratePDF = async () => {
        if (!selectedData || typeof selectedData.getCards !== "function") {
            alert(
                "Erreur: Les données du jeu ne sont pas chargées correctement."
            );
            return;
        }
        if (isGenerating) return;
        setIsGenerating(true);

        try {
            const pdf = new jsPDF("p", "pt", "a4");

            // --- Page de Titre ---
            pdf.setFontSize(24);
            pdf.setFont("helvetica", "bold");
            pdf.text(
                "Jeu de Cartes Pédagogiques",
                pdf.internal.pageSize.width / 2,
                50,
                { align: "center" }
            );
            pdf.setFontSize(18);
            pdf.text(selectedData.titre, pdf.internal.pageSize.width / 2, 90, {
                align: "center",
            });
            pdf.setFontSize(12);
            pdf.setFont("helvetica", "normal");
            pdf.text(
                selectedData.description,
                pdf.internal.pageSize.width / 2,
                130,
                { align: "center", maxWidth: 400 }
            );
            // --- Récupération et Traitement des Cartes ---
            const cardsToProcess = selectedData.getCards(filter); // Utilise directement la méthode et le filtre

            if (cardsToProcess.length === 0) {
                alert(`Aucune carte à générer pour le filtre "${filter}".`);
                setIsGenerating(false);
                return;
            }

            // --- Pages de Cartes ---
            pdf.addPage();
            pdf.setFontSize(18);
            pdf.setFont("helvetica", "bold");
            // Titre de page plus générique car le filtre est appliqué
            pdf.text(
                `Cartes (${filter})`,
                pdf.internal.pageSize.width / 2,
                30,
                { align: "center" }
            );

            let carteIndex = 0;
            for (const carte of cardsToProcess) {
                const posIndex = carteIndex % CARDS_PER_PAGE;

                // Nouvelle page si nécessaire
                if (posIndex === 0 && carteIndex > 0) {
                    pdf.addPage();
                    pdf.setFontSize(18);
                    pdf.setFont("helvetica", "bold");
                    pdf.text(
                        `Cartes (${filter}) - Suite`,
                        pdf.internal.pageSize.width / 2,
                        30,
                        { align: "center" }
                    );
                }

                const row = Math.floor(posIndex / CARDS_PER_ROW);
                const col = posIndex % CARDS_PER_ROW;

                // Ajuster les marges pour la grille de cartes
                const gridMarginX =
                    (pdf.internal.pageSize.width -
                        (CARDS_PER_ROW * CARD_WIDTH +
                            (CARDS_PER_ROW - 1) * 10)) /
                    2;
                const gridMarginY = 50; // Marge en haut de la page de cartes

                const x = gridMarginX + col * (CARD_WIDTH + 10);
                const y = gridMarginY + row * (CARD_HEIGHT + 10);

                // Dessiner la carte
                await drawCard(pdf, carte, x, y); // Passe l'objet carte complet
                carteIndex++;
            }

            // --- Page de Règles (conservée de l'original) ---
            if (
                selectedData.metadata &&
                selectedData.metadata.regles &&
                selectedData.metadata.regles.length > 0
            ) {
                pdf.addPage();
                pdf.setFontSize(24);
                pdf.setFont("helvetica", "bold");
                pdf.text(
                    "Règles des jeux",
                    pdf.internal.pageSize.width / 2,
                    50,
                    { align: "center" }
                );
                let yRegles = 100;
                selectedData.metadata.regles.forEach((regle, index) => {
                    pdf.setFontSize(18);
                    pdf.setFont("helvetica", "bold");
                    pdf.text(`Jeu ${index + 1}: "${regle.nom}"`, 50, yRegles);
                    yRegles += 30;
                    pdf.setFontSize(12);
                    pdf.setFont("helvetica", "normal");
                    // Utiliser splitTextToSize pour la description des règles
                    const ruleLines = pdf.splitTextToSize(
                        regle.description,
                        pdf.internal.pageSize.width - 100
                    ); // Largeur max
                    pdf.text(ruleLines, 50, yRegles);
                    yRegles += ruleLines.length * 14 + 20; // Ajuster l'espacement
                });
            }

            // --- Page d'Informations sur le Corpus (conservée) ---
            if (selectedData.metadata) {
                pdf.addPage();
                pdf.setFontSize(24);
                pdf.setFont("helvetica", "bold");
                pdf.text(
                    "Informations sur le corpus",
                    pdf.internal.pageSize.width / 2,
                    50,
                    { align: "center" }
                );
                let yInfo = 100;
                pdf.setFontSize(14);
                pdf.setFont("helvetica", "normal");
                if (selectedData.titre) {
                    pdf.text(`Titre: ${selectedData.titre}`, 50, yInfo);
                    yInfo += 20;
                }
                if (selectedData.description) {
                    const descLines = pdf.splitTextToSize(
                        `Description: ${selectedData.description}`,
                        pdf.internal.pageSize.width - 100
                    );
                    pdf.text(descLines, 50, yInfo);
                    yInfo += descLines.length * 14 + 10;
                }
                if (selectedData.metadata.niveau) {
                    pdf.text(
                        `Niveau: ${selectedData.metadata.niveau}`,
                        50,
                        yInfo
                    );
                    yInfo += 20;
                }
                if (
                    selectedData.metadata.objectifs &&
                    selectedData.metadata.objectifs.length > 0
                ) {
                    pdf.text("Objectifs pédagogiques:", 50, yInfo);
                    yInfo += 20;
                    selectedData.metadata.objectifs.forEach((objectif) => {
                        const objLines = pdf.splitTextToSize(
                            `• ${objectif}`,
                            pdf.internal.pageSize.width - 120
                        );
                        pdf.text(objLines, 70, yInfo);
                        yInfo += objLines.length * 14 + 5;
                    });
                }
            }

            // --- Sauvegarde ---
            pdf.save(`jeu-cartes-${selectedData.id}-${filter}.pdf`);
            alert(
                "PDF généré avec succès! Le téléchargement devrait démarrer automatiquement."
            );
        } catch (error) {
            console.error("Erreur lors de la génération du PDF:", error);
            alert(
                `Une erreur est survenue lors de la génération du PDF: ${error.message}`
            );
        } finally {
            setIsGenerating(false);
        }
    };

    // Vérifier si selectedData existe avant de rendre le bouton
    if (!selectedData) {
        return <p>Chargement des données...</p>;
    }

    return (
        <Button
            variant="primary"
            onClick={handleGeneratePDF}
            className="flex items-center justify-center gap-2"
            disabled={isGenerating}
        >
            {isGenerating ? (
                <>
                    <span
                        className="spinner-border spinner-border-sm mr-2"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    Génération en cours...
                </>
            ) : (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm4 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0V10a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Générer le PDF ({filter})
                </>
            )}
        </Button>
    );
};

CardPDFGenerator.propTypes = {
    filter: PropTypes.oneOf(["tout", "famille", "valeur"]),
};

CardPDFGenerator.defaultProps = {
    filter: "tout",
};

export default CardPDFGenerator;
