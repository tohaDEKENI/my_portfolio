'use client';

import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


type Props = {
    scrollToSection: (sectionId: string) => void
}

type Props1 = {
    number: number,
    suffix: string,
    label: string
};


const Hero = ({ scrollToSection }: Props) => {
    return (
        <>
            {/* Section Hero */}
            <section
                id="accueil"
                className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
            >
                {/* Éléments de fond décoratifs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 sm:pt-40 md:pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Texte */}
                        <div className="text-center lg:text-left space-y-8">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight animate-fade-in-up">
                                Transformez vos idées en
                                <br />
                                <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                                    solutions digitales
                                </span>
                            </h1>

                            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
                                Nous transformons vos idées en applications web et mobiles performantes,
                                conçues pour soutenir la croissance de votre activité.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
                                <Button
                                    onClick={() => scrollToSection('contact')}
                                    size="lg"
                                    className="bg-black hover:bg-gray-800 hover:scale-105 text-white px-10 py-7 text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl rounded-lg"
                                >
                                    Discutons de votre projet
                                </Button>

                                <Button
                                    onClick={() => scrollToSection('services')}
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-7 text-lg font-semibold transition-all duration-300 rounded-lg"
                                >
                                    Découvrir nos services
                                </Button>
                            </div>

                            {/* Stats ou badges */}
                            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 animate-fade-in-up animation-delay-600">
                                <StatCard number={50} suffix="+" label="Projets réalisés" />
                                <StatCard number={98} suffix="%" label="Clients satisfaits" />
                                <StatCard number={5} suffix="+" label="Années d'expérience" />
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-300">
                            <div className="relative">
                                {/* Cercle décoratif derrière l'image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-300 rounded-full blur-3xl opacity-30 scale-110"></div>

                                <img
                                    src="/pca.png"
                                    alt="Solutions digitales"
                                    className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Indicateur de scroll */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>


        </>
    );
}

export default Hero;


// Composant StatCard
const StatCard = ({ number, suffix, label }: Props1) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <div ref={ref} className="text-center lg:text-left">
            <div className="text-3xl font-bold text-black">
                {inView && (
                    <CountUp
                        end={number}
                        duration={7}
                        suffix={suffix}
                        enableScrollSpy={false}
                    />
                )}
                {!inView && `0${suffix}`}
            </div>
            <div className="text-sm text-gray-600 mt-1">{label}</div>
        </div>
    );
};