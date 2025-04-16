import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataProvider from "@components/Data/DataProvider";
import { Navbar } from "@micetf/ui";
import Home from "@pages/Home";
import CardGenerator from "@pages/CardGenerator";
import About from "@pages/About";

/**
 * Composant principal de l'application
 * @returns {JSX.Element} Application
 */
const App = () => {
    // État pour gérer l'affichage de l'aide (optionnel)
    const [showHelpModal, setShowHelpModal] = useState(false);

    // Configuration du fil d'Ariane
    const breadcrumb = ["MiCetF", "Cartes Pédagogiques"];
    useEffect(() => {
        console.group("Vite Environment Variables");
        console.log("BASE_URL:", import.meta.env.BASE_URL);
        console.log("MODE:", import.meta.env.MODE);
        console.log("DEV:", import.meta.env.DEV);
        console.log("PROD:", import.meta.env.PROD);
        console.log("SSR:", import.meta.env.SSR);
        console.groupEnd();
    }, []);

    return (
        <Router basename={import.meta.env.BASE_URL}>
            <DataProvider>
                <div className="flex flex-col min-h-screen bg-gray-100">
                    <Navbar
                        breadcrumb={breadcrumb}
                        subtitle="Générateur de jeux"
                        showHelp={true}
                        onHelpClick={() => setShowHelpModal(true)}
                        baseUrl="https://micetf.fr"
                        contactEmail="webmaster@micetf.fr"
                    />
                    {showHelpModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl">
                                <h2 className="text-2xl font-bold mb-4">
                                    Aide
                                </h2>
                                <p className="mb-4">
                                    Bienvenue dans le générateur de jeux de
                                    cartes pédagogiques. Cette application vous
                                    permet de créer des jeux de cartes adaptés à
                                    différents contextes éducatifs.
                                </p>
                                <button
                                    className="bg-primary-600 text-white px-4 py-2 rounded"
                                    onClick={() => setShowHelpModal(false)}
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    )}
                    <main className="flex-grow pt-16">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/generator"
                                element={<CardGenerator />}
                            />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                </div>
            </DataProvider>
        </Router>
    );
};

export default App;
