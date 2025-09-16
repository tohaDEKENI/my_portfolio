"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function CV() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <Card className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 shadow-xl rounded-2xl overflow-hidden">

                {/* Colonne gauche */}
                <div className="bg-gray-900 text-white p-6 flex flex-col items-center">
                    {/* Photo */}
                    <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-white mb-4">
                        <Image
                            src="/profil.jpg" // mets ton image ici
                            alt="Photo"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Infos */}
                    <h2 className="text-xl font-bold text-center">Dekeni Toha</h2>
                    <p className="text-sm text-gray-300 text-center">Développeur Web</p>

                    <div className="mt-6 w-full">
                        <h3 className="text-lg font-semibold mb-2">Contact</h3>
                        <ul className="text-sm space-y-2">
                            <li>📍 Casablanca, Maroc</li>
                            <li>📧 dekenitoha07@gmail.com</li>
                            <li>📞 +212 681-870-979</li>
                            <li>🌐 www.reallygreatsite.com</li>
                        </ul>
                    </div>

                    <div className="mt-6 w-full">
                        <h3 className="text-lg font-semibold mb-2">Langues</h3>
                        <ul className="text-sm space-y-1">
                            <li>🇬🇧 Anglais - Courant</li>
                            <li>🇪🇸 Espagnol - Intermédiaire</li>
                        </ul>
                    </div>

                    <div className="mt-6 w-full">
                        <h3 className="text-lg font-semibold mb-2">Compétences</h3>
                        <ul className="text-sm space-y-1">
                            <li>✔ Langages de programmation</li>
                            <li>✔ Bases de données</li>
                            <li>✔ Systèmes d’exploitation</li>
                            <li>✔ Développement web</li>
                        </ul>
                    </div>

                    <div className="mt-6 w-full">
                        <h3 className="text-lg font-semibold mb-2">Centres d’intérêt</h3>
                        <ul className="text-sm space-y-1">
                            <li>📖 Lecture</li>
                            <li>💡 Technologies</li>
                            <li>🎨 Design</li>
                        </ul>
                    </div>
                </div>

                {/* Colonne droite */}
                <CardContent className="md:col-span-2 p-6">
                    {/* Titre */}
                    <h1 className="text-2xl font-bold border-b pb-2 mb-4">
                        Projets Personnels / Académiques
                    </h1>

                    {/* Expériences */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Développeur Full Stack</h2>
                        <p className="text-sm text-gray-500">Messagem, Paris | 2017 - Présent</p>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                            <li>Développement et maintenance d’applications web.</li>
                            <li>Collaboration avec les équipes UX/UI.</li>
                            <li>Optimisation des performances.</li>
                            <li>Mise en place de tests automatisés.</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Administrateur Système & Réseau</h2>
                        <p className="text-sm text-gray-500">Audio Stream, Lyon | 2013 - 2017</p>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                            <li>Administration des infrastructures réseau.</li>
                            <li>Implémentation de solutions de sécurité.</li>
                            <li>Suivi et gestion de projets d’infrastructure.</li>
                        </ul>
                    </div>

                    {/* Formations */}
                    <h1 className="text-2xl font-bold border-b pb-2 mb-4">Formations</h1>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Master en Informatique</h2>
                        <p className="text-sm text-gray-500">École Amédé Autran, Paris | 2010 - 2012</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">Licence en Informatique</h2>
                        <p className="text-sm text-gray-500">École Amédé Autran, Paris | 2007 - 2010</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
