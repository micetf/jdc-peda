import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Récupérer l'équivalent de __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [
        react({
            // Configuration explicite du plugin React Refresh
            fastRefresh: true,
            // Inclure tous les fichiers .jsx et .tsx
            include: "**/*.{jsx,tsx}",
            // Exclure node_modules
            exclude: /node_modules/,
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 5432,
        open: true,
        // Activer HMR explicitement
        hmr: true,
    },
    // Configuration supplémentaire pour aider HMR
    optimizeDeps: {
        include: ["react", "react-dom", "react-router-dom"],
    },
});
