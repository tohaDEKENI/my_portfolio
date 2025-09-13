'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Code, Server, Database } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
    langue: string
}

export default function AboutPage({ langue }: Props) {
    const downloadCV = () => {
        window.open("/cv.pdf", "_blank");
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: custom * 0.2 },
        }),
    };

    return (
        <section
            id="A propos"
            className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20 gap-12 text-center"
        >
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                className="text-5xl md:text-6xl font-bold text-teal-600 dark:text-teal-400"
            >
                {langue === "Francais" ? "À propos de moi" : "About Me"}
            </motion.h1>

            <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={1}
                className="text-2xl md:text-3xl font-semibold"
            >
                Full Stack Web Developer
            </motion.h2>

            <motion.p
                className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed"
            >
                {langue === "Francais"
                    ? "Développeur Web Full Stack | Création de solutions web performantes et sécurisées | Optimisation des performances et expérience utilisateur | Expertise en frontend, backend et bases de données"
                    : "Full Stack Web Developer | Building secure and high-performance web solutions | Performance optimization and user experience | Expertise in frontend, backend and databases"
                }
            </motion.p>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={3}
                className="flex flex-wrap justify-center gap-6 mt-6"
            >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                    <Code className="w-5 h-5 text-purple-600" />
                    {langue === "Francais" ? "Développement Web" : "Web Development"}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                    <Server className="w-5 h-5 text-purple-600" />
                    {langue === "Francais" ? "Backend & API" : "Backend & API"}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                    <Database className="w-5 h-5 text-purple-600" />
                    {langue === "Francais" ? "Base de données" : "Database"}
                </div>
            </motion.div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={4}
            >
                <Button variant="outline" onClick={downloadCV} className="px-8 py-4 text-lg mt-8">
                    {langue === "Francais" ? "Télécharger le CV" : "Download CV"}
                </Button>
            </motion.div>

        </section>
    );
}
