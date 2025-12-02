"use client";

import { Suspense } from "react";
import Link from "next/link";
import Scene3D from "@/components/Scene3D";
import RotatingCube from "@/components/RotatingCube";
import Printer3D from "@/components/Printer3D";
import BoatKeychain from "@/components/BoatKeychain";
import PhoneStand from "@/components/PhoneStand";
import RaspberryPiCase from "@/components/RaspberryPiCase";
import MechanicalGear from "@/components/MechanicalGear";

function LoadingFallback() {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center border border-purple-100">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-200 border-t-purple-600 mb-4"></div>
        <p className="text-gray-600 font-medium">Chargement du modèle 3D...</p>
      </div>
    </div>
  );
}

export default function GaleriePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Modèles 3D Interactifs
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Galerie 3D
            </h1>
            <p className="text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Explorez nos créations en 3D interactif - Utilisez votre souris pour faire pivoter les modèles
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl">
              <span className="text-2xl">💡</span>
              <span className="text-purple-100 font-medium">Cliquez et faites glisser pour interagir</span>
            </div>
          </div>
        </div>
      </section>

      {/* Imprimante 3D */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Notre Imprimante 3D
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modèle simplifié d'une imprimante 3D FDM avec plateau et extrudeur
            </p>
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-100">
              <Scene3D cameraPosition={[4, 3, 6]}>
                <Printer3D />
              </Scene3D>
            </div>
          </Suspense>
        </div>
      </section>

      {/* Cube rotatif */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Prototype Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exemple de forme géométrique de base en impression 3D
            </p>
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-100">
              <Scene3D>
                <RotatingCube />
              </Scene3D>
            </div>
          </Suspense>
        </div>
      </section>

      {/* Porte-clé bateau */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-sm font-semibold text-purple-700 mb-4">
              Exemple de réalisation
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Porte-clé Bateau
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Objet personnalisé pratique - Parfait pour un cadeau original ou un accessoire unique
            </p>
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-100">
              <Scene3D cameraPosition={[0, 1, 5]}>
                <BoatKeychain />
              </Scene3D>
            </div>
          </Suspense>
        </div>
      </section>

      {/* Support de téléphone */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
              Prototype fonctionnel
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Support de Téléphone Ajustable
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Design ergonomique avec encoche pour câble de charge - Stabilité optimale pour tous types de smartphones
            </p>
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-100">
              <Scene3D cameraPosition={[3, 2, 4]}>
                <PhoneStand />
              </Scene3D>
            </div>
          </Suspense>
        </div>
      </section>

      {/* Boîtier Raspberry Pi */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-700 mb-4">
              Boîtier technique
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Boîtier Raspberry Pi 4
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protection complète avec ventilation intégrée - Accès à tous les ports USB, HDMI, Ethernet et GPIO
            </p>
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-100">
              <Scene3D cameraPosition={[4, 2, 4]}>
                <RaspberryPiCase />
              </Scene3D>
            </div>
          </Suspense>
        </div>
      </section>

      {/* Engrenages mécaniques */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-sm font-semibold text-green-700 mb-4">
              Pièces mécaniques
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Système d'Engrenages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engrenages fonctionnels pour prototypage mécanique - Précision d'assemblage et transmission de mouvement
            </p>
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-100">
              <Scene3D cameraPosition={[0, 2, 6]}>
                <MechanicalGear />
              </Scene3D>
            </div>
          </Suspense>
        </div>
      </section>

      {/* Exemples de réalisations */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-20 text-center">
            Nos Réalisations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🎨",
                title: "Prototypes",
                desc: "Validation rapide de concepts et designs innovants",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                emoji: "🔧",
                title: "Pièces techniques",
                desc: "Composants fonctionnels et pièces de remplacement",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                emoji: "🎁",
                title: "Objets personnalisés",
                desc: "Créations uniques et cadeaux sur mesure",
                gradient: "from-pink-500 to-red-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all h-full border border-gray-100">
                  <div className="text-6xl mb-6 text-center">{item.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacités techniques */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
            Ce que nous pouvons créer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-10 rounded-3xl border border-purple-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Applications pratiques</h3>
              <ul className="space-y-4">
                {[
                  "Prototypage rapide pour validation de concepts",
                  "Pièces de remplacement sur-mesure",
                  "Supports et outils personnalisés",
                  "Maquettes architecturales",
                  "Objets décoratifs uniques"
                ].map((app, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-lg">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border border-green-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Avantages techniques</h3>
              <ul className="space-y-4">
                {[
                  "Impression multi-couleurs et multi-matériaux",
                  "Haute précision (±0.05 mm)",
                  "Volume d'impression jusqu'à 350mm³",
                  "Matériaux techniques haute performance",
                  "Finitions professionnelles"
                ].map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">→</span>
                    <span className="text-gray-700 text-lg">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Découvrez nos machines
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Explorez les spécifications techniques de notre équipement professionnel
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/imprimantes"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-purple-700 font-semibold rounded-2xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Voir les imprimantes
              <span>→</span>
            </Link>
            <Link
              href="/impression-3d"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-all"
            >
              En savoir plus sur la FDM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
