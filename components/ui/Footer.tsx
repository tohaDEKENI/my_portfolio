'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Phone } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Footer() {
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
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/ZouhairSA' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/sabyoud-zohair-a5635920a/' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:sabyoudzo@gmail.com' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/' },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.footer
      className="py-14 mt-24"
      style={{ color: textColor, borderTop: `1px solid ${borderColor}` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Bloc contact / À propos */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold" style={{ color: textColor }}>À propos</h2>
          <p className="text-sm leading-relaxed" style={{ color: subTextColor }}>
            Développeur passionné par les interfaces modernes et l&apos;expérience utilisateur. Disponible pour vos projets web sur mesure.
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
        <div className="space-y-4">
          <h2 className="text-lg font-semibold" style={{ color: textColor }}>Navigation</h2>
          <ul className="text-sm space-y-2">
            <li><a href="#A propos" style={{ color: subTextColor }} className="hover:underline">À propos</a></li>
            <li><a href="#Competence" style={{ color: subTextColor }} className="hover:underline">Projets</a></li>
            <li><a href="#contact" style={{ color: subTextColor }} className="hover:underline">Contact</a></li>
            <li><a href="/cv.pdf" style={{ color: subTextColor }} className="hover:underline">Télécharger CV</a></li>
          </ul>
        </div>

        {/* Bloc réseaux sociaux */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold" style={{ color: textColor }}>Réseaux sociaux</h2>
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
      <div className="mt-12 text-center text-xs" style={{ color: subTextColor }}>
        © {currentYear} <span className="font-medium" style={{ color: textColor }}>Toha DEKENI</span>. Tous droits réservés.
      </div>
    </motion.footer>
  )
}
