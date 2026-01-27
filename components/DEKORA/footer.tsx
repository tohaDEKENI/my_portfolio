'use client';

import {
    Mail,
    Phone,
    MapPin,
   
    Github,
} from 'lucide-react';

type Props = {
    scrollToSection: (sectionId: string) => void;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const Footer = ({ scrollToSection, setIsMenuOpen }:Props) => {
    
    return ( 
        <>
         {/* Footer */}
            <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Colonne 1 - Branding */}
                        <div className="space-y-4">
                            <div className="flex-shrink-0 leading-tight">
                                <span className="block text-2xl font-extrabold tracking-wide text-white">
                                    DEKORA
                                </span>
                                <span className="block text-sm font-medium text-gray-600">
                                    Web & Mobile Solutions
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Expert en développement web et mobile, créant des solutions digitales innovantes et performantes.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/tohaDEKENI/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                                    aria-label="GitHub"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/toha-dekeni-9b0599356/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com/votre-profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                                    aria-label="Twitter"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Colonne 2 - Navigation */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Navigation</h4>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => scrollToSection('accueil')}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        Accueil
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('a-propos')}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        À propos
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('services')}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        Services
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('realisations')}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        Réalisations
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Colonne 3 - Services */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Services</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Développement Web</li>
                                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Applications Mobile</li>
                                <li className="hover:text-white transition-colors duration-200 cursor-pointer">UI/UX Design</li>
                                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Optimisation & SEO</li>
                                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Consultation</li>
                            </ul>
                        </div>

                        {/* Colonne 4 - Contact */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <a
                                        href="mailto:dekenitoha097@gmail.com"
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm break-all"
                                    >
                                        dekenitoha097@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <a
                                        href="tel:+212724477160"
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        +212 724-477160
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-400 text-sm">
                                        Casablanca, Maroc
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Séparateur */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-gray-500">
                                © {new Date().getFullYear()} <span className="font-semibold text-gray-700">DEKORA</span> — Web & Mobile Solutions.
                                Tous droits réservés.
                            </p>
                            <div className="flex gap-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Mentions légales
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Politique de confidentialité
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Conditions d&apos;utilisation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;