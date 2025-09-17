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
    titre: "Quiz Hub – Application de Quiz Interactive",
    titreEN: "Quiz Hub – Interactive Quiz Application",
    description: "Application web permettant aux utilisateurs de tester leurs connaissances à travers des quiz dynamiques. Authentification, score en temps réel, interface responsive et gestion efficace du parcours utilisateur.",
    descriptionEN: "Web application allowing users to test their knowledge through dynamic quizzes. Features include authentication, real-time scoring, responsive interface, and efficient user journey management.",
    technologies: ["Next.js", "Tailwind CSS", "Lucide-react", "TypeScript", "MySQL", "Shadcn/UI"],
    images: [
      "https://i.postimg.cc/s2yGpkwz/535-ACCA9-17-EE-4-E23-A5-DC-F33-C53-BB3346.png",
      "https://i.postimg.cc/kX7b6YF5/59-CB660-E-871-C-4-B96-A34-B-7-FA42665717-B.png",
      "https://i.postimg.cc/GhnjMjP0/C3071514-925-F-42-BF-9-A19-8-D2871-C608-D6.png"
    ],
    lienCode: "https://github.com/tohaDEKENI/quiz_hub",
    lienDemo: "https://quiz-hub-xq76.vercel.app/"
  }
];


type Props = {
  langue: string
}

export default function ProjectsSection({ langue }: Props) {
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
      className="flex flex-col items-center w-full justify-center min-h-screen px-6 md:px-12 py-20 gap-12 z-50"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: "#14b8a6" }}>
        {langue === "Anglais" ? "My Projects" : "Mes Projets"}
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-40">
        {projetsWeb.map((projet, idx) => (
          <div
            key={projet.id}
            className="flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer z-50"
            style={{ backgroundColor: cardColor }}
          >
            {/* Carousel */}
            <div className="relative w-full">
              <img
                src={projet.images[projet.currentSlide]}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              {projet.images.length > 1 && (
                <div className="absolute left-2 right-2 top-1/2 flex justify-between -translate-y-1/2 z-50">
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
                {langue === "Anglais" ? projet.titreEN : projet.titre}
              </h3>
              <p className="text-sm" style={{ color: textColor }}>
                {langue === "Anglais" ? projet.descriptionEN : projet.description}
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

                <ProjectDetaille projet={projet} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
