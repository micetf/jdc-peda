import React from "react";

/**
 * Page À propos de l'application
 * @returns {JSX.Element} Page À propos
 */
const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">
                À propos de ce projet
            </h1>

            <div className="max-w-3xl mx-auto">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Objectif pédagogique
                    </h2>
                    <p className="text-lg mb-4">
                        Ce générateur de jeux de cartes pédagogiques a été conçu
                        pour aider les enseignants à créer facilement des
                        supports ludiques et interactifs pour leurs élèves.
                        L'objectif est de transformer l'apprentissage en une
                        expérience engageante tout en renforçant l'acquisition
                        de connaissances.
                    </p>
                    <p className="text-lg">
                        Les jeux de cartes générés peuvent être utilisés pour
                        travailler sur différentes compétences : mémorisation,
                        associations, chronologie, classification, et bien plus
                        encore.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Data disponibles
                    </h2>
                    <p className="text-lg mb-4">
                        Notre application propose plusieurs data thématiques
                        adaptés aux programmes scolaires :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">
                            <strong>Histoire</strong> - Périodes historiques,
                            personnages importants, événements marquants
                        </li>
                        <li className="mb-2">
                            <strong>Pratiques pédagogiques</strong> - Méthodes
                            d'enseignement efficaces et équitables
                        </li>
                        <li className="mb-2">
                            <strong>Sciences</strong> - Concepts scientifiques,
                            découvertes, expériences
                        </li>
                        <li className="mb-2">
                            <strong>Géographie</strong> - Pays, capitales,
                            reliefs, climats
                        </li>
                    </ul>
                    <p className="text-lg">
                        Chaque data est structuré selon le même principe : des
                        familles, des propriétés et des valeurs, permettant de
                        créer des jeux cohérents et adaptés à différents niveaux
                        scolaires.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Comment utiliser les cartes
                    </h2>
                    <p className="text-lg mb-4">
                        Les jeux de cartes générés peuvent être utilisés de
                        différentes manières :
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">
                            <strong>Jeu de chronologie</strong> - Remettre les
                            familles dans l'ordre chronologique
                        </li>
                        <li className="mb-2">
                            <strong>Jeu d'association</strong> - Associer les
                            valeurs aux familles correspondantes
                        </li>
                        <li className="mb-2">
                            <strong>Jeu de mémoire</strong> - Retrouver les
                            paires de cartes
                        </li>
                        <li className="mb-2">
                            <strong>Jeu de devinettes</strong> - Faire deviner
                            une carte à partir d'indices
                        </li>
                        <li className="mb-2">
                            <strong>Support de révision</strong> - Utiliser les
                            cartes comme fiches de révision
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">
                        Technologies utilisées
                    </h2>
                    <p className="text-lg mb-4">
                        Cette application a été développée avec les technologies
                        suivantes :
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">
                            React.js avec Hooks et Context API
                        </li>
                        <li className="mb-2">Tailwind CSS pour le style</li>
                        <li className="mb-2">Vite comme outil de build</li>
                        <li className="mb-2">JSDoc pour la documentation</li>
                        <li className="mb-2">
                            PropTypes pour la validation des props
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About;
