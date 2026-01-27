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
} from 'lucide-react';


import { toast } from "react-toastify";
import Footer from '@/components/DEKORA/footer';
import Contacts from '@/components/DEKORA/contacts';
import Projects from '@/components/DEKORA/projetcs';
import AppExemples from '@/components/DEKORA/appExemples';
import Solutions from '@/components/DEKORA/solutions';
import About from '@/components/DEKORA/about';
import Hero from '@/components/DEKORA/hero';
import Header from '@/components/DEKORA/header';


type FormData = {
  name: string,
  email: string,
  message: string
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState<boolean>(false);

  // Liste des projets
  const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce moderne avec Next.js et Stripe",
    icon: Code,
    gradient: "from-gray-900 to-gray-800",
    technologies: ["Next.js", "TypeScript", "Stripe"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/votre-username/ecommerce-platform"
  },
  {
    id: 2,
    title: "Application Mobile Fitness",
    description: "App de suivi sportif avec React Native et Firebase",
    icon: Smartphone,
    gradient: "from-gray-800 to-gray-700",
    technologies: ["React Native", "Firebase", "Expo"],
    liveUrl: "https://expo.dev/@votre-username/fitness-app",
    githubUrl: "https://github.com/votre-username/fitness-mobile-app"
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Tableau de bord avec visualisations de données en temps réel",
    icon: Palette,
    gradient: "from-gray-800 to-gray-600",
    technologies: ["React", "D3.js", "Node.js"],
    liveUrl: "https://analytics-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/votre-username/analytics-dashboard"
  },
  {
    id: 4,
    title: "SaaS Gestion de Projet",
    description: "Outil de gestion collaborative pour équipes agiles",
    icon: Zap,
    gradient: "from-gray-700 to-gray-600",
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://project-manager-saas.vercel.app",
    githubUrl: "https://github.com/votre-username/project-management-saas"
  },
  {
    id: 5,
    title: "Portfolio Architecte",
    description: "Site vitrine élégant avec galerie et animations",
    icon: Code,
    gradient: "from-gray-700 to-gray-500",
    technologies: ["Next.js", "Framer Motion", "Sanity"],
    liveUrl: "https://architect-portfolio-demo.vercel.app",
    githubUrl: "https://github.com/votre-username/architect-portfolio"
  },
  {
    id: 6,
    title: "App Livraison",
    description: "Application de livraison avec tracking en temps réel",
    icon: Smartphone,
    gradient: "from-gray-900 to-gray-800",
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

  /*
  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };
  */
  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
      });

      const data = await res.json();
      toast(data.message);
      setFormStatus('success');

      setTimeout(() => {
        setFormStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 8000);

    } catch (error) {
      toast("Une erreur est survenue !");
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  }


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

      <Header scrollToSection={scrollToSection} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

      <style jsx>{`
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`}</style>
      <Hero scrollToSection={scrollToSection} />

      <About scrollToSection={scrollToSection} />
      {/* Fin de la page a propos */}

      <Solutions scrollToSection={scrollToSection} />
      {/* Fin de la page Services */}

      <AppExemples scrollToSection={scrollToSection} />
      {/* Fin de la page Exemples d'applications */}

      <Projects projects={projects} scrollToSection={scrollToSection} />

      {/*<Contacts formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} formStatus={formStatus} />*/}
      <Contacts formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} formStatus={formStatus} loading={loading}/>

      <Footer scrollToSection={scrollToSection} setIsMenuOpen={setIsMenuOpen} />

    </div>
  );
}

