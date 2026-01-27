
'use client';

import { Button } from '@/components/ui/button';
import {

    Smartphone,
    CreditCard, Users, BarChart2, ShoppingCart, Database, Edit, Monitor,

} from 'lucide-react';

type Props = {
    scrollToSection : (sectionId: string) => void
}


const AppExemples = ({scrollToSection}:Props) => {
    return (
        <>
            {/* */}
            {/* Section Exemples d'applications */}
            <section id="exemples" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                {/* Élément décoratif */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="container mx-auto relative z-10">
                    {/* En-tête */}
                    <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                            <div className="w-8 h-px bg-gray-300"></div>
                            <span>03</span>
                            <div className="w-8 h-px bg-gray-300"></div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6">
                            Exemples de projets
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-4">
                            Voici quelques types d&apos;applications que nous pouvons développer pour répondre aux besoins de votre entreprise.
                        </p>
                        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                            Ce ne sont que des exemples : nous pouvons créer presque tout type de solution digitale selon vos besoins spécifiques.
                        </p>
                    </div>

                    {/* Grille d'exemples */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">

                        {/* Exemple 1 - Gestion de stock */}
                        <div className="group relative animate-fade-in-up animation-delay-200">
                            <div className="relative h-full p-6 bg-white border-2 border-gray-200 rounded-2xl group-hover:border-black group-hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gray-100 group-hover:bg-black rounded-xl flex items-center justify-center mb-4 transition-all duration-500">
                                    <Database className="h-7 w-7 text-black group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3">
                                    Gestion de stock
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                    Suivi et gestion complète de vos stocks avec alertes automatiques, historiques et reporting.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-black font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 2 - E-commerce */}
                        <div className="group relative animate-fade-in-up animation-delay-300">
                            <div className="relative h-full p-6 bg-white border-2 border-gray-200 rounded-2xl group-hover:border-black group-hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gray-100 group-hover:bg-black rounded-xl flex items-center justify-center mb-4 transition-all duration-500">
                                    <ShoppingCart className="h-7 w-7 text-black group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3">
                                    E-commerce
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                    Boutiques en ligne responsives et sécurisées, avec paiement intégré et gestion des produits.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-black font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 3 - Dashboard */}
                        <div className="group relative animate-fade-in-up animation-delay-400">
                            <div className="relative h-full p-6 bg-white border-2 border-gray-200 rounded-2xl group-hover:border-black group-hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gray-100 group-hover:bg-black rounded-xl flex items-center justify-center mb-4 transition-all duration-500">
                                    <BarChart2 className="h-7 w-7 text-black group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3">
                                    Dashboard analytique
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                    Tableaux de bord interactifs pour suivre vos KPI et prendre des décisions basées sur les données.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-black font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 4 - CRM */}
                        <div className="group relative animate-fade-in-up animation-delay-500">
                            <div className="relative h-full p-6 bg-white border-2 border-gray-200 rounded-2xl group-hover:border-black group-hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gray-100 group-hover:bg-black rounded-xl flex items-center justify-center mb-4 transition-all duration-500">
                                    <Users className="h-7 w-7 text-black group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3">
                                    Gestion de clients (CRM)
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                    Suivi des clients, historique des interactions et gestion des ventes pour améliorer vos relations.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-black font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 5 - Paiement */}
                        <div className="group relative animate-fade-in-up animation-delay-600">
                            <div className="relative h-full p-6 bg-white border-2 border-gray-200 rounded-2xl group-hover:border-black group-hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gray-100 group-hover:bg-black rounded-xl flex items-center justify-center mb-4 transition-all duration-500">
                                    <CreditCard className="h-7 w-7 text-black group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3">
                                    Solution de paiement
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                    Systèmes de paiement sécurisés pour vos services et produits, intégrables à vos applications.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-black font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 6 - App Mobile */}
                        <div className="group relative animate-fade-in-up animation-delay-700">
                            <div className="relative h-full p-6 bg-white border-2 border-gray-200 rounded-2xl group-hover:border-black group-hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gray-100 group-hover:bg-black rounded-xl flex items-center justify-center mb-4 transition-all duration-500">
                                    <Smartphone className="h-7 w-7 text-black group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3">
                                    App Mobile sur mesure
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                    Applications natives ou cross-platform avec React Native ou Flutter, adaptées à vos besoins.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-black font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 7 - Site vitrine */}
                        <div className="group relative animate-fade-in-up animation-delay-800">
                            <div className="relative h-full p-6 bg-white border-2 border-gray-200 rounded-2xl group-hover:border-black group-hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gray-100 group-hover:bg-black rounded-xl flex items-center justify-center mb-4 transition-all duration-500">
                                    <Monitor className="h-7 w-7 text-black group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3">
                                    Site vitrine
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                    Présentation simple et élégante de votre entreprise ou projet sur le web avec design moderne.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-black font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 8 - Blog/Portfolio */}
                        <div className="group relative animate-fade-in-up animation-delay-900">
                            <div className="relative h-full p-6 bg-white border-2 border-gray-200 rounded-2xl group-hover:border-black group-hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gray-100 group-hover:bg-black rounded-xl flex items-center justify-center mb-4 transition-all duration-500">
                                    <Edit className="h-7 w-7 text-black group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3">
                                    Blog / Portfolio
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                    Blogs ou portfolios professionnels pour partager votre contenu et valoriser vos projets.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-black font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bannière finale */}
                    <div className="max-w-5xl mx-auto bg-gradient-to-r from-black to-gray-800 rounded-3xl p-12 text-center text-white animate-fade-in animation-delay-1000">
                        <h3 className="text-3xl font-bold mb-4">Vous avez un projet spécifique en tête ?</h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Ces exemples ne sont qu&apos;un aperçu de ce que nous pouvons créer. Chaque projet est unique et nous adaptons nos solutions à vos besoins précis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => scrollToSection('contact')}
                                size="lg"
                                className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold"
                            >
                                Parlez-nous de votre idée
                            </Button>
                            <Button
                                onClick={() => scrollToSection('services')}
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold"
                            >
                                Voir nos services
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AppExemples;