'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Code,
    Smartphone,
    Palette,
    Zap,
    Mail,
    Phone,
    MapPin,
    Menu,
    X,
    ExternalLink,
    Github, CreditCard, Users, BarChart2, ShoppingCart, Database, Edit, Monitor
} from 'lucide-react';



export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Liste des projets
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Plateforme e-commerce moderne avec Next.js et Stripe",
            icon: Code,
            gradient: "from-gray-900 to-gray-700",
            technologies: ["Next.js", "TypeScript", "Stripe"],
            liveUrl: "https://ecommerce-demo.vercel.app",
            githubUrl: "https://github.com/votre-username/ecommerce-platform"
        },
        {
            id: 2,
            title: "Application Mobile Fitness",
            description: "App de suivi sportif avec React Native et Firebase",
            icon: Smartphone,
            gradient: "from-gray-800 to-gray-600",
            technologies: ["React Native", "Firebase", "Expo"],
            liveUrl: "https://expo.dev/@votre-username/fitness-app",
            githubUrl: "https://github.com/votre-username/fitness-mobile-app"
        },
        {
            id: 3,
            title: "Dashboard Analytics",
            description: "Tableau de bord avec visualisations de données en temps réel",
            icon: Palette,
            gradient: "from-gray-700 to-gray-500",
            technologies: ["React", "D3.js", "Node.js"],
            liveUrl: "https://analytics-dashboard-demo.vercel.app",
            githubUrl: "https://github.com/votre-username/analytics-dashboard"
        },
        {
            id: 4,
            title: "SaaS Gestion de Projet",
            description: "Outil de gestion collaborative pour équipes agiles",
            icon: Zap,
            gradient: "from-gray-600 to-gray-400",
            technologies: ["Next.js", "PostgreSQL", "Prisma"],
            liveUrl: "https://project-manager-saas.vercel.app",
            githubUrl: "https://github.com/votre-username/project-management-saas"
        },
        {
            id: 5,
            title: "Portfolio Architecte",
            description: "Site vitrine élégant avec galerie et animations",
            icon: Code,
            gradient: "from-gray-500 to-gray-300",
            technologies: ["Next.js", "Framer Motion", "Sanity"],
            liveUrl: "https://architect-portfolio-demo.vercel.app",
            githubUrl: "https://github.com/votre-username/architect-portfolio"
        },
        {
            id: 6,
            title: "App Livraison",
            description: "Application de livraison avec tracking en temps réel",
            icon: Smartphone,
            gradient: "from-gray-400 to-gray-200",
            technologies: ["React Native", "Maps API", "Socket.io"],
            liveUrl: "https://expo.dev/@votre-username/delivery-app",
            githubUrl: "https://github.com/votre-username/delivery-tracking-app"
        }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const handleSubmit = () => {
        if (formData.name && formData.email && formData.message) {
            setFormStatus('success');
            setTimeout(() => {
                setFormStatus('idle');
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }
      `}</style>
            {/* Header fixe */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 leading-tight">
                            <span className="block text-2xl font-extrabold tracking-wide text-black">
                                DEKORA
                            </span>
                            <span className="block text-sm font-medium text-gray-600">
                                Web & Mobile Solutions
                            </span>
                        </div>
                        {/* Navigation desktop */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <button
                                    onClick={() => scrollToSection('accueil')}
                                    className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
                                >
                                    Accueil
                                </button>
                                <button
                                    onClick={() => scrollToSection('a-propos')}
                                    className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
                                >
                                    À propos
                                </button>
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
                                >
                                    Services
                                </button>
                                <button
                                    onClick={() => scrollToSection('realisations')}
                                    className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
                                >
                                    Réalisations
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
                                >
                                    Contact
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
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>

                    {/* Menu mobile */}
                    {isMenuOpen && (
                        <div className="md:hidden pb-4">
                            <div className="flex flex-col space-y-2">
                                <button
                                    onClick={() => scrollToSection('accueil')}
                                    className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 text-left"
                                >
                                    Accueil
                                </button>
                                <button
                                    onClick={() => scrollToSection('a-propos')}
                                    className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 text-left"
                                >
                                    À propos
                                </button>
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 text-left"
                                >
                                    Services
                                </button>
                                <button
                                    onClick={() => scrollToSection('realisations')}
                                    className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 text-left"
                                >
                                    Réalisations
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 text-left"
                                >
                                    Contact
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            {/* Section Hero */}
            <section
                id="accueil"
                className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
            >
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight animate-fade-in-up">
                        Transformez vos idées en
                        <br />
                        <span className="text-gray-600">solutions digitales</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                        Nous transformons vos idées en applications web et mobiles performantes, conçues pour soutenir la croissance de votre activité.
                    </p>
                    <div className="animate-fade-in-up animation-delay-400">
                        <Button
                            onClick={() => scrollToSection('contact')}
                            size="lg"
                            className="bg-black hover:bg-gray-800 hover:scale-105 text-white px-8 py-6 text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Discutons de votre projet
                        </Button>
                    </div>
                </div>
            </section>

            {/* Section À propos */}
            <section id="a-propos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center animate-fade-in">
                        À propos
                    </h2>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed animate-fade-in animation-delay-200">
                        <p className="hover:text-black transition-colors duration-300">
                            Avec plus de 3 ans d&apos;expertise en développement web et mobile, nous accompagnons nos clients dans la conception de solutions digitales modernes, performantes et fiables, répondant à leurs besoins spécifiques
                        </p>
                        <p className="hover:text-black transition-colors duration-300">
                            Notre passion pour les technologies de pointe telles que Python, React, Next.js, React Native, Flutter et
                            TypeScript nous permet de livrer des solutions innovantes et évolutives.Nous collaborons étroitement
                            avec nos clients pour transformer leurs visions en expériences digitales concrètes.
                        </p>
                        <p className="hover:text-black transition-colors duration-300">
                            Notre approche combine excellence technique, design élégant et focus sur l&apos;expérience utilisateur,
                            afin de créer des produits digitaux qui font réellement la différence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Services */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
                        Services
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Des solutions complètes pour tous vos besoins 
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {/* Service 1 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Code className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Développement Web
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Création de sites web et applications web sur mesure avec React, Next.js
                                    et les technologies les plus récentes pour une performance optimale.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Service 2 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-300">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Smartphone className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Applications Mobile
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Développement d&apos;applications mobiles natives et cross-platform avec
                                    React Native et  Flutter pour iOS et Android avec une seule base de code.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Service 3 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-400">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Palette className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    UI/UX Design
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Conception d&apos;interfaces utilisateur modernes et intuitives avec un
                                    focus sur l&apos;expérience utilisateur et l&apos;accessibilité.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Service 4 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-500">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Optimisation
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Amélioration des performances, SEO et accessibilité de vos applications
                                    existantes pour une meilleure visibilité et expérience.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Section Exemples d'applications */}
            <section id="exemples" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
                        Exemples d&apos;applications que nous pouvons réaliser
                    </h2>
                    <p className="text-gray-600 text-center mb-4 max-w-2xl mx-auto">
                        Voici quelques types d&apos;applications que nous pouvons développer pour répondre aux besoins de votre entreprise.
                        <span className="block mt-2 text-sm text-gray-500">
                            Ce ne sont que des exemples : nous pouvons créer presque tout type de solution digitale selon vos besoins.
                        </span>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {/* Exemple 1 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Database className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Application de gestion de stock
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Suivi et gestion complète de vos stocks avec alertes automatiques, historiques et reporting.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Exemple 2 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-300">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <ShoppingCart className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Application E-commerce
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Création de boutiques en ligne responsives et sécurisées, avec paiement intégré et gestion des produits.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Exemple 3 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-400">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <BarChart2 className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Dashboard analytique
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Tableaux de bord interactifs pour suivre vos KPI et prendre des décisions basées sur les données.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Exemple 4 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-500">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Application de gestion de clients
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Suivi des clients, historique des interactions et gestion des ventes pour améliorer votre relation client.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Exemple 5 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-600">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <CreditCard className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Application de paiement
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Solutions de paiement sécurisées pour vos services et produits, intégrables à vos applications web et mobiles.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Exemple 6 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-700">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Smartphone className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Application Mobile sur mesure
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Applications mobiles natives ou cross-platform avec React Native ou Flutter, adaptées à vos besoins.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Exemple 7 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-800">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Monitor className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Site vitrine
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Présentation simple et élégante de votre entreprise ou projet sur le web.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Exemple 8 */}
                        <Card className="border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in-up animation-delay-900">
                            <CardHeader>
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Edit className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-black">
                                    Blog / Portfolio
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    Création de blogs ou portfolios professionnels pour partager votre contenu et valoriser vos projets.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>





            {/* Section Réalisations */}
            <section id="realisations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
                        Réalisations
                    </h2>
                    <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
                        Découvrez quelques-uns de nos projets récents et comment nous transformons les idées en solutions concrètes.
                    </p>
                    <p className="text-center text-gray-500 mb-12 italic">
                        Vous avez une idée ? Nous pouvons la réaliser sur mesure pour votre entreprise !
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {projects.map((project, index) => {
                            const IconComponent = project.icon;
                            const delayClass = `animation-delay-${(index + 2) * 100}`;

                            return (
                                <Card
                                    key={project.id}
                                    className={`border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 bg-white overflow-hidden group animate-fade-in-up ${delayClass}`}
                                >
                                    {/* Image / Icon */}
                                    <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden rounded-t-lg`}>
                                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                            <IconComponent className="h-16 w-16 text-white opacity-60" />
                                        </div>
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
                                    </div>

                                    {/* Infos */}
                                    <CardHeader className="px-4 pt-4">
                                        <CardTitle className="text-xl font-bold text-black mb-1">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600 text-sm">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>

                                    {/* Technologies */}
                                    <CardContent className="px-4 pt-2 pb-4">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Boutons */}
                                        <div className="flex flex-wrap gap-3">
                                            <Button
                                                //variant="outline"
                                                size="sm"
                                                className="flex cursor-pointer items-center gap-2 text-white bg-gray-800 transition-colors duration-300"
                                                onClick={() => window.open(project.liveUrl, '_blank')}
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Voir le projet
                                            </Button>
                                            <Button
                                                variant="default"
                                                size="sm"
                                                className="flex cursor-pointer text-black items-center gap-2  transition-colors duration-300"
                                                onClick={() => window.open(project.githubUrl, '_blank')}
                                            >
                                                <Github className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Section Contact */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
                        Contact
                    </h2>
                    <p className="text-gray-600 text-center mb-12">
                        Prêt à démarrer votre projet ? Contactez-moi dès aujourd&apos;hui
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Formulaire */}
                        <Card className="border-gray-200 bg-gray-50 animate-slide-in-left">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-black">
                                    Envoyez-moi un message
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-gray-700 font-medium">
                                            Nom complet
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Jean Dupont"
                                            className="border-gray-300 focus:border-black"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-700 font-medium">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="jean.dupont@example.com"
                                            className="border-gray-300 focus:border-black"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-gray-700 font-medium">
                                            Message
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Parlez-moi de votre projet..."
                                            rows={6}
                                            className="border-gray-300 focus:border-black resize-none"
                                        />
                                    </div>

                                    <Button
                                        onClick={handleSubmit}
                                        className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base transition-all duration-200"
                                    >
                                        Envoyer le message
                                    </Button>

                                    {formStatus === 'success' && (
                                        <p className="text-green-600 text-center font-medium">
                                            Message envoyé avec succès !
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Informations de contact */}
                        <div className="space-y-8 animate-slide-in-right">
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-6">
                                    Informations de contact
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    N&apos;hésitez pas à me contacter pour discuter de votre projet. Je serais
                                    ravi de vous aider à concrétiser vos idées.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-black" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black mb-1">Email</h4>
                                        <a
                                            href="mailto:dekenitoha097@gmail.com"
                                            className="text-gray-600 hover:text-black transition-colors"
                                        >
                                            dekenitoha097@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-5 w-5 text-black" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black mb-1">Téléphone</h4>
                                        <a
                                            href="tel:+212724477160"
                                            className="text-gray-600 hover:text-black transition-colors"
                                        >
                                            +212 724-477160
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-5 w-5 text-black" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black mb-1">Localisation</h4>
                                        <p className="text-gray-600">
                                            Casablanca, Maroc
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
        </div>
    );
}