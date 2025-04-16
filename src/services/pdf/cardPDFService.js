// src/services/pdf/cardPDFService.js
import jsPDF from "jspdf";

/**
 * Service de génération de PDF pour les cartes pédagogiques
 */
class CardPDFService {
    // Configuration des cartes - dimensions fixes
    CARD_WIDTH = 172; // Environ 6 cm
    CARD_HEIGHT = 254; // Environ 9 cm
    MARGIN = 15; // Marge intérieure
    CARDS_PER_ROW = 3;
    CARDS_PER_PAGE = 9;

    /**
     * Charge une image à partir d'une URL/chemin et la convertit en Data URL base64.
     * @param {string} url - URL/chemin de l'image
     * @returns {Promise} - Promise contenant les données de l'image et ses dimensions
     */
    async loadImageForPDF(url) {
        if (!url) {
            return Promise.reject(
                new Error("URL d'image non valide ou manquante.")
            );
        }
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous"; // Nécessaire pour les images cross-domain
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                try {
                    // Utiliser JPEG pour une meilleure compression
                    const imageData = canvas.toDataURL("image/jpeg", 0.9);
                    resolve({
                        data: imageData,
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
            img.src = url;
        });
    }

    /**
     * Convertit une couleur hexadécimale en RGB
     * @param {string} hex - Couleur au format hexadécimal
     * @returns {number[]} Tableau de valeurs RGB [r, g, b]
     */
    hexToRgb(hex) {
        if (!hex) return [255, 255, 255]; // Blanc par défaut
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? [
                  parseInt(result[1], 16),
                  parseInt(result[2], 16),
                  parseInt(result[3], 16),
              ]
            : [255, 255, 255];
    }

    /**
     * Dessine une carte de type famille dans le PDF.
     * @param {jsPDF} pdf - Instance jsPDF
     * @param {Object} carte - Objet carte de type famille
     * @param {number} x - Position X du coin supérieur gauche
     * @param {number} y - Position Y du coin supérieur gauche
     * @param {Object} selectedData - Données du jeu sélectionné
     */
    async drawFamilyCard(pdf, carte, x, y, selectedData) {
        const { title, color, image } = carte;
        const rgbColor = this.hexToRgb(color || "#FFFFFF");

        // Fond de la carte
        pdf.setFillColor(rgbColor[0], rgbColor[1], rgbColor[2]);
        pdf.roundedRect(x, y, this.CARD_WIDTH, this.CARD_HEIGHT, 8, 8, "F");

        // Contour de la carte
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.roundedRect(x, y, this.CARD_WIDTH, this.CARD_HEIGHT, 8, 8, "S");

        // Barre colorée latérale pour familles (bleu primaire)
        pdf.setFillColor(59, 130, 246);
        pdf.rect(x, y + 4, 6, this.CARD_HEIGHT - 8, "F");

        // --- Contenu de la carte ---
        const contentX = x + this.MARGIN + 6; // Espace après la barre latérale
        const contentWidth = this.CARD_WIDTH - this.MARGIN * 2 - 6;
        let currentY = y + this.MARGIN;

        // 1. Titre en haut
        pdf.setFontSize(14);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        pdf.text(title, x + this.CARD_WIDTH / 2, currentY + 10, {
            align: "center",
            maxWidth: contentWidth,
        });
        currentY += 30; // Espace après le titre

        // 2. Image au milieu
        const imageSectionHeight = this.CARD_HEIGHT * 0.45;
        if (image) {
            const maxWidth = contentWidth - this.MARGIN;
            const maxHeight = imageSectionHeight;
            try {
                const imageData = await this.loadImageForPDF(image);

                const ratio = Math.min(
                    maxWidth / imageData.width,
                    maxHeight / imageData.height
                );
                const imgWidth = imageData.width * ratio;
                const imgHeight = imageData.height * ratio;

                // Centrer l'image
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
                // Texte de remplacement si l'image échoue
                pdf.setFontSize(10);
                pdf.setFont("helvetica", "italic");
                pdf.setTextColor(150, 150, 150);
                pdf.text(
                    "Image non disponible",
                    x + this.CARD_WIDTH / 2,
                    currentY + imageSectionHeight / 2,
                    { align: "center" }
                );
            }
            currentY += imageSectionHeight + this.MARGIN / 2;
        }

        // 3. Description en bas (description chronologique)
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(0, 0, 0);

        // Récupérer la description chronologique
        let description = "";
        if (selectedData.metadata?.chronologie?.[title]?.description) {
            description = selectedData.metadata.chronologie[title].description;
        }

        // Ajuster le texte à la largeur
        const textLines = pdf.splitTextToSize(description, contentWidth);

        // Calculer la position pour le texte en bas
        const totalTextHeight = textLines.length * 12;

        // Positionner le texte
        let textStartY = y + this.CARD_HEIGHT - this.MARGIN - totalTextHeight;
        textStartY = Math.max(currentY, textStartY);

        // Afficher le texte
        textLines.forEach((line, index) => {
            if (
                textStartY + index * 12 <
                y + this.CARD_HEIGHT - this.MARGIN / 2
            ) {
                pdf.text(
                    line,
                    x + this.CARD_WIDTH / 2,
                    textStartY + index * 12,
                    {
                        align: "center",
                    }
                );
            }
        });
    }

    /**
     * Dessine une carte de type valeur dans le PDF.
     * @param {jsPDF} pdf - Instance jsPDF
     * @param {Object} carte - Objet carte de type valeur
     * @param {number} x - Position X du coin supérieur gauche
     * @param {number} y - Position Y du coin supérieur gauche
     */
    async drawValueCard(pdf, carte, x, y) {
        const { title, content, color, image } = carte;
        const rgbColor = this.hexToRgb(color || "#FFFFFF");

        // Fond de la carte
        pdf.setFillColor(rgbColor[0], rgbColor[1], rgbColor[2]);
        pdf.roundedRect(x, y, this.CARD_WIDTH, this.CARD_HEIGHT, 8, 8, "F");

        // Contour de la carte
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.5);
        pdf.roundedRect(x, y, this.CARD_WIDTH, this.CARD_HEIGHT, 8, 8, "S");

        // Barre colorée latérale pour valeurs (indigo)
        pdf.setFillColor(99, 102, 241);
        pdf.rect(x, y + 4, 6, this.CARD_HEIGHT - 8, "F");

        // --- Contenu de la carte ---
        const contentX = x + this.MARGIN + 6; // Espace après la barre latérale
        const contentWidth = this.CARD_WIDTH - this.MARGIN * 2 - 6;
        let currentY = y + this.MARGIN;

        // 1. Titre (propriété)
        pdf.setFontSize(14);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        pdf.text(title, x + this.CARD_WIDTH / 2, currentY + 10, {
            align: "center",
            maxWidth: contentWidth,
        });
        currentY += 30;

        // 2. Image (si disponible)
        let imageSectionHeight = 0;
        if (image) {
            imageSectionHeight = this.CARD_HEIGHT * 0.45;
            const maxWidth = contentWidth - this.MARGIN;
            const maxHeight = imageSectionHeight;
            try {
                const imageData = await this.loadImageForPDF(image);

                const ratio = Math.min(
                    maxWidth / imageData.width,
                    maxHeight / imageData.height
                );
                const imgWidth = imageData.width * ratio;
                const imgHeight = imageData.height * ratio;

                // Centrer l'image
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
                pdf.setFontSize(10);
                pdf.setFont("helvetica", "italic");
                pdf.setTextColor(150, 150, 150);
                pdf.text(
                    "Image non disponible",
                    x + this.CARD_WIDTH / 2,
                    currentY + maxHeight / 2,
                    { align: "center" }
                );
            }
            currentY += imageSectionHeight + this.MARGIN / 2;
        }

        // 3. Contenu / Description (valeur)
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(0, 0, 0);

        // Calculer l'espace restant pour le contenu
        const remainingHeight = y + this.CARD_HEIGHT - currentY - this.MARGIN;
        const textLines = pdf.splitTextToSize(content, contentWidth);

        // Positionner le texte
        const lineHeight = 12;
        const totalTextHeight = textLines.length * lineHeight;
        let textStartY = currentY + (remainingHeight - totalTextHeight) / 2;
        textStartY = Math.max(currentY, textStartY);

        textLines.forEach((line, i) => {
            if (
                textStartY + i * lineHeight <
                y + this.CARD_HEIGHT - this.MARGIN / 2
            ) {
                pdf.text(
                    line,
                    x + this.CARD_WIDTH / 2,
                    textStartY + i * lineHeight,
                    {
                        align: "center",
                    }
                );
            }
        });
    }

    /**
     * Dessine une carte individuelle dans le PDF.
     * @param {jsPDF} pdf - Instance jsPDF
     * @param {Object} carte - Objet carte
     * @param {number} x - Position X du coin supérieur gauche
     * @param {number} y - Position Y du coin supérieur gauche
     * @param {Object} selectedData - Données du jeu sélectionné
     */
    async drawCard(pdf, carte, x, y, selectedData) {
        if (carte.type === "famille") {
            await this.drawFamilyCard(pdf, carte, x, y, selectedData);
        } else {
            await this.drawValueCard(pdf, carte, x, y);
        }
    }

    /**
     * Ajoute une page de titre au PDF.
     * @param {jsPDF} pdf - Instance jsPDF
     * @param {Object} selectedData - Données du jeu sélectionné
     */
    addTitlePage(pdf, selectedData) {
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
    }

    /**
     * Ajoute des pages de cartes au PDF.
     * @param {jsPDF} pdf - Instance jsPDF
     * @param {Array} cards - Liste des cartes à inclure
     * @param {Object} metadata - Métadonnées du jeu
     * @param {string} filter - Filtre appliqué
     */
    async addCardPages(pdf, cards, selectedData, filter) {
        // Première page de cartes avec titre
        pdf.addPage();
        pdf.setFontSize(18);
        pdf.setFont("helvetica", "bold");
        pdf.text(`Cartes (${filter})`, pdf.internal.pageSize.width / 2, 30, {
            align: "center",
        });

        // Disposition des cartes sur les pages
        for (let carteIndex = 0; carteIndex < cards.length; carteIndex++) {
            const posIndex = carteIndex % this.CARDS_PER_PAGE;

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

            const row = Math.floor(posIndex / this.CARDS_PER_ROW);
            const col = posIndex % this.CARDS_PER_ROW;

            // Calcul des positions
            const gridMarginX =
                (pdf.internal.pageSize.width -
                    (this.CARDS_PER_ROW * this.CARD_WIDTH +
                        (this.CARDS_PER_ROW - 1) * 10)) /
                2;
            const gridMarginY = 50;

            const x = gridMarginX + col * (this.CARD_WIDTH + 10);
            const y = gridMarginY + row * (this.CARD_HEIGHT + 10);

            // Dessiner la carte
            await this.drawCard(pdf, cards[carteIndex], x, y, selectedData);
        }
    }

    /**
     * Ajoute une page de règles au PDF.
     * @param {jsPDF} pdf - Instance jsPDF
     * @param {Array} regles - Liste des règles du jeu
     */
    addRulesPage(pdf, regles) {
        pdf.addPage();
        pdf.setFontSize(24);
        pdf.setFont("helvetica", "bold");
        pdf.text("Règles des jeux", pdf.internal.pageSize.width / 2, 50, {
            align: "center",
        });

        let yRegles = 100;
        regles.forEach((regle, index) => {
            pdf.setFontSize(18);
            pdf.setFont("helvetica", "bold");
            pdf.text(`Jeu ${index + 1}: "${regle.nom}"`, 50, yRegles);
            yRegles += 30;

            pdf.setFontSize(12);
            pdf.setFont("helvetica", "normal");
            const ruleLines = pdf.splitTextToSize(
                regle.description,
                pdf.internal.pageSize.width - 100
            );
            pdf.text(ruleLines, 50, yRegles);
            yRegles += ruleLines.length * 14 + 20;
        });
    }

    /**
     * Ajoute une page d'information au PDF.
     * @param {jsPDF} pdf - Instance jsPDF
     * @param {Object} selectedData - Données du jeu sélectionné
     */
    addInfoPage(pdf, selectedData) {
        if (!selectedData.metadata) return;

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
            pdf.text(`Niveau: ${selectedData.metadata.niveau}`, 50, yInfo);
            yInfo += 20;
        }

        if (selectedData.metadata.objectifs?.length > 0) {
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

        // Ajouter la mention des images générées par IA
        if (selectedData.metadata.aiImageCredit) {
            yInfo += 20;
            pdf.setFontSize(12);
            pdf.setFont("helvetica", "italic");
            const aiImageLines = pdf.splitTextToSize(
                selectedData.metadata.aiImageCredit,
                pdf.internal.pageSize.width - 100
            );
            pdf.text(aiImageLines, 50, yInfo);
        }
    }

    /**
     * Ajoute des pages de correction à la fin du PDF
     * @param {jsPDF} pdf - Instance jsPDF
     * @param {Object} selectedData - Données du jeu sélectionné
     */
    addCorrectionPages(pdf, selectedData) {
        // Récupération des familles ordonnées
        const famillesTriees = selectedData.getFamillesTriees();

        // Ajouter une page de correction
        pdf.addPage();
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.text("Fiche de correction", pdf.internal.pageSize.width / 2, 30, {
            align: "center",
        });

        // Position initiale
        let y = 60;
        const margin = 40;
        const lineHeight = 14;
        const propertyIndent = 15;
        const valueIndent = 30;
        const maxWidth = pdf.internal.pageSize.width - margin * 2;

        // Pour chaque famille, afficher les propriétés et valeurs
        for (
            let familleIndex = 0;
            familleIndex < famillesTriees.length;
            familleIndex++
        ) {
            const famille = famillesTriees[familleIndex];

            // Vérifier s'il reste assez d'espace sur la page actuelle
            // Une famille complète prend environ 1 + 4 + (3 * 4) = 17 lignes * lineHeight
            const estimatedHeight =
                (1 + selectedData.proprietes.length * (1 + 3)) * lineHeight;
            if (y + estimatedHeight > pdf.internal.pageSize.height - 40) {
                pdf.addPage();
                pdf.setFontSize(16);
                pdf.setFont("helvetica", "bold");
                pdf.text(
                    "Fiche de correction (suite)",
                    pdf.internal.pageSize.width / 2,
                    30,
                    {
                        align: "center",
                    }
                );
                y = 60;
            }

            // Afficher le nom de la famille avec son numéro d'ordre
            const ordreChronologie =
                selectedData.metadata.chronologie[famille]?.ordre ||
                familleIndex + 1;
            pdf.setFontSize(14);
            pdf.setFont("helvetica", "bold");
            pdf.text(`${ordreChronologie}. ${famille}`, margin, y);
            y += lineHeight * 1.5;

            // Pour chaque propriété
            for (const propriete of selectedData.proprietes) {
                // Afficher le nom de la propriété
                pdf.setFontSize(12);
                pdf.setFont("helvetica", "bold");
                pdf.text(propriete + " :", margin + propertyIndent, y);
                y += lineHeight;

                // Récupérer et afficher les valeurs de cette propriété
                const valeurs = selectedData.getValeurs(famille, propriete);
                pdf.setFontSize(10);
                pdf.setFont("helvetica", "normal");

                // Pour chaque valeur
                for (
                    let valeurIndex = 0;
                    valeurIndex < valeurs.length;
                    valeurIndex++
                ) {
                    const valeur = valeurs[valeurIndex];
                    console.log("-->", valeur);
                    // Obtenir le texte de la valeur (gestion des objets ou des chaînes)
                    const valeurTexte = valeur?.texte || valeur;

                    // Diviser le texte en lignes si nécessaire
                    const valueLines = pdf.splitTextToSize(
                        valeurTexte,
                        maxWidth - margin - valueIndent
                    );
                    pdf.text(
                        `${valeurIndex + 1}. ${valueLines[0]}`,
                        margin + valueIndent,
                        y
                    );

                    // Si la valeur a plusieurs lignes
                    for (
                        let lineIndex = 1;
                        lineIndex < valueLines.length;
                        lineIndex++
                    ) {
                        y += lineHeight;
                        pdf.text(
                            valueLines[lineIndex],
                            margin + valueIndent + 10,
                            y
                        );
                    }

                    y += lineHeight;
                }

                // Espace après chaque propriété
                y += lineHeight / 2;
            }

            // Espace après chaque famille
            y += lineHeight;
        }
    }

    /**
     * Génère le PDF complet.
     * @param {Object} selectedData - Données du jeu sélectionné
     * @param {string} filter - Filtre à appliquer
     * @returns {Promise<jsPDF>} Promise contenant l'instance PDF générée
     */
    async generatePDF(selectedData, filter = "tout") {
        if (!selectedData || typeof selectedData.getCards !== "function") {
            throw new Error(
                "Les données du jeu ne sont pas chargées correctement."
            );
        }

        try {
            const pdf = new jsPDF("p", "pt", "a4");

            // Page de titre
            this.addTitlePage(pdf, selectedData);

            // Récupération des cartes
            const cardsToProcess = selectedData.getCards(filter);

            if (cardsToProcess.length === 0) {
                throw new Error(
                    `Aucune carte à générer pour le filtre "${filter}".`
                );
            }

            // Pages de cartes
            await this.addCardPages(pdf, cardsToProcess, selectedData, filter);

            // Page de règles
            if (selectedData.metadata?.regles?.length > 0) {
                this.addRulesPage(pdf, selectedData.metadata.regles);
            }

            // Page d'informations
            this.addInfoPage(pdf, selectedData);

            // Pages de correction
            this.addCorrectionPages(pdf, selectedData);

            return pdf;
        } catch (error) {
            console.error("Erreur lors de la génération du PDF:", error);
            throw error;
        }
    }
}

export default CardPDFService;
