'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Eye } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { ProjectDetaille } from "../ProjectDetaille";
const projetsWebInitial = [
  {
    id: 1,
    titre: "Dashboard Administratif",
    description: "Interface web pour gérer les utilisateurs, les produits et visualiser les statistiques en temps réel.",
    technologies: ["React", "Chart.js", "Tailwind CSS"],
    images: [
      "https://i.postimg.cc/s2yGpkwz/535-ACCA9-17-EE-4-E23-A5-DC-F33-C53-BB3346.png",
      "https://tse2.mm.bing.net/th/id/OIP.CzVtglCIPAFUNleSbq8AhwHaD1?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    lienCode: "https://github.com/tohaDEKENI/quiz_hub",
    lienDemo: "https://quiz-hub-xi.vercel.app/quiz"
  },
  {
    id: 2,
    titre: "Site Portfolio Personnel",
    description: "Portfolio moderne et responsive pour présenter ses projets, compétences et contact.",
    technologies: ["React", "Tailwind CSS"],
    images: [
      "https://tse2.mm.bing.net/th/id/OIP.CzVtglCIPAFUNleSbq8AhwHaD1?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    lienCode: "#",
    lienDemo: "#"
  },
  {
    id: 3,
    titre: "Blog Développeur",
    description: "Blog personnel pour partager des articles techniques avec un CMS headless.",
    technologies: ["Next.js", "Markdown", "Tailwind"],
    images: [
      "https://i-aseman.ir/blog/wp-content/uploads/2023/12/PicsArt_11-28-09.13.31-1.webp"
    ],
    lienCode: "#",
    lienDemo: "#"
  },
  {
    id: 4,
    titre: "Plateforme E-commerce",
    description: "Site e-commerce avec panier, paiement Stripe et espace admin.",
    technologies: ["React", "Node.js", "MongoDB"],
    images: [
      "https://www.shutterstock.com/shutterstock/videos/1099379587/thumb/11.jpg?ip=x480"
    ],
    lienCode: "#",
    lienDemo: "#"
  },
  {
    id: 5,
    titre: "Application de Chat",
    description: "App de messagerie en temps réel avec authentification et sockets.",
    technologies: ["Vue.js", "Socket.io", "Express"],
    images: [
      "https://www.que.es/wp-content/uploads/2020/11/Payload-1.jpg"
    ],
    lienCode: "#",
    lienDemo: "#"
  },
  {
    id: 6,
    titre: "Générateur de CV en Ligne",
    description: "App web pour créer un CV professionnel téléchargeable en PDF.",
    technologies: ["React", "Tailwind", "html2pdf.js"],
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.Lslf1gCruk6Yjgi3nVeHKgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    lienCode: "#",
    lienDemo: "#"
  }
];


export default function ProjectsSection() {
  const { theme } = useTheme();
  const [projetsWeb, setProjetsWeb] = useState(
    projetsWebInitial.map(p => ({ ...p, currentSlide: 0 }))
  );

  const bgColor = theme === "light" ? "#f9fafb" : "#111827";
  const cardColor = theme === "light" ? "#ffffff" : "#1f2937";
  const textColor = theme === "light" ? "#1f2937" : "#f9fafb";
  const techBgColor = theme === "light" ? "#ede9fe" : "#4c1d95";
  const techTextColor = theme === "light" ? "#7c3aed" : "#d8b4fe";

  return (
    <section
      id="projets"
      className="flex flex-col items-center w-full justify-center min-h-screen px-6 md:px-12 py-20 gap-12"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: "#14b8a6" }}>
        Mes Projets
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetsWeb.map((projet, idx) => (
          <div
            key={projet.id}
            className="flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            style={{ backgroundColor: cardColor }}
          >
            {/* Carousel */}
            <div className="relative w-full">
              <img
                src={projet.images[projet.currentSlide]}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              {projet.images.length > 1 && (
                <div className="absolute left-2 right-2 top-1/2 flex justify-between -translate-y-1/2">
                  <button
                    className="btn btn-circle"
                    onClick={() =>
                      setProjetsWeb(prev =>
                        prev.map(p =>
                          p.id === projet.id
                            ? { ...p, currentSlide: (p.currentSlide - 1 + p.images.length) % p.images.length }
                            : p
                        )
                      )
                    }
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle"
                    onClick={() =>
                      setProjetsWeb(prev =>
                        prev.map(p =>
                          p.id === projet.id
                            ? { ...p, currentSlide: (p.currentSlide + 1) % p.images.length }
                            : p
                        )
                      )
                    }
                  >
                    ❯
                  </button>
                </div>
              )}
            </div>

            {/* Contenu projet */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-semibold" style={{ color: textColor }}>
                {projet.titre}
              </h3>
              <p className="text-sm" style={{ color: textColor }}>
                {projet.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {projet.technologies.map(tech => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ backgroundColor: techBgColor, color: techTextColor }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {projet.lienDemo && (
                  <a
                    href={projet.lienDemo}
                    target="_blank"
                    className="flex items-center gap-1 font-medium hover:underline"
                    style={{ color: techTextColor }}
                  >
                    Demo <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {projet.lienCode && (
                  <a
                    href={projet.lienCode}
                    target="_blank"
                    className="flex items-center gap-1 font-medium hover:underline"
                    style={{ color: techTextColor }}
                  >
                    Code <Github className="w-4 h-4" />
                  </a>
                )}

                {/* Nouveau bouton "Voir plus" avec icône */}
                
                <ProjectDetaille projet={projet}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
