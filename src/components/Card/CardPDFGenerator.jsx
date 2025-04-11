// src/components/Card/CardPDFGenerator.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useData } from "../Data/DataContext";
import Button from "../UI/Button";
import jsPDF from "jspdf";

/**
 * Composant pour générer un PDF de cartes pédagogiques avec des illustrations
 * @param {Object} props - Propriétés du composant
 * @param {string} props.filter - Filtre à appliquer (famille, valeur, tout)
 * @returns {JSX.Element} Bouton de génération de PDF
 */
const CardPDFGenerator = ({ filter }) => {
    const { selectedData } = useData();
    const [isGenerating, setIsGenerating] = useState(false);

    // Configuration des cartes - 9 cartes par page (3x3)
    const CARD_WIDTH = 172; // Environ 6 cm
    const CARD_HEIGHT = 254; // Environ 9 cm
    const MARGIN = 15; // Marge intérieure
    const CARDS_PER_ROW = 3; // 3 colonnes
    const CARDS_PER_PAGE = 9; // 9 cartes par page

    /**
     * Charge une image à partir d'une URL et la convertit en format utilisable par jsPDF
     * @param {string} url - URL de l'image à charger
     * @returns {Promise<object>} - Promise contenant les données de l'image et ses dimensions
     */
    const loadImageForPDF = async (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                try {
                    const imageData = canvas.toDataURL("image/jpeg");
                    resolve({
                        data: imageData,
                        width: img.width,
                        height: img.height,
                    });
                } catch (e) {
                    console.error(
                        "Erreur lors de la conversion de l'image:",
                        e
                    );
                    reject(e);
                }
            };
            img.onerror = (e) => {
                console.error("Erreur lors du chargement de l'image:", url, e);
                reject(e);
            };
            img.src = url;
        });
    };

    // Fonction pour obtenir le nom de la propriété formaté
    const formatPropertyName = (propertyName) => {
        // Si le corpus a un mapping spécifique, l'utiliser
        if (
            selectedData.metadata &&
            selectedData.metadata.formatMap &&
            selectedData.metadata.formatMap[propertyName]
        ) {
            return selectedData.metadata.formatMap[propertyName];
        }

        // Sinon, formater le nom de manière générique
        return propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
    };

    // Fonction pour convertir une couleur hexadécimale en RGB
    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? [
                  parseInt(result[1], 16),
                  parseInt(result[2], 16),
                  parseInt(result[3], 16),
              ]
            : [255, 255, 255];
    };

    // Fonction pour obtenir la couleur d'une carte
    const getCardColor = (type, name) => {
        // Couleurs par défaut
        const DEFAULT_COLORS = {
            famille: "#FFFDE7", // Jaune très clair
            propriete: "#E3F2FD", // Bleu très clair
            valeur: "#F3E5F5", // Violet très clair
        };

        // Si le corpus a des couleurs spécifiques, les utiliser
        if (selectedData.metadata && selectedData.metadata.colors) {
            if (selectedData.metadata.colors[name]) {
                return selectedData.metadata.colors[name];
            } else if (selectedData.metadata.colors[type]) {
                return selectedData.metadata.colors[type];
            }
        }

        return DEFAULT_COLORS[type] || "#FFFFFF";
    };

    // Fonction modifiée pour dessiner une carte avec une disposition verticale équilibrée
    const drawCard = async (
        pdf,
        title,
        content,
        color,
        x,
        y,
        type,
        famille = null,
        propriete = null
    ) => {
        // Convertir la couleur hex en RGB
        const rgbColor = hexToRgb(color);

        // Fond de la carte
        pdf.setFillColor(rgbColor[0], rgbColor[1], rgbColor[2]);
        pdf.roundedRect(x, y, CARD_WIDTH, CARD_HEIGHT, 8, 8, "F");

        // Contour de la carte
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.roundedRect(x, y, CARD_WIDTH, CARD_HEIGHT, 8, 8, "S");

        // Barre colorée en fonction du type (pour différencier visuellement les types)
        if (type === "famille") {
            pdf.setFillColor(59, 130, 246); // bleu primaire
            pdf.rect(x, y, 6, CARD_HEIGHT, "F");
        } else if (type === "valeur") {
            pdf.setFillColor(99, 102, 241); // indigo
            pdf.rect(x, y, 6, CARD_HEIGHT, "F");
        }

        // Pour les cartes de type "famille", diviser la carte en trois sections équitablement espacées
        if (type === "famille") {
            // 1. TITRE (section supérieure - 1/3 de la carte)
            const titleY = y + MARGIN + 15;
            pdf.setFontSize(14);
            pdf.setFont("helvetica", "bold");
            pdf.setTextColor(0, 0, 0);
            pdf.text(title, x + CARD_WIDTH / 2, titleY, {
                align: "center",
                maxWidth: CARD_WIDTH - MARGIN * 2,
            });

            // Ligne séparatrice entre le titre et l'image
            const separatorY1 = y + CARD_HEIGHT / 3;
            pdf.setDrawColor(200, 200, 200);
            pdf.setLineWidth(0.5);
            pdf.line(
                x + MARGIN,
                separatorY1,
                x + CARD_WIDTH - MARGIN,
                separatorY1
            );

            // 2. IMAGE (section centrale - 1/3 de la carte)
            try {
                let imagePath = null;

                // Récupérer le chemin de l'image de la famille
                if (selectedData.metadata.images.families && famille) {
                    const imageName =
                        selectedData.metadata.images.families[famille];
                    if (imageName) {
                        imagePath = `/src/assets/illustrations/${imageName}`;
                    }
                }

                // Si un chemin d'image a été trouvé, essayer de charger l'image
                if (imagePath) {
                    try {
                        const imageData = await loadImageForPDF(imagePath);

                        // Calculer les dimensions de l'image pour la section centrale
                        const maxWidth = CARD_WIDTH - MARGIN * 4;
                        const maxHeight = CARD_HEIGHT / 3 - 10;

                        // Calculer le ratio pour maintenir les proportions
                        const ratio = Math.min(
                            maxWidth / imageData.width,
                            maxHeight / imageData.height
                        );

                        const width = imageData.width * ratio;
                        const height = imageData.height * ratio;

                        // Position centrée dans la section centrale
                        const imageX = x + (CARD_WIDTH - width) / 2;
                        const imageY =
                            y +
                            CARD_HEIGHT / 3 +
                            (CARD_HEIGHT / 3 - height) / 2;

                        // Ajouter l'image au PDF
                        pdf.addImage(
                            imageData.data,
                            "JPEG",
                            imageX,
                            imageY,
                            width,
                            height
                        );
                    } catch (error) {
                        console.error(
                            `Erreur lors de l'ajout de l'image au PDF: ${imagePath}`,
                            error
                        );

                        // Texte alternatif au centre si l'image ne peut pas être chargée
                        pdf.setFontSize(12);
                        pdf.setFont("helvetica", "italic");
                        pdf.setTextColor(150, 150, 150);
                        pdf.text(
                            title,
                            x + CARD_WIDTH / 2,
                            y + CARD_HEIGHT / 2,
                            {
                                align: "center",
                            }
                        );
                    }
                } else {
                    // Texte alternatif au centre si aucune image n'est disponible
                    pdf.setFontSize(12);
                    pdf.setFont("helvetica", "italic");
                    pdf.setTextColor(150, 150, 150);
                    pdf.text(title, x + CARD_WIDTH / 2, y + CARD_HEIGHT / 2, {
                        align: "center",
                    });
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la recherche du chemin d'image:",
                    error
                );
            }

            // Ligne séparatrice entre l'image et la description
            const separatorY2 = y + (CARD_HEIGHT / 3) * 2;
            pdf.setDrawColor(200, 200, 200);
            pdf.setLineWidth(0.5);
            pdf.line(
                x + MARGIN,
                separatorY2,
                x + CARD_WIDTH - MARGIN,
                separatorY2
            );

            // 3. DESCRIPTION (section inférieure - 1/3 de la carte)
            let description = "";

            // Récupérer la description de la chronologie si disponible
            if (selectedData.metadata?.chronologie?.[famille]) {
                description =
                    selectedData.metadata.chronologie[famille].description;
            } else {
                description = "Pas de description disponible";
            }

            // Position de départ pour le texte de description
            const descriptionY = y + (CARD_HEIGHT / 3) * 2 + MARGIN;

            pdf.setFontSize(10);
            pdf.setFont("helvetica", "normal");
            pdf.setTextColor(0, 0, 0);

            // Diviser la description en lignes pour l'adapter à l'espace disponible
            const textLines = pdf.splitTextToSize(
                description,
                CARD_WIDTH - MARGIN * 2
            );

            // Ajouter chaque ligne de texte
            let currentY = descriptionY;
            const lineHeight = 12;

            textLines.forEach((line) => {
                if (currentY + lineHeight < y + CARD_HEIGHT - MARGIN) {
                    pdf.text(line, x + CARD_WIDTH / 2, currentY, {
                        align: "center",
                    });
                    currentY += lineHeight;
                }
            });
        }
        // Pour les cartes de type "valeur", conserver le layout existant
        else if (type === "valeur") {
            // Titre de la carte
            const titleY = y + MARGIN + 10;
            pdf.setFontSize(14);
            pdf.setFont("helvetica", "bold");
            pdf.setTextColor(0, 0, 0);
            pdf.text(title, x + CARD_WIDTH / 2, titleY, {
                align: "center",
                maxWidth: CARD_WIDTH - MARGIN * 2,
            });

            // Ajout de l'image si disponible
            try {
                let imagePath = null;

                // Récupérer le chemin de l'image de la propriété
                if (selectedData.metadata.images.properties && propriete) {
                    const imageName =
                        selectedData.metadata.images.properties[propriete];
                    if (imageName) {
                        imagePath = `/src/assets/illustrations/${imageName}`;
                    }
                }

                // Si un chemin d'image a été trouvé, essayer de charger l'image
                if (imagePath) {
                    try {
                        const imageData = await loadImageForPDF(imagePath);

                        // Calculer les dimensions de l'image
                        const maxWidth = CARD_WIDTH - MARGIN * 2;
                        const maxHeight = CARD_HEIGHT * 0.4;

                        // Calculer le ratio pour maintenir les proportions
                        const ratio = Math.min(
                            maxWidth / imageData.width,
                            maxHeight / imageData.height
                        );

                        const width = imageData.width * ratio;
                        const height = imageData.height * ratio;

                        // Position centrée
                        const imageX = x + (CARD_WIDTH - width) / 2;
                        const middleY = y + CARD_HEIGHT / 2;
                        const imageY = middleY - height / 2;

                        // Ajouter l'image au PDF
                        pdf.addImage(
                            imageData.data,
                            "JPEG",
                            imageX,
                            imageY,
                            width,
                            height
                        );

                        // Préparer le contenu (sans le nom de la famille)
                        const displayContent = content.replace(
                            /\s*\([^)]*\)/,
                            ""
                        );

                        // Contenu sous l'image
                        const contentY = imageY + height + 20;
                        pdf.setFontSize(10);
                        pdf.setFont("helvetica", "normal");
                        pdf.text(displayContent, x + CARD_WIDTH / 2, contentY, {
                            align: "center",
                            maxWidth: CARD_WIDTH - MARGIN * 2,
                        });

                        return;
                    } catch (error) {
                        console.error(
                            `Erreur lors de l'ajout de l'image au PDF: ${imagePath}`,
                            error
                        );
                        // Continuer avec le rendu sans image
                    }
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la recherche du chemin d'image:",
                    error
                );
            }

            // Si on arrive ici, c'est qu'il n'y a pas d'image ou qu'il y a eu une erreur
            // Contenu de la carte (au centre)
            const displayContent = content.replace(/\s*\([^)]*\)/, "");
            const contentY = y + CARD_HEIGHT / 2;

            pdf.setFontSize(10);
            pdf.setFont("helvetica", "normal");
            pdf.text(displayContent, x + CARD_WIDTH / 2, contentY, {
                align: "center",
                maxWidth: CARD_WIDTH - MARGIN * 2,
            });
        }
    };
    const handleGeneratePDF = async () => {
        if (isGenerating) return;

        setIsGenerating(true);

        try {
            // Initialiser le PDF
            const pdf = new jsPDF("p", "pt", "a4");
            let pageCounter = 1;

            // Générer les cartes selon le filtre
            const cartesFamille = [];
            const cartesValeur = [];

            // Logique pour générer les cartes selon le filtre
            if (filter === "tout" || filter === "famille") {
                selectedData.familles.forEach((famille) => {
                    cartesFamille.push({
                        type: "famille",
                        title: famille,
                        content: `${famille}`,
                        color: getCardColor("famille", famille),
                    });
                });
            }

            if (filter === "tout" || filter === "valeur") {
                // Pour chaque famille et propriété, créer les cartes de valeurs
                selectedData.familles.forEach((famille) => {
                    selectedData.proprietes.forEach((propriete) => {
                        const valeurs =
                            selectedData.valeurs[famille][propriete];
                        valeurs.forEach((valeur) => {
                            cartesValeur.push({
                                type: "valeur",
                                title: formatPropertyName(propriete),
                                content: `${valeur} (${famille})`,
                                color: getCardColor("valeur", propriete),
                                famille: famille,
                                propriete: propriete,
                                valeur: valeur,
                            });
                        });
                    });
                });
            }

            // Page de titre
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

            // Information sur le nombre de cartes
            pdf.setFontSize(12);
            pdf.text(
                `Ce jeu contient ${cartesFamille.length} cartes Famille et ${cartesValeur.length} cartes Valeur.`,
                pdf.internal.pageSize.width / 2,
                350,
                { align: "center" }
            );

            // Instructions d'impression
            pdf.setFontSize(10);
            pdf.text(
                "Imprimez ce document recto-verso puis découpez les cartes selon les contours.",
                pdf.internal.pageSize.width / 2,
                370,
                { align: "center" }
            );

            // Dessiner les cartes "Famille" si nécessaire
            if (cartesFamille.length > 0) {
                pdf.addPage();
                pageCounter++;

                pdf.setFontSize(18);
                pdf.setFont("helvetica", "bold");
                pdf.text(
                    `Cartes "Famille"`,
                    pdf.internal.pageSize.width / 2,
                    30,
                    { align: "center" }
                );

                // Dessiner les cartes famille
                let carteIndex = 0;
                for (const carte of cartesFamille) {
                    const posIndex = carteIndex % CARDS_PER_PAGE;

                    // Si on a rempli une page, on en ajoute une nouvelle
                    if (posIndex === 0 && carteIndex > 0) {
                        pdf.addPage();
                        pageCounter++;
                    }

                    const row = Math.floor(posIndex / CARDS_PER_ROW);
                    const col = posIndex % CARDS_PER_ROW;

                    const x = 40 + col * (CARD_WIDTH + 10);
                    const y = 50 + row * (CARD_HEIGHT + 10);

                    await drawCard(
                        pdf,
                        carte.title,
                        carte.content,
                        carte.color,
                        x,
                        y,
                        carte.type,
                        carte.title, // Passer le nom de la famille
                        null // Pas de propriété pour les cartes famille
                    );

                    carteIndex++;
                }
            }

            // Dessiner les cartes "Valeur" si nécessaire
            if (cartesValeur.length > 0) {
                pdf.addPage();
                pageCounter++;

                pdf.setFontSize(18);
                pdf.setFont("helvetica", "bold");
                pdf.text(
                    `Cartes "Valeur"`,
                    pdf.internal.pageSize.width / 2,
                    30,
                    { align: "center" }
                );

                // Dessiner les cartes valeur
                let carteIndex = 0;
                for (const carte of cartesValeur) {
                    const posIndex = carteIndex % CARDS_PER_PAGE;

                    // Si on a rempli une page, on en ajoute une nouvelle
                    if (posIndex === 0 && carteIndex > 0) {
                        pdf.addPage();
                        pageCounter++;
                    }

                    const row = Math.floor(posIndex / CARDS_PER_ROW);
                    const col = posIndex % CARDS_PER_ROW;

                    const x = 40 + col * (CARD_WIDTH + 10);
                    const y = 50 + row * (CARD_HEIGHT + 10);

                    await drawCard(
                        pdf,
                        carte.title,
                        carte.content,
                        carte.color,
                        x,
                        y,
                        carte.type,
                        carte.famille, // Passer le nom de la famille
                        carte.propriete // Passer le nom de la propriété
                    );

                    carteIndex++;
                }
            }

            // Ajouter une page de règles du jeu
            pdf.addPage();
            pdf.setFontSize(24);
            pdf.setFont("helvetica", "bold");
            pdf.text("Règles des jeux", pdf.internal.pageSize.width / 2, 50, {
                align: "center",
            });

            // Utiliser les règles spécifiques au corpus si elles existent
            if (selectedData.metadata && selectedData.metadata.regles) {
                let y = 100;
                selectedData.metadata.regles.forEach((regle, index) => {
                    pdf.setFontSize(18);
                    pdf.setFont("helvetica", "bold");
                    pdf.text(`Jeu ${index + 1}: "${regle.nom}"`, 50, y);
                    y += 30;

                    pdf.setFontSize(12);
                    pdf.setFont("helvetica", "normal");
                    pdf.text(`Objectif: ${regle.description}`, 50, y, {
                        maxWidth: 500,
                    });
                    y += 50;
                });
            } else {
                // Règles génériques si le corpus n'en définit pas
                pdf.setFontSize(18);
                pdf.setFont("helvetica", "bold");
                pdf.text('Jeu 1: "Chronologie"', 50, 100);

                pdf.setFontSize(12);
                pdf.setFont("helvetica", "normal");
                pdf.text(
                    "Objectif: Remettre les familles dans leur ordre chronologique.",
                    50,
                    130
                );
                pdf.text('Matériel: Cartes "Famille"', 50, 150);
                pdf.text(
                    'Règles: Mélangez les cartes "Famille" et distribuez-les. Les joueurs doivent se placer dans l\'ordre chronologique.',
                    50,
                    170,
                    { maxWidth: 500 }
                );

                pdf.setFontSize(18);
                pdf.setFont("helvetica", "bold");
                pdf.text('Jeu 2: "Association"', 50, 220);

                pdf.setFontSize(12);
                pdf.setFont("helvetica", "normal");
                pdf.text(
                    "Objectif: Pour une propriété donnée, retrouver quelle valeur correspond à quelle famille.",
                    50,
                    250
                );
                pdf.text('Matériel: Cartes "Famille" et "Valeur"', 50, 270);
                pdf.text(
                    'Règles: Placez les cartes "Famille" en ligne. À tour de rôle, chaque joueur pose une carte "Valeur" à côté de la famille correspondante et justifie son choix.',
                    50,
                    290,
                    { maxWidth: 500 }
                );
            }

            // Informations sur le corpus
            pdf.addPage();
            pdf.setFontSize(24);
            pdf.setFont("helvetica", "bold");
            pdf.text(
                "Informations sur le corpus",
                pdf.internal.pageSize.width / 2,
                50,
                { align: "center" }
            );

            pdf.setFontSize(14);
            pdf.setFont("helvetica", "normal");
            pdf.text(`Titre: ${selectedData.titre}`, 50, 100);
            pdf.text(`Description: ${selectedData.description}`, 50, 130, {
                maxWidth: 500,
            });

            if (selectedData.metadata && selectedData.metadata.niveau) {
                pdf.text(`Niveau: ${selectedData.metadata.niveau}`, 50, 170);
            }

            if (selectedData.metadata && selectedData.metadata.objectifs) {
                pdf.text("Objectifs pédagogiques:", 50, 200);
                let y = 220;
                selectedData.metadata.objectifs.forEach((objectif) => {
                    pdf.text(`• ${objectif}`, 70, y, { maxWidth: 480 });
                    y += 30;
                });
            }

            // Numéros de page
            const totalPages = pageCounter;
            for (let i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                pdf.setFontSize(8);
                pdf.setTextColor(100, 100, 100);
                pdf.text(
                    `Page ${i} / ${totalPages}`,
                    pdf.internal.pageSize.width - 50,
                    pdf.internal.pageSize.height - 20
                );
            }

            // Générer le PDF
            pdf.save(`jeu-cartes-${selectedData.id}.pdf`);

            alert(
                "PDF généré avec succès! Le téléchargement devrait démarrer automatiquement."
            );
        } catch (error) {
            console.error("Erreur lors de la génération du PDF:", error);
            alert("Une erreur est survenue lors de la génération du PDF.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <Button
            variant="primary"
            onClick={handleGeneratePDF}
            className="flex items-center justify-center gap-2"
            disabled={isGenerating}
        >
            {isGenerating ? (
                <>
                    <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    Génération en cours...
                </>
            ) : (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Générer le PDF
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
