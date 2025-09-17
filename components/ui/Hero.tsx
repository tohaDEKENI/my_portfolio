'use client';

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import CVDownloader from "../CVDownloader";

type Props = {
    langue: string
};

// Hook machine à écrire avec répétition
function useTypewriter(words: string[], speed = 100, pause = 1500) {
    const [index, setIndex] = useState(0); // index du mot
    const [subIndex, setSubIndex] = useState(0); // index de la lettre
    const [forward, setForward] = useState(true); // écrire ou effacer
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        if (index >= words.length) {
            setIndex(0); // recommencer
            return;
        }

        if (forward) {
            if (subIndex < words[index].length) {
                setTimeout(() => {
                    setSubIndex(subIndex + 1);
                    setDisplayed(words[index].slice(0, subIndex + 1));
                }, speed);
            } else {
                setTimeout(() => setForward(false), pause); // pause avant effacement
            }
        } else {
            if (subIndex > 0) {
                setTimeout(() => {
                    setSubIndex(subIndex - 1);
                    setDisplayed(words[index].slice(0, subIndex - 1));
                }, speed / 2);
            } else {
                setForward(true);
                setIndex(index + 1);
            }
        }
    }, [subIndex, index, forward, words, speed, pause]);

    return displayed;
}

export default function Featured({ langue }: Props) {
    const downloadCV = () => {
        window.open("/cv.pdf", "_blank");
    };

    // Variantes d'animation
    const slideLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const slideUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
    });

    const fadeIn = (delay = 0) => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay } },
    });

    const scaleIn = (delay = 0) => ({
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay } },
    });

    // Liste des textes
    const words = langue === "Francais"
        ? ["Développeur Web", "Étudiant en Informatique", "Passionné de Tech"]
        : ["Web Developer", "Computer Science Student", "Tech Enthusiast"];

    const typewriterText = useTypewriter(words, 100, 1200);

    return (
        <section
            id="domicile"
            className="relative  flex flex-col-reverse md:flex-row items-center pt-32 md:pt-0 justify-center min-h-screen max-w-7xl mx-auto px-6 md:px-8 gap-12"
        >
            {/* Texte */}
            <motion.div
                className="flex-1 space-y-8 md:space-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
            >
                <motion.div variants={slideLeft} className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400">
                    Toha DEKENI
                </motion.div>

                <motion.div
                    variants={slideUp(0.2)}
                    className="text-2xl md:text-3xl font-semibold"
                >
                    {langue === "Francais" ? "Je suis " : "I'm "}
                    <span className="text-purple-600">{typewriterText}</span>
                    <span className="animate-pulse">|</span>
                </motion.div>

                <motion.p variants={slideUp(0.4)} className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
                    {langue === "Francais" ? "Étudiant en informatique | Développeur Web Full Stack | Passionné par la création de solutions web innovantes, l'optimisation des performances et la résolution de défis techniques | Toujours motivé par l'apprentissage des nouvelles technologies."
                        : "Computer Science Student | Full Stack Web Developer | Passionate about building innovative web solutions, optimizing performance, and solving technical challenges | Always motivated by learning new technologies."
                    }
                </motion.p>

                <motion.div variants={fadeIn(0.6)} className="flex flex-wrap gap-6 mt-4">
                    <CVDownloader langue={langue}/>
                </motion.div>

                <motion.div variants={fadeIn(0.8)} className="flex gap-6 mt-6">
                    <a href="https://www.linkedin.com/in/sabyoud-zohair-a5635920a/" target="_blank" className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        <Linkedin className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                    </a>
                    <a href="https://github.com/tohaDEKENI/" target="_blank" className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        <Github className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
                className="flex-1 flex justify-center md:justify-end"
                variants={scaleIn(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
            >
                <div className="w-80 h-80 md:w-[30rem] md:h-[30rem] rounded-xl overflow-hidden p-5">
                    <img
                        src="https://i.postimg.cc/XJ5M4P6Z/Whats-App-Image-2025-07-16-11-21-19-a0434ebe.jpg"
                        alt="avatar"
                        className="w-full h-full object-cover image"
                    />
                </div>
            </motion.div>

            {/* Scroll Down */}
            <div className="hidden  absolute bottom-6 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center text-gray-600 dark:text-gray-300 animate-bounce">
                <a href="#A propos" className="flex flex-col items-center gap-2">
                    <div className="text-3xl">🖱️</div>
                    <p className="text-base md:text-lg">Scroll Down</p>
                </a>
            </div>
        </section>
    );
}
