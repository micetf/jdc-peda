import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Récupérer l'équivalent de __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin de base pour le déploiement
const BASE_PATH = "/jdc-peda/";

// Contenu du .htaccess pour la production uniquement
const htaccessContent = `
# Règles de réécriture pour SPA React
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase ${BASE_PATH}
  
  # Ne pas appliquer la règle aux ressources existantes
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Renvoyer toutes les requêtes non trouvées vers index.html
  RewriteRule . index.html [L]
</IfModule>

# Caching optimisé
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Cache par défaut d'une heure
  ExpiresDefault "access plus 1 hour"
  
  # Mettre en cache les assets statiques plus longtemps
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
  
  # JavaScript et CSS
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  
  # Polices
  ExpiresByType font/ttf "access plus 1 year"
  ExpiresByType font/otf "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  
  # HTML et XML
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType application/xml "access plus 0 seconds"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/json
</IfModule>
`;

export default defineConfig(({ mode }) => {
    // Déterminer si nous sommes en environnement de production
    const isProd = mode === "production";

    // Définir la base URL - vide en développement, /jdc-peda/ en production
    const base = isProd ? BASE_PATH : "/";

    const config = {
        // Toujours définir base pour que import.meta.env.BASE_URL soit disponible même en développement
        base,

        plugins: [
            react({
                fastRefresh: true,
                include: "**/*.{jsx,tsx}",
                exclude: /node_modules/,
            }),
            // Plugin pour ajouter .htaccess uniquement en build de production
            {
                name: "add-htaccess",
                apply: "build",
                writeBundle() {
                    if (isProd) {
                        fs.writeFileSync(
                            path.resolve(__dirname, "dist/.htaccess"),
                            htaccessContent
                        );
                        console.log(
                            "✅ .htaccess file has been created for production"
                        );
                    }
                },
            },
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@pages": path.resolve(__dirname, "./src/pages"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@data": path.resolve(__dirname, "./src/data"),
                "@hooks": path.resolve(__dirname, "./src/hooks"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@services": path.resolve(__dirname, "./src/services"),
            },
        },
        server: {
            port: 5432,
            open: true,
            hmr: true,
        },
        optimizeDeps: {
            include: ["react", "react-dom", "react-router-dom"],
        },
        build: {
            assetsDir: "assets",
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ["react", "react-dom", "react-router-dom"],
                        ui: ["@micetf/ui"],
                    },
                    chunkFileNames: "assets/js/[name]-[hash].js",
                    entryFileNames: "assets/js/[name]-[hash].js",
                    assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
                },
            },
        },
    };

    return config;
});
