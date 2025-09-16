'use client';

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackgroundPoint() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // charge une version légère
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles-hero"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true,} }, // nombre de points
          color: { value: "#38bdf8" }, // couleur des points
          shape: { type: "circle" }, // forme = cercle
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 4 } }, // taille aléatoire
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: "out", // sortent du canvas
          },
          links: { enable: false }, // on enlève les lignes
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // repousser les points au survol
          },
          modes: { repulse: { distance: 100 } },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
