'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Phone } from 'lucide-react'
import { useTheme } from 'next-themes'

type Props = {
    langue: string
}

export default function Footer({ langue }: Props) {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  // Couleurs dynamiques selon le thème
  const textColor = theme === 'light' ? '#374151' : '#d1d5db'
  const subTextColor = theme === 'light' ? '#6b7280' : '#9ca3af'
  const borderColor = theme === 'light' ? '#e5e7eb' : '#374151'
  const bgIcon = theme === 'light' ? '#e5e7eb' : '#1f2937'
  const hoverBg = '#14b8a6' // teal
  const hoverText = '#ffffff'

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/tohaDEKENI/' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/toha-dekeni-9b0599356/' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:dekenitoha097@gmail.com' },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.footer
      className="py-14 mt-24 z-50"
      style={{ color: textColor, borderTop: `1px solid ${borderColor}` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 z-50">

        {/* Bloc contact / À propos */}
        <div className="space-y-4 z-50">
          <h2 className="text-lg font-semibold" style={{ color: textColor }}>
            {langue === "Anglais" ? "About" : "À propos"}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: subTextColor }}>
            {langue === "Anglais"
              ? "Developer passionate about modern interfaces and user experience. Available for your custom web projects."
              : "Développeur passionné par les interfaces modernes et l'expérience utilisateur. Disponible pour vos projets web sur mesure."}
          </p>
          <div className="text-sm space-y-1">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> dekenitoha097@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +212 724-477160
            </p>
          </div>
        </div>

        {/* Bloc navigation rapide */}
        <div className="space-y-4 z-50">
          <h2 className="text-lg font-semibold" style={{ color: textColor }}>
            {langue === "Anglais" ? "Quick Navigation" : "Navigation"}
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#A propos" style={{ color: subTextColor }} className="hover:underline">
                {langue === "Anglais" ? "About" : "À propos"}
              </a>
            </li>
            <li>
              <a href="#Competence" style={{ color: subTextColor }} className="hover:underline">
                {langue === "Anglais" ? "Projects" : "Projets"}
              </a>
            </li>
            <li>
              <a href="#contact" style={{ color: subTextColor }} className="hover:underline">
                {langue === "Anglais" ? "Contact" : "Contact"}
              </a>
            </li>
            <li>
              <a href="/cv.pdf" style={{ color: subTextColor }} className="hover:underline">
                {langue === "Anglais" ? "Download CV" : "Télécharger CV"}
              </a>
            </li>
          </ul>
        </div>

        {/* Bloc réseaux sociaux */}
        <div className="space-y-4 z-50">
          <h2 className="text-lg font-semibold" style={{ color: textColor }}>
            {langue === "Anglais" ? "Social Networks" : "Réseaux sociaux"}
          </h2>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors"
                style={{ backgroundColor: bgIcon, color: textColor }}
                whileHover={{ scale: 1.2, backgroundColor: hoverBg, color: hoverText }}
                whileTap={{ scale: 0.95 }}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs z-50" style={{ color: subTextColor }}>
        © {currentYear} <span className="font-medium" style={{ color: textColor }}>Toha DEKENI</span>.{" "}
        {langue === "Anglais" ? "All rights reserved." : "Tous droits réservés"} 💙.
      </div>
    </motion.footer>
  )
}
