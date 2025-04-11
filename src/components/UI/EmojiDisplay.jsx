import React from "react";
import PropTypes from "prop-types";
import { Emoji } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

/**
 * Composant pour afficher des émojis
 * @param {Object} props - Propriétés du composant
 * @param {string} props.name - Nom de l'emoji
 * @param {number} props.size - Taille de l'emoji en pixels
 * @param {string} props.set - Set d'emoji à utiliser (apple, google, twitter, facebook)
 * @param {boolean} props.asString - Si true, retourne la chaîne Unicode de l'emoji au lieu du composant (utile pour PDF)
 * @returns {JSX.Element|string} Emoji
 */
const EmojiDisplay = ({ name, size = 24, set = "apple", asString = false }) => {
    // Mapping entre nos noms d'émojis et les noms/shortcodes utilisés par emoji-mart
    const emojiMapping = {
        wave: "wave",
        door: "door",
        rocket: "rocket",
        hammer_and_wrench: "wrench",
        bulb: "bulb",
        books: "books",
        dart: "dart",
        warning: "warning",
        white_check_mark: "white_check_mark",
        clipboard: "clipboard",
    };

    const emojiName = emojiMapping[name] || "page_facing_up";

    // Si on a besoin de la chaîne Unicode (pour le PDF par exemple)
    if (asString) {
        // Mapping des émojis vers leur représentation Unicode
        const unicodeMapping = {
            wave: "👋",
            door: "🚪",
            rocket: "🚀",
            wrench: "🔧",
            bulb: "💡",
            books: "📚",
            dart: "🎯",
            warning: "⚠️",
            white_check_mark: "✅",
            clipboard: "📋",
            page_facing_up: "📄",
        };

        return unicodeMapping[emojiName] || "📄";
    }

    // Sinon, on retourne le composant Emoji
    return <Emoji emoji={emojiName} size={size} set={set} />;
};

EmojiDisplay.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    set: PropTypes.oneOf(["apple", "google", "twitter", "facebook"]),
    asString: PropTypes.bool,
};

export default EmojiDisplay;
