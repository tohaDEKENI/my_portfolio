'use client'

import Navbar from "@/components/ui/Navbar";
import Featured from "@/components/ui/Hero";
import AboutPro from "@/components/ui/About";
import SkillsSection from "@/components/ui/SkillSection";
import ProjectsSection from "@/components/ui/Projects";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import ParticlesBackground from "@/components/Particule";
import ParticlesBackgroundPoint from "@/components/ParticulePoint";

export default function Home() {
  const [langue, setLangue] = useState<string>("Anglais")

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar langue={langue} setLangue={setLangue} />

      {/* Hero avec particules en lignes */}
      <section className="relative min-h-screen">
        <ParticlesBackground />  {/* lignes */}
        <Featured langue={langue} />
      </section>

      {/* About avec particules en points */}
      <section className="relative min-h-screen">
        <ParticlesBackgroundPoint />  {/* points */}
        <AboutPro langue={langue} />
      </section>

      {/* Skills */}
      <section className="relative min-h-screen">
        <SkillsSection langue={langue} />
      </section>

      {/* Projects */}
      <section className="relative min-h-screen">
        <ProjectsSection langue={langue} />
      </section>

      <section className="relative min-h-screen">
        <Contact langue={langue} />
        <Footer langue={langue} />

      </section>
      <ToastContainer />
    </div>

  );
}