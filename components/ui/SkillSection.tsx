'use client';

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Variants } from "framer-motion";


const skillsData = {
  Frontend: [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", nom: "React" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", nom: "Javascript" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", nom: "Tailwind" },
  ],
  Backend: [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", nom: "Node.js" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg", nom: "Express" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", nom: "Flask" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", nom: "Next.js" }
  ],
  Database: [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", nom: "MySQL" },
  ],
  Tools: [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", nom: "Git" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", nom: "VSCode" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg", nom: "Insomnia" },
  ],
};

export default function SkillsSection() {
  const { theme } = useTheme();

  const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const items: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};


  const categoryColors: Record<string, { light: string; dark: string }> = {
    Frontend: { light: "bg-teal-50", dark: "bg-teal-900/30" },
    Backend: { light: "bg-purple-50", dark: "bg-purple-900/30" },
    Database: { light: "bg-yellow-50", dark: "bg-yellow-900/30" },
    Tools: { light: "bg-pink-50", dark: "bg-pink-900/30" },
  };

  return (
    <section
      id="Competence"
      className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20 gap-16"
      style={{ backgroundColor: theme === "light" ? "#f9fafb" : "#111827" }}
    >
      <h2
        className="text-4xl md:text-5xl font-bold mb-12"
        style={{ color: theme === "light" ? "#14b8a6" : "#5eead4" }}
      >
        Mes Compétences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div
            key={category}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className={`p-6 rounded-2xl shadow-xl`}
            style={{
              backgroundColor: theme === "light" ? categoryColors[category].light : categoryColors[category].dark
            }}
          >
            <h3
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: theme === "light" ? "#1f2937" : "#f9fafb" }}
            >
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.nom}
                  variants={items}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-transform cursor-pointer"
                  style={{ backgroundColor: theme === "light" ? "#ffffff" : "#1f2937" }}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img src={skill.image} alt={skill.nom} className="w-full h-full object-contain" />
                  </div>
                  <span
                    className="font-medium text-sm md:text-base text-center"
                    style={{ color: theme === "light" ? "#1f2937" : "#f9fafb" }}
                  >
                    {skill.nom}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
