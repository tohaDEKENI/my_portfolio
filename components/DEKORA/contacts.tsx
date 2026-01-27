'use client';
import {

    Mail,
    Phone,
    MapPin,


} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type DataForm = {
    name: string,
    email: string,
    message: string

}

type Props = {
    formData: DataForm,
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handleSubmit:() => void,
    formStatus:string
}

const Contacts = ({ formData, handleInputChange,handleSubmit,formStatus }: Props) => {
    return (
        <>
            {/* Section Contact */}
            <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
                {/* Effet de particules flottantes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black rounded-full animate-float"></div>
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gray-400 rounded-full animate-float animation-delay-1000"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-black rounded-full animate-float animation-delay-2000"></div>
                    <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-gray-300 rounded-full animate-float animation-delay-500"></div>
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    {/* En-tête magique */}
                    <div className="text-center mb-20 animate-fade-in">
                        <div className="inline-flex items-center justify-center gap-3 mb-6">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em]">05</span>
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
                        </div>

                        <h2 className="text-6xl sm:text-7xl font-bold mb-6 relative inline-block">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-600 to-black animate-gradient">
                                Créons ensemble
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Transformez votre vision en réalité. Chaque conversation est le début d'une aventure extraordinaire.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                        {/* Colonne gauche - Infos magiques */}
                        <div className="lg:col-span-2 space-y-6 animate-fade-in-up animation-delay-200">

                            {/* Carte Email avec effet glassmorphism */}
                            <a
                                href="mailto:dekenitoha097@gmail.com"
                                className="group block"
                            >
                                <div className="relative p-6 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-3xl hover:border-black hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    {/* Effet de brillance au survol */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    <div className="relative flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</div>
                                            <div className="font-bold text-black text-sm group-hover:translate-x-1 transition-transform duration-300">
                                                dekenitoha097@gmail.com
                                            </div>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* Carte Téléphone */}
                            <a
                                href="tel:+212724477160"
                                className="group block"
                            >
                                <div className="relative p-6 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-3xl hover:border-black hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    <div className="relative flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                                            <Phone className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Téléphone</div>
                                            <div className="font-bold text-black text-sm group-hover:translate-x-1 transition-transform duration-300">
                                                +212 724-477160
                                            </div>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* Carte Localisation */}
                            <div className="relative p-6 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center shadow-lg">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Localisation</div>
                                        <div className="font-bold text-black text-sm">
                                            Casablanca, Maroc
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card avec animation de pulsation */}
                            <div className="relative p-6 bg-gradient-to-br from-black to-gray-800 rounded-3xl overflow-hidden group">
                                {/* Cercle animé en arrière-plan */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-white font-bold text-sm uppercase tracking-wider">Disponible maintenant</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Temps de réponse moyen : <strong className="text-white">moins de 24h</strong>
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Colonne droite - Formulaire magique */}
                        <div className="lg:col-span-3 animate-fade-in-up animation-delay-400">
                            <div className="relative">
                                {/* Effet de halo derrière le formulaire */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-white to-gray-200 rounded-3xl blur-2xl opacity-30"></div>

                                <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-10 hover:border-black hover:shadow-2xl transition-all duration-500">
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-bold text-black mb-3 flex items-center gap-3">
                                            <span>Envoyez un message</span>
                                            <span className="text-2xl">✨</span>
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Racontez-nous votre projet. Plus vous êtes précis, plus nous pourrons vous aider efficacement.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Nom et Email en grille */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <Label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                                    <span>Nom complet</span>
                                                    <span className="text-red-500">*</span>
                                                </Label>
                                                <div className="relative group">
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        placeholder="Jean Dupont"
                                                        className="border-2 border-gray-200 focus:border-black rounded-2xl h-14 pl-12 bg-gray-50 focus:bg-white transition-all duration-300 text-base group-hover:border-gray-300"
                                                    />
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <Label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                                    <span>Email</span>
                                                    <span className="text-red-500">*</span>
                                                </Label>
                                                <div className="relative group">
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="jean.dupont@example.com"
                                                        className="border-2 border-gray-200 focus:border-black rounded-2xl h-14 pl-12 bg-gray-50 focus:bg-white transition-all duration-300 text-base group-hover:border-gray-300"
                                                    />
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                        <Mail className="w-5 h-5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-3">
                                            <Label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                                <span>Votre message</span>
                                                <span className="text-red-500">*</span>
                                            </Label>
                                            <div className="relative">
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder="Bonjour ! J'aimerais discuter d'un projet...&#10;&#10;Décrivez votre projet, vos objectifs, votre timeline..."
                                                    rows={8}
                                                    className="border-2 border-gray-200 focus:border-black rounded-2xl resize-none bg-gray-50 focus:bg-white transition-all duration-300 text-base hover:border-gray-300 pt-4"
                                                />
                                                <div className="flex justify-between items-center mt-2 px-2">
                                                    <span className="text-xs text-gray-400">Minimum 20 caractères</span>
                                                    <span className={`text-xs font-medium ${formData.message.length >= 20 ? 'text-green-600' : 'text-gray-400'}`}>
                                                        {formData.message.length} / 20
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bouton magique */}
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={formData.message.length < 20}
                                            className="w-full bg-gradient-to-r from-black via-gray-800 to-black hover:from-gray-800 hover:via-black hover:to-gray-800 text-white py-7 text-lg font-bold rounded-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-3">
                                                <span>Envoyer le message</span>
                                                <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                            </span>
                                            {/* Effet de vague au clic */}
                                            <div className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 rounded-2xl transition-transform duration-300"></div>
                                        </Button>

                                        {formStatus === 'success' && (
                                            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl animate-fade-in relative overflow-hidden">
                                                {/* Confettis animés */}
                                                <div className="absolute inset-0 pointer-events-none">
                                                    <div className="absolute top-0 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-confetti"></div>
                                                    <div className="absolute top-0 left-3/4 w-2 h-2 bg-emerald-400 rounded-full animate-confetti animation-delay-200"></div>
                                                </div>

                                                <div className="relative flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 animate-bounce-once">
                                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-green-900 mb-1 flex items-center gap-2">
                                                            Message envoyé avec succès !
                                                            <span className="text-xl">🎉</span>
                                                        </h4>
                                                        <p className="text-sm text-green-700">Nous vous répondrons très bientôt.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Note magique */}
                                        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            <span>Vos données sont sécurisées et confidentielles</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contacts;