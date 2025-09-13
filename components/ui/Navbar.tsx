'use client';

import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { SelectDemo } from "../Language";
import Link from "next/link";


type Props = {
    langue: string,
    setLangue: React.Dispatch<SetStateAction<string>>
}

export default function Navbar({ langue, setLangue }: Props) {
    const { theme, setTheme } = useTheme();
    const [active, setActive] = useState('domicile');
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { id: 'domicile', label: 'Domicile' },
        { id: "A propos", label: "A propos" },
        { id: 'Competence', label: 'Competence' },
        { id: 'projets', label: 'Projets' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleScroll = (id: string) => {
        setActive(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    }

    const textMain = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
    const textActive = theme === 'dark' ? 'text-purple-400' : 'text-purple-600';
    const hoverText = theme === 'dark' ? 'hover:text-purple-400' : 'hover:text-purple-600';
    const logoDot = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
    const menuBg = theme === 'dark' ? 'bg-gray-900/50 backdrop-blur-sm' : 'bg-white/50 backdrop-blur-sm';

    return (
        <header className="fixed w-full bg-transparent backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-8">
                {/* Logo */}
                <div className={`font-bold text-teal-700 dark:text-teal-400 
                text-sm       /* par défaut petit */
                md:text-base  /* moyen sur écrans ≥ md */
                lg:text-lg`}> 
                    Toha DEKENI <span className={logoDot}>•</span>
                </div>


                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`relative font-medium dark:text-white ${textMain} ${hoverText} transition-colors ${active === item.id ? textActive : ''}`}
                        >
                            {item.label}
                            {active === item.id && (
                                <span className={`absolute -bottom-1 left-0 w-full h-1 rounded-full ${textActive}`}></span>
                            )}
                        </button>
                    ))}

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ? <Moon /> : <Sun />}
                    </Button>

                    <Link href="/cv.pdf" target="_blank">
                        <Button variant="outline">Télécharger le CV</Button>
                    </Link>
                    <SelectDemo langue={langue} setLangue={setLangue} />
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ? <Moon /> : <Sun />}
                    </Button>
                    <SelectDemo langue={langue} setLangue={setLangue} />
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={`${menuBg} px-6 pb-4 space-y-2 md:hidden`}>
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`block w-full text-left font-medium ${textMain} py-2 transition-colors ${active === item.id ? textActive : hoverText}`}
                        >
                            {item.label}
                        </button>
                    ))}

                    <Link href="/cv.pdf" target="_blank">
                        <Button className="w-full" variant="outline">Télécharger le CV</Button>
                    </Link>

                </div>
            )}
        </header>
    );
}
