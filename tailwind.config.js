/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
        "./node_modules/@micetf/ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Remplacez votre définition simple de couleurs par une définition avec nuances
                primary: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9", // Couleur de base
                    600: "#0284c7", // Nécessaire pour bg-primary-600
                    700: "#0369a1", // Nécessaire pour hover:bg-primary-700
                    800: "#075985",
                    900: "#0c4a6e",
                    950: "#082f49",
                },
                secondary: {
                    500: "#ffed4a", // Couleur de base
                    600: "#e6d543", // Version plus foncée pour le hover
                    700: "#cbbf3c",
                },
                danger: {
                    500: "#e3342f",
                    600: "#cc2f2a",
                    700: "#b52a25",
                },
                success: {
                    500: "#38c172",
                    600: "#32ae67",
                    700: "#2c9a5a",
                },
                info: {
                    500: "#6574cd",
                    600: "#5a68b9",
                    700: "#505ca4",
                },
                warning: {
                    500: "#f6993f",
                    600: "#dd8a39",
                    700: "#c47b32",
                },
                // Ajoutez également gray car il est utilisé dans Navbar
                gray: {
                    100: "#f7fafc",
                    200: "#edf2f7",
                    300: "#e2e8f0",
                    400: "#cbd5e0",
                    500: "#a0aec0",
                    600: "#718096",
                    700: "#4a5568",
                    800: "#2d3748",
                    900: "#1a202c",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    // Assurez-vous que les classes utilisées par le composant Navbar sont incluses
    safelist: [
        {
            pattern:
                /^(bg|text|border)-(primary|gray|red|green|blue|yellow)-\d+$/,
        },
        // Classes essentielles pour Navbar (copiées depuis ui/tailwind.config.js)
        "fixed",
        "top-0",
        "w-full",
        "bg-gray-800",
        "text-white",
        "z-50",
        "container",
        "mx-auto",
        "px-4",
        "flex",
        "items-center",
        "justify-between",
        "h-16",
        "space-x-2",
        "overflow-x-auto",
        "whitespace-nowrap",
        "text-xl",
        "font-bold",
        "text-gray-400",
        "text-sm",
        "ml-2",
        "md:hidden",
        "focus:outline-none",
        "hidden",
        "md:flex",
        "bg-gray-600",
        "p-2",
        "rounded",
        "hover:bg-gray-700",
        "transition-colors",
        "bg-yellow-500",
        "hover:bg-yellow-600",
        "py-2",
        "text-gray-300",
        "hover:text-white",
        "mr-2",
    ],
    plugins: [],
};
