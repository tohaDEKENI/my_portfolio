'use client';

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // charge une version légère
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles-contact"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true} },
          color: { value: "#38bdf8" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 1, direction: "none", outModes: "out" },
          links: { enable: true, distance: 150, color: "#38bdf8", opacity: 0.4, width: 1 }, // ajoute les lignes
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
        detectRetina: true,
      }}
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
