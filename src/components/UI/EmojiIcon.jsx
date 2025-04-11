// src/components/UI/EmojiIcon.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * Collection d'émojis en SVG
 */
const EMOJI_SVG = {
    wave: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <circle cx="256" cy="256" r="256" fill="#FFCC4D" />
            <path
                fill="#F4900C"
                d="M332.1 89.8c-5.8-7.5-16.6-9-24.1-3.2-7.5 5.8-9 16.6-3.2 24.1 45.8 59.2 69.9 90.4 69.9 162.4 0 70.7-57.3 128-128 128-71.2 0-128-56.8-128-128 0-23.6 4.3-52.2 27.1-83.2 4.9-6.8 3.5-16.3-3.3-21.2-6.8-4.9-16.3-3.5-21.2 3.3-15.8 21.7-27 49.1-28.5 80.3-2.6 53.7 23.2 105.6 66.7 135.2 43.5 29.7 99.9 32.1 146.2 6.2 46.2-25.8 74.9-75.1 74.4-128.5-.5-53.4-28.7-102.9-48-149.4"
            />
            <circle cx="128" cy="256" r="32" fill="#662113" />
            <circle cx="384" cy="256" r="32" fill="#662113" />
            <path
                fill="#662113"
                d="M352 388.7c0 12.3-10 16-52 16-42.1 0-52-3.7-52-16 0-12.3 28-22 52-22s52 9.7 52 22"
            />
        </svg>
    ),

    door: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#825A46" d="M448 0H64v512h384V0z" />
            <path fill="#D8BFB2" d="M384 64H128v384h256V64z" />
            <path fill="#6F4E3B" d="M192 192h32v128h-32z" />
        </svg>
    ),

    rocket: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
                fill="#B3B3B3"
                d="M397.4 64.3L330.7 131l50.3 50.3 66.7-66.7c-12.4-22.8-27.4-37.8-50.3-50.3z"
            />
            <path
                fill="#E73B36"
                d="M190 301l-46.9 11.7-28.1 68.2 94.8-22.8L190 301z"
            />
            <path
                fill="#E73B36"
                d="M331 160c-84.3-84.3-182-92.5-246.8-55.5C41.7 133.4 21 179.9 21 234v22.9L146.3 365.7 331 160z"
            />
            <path
                fill="#B02721"
                d="M491 256c0-54.1-46.5-74.9-75.4-117.3-37-64.8-45.2-162.5-129.5-246.8L160 146.3 365.7 331 491 256c.6-17.5 0-32 0-32s.4 10 0 32z"
            />
            <path fill="#B3B3B3" d="M180 436l28-28 28 28-28 28-28-28z" />
            <path fill="#808080" d="M113 369l28-28 28 28-28 28-28-28z" />
        </svg>
    ),

    hammer_and_wrench: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
                fill="#C7CFE2"
                d="M27.2 349.3l135.5-135.5 135.5 135.5-135.5 135.5z"
            />
            <path
                fill="#B4BBCC"
                d="M27.2 349.3l67.7 67.7 135.5-135.5-67.7-67.7z"
            />
            <path
                fill="#7A8194"
                d="M111 265.5L265.5 111c15.6-15.6 40.9-15.6 56.6 0l78.9 78.9c15.6 15.6 15.6 40.9 0 56.6L246.5 401c-15.6 15.6-40.9 15.6-56.6 0L111 322.1c-15.6-15.6-15.6-40.9 0-56.6z"
            />
            <path
                fill="#5B657A"
                d="M111 265.5L188.8 188l56.6 56.6-122.1 123.2c-15.6 15.6-40.9 15.6-56.6 0L111 322.1c-15.5-15.6-15.6-40.9 0-56.6z"
            />
            <path
                fill="#C7CFE2"
                d="M188.8 188L246.5 246.5 357.6 135.4l-112.2-80.9z"
            />
        </svg>
    ),

    bulb: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
                fill="#FFD764"
                d="M321 431H191l11-93c-33-21-52-62-52-102 0-79 79-141 157-93 56 34 74 109 40 167-10 18-25 29-37 39l11 82z"
            />
            <path fill="#FDB62F" d="M214.5 431h83v25h-83z" />
            <path
                fill="#FFD764"
                d="M260 82v135c-22 2-33 31-18 47 5 5 14 9 18 16v151h-8l-11-93c33-21 52-62 52-102 0-80-79-141-158-93-23 14-39 37-46 65-4 17 7 19 1 19-11-3-19-13-19-24 0-79 79-141 157-93 11 7 21 15 32 26z"
            />
        </svg>
    ),

    books: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#D8553A" d="M100 108.9h142V404H100z" />
            <path fill="#FF6849" d="M128.6 108.9H242V404H128.6z" />
            <path fill="#A0D9F2" d="M242 108.9h142V404H242z" />
            <path fill="#C8E7F5" d="M270.6 108.9H384V404H270.6z" />
            <path fill="#FFDA44" d="M71.4 108.9h28.6V404H71.4z" />
            <path fill="#338AF3" d="M384 108.9h56.6V404H384z" />
        </svg>
    ),

    dart: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <circle fill="#E04F5F" cx="256" cy="256" r="256" />
            <circle fill="#FFFFFF" cx="256" cy="256" r="160" />
            <circle fill="#E04F5F" cx="256" cy="256" r="112" />
            <circle fill="#FFFFFF" cx="256" cy="256" r="64" />
            <circle fill="#E04F5F" cx="256" cy="256" r="16" />
            <path
                fill="#5C913B"
                d="M459.8 212l-27.4-12.6 2-30c.5-7.6-8.9-10.6-13.6-4.3l-16.7 22.2-30.4-14c-7.2-3.3-14 5-9.8 12l15.3 25.3-6.8 27.7c-1.7 6.8 6.1 11.9 11.4 7.5l23.2-19 29.1 8.2c7.4 2.1 13-7 8.1-13.1l-17.4-21.3 16.6-18.5c4.8-5.2 10.9-.1 13.4 6.9l2.7 7.6c2.6 7 9.4 11.2 16.7 10.4-5.7-30.7-17.8-58.7-34.4-82.7v84.7z"
            />
        </svg>
    ),

    warning: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <circle fill="#FFDA44" cx="256" cy="256" r="256" />
            <path
                fill="#FFFFFF"
                d="M256 86.4c-12.3 0-21.9 9.6-21.9 21.9v192c0 12.3 9.6 21.9 21.9 21.9s21.9-9.6 21.9-21.9v-192c0-12.3-9.6-21.9-21.9-21.9zm0 338.9c12.3 0 21.9-9.6 21.9-21.9s-9.6-21.9-21.9-21.9-21.9 9.6-21.9 21.9 9.8 21.9 21.9 21.9z"
            />
        </svg>
    ),

    white_check_mark: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <circle fill="#4DA6FF" cx="256" cy="256" r="256" />
            <path
                fill="#FFFFFF"
                d="M406.6 178.9L207.8 374.9c-8.3 8.2-21.8 8.2-30 0L105.4 302c-8.3-8.2-8.3-21.5 0-29.7 8.3-8.2 21.8-8.2 30 0l57.4 57.4L376.6 149.2c8.3-8.2 21.8-8.2 30 0 8.3 8.3 8.3 21.5 0 29.7z"
            />
        </svg>
    ),

    clipboard: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#E8EDEE" d="M364.5 448h-278V97.9h278V448z" />
            <path
                fill="#B0B6BB"
                d="M306.5 97.9h-50.9V64.3h-61.2v33.6h-50v27.9h162.1V97.9z"
            />
            <path fill="#D1D5D7" d="M306.5 97.9h-162v27.9h162V97.9z" />
            <path
                fill="#B0B6BB"
                d="M115.5 155.4h198v22.4h-198zm0 50.4h198v22.4h-198zm0 50.4h198v22.4h-198zm0 50.4h158.4v22.4H115.5z"
            />
        </svg>
    ),

    page_facing_up: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#E1E6E9" d="M384.3 0H96.7v512h336.7V48.7L384.3 0z" />
            <path fill="#C2C5C8" d="M384.3 48.7H433L384.3 0v48.7z" />
            <path
                fill="#B0B6BB"
                d="M149.3 149.3h213.3v21.3H149.3zm0 42.7h213.3v21.3H149.3zm0 42.7h213.3v21.3H149.3zm0 42.6h170.7v21.3H149.3z"
            />
        </svg>
    ),
};

/**
 * Composant pour afficher un emoji sous forme d'icône SVG
 * @param {Object} props - Propriétés du composant
 * @param {string} props.name - Nom de l'emoji
 * @param {number} props.size - Taille de l'emoji en pixels
 * @param {string} props.className - Classes CSS additionnelles
 * @returns {JSX.Element} Icône d'emoji
 */
const EmojiIcon = ({ name, size = 24, className = "" }) => {
    // Récupérer le SVG de l'emoji
    const svgContent = EMOJI_SVG[name] || EMOJI_SVG.page_facing_up;

    // Style pour la taille
    const style = {
        width: `${size}px`,
        height: `${size}px`,
    };

    return (
        <span
            className={`inline-block ${className}`}
            style={style}
            title={`Emoji: ${name}`}
        >
            {svgContent}
        </span>
    );
};

EmojiIcon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    className: PropTypes.string,
};

export default EmojiIcon;
