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

export default function Home() {
  const [langue, setLangue] = useState<string>("Anglais")

  return (
    <div>
      <Navbar langue={langue} setLangue={setLangue} />
      <Featured langue={langue} />
      <AboutPro langue={langue} />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}
