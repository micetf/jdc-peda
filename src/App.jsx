import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataProvider from "./components/Data/DataProvider"; // Import mis à jour
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import CardGenerator from "./pages/CardGenerator";
import About from "./pages/About";

/**
 * Composant principal de l'application
 * @returns {JSX.Element} Application
 */
const App = () => {
    return (
        <Router>
            <DataProvider>
                <div className="flex flex-col min-h-screen bg-gray-100">
                    <Header />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/generator"
                                element={<CardGenerator />}
                            />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </DataProvider>
        </Router>
    );
};

export default App;
