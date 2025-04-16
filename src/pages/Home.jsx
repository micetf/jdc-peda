import React from "react";
import { Link } from "react-router-dom";
import Button from "@components/UI/Button";

/**
 * Page d'accueil de l'application
 * @returns {JSX.Element} Page d'accueil
 */
const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">
                    Bienvenue sur le Générateur de Jeux de Cartes Pédagogiques
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Créez facilement des jeux de cartes pédagogiques basés sur
                    différents data thématiques pour enrichir vos activités
                    d'enseignement.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                <div className="card p-6">
                    <h2 className="text-2xl font-bold mb-4">
                        Data disponibles
                    </h2>
                    <p className="mb-4">
                        Explorez nos différents data thématiques pour créer des
                        jeux de cartes adaptés à vos besoins pédagogiques :
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">
                            Histoire - Périodes historiques et leurs
                            caractéristiques
                        </li>
                        <li className="mb-2">
                            Pratiques efficaces et équitables - Méthodes
                            pédagogiques
                        </li>
                        <li className="mb-2">
                            Sciences - Concepts et découvertes scientifiques
                        </li>
                        <li className="mb-2">Et bien plus encore...</li>
                    </ul>
                    <Link to="/generator">
                        <Button variant="primary" className="w-full">
                            Explorer les data
                        </Button>
                    </Link>
                </div>

                <div className="card p-6">
                    <h2 className="text-2xl font-bold mb-4">
                        Comment ça marche
                    </h2>
                    <ol className="list-decimal pl-6 mb-6">
                        <li className="mb-2">
                            Sélectionnez un data thématique
                        </li>
                        <li className="mb-2">
                            Choisissez les types de cartes à inclure
                        </li>
                        <li className="mb-2">
                            Personnalisez l'apparence si nécessaire
                        </li>
                        <li className="mb-2">Générez votre jeu de cartes</li>
                        <li className="mb-2">
                            Imprimez ou utilisez en format numérique
                        </li>
                    </ol>
                    <Link to="/generator">
                        <Button variant="secondary" className="w-full">
                            Commencer maintenant
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Pourquoi utiliser des jeux de cartes pédagogiques ?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    Les jeux de cartes pédagogiques favorisent l'apprentissage
                    actif, la mémorisation et l'engagement des élèves tout en
                    rendant l'acquisition de connaissances ludique et
                    interactive.
                </p>
                <Link to="/about">
                    <Button variant="outline" className="mx-auto">
                        En savoir plus
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
