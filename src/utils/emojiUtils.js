// src/utils/emojiUtils.js
/**
 * Utilitaires pour gérer les émojis dans l'application
 */

/**
 * Obtient la représentation Unicode d'un emoji à partir de son nom
 * @param {string} emojiName - Nom de l'emoji
 * @returns {string} Représentation Unicode de l'emoji
 */
export const getEmojiUnicode = (emojiName) => {
    // Mapping des noms d'émojis vers leur représentation Unicode
    const unicodeMapping = {
        wave: "👋",
        door: "🚪",
        rocket: "🚀",
        hammer_and_wrench: "🔧",
        bulb: "💡",
        books: "📚",
        dart: "🎯",
        warning: "⚠️",
        white_check_mark: "✅",
        clipboard: "📋",
        page_facing_up: "📄",
    };

    return unicodeMapping[emojiName] || "📄"; // Retourne l'emoji document par défaut
};

/**
 * Liste des polices qui supportent bien les émojis
 */
export const EMOJI_FRIENDLY_FONTS = [
    "Arial Unicode MS",
    "Segoe UI Emoji",
    "Apple Color Emoji",
    "Noto Color Emoji",
    "Segoe UI Symbol",
    "Symbola",
];

/**
 * Obtient le premier emoji supporté par le navigateur ou une police disponible
 * @returns {string} Nom de la police supportant les émojis
 */
export const getEmojiFriendlyFont = () => {
    // Vérifier si les polices sont disponibles
    // En attendant, on retourne simplement la première
    return EMOJI_FRIENDLY_FONTS[0];
};

export default {
    getEmojiUnicode,
    getEmojiFriendlyFont,
    EMOJI_FRIENDLY_FONTS,
};
