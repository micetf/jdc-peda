/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#3490dc",
                secondary: "#ffed4a",
                danger: "#e3342f",
                success: "#38c172",
                info: "#6574cd",
                warning: "#f6993f",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
