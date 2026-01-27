'use client';
import { Button } from '@/components/ui/button';

import {

    ExternalLink,
    Github, Sparkles
} from 'lucide-react';

import { LucideIcon } from "lucide-react";

type Project = {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
};

type Props = {
    projects: Project[];
    scrollToSection: (sectionId: string) => void
};

const Projects = ({ projects, scrollToSection }: Props) => {
    return (
        <>
            {/* Section Réalisations */}
            <section id="realisations" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Élément décoratif */}
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="container mx-auto relative z-10">
                    {/* En-tête */}
                    <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                            <div className="w-8 h-px bg-gray-300"></div>
                            <span>04</span>
                            <div className="w-8 h-px bg-gray-300"></div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6">
                            Nos Réalisations
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-4">
                            Découvrez quelques-uns de nos projets récents et comment nous transformons les idées en solutions concrètes.
                        </p>
                        <p className="text-base text-gray-500 italic">
                            <Sparkles className="w-6 h-6 " /> Vous avez une idée ? Nous pouvons la réaliser sur mesure pour votre entreprise !
                        </p>
                    </div>

                    {/* Grille de projets */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {projects.map((project, index) => {
                            const IconComponent = project.icon;
                            const delayClass = `animation-delay-${(index + 2) * 100}`;

                            return (
                                <div
                                    key={project.id}
                                    className={`group relative animate-fade-in-up ${delayClass}`}
                                >
                                    {/* Card */}
                                    <div className="h-full bg-white border-2 border-gray-200 rounded-3xl overflow-hidden transition-all duration-500 hover:border-black hover:shadow-2xl">

                                        {/* Image / Icon avec gradient */}
                                        <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                                            {/* Grille décorative */}
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                            </div>

                                            {/* Icône */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                                                    <IconComponent className="h-20 w-20 text-white opacity-90" />
                                                </div>
                                            </div>

                                            {/* Overlay au hover */}
                                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                                            {/* Badge "Nouveau" optionnel */}
                                            {index === 0 && (
                                                <div className="absolute top-4 right-4 px-3 py-1 bg-white text-black text-xs font-bold rounded-full shadow-lg">
                                                    Nouveau
                                                </div>
                                            )}
                                        </div>

                                        {/* Contenu */}
                                        <div className="p-6">
                                            {/* Titre et description */}
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Séparateur */}
                                            <div className="h-px bg-gray-200 mb-6"></div>

                                            {/* Boutons d'action */}
                                            <div className="flex items-center justify-between gap-3">
                                                <Button
                                                    size="sm"
                                                    className="flex-1 bg-black hover:bg-gray-800 text-white font-semibold group/btn transition-all duration-300"
                                                    onClick={() => window.open(project.liveUrl, '_blank')}
                                                >
                                                    <span>Voir le projet</span>
                                                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </Button>

                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-10 h-10 p-0 border-2 border-gray-300 hover:border-black hover:bg-black group/github transition-all duration-300"
                                                    onClick={() => window.open(project.githubUrl, '_blank')}
                                                >
                                                    <Github className="h-4 w-4 text-black group-hover/github:text-white transition-colors duration-300" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Effet de lueur au hover (optionnel) */}
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-200 to-transparent rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA final */}
                    <div className="max-w-4xl mx-auto mt-20 text-center animate-fade-in animation-delay-600">
                        <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-12">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Prêt à créer votre propre projet ?
                            </h3>
                            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                Chaque projet commence par une conversation. Partagez-nous votre vision et transformons-la ensemble en réalité digitale.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    onClick={() => scrollToSection('contact')}
                                    size="lg"
                                    className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold group"
                                >
                                    Démarrer un projet
                                    <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                                <Button
                                    onClick={() => scrollToSection('services')}
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold"
                                >
                                    Découvrir nos services
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;