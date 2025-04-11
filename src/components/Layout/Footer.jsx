import React from "react";

/**
 * Composant de pied de page de l'application
 * @returns {JSX.Element} Pied de page
 */
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>
                            &copy; {new Date().getFullYear()} Jeu de Cartes
                            Pédagogiques
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">
                            Développé avec React, Tailwind CSS et Vite
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
