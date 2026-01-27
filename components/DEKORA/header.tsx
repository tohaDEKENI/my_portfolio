
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

import {

    Palette,
    Zap,
    Home,
    User,
    Lightbulb,
    Mail

} from 'lucide-react';


type Props = {
    scrollToSection: (sectionId: string) => void;
    setIsMenuOpen :React.Dispatch<React.SetStateAction<boolean>>;
    isMenuOpen:boolean;
}

const Header = ({ scrollToSection ,setIsMenuOpen,isMenuOpen}: Props) => {
    return (
        <>
            {/* Header fixe avec glassmorphism */}
            <header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
                <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg">
                    <nav className="container mx-auto px-6">
                        <div className="flex items-center justify-between h-20">
                            {/* Logo */}
                            <button
                                onClick={() => scrollToSection('accueil')}
                                className="flex-shrink-0 leading-tight group cursor-pointer"
                            >
                                <div className="relative">
                                    <span className="block text-3xl font-extrabold tracking-tight bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                                        DEKORA
                                    </span>
                                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                                        Web & Mobile Solutions
                                    </span>
                                </div>
                            </button>

                            {/* Navigation desktop */}
                            <div className="hidden md:block">
                                <div className="flex items-center space-x-1">
                                    {[
                                        { id: 'accueil', label: 'Accueil' },
                                        { id: 'a-propos', label: 'À propos' },
                                        { id: 'services', label: 'Services' },
                                        { id: 'exemples', label: 'Exemples' },
                                        { id: 'realisations', label: 'Réalisations' }
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="relative px-4 py-2 text-sm text-gray-700 hover:text-black transition-all duration-200 font-semibold group"
                                        >
                                            <span className="relative z-10">{item.label}</span>
                                            <div className="absolute inset-0 bg-black/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-3/4 transition-all duration-300"></div>
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="ml-3 px-6 py-2.5 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                                    >
                                        <span className="relative z-10">Contact</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                </div>
                            </div>

                            {/* Bouton menu mobile */}
                            <div className="md:hidden">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    aria-label="Menu"
                                    className="relative w-11 h-11 hover:bg-black/5 rounded-xl transition-all duration-300"
                                >
                                    <div className="relative w-6 h-6 flex items-center justify-center">
                                        <span className={`absolute h-0.5 w-6 bg-black rounded-full transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                                        <span className={`absolute h-0.5 w-6 bg-black rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
                                        <span className={`absolute h-0.5 w-6 bg-black rounded-full transform transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                                    </div>
                                </Button>
                            </div>
                        </div>

                        {/* Menu mobile */}
                        <div
                            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                            style={{ maxHeight: isMenuOpen ? '500px' : '0' }}
                        >  <div className="pb-6 pt-2 space-y-2">
                                {[
                                    { id: 'accueil', label: 'Accueil', icon: Home },
                                    { id: 'a-propos', label: 'À propos', icon: User },
                                    { id: 'services', label: 'Services', icon: Zap },
                                    { id: 'exemples', label: 'Exemples', icon: Lightbulb },
                                    { id: 'realisations', label: 'Réalisations', icon: Palette }

                                ].map((item, index) => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            scrollToSection(item.id);
                                            setIsMenuOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-3 text-gray-700 hover:text-black hover:bg-black/5 transition-all duration-200 font-semibold rounded-xl flex items-center gap-3 group"
                                        style={{
                                            animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                                        }}
                                    >
                                        <span className="group-hover:scale-125 transition-transform duration-300">
                                            <item.icon className="w-5 h-5" />
                                        </span>
                                        <span>{item.label}</span>
                                        <svg className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                ))}

                                <button
                                    onClick={() => {
                                        scrollToSection('contact');
                                        setIsMenuOpen(false);
                                    }}
                                    className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Contact</span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    );
}

export default Header;