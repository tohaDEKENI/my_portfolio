'use client';

import React, { useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link
} from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { Download, Eye, User, Mail, Phone, MapPin, Globe, Languages, Code, GraduationCap, Briefcase, Heart } from "lucide-react";

// Styles PDF améliorés
const styles = StyleSheet.create({
  page: { 
    flexDirection: "row", 
    padding: 0, 
    fontFamily: "Helvetica", 
    backgroundColor: "#ffffff",
    fontSize: 10
  },
  leftCol: { 
    width: "35%", 
    backgroundColor: "#2563eb", 
    padding: 25, 
    color: "white",
    minHeight: "100vh"
  },
  rightCol: { 
    width: "65%", 
    padding: 25, 
    color: "#1f2937",
    backgroundColor: "#ffffff"
  },
  profileSection: {
    marginBottom: 25,
    textAlign: "center",
    paddingBottom: 20,
    borderBottom: "1px solid #3b82f6"
  },
  name: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 8,
    letterSpacing: 1
  },
  title: { 
    fontSize: 14, 
    marginBottom: 15,
    color: "#bfdbfe",
    fontStyle: "italic"
  },
  summary: {
    fontSize: 11,
    lineHeight: 1.4,
    textAlign: "justify",
    color: "#e5e7eb"
  },
  section: { 
    marginBottom: 20 
  },
  sectionHeader: { 
    fontSize: 16, 
    fontWeight: "bold", 
    marginBottom: 12,
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    paddingBottom: 5,
    borderBottom: "2px solid #3b82f6"
  },
  rightSectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1f2937",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    paddingBottom: 8,
    borderBottom: "2px solid #2563eb"
  },
  contactItem: { 
    fontSize: 11, 
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  contactIcon: {
    marginRight: 8,
    fontSize: 12
  },
  skillItem: { 
    marginBottom: 6, 
    fontSize: 11, 
    color: "#e5e7eb",
    paddingLeft: 15
  },
  skillCategory: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 5,
    color: "#ffffff"
  },
  languageItem: {
    marginBottom: 8,
    fontSize: 11,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  projectItem: {
    marginBottom: 15,
    paddingBottom: 12,
    borderBottom: "1px solid #e5e7eb"
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#2563eb"
  },
  projectDescription: {
    fontSize: 11,
    marginBottom: 6,
    lineHeight: 1.3,
    color: "#4b5563"
  },
  projectTech: {
    fontSize: 10,
    color: "#6b7280",
    fontStyle: "italic"
  },
  educationItem: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottom: "1px solid #e5e7eb"
  },
  educationTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1f2937"
  },
  educationDetails: {
    fontSize: 11,
    color: "#6b7280",
    marginBottom: 3
  },
  experienceItem: {
    marginBottom: 18,
    paddingBottom: 12,
    borderBottom: "1px solid #e5e7eb"
  },
  experienceTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#2563eb"
  },
  experienceCompany: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 3,
    color: "#1f2937"
  },
  experienceDate: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 6,
    fontStyle: "italic"
  },
  experienceDescription: {
    fontSize: 11,
    lineHeight: 1.3,
    color: "#4b5563"
  },
  interestItem: {
    fontSize: 11,
    marginBottom: 5,
    color: "#4b5563"
  }
});

const MyPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Colonne gauche */}
      <View style={styles.leftCol}>
        <View style={styles.profileSection}>
          <Text style={styles.name}>DEKENI TOHA</Text>
          <Text style={styles.title}>Développeur Full-Stack</Text>
          <Text style={styles.summary}>
            Développeur passionné avec 3 ans d'expérience dans la création d'applications web modernes. 
            Spécialisé en React, Node.js et bases de données. Toujours à la recherche de nouveaux défis techniques.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Contact</Text>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📍</Text>
            <Text>Casablanca, Maroc</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📧</Text>
            <Text>dekenitoha07@gmail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📞</Text>
            <Text>+212 681-870-979</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>🌐</Text>
            <Text>github.com/dekenitoha</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>💼</Text>
            <Text>linkedin.com/in/dekenitoha</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Langues</Text>
          <View style={styles.languageItem}>
            <Text>🇫🇷 Français</Text>
            <Text>Natif</Text>
          </View>
          <View style={styles.languageItem}>
            <Text>🇬🇧 Anglais</Text>
            <Text>Courant</Text>
          </View>
          <View style={styles.languageItem}>
            <Text>🇪🇸 Espagnol</Text>
            <Text>Intermédiaire</Text>
          </View>
          <View style={styles.languageItem}>
            <Text>🇩🇪 Allemand</Text>
            <Text>Débutant</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Compétences</Text>
          
          <Text style={styles.skillCategory}>Frontend</Text>
          <Text style={styles.skillItem}>• React.js & Next.js</Text>
          <Text style={styles.skillItem}>• TypeScript & JavaScript</Text>
          <Text style={styles.skillItem}>• HTML5 & CSS3</Text>
          <Text style={styles.skillItem}>• Tailwind CSS</Text>
          <Text style={styles.skillItem}>• Redux & Context API</Text>
          
          <Text style={styles.skillCategory}>Backend</Text>
          <Text style={styles.skillItem}>• Node.js & Express</Text>
          <Text style={styles.skillItem}>• Python & Django</Text>
          <Text style={styles.skillItem}>• RESTful APIs</Text>
          <Text style={styles.skillItem}>• GraphQL</Text>
          
          <Text style={styles.skillCategory}>Base de données</Text>
          <Text style={styles.skillItem}>• MongoDB & Mongoose</Text>
          <Text style={styles.skillItem}>• PostgreSQL & MySQL</Text>
          <Text style={styles.skillItem}>• Redis</Text>
          
          <Text style={styles.skillCategory}>Outils & DevOps</Text>
          <Text style={styles.skillItem}>• Git & GitHub</Text>
          <Text style={styles.skillItem}>• Docker</Text>
          <Text style={styles.skillItem}>• AWS & Vercel</Text>
          <Text style={styles.skillItem}>• Jest & Cypress</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Certifications</Text>
          <Text style={styles.skillItem}>• AWS Cloud Practitioner</Text>
          <Text style={styles.skillItem}>• MongoDB Developer</Text>
          <Text style={styles.skillItem}>• Google Analytics</Text>
        </View>
      </View>

      {/* Colonne droite */}
      <View style={styles.rightCol}>
        <View style={styles.section}>
          <Text style={styles.rightSectionHeader}>Expérience Professionnelle</Text>
          
          <View style={styles.experienceItem}>
            <Text style={styles.experienceTitle}>Développeur Full-Stack Junior</Text>
            <Text style={styles.experienceCompany}>TechCorp Solutions</Text>
            <Text style={styles.experienceDate}>Mars 2024 - Présent</Text>
            <Text style={styles.experienceDescription}>
              Développement d'applications web avec React et Node.js. Collaboration avec une équipe de 5 développeurs. 
              Amélioration des performances de 40% sur l'application principale. Mise en place de tests automatisés.
            </Text>
          </View>
          
          <View style={styles.experienceItem}>
            <Text style={styles.experienceTitle}>Stagiaire Développeur Web</Text>
            <Text style={styles.experienceCompany}>Digital Agency Maroc</Text>
            <Text style={styles.experienceDate}>Juin 2023 - Février 2024</Text>
            <Text style={styles.experienceDescription}>
              Création de sites web responsives pour des clients. Utilisation de WordPress et développement custom. 
              Formation aux bonnes pratiques du développement web.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.rightSectionHeader}>Projets Remarquables</Text>
          
          <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>Quiz Hub - Application Interactive</Text>
            <Text style={styles.projectDescription}>
              Plateforme de quiz en temps réel avec système de classement et chat. Interface moderne et intuitive 
              permettant aux utilisateurs de créer et partager leurs propres quiz.
            </Text>
            <Text style={styles.projectTech}>React, Node.js, Socket.io, MongoDB, Tailwind CSS</Text>
          </View>
          
          <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>E-Commerce Dashboard</Text>
            <Text style={styles.projectDescription}>
              Tableau de bord complet pour la gestion d'une boutique en ligne. Statistiques en temps réel, 
              gestion des produits et commandes, système d'authentification sécurisé.
            </Text>
            <Text style={styles.projectTech}>Next.js, TypeScript, Prisma, PostgreSQL, Chart.js</Text>
          </View>
          
          <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>Portfolio Personnel</Text>
            <Text style={styles.projectDescription}>
              Site web personnel présentant mes projets et compétences. Design moderne avec animations, 
              optimisé pour le SEO et les performances.
            </Text>
            <Text style={styles.projectTech}>Next.js, Tailwind CSS, Framer Motion, Vercel</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.rightSectionHeader}>Formation</Text>
          
          <View style={styles.educationItem}>
            <Text style={styles.educationTitle}>Licence en Informatique</Text>
            <Text style={styles.educationDetails}>Université Hassan II, Casablanca</Text>
            <Text style={styles.educationDetails}>2022 - 2025 (En cours) • Mention Bien</Text>
            <Text style={styles.experienceDescription}>
              Spécialisation en développement logiciel et bases de données. Projets académiques en Java, Python, et développement web.
            </Text>
          </View>
          
          <View style={styles.educationItem} >
            <Text style={styles.educationTitle} >Baccalauréat Scientifique</Text>
            <Text style={styles.educationDetails}>Lycée Al Khawarizmi, Casablanca</Text>
            <Text style={styles.educationDetails}>2022 • Option Sciences Mathématiques A</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.rightSectionHeader}>Centres d'intérêt</Text>
          <Text style={styles.interestItem}>📚 Veille technologique et apprentissage continu</Text>
          <Text style={styles.interestItem}>💡 Participation à des hackathons et concours de programmation</Text>
          <Text style={styles.interestItem}>🎨 UI/UX Design et prototypage</Text>
          <Text style={styles.interestItem}>🌐 Contribution à des projets open source</Text>
          <Text style={styles.interestItem}>🏃‍♂️ Course à pied et fitness</Text>
          <Text style={styles.interestItem}>🎮 Développement de jeux en JavaScript</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default function CV() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header avec animation */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dekeni Toha</h1>
                <p className="text-lg text-gray-600">Développeur Full-Stack</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>dekenitoha07@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+212 681-870-979</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mon CV Professionnel
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mon parcours, mes compétences et mes réalisations dans le développement web. 
            Téléchargez mon CV au format PDF pour en savoir plus.
          </p>
        </div>

        {/* Cards avec statistiques */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">Technologies maîtrisées</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600">Projets réalisés</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-2">3+</h3>
            <p className="text-gray-600">Années d'expérience</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Languages className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-2">4</h3>
            <p className="text-gray-600">Langues parlées</p>
          </div>
        </div>

        {/* Actions principales */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Télécharger mon CV
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              CV complet avec tous les détails de mon parcours professionnel, 
              mes compétences techniques et mes réalisations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PDFDownloadLink 
                document={<MyPDF />} 
                fileName="Dekeni_Toha_CV_Professionnel.pdf"
                className="no-underline"
              >
                {({ loading, error }) =>
                  loading ? (
                    <Button disabled className="w-64 h-12 text-base">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Génération en cours...
                    </Button>
                  ) : error ? (
                    <Button variant="destructive" className="w-64 h-12 text-base">
                      Erreur lors de la génération
                    </Button>
                  ) : (
                    <Button className="w-64 h-12 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger le CV PDF
                    </Button>
                  )
                }
              </PDFDownloadLink>
              
              <Button 
                variant="outline" 
                className="w-64 h-12 text-base border-2 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setShowPreview(!showPreview)}
              >
                <Eye className="w-5 h-5 mr-2" />
                {showPreview ? 'Masquer' : 'Aperçu'} du CV
              </Button>
            </div>
          </div>
        </div>

        {/* Aperçu conditionnel */}
        {showPreview && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 animate-in fade-in duration-500">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Aperçu du CV
            </h3>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>Nom:</strong> Dekeni Toha</p>
                <p><strong>Poste:</strong> Développeur Full-Stack</p>
                <p><strong>Localisation:</strong> Casablanca, Maroc</p>
                <p><strong>Expérience:</strong> 3+ années</p>
                <p><strong>Compétences clés:</strong> React.js, Node.js, TypeScript, MongoDB, AWS</p>
                <p><strong>Langues:</strong> Français (Natif), Anglais (Courant), Espagnol (Intermédiaire)</p>
                <p><strong>Formation:</strong> Licence en Informatique (En cours)</p>
              </div>
            </div>
          </div>
        )}

        {/* Footer avec liens sociaux */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Retrouvez-moi également sur :</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Globe className="w-4 h-4" />
              <span>Portfolio</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Code className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Briefcase className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}