import React from "react";
import { Link } from "react-router-dom";

/**
 * Composant d'en-tête de l'application
 * @returns {JSX.Element} En-tête
 */
const Header = () => {
    return (
        <header className="bg-primary text-white shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold">
                            Jeu de Cartes Pédagogiques
                        </h1>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-secondary transition-colors"
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/generator"
                                    className="hover:text-secondary transition-colors"
                                >
                                    Générateur
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-secondary transition-colors"
                                >
                                    À propos
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
