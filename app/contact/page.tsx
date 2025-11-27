import Link from "next/link";

export default function ContactPage() {
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
              Site Vitrine Informatif
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              À propos
            </h1>
            <p className="text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'univers de l'impression 3D et nos machines
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-12 rounded-3xl shadow-2xl border border-purple-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Un site vitrine informatif</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Ce site a été créé pour présenter l'univers de <strong className="text-gray-900">l'impression 3D</strong> et
                partager les capacités de nos machines professionnelles.
              </p>
              <p className="font-semibold text-gray-900 text-xl">
                Vous y trouverez des informations sur :
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Nos imprimantes", desc: "Bambu Lab H2D (actuelle) et Creality K2 Plus (ancienne)" },
                  { label: "La technologie FDM", desc: "Comment fonctionne l'impression 3D" },
                  { label: "Les matériaux", desc: "Plastiques, Composites métal, Élastomères" },
                  { label: "Galerie 3D interactive", desc: "Visualisations 3D en temps réel" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                    <span className="text-purple-600 text-2xl flex-shrink-0">→</span>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">{item.label}</div>
                      <div className="text-gray-600">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📌</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Note importante</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ce site est uniquement <strong>informatif et éducatif</strong>. Il ne propose pas de
                    système de commande, de devis ou de paiement en ligne. Son objectif est de présenter
                    les technologies et capacités de l'impression 3D.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/imprimantes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all hover:scale-105"
              >
                Découvrir nos imprimantes
                <span>→</span>
              </Link>
              <Link
                href="/impression-3d"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-purple-300 text-purple-700 font-semibold rounded-2xl hover:bg-purple-50 transition-all"
              >
                En savoir plus sur la FDM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-20 text-center">
            Explorer le site
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                href: "/imprimantes",
                emoji: "🖨️",
                title: "Nos Imprimantes",
                desc: "Découvrez nos machines Bambu Lab H2D et Creality K2 Plus avec leurs spécifications complètes",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                href: "/impression-3d",
                emoji: "🔬",
                title: "Technologie FDM",
                desc: "Apprenez comment fonctionne l'impression 3D et les 3 familles de matériaux",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                href: "/galerie",
                emoji: "🎨",
                title: "Galerie 3D",
                desc: "Explorez notre galerie interactive avec des modèles 3D en temps réel",
                gradient: "from-pink-500 to-red-600"
              }
            ].map((card, idx) => (
              <Link key={idx} href={card.href} className="group relative block">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all h-full border border-gray-100">
                  <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">{card.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* À propos de Kalyan 3D Print */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
            Kalyan 3D Print
          </h2>
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 text-white p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-pink-300 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <p className="text-2xl text-purple-100 text-center mb-12 leading-relaxed">
                Un site vitrine créé pour partager la passion de l'impression 3D et présenter
                les capacités de machines professionnelles de haute qualité.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <div className="text-5xl mb-4 text-center">🎯</div>
                  <h4 className="text-2xl font-bold mb-4 text-center">Notre mission</h4>
                  <p className="text-purple-100 text-center leading-relaxed">
                    Informer et éduquer sur les possibilités de l'impression 3D moderne
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <div className="text-5xl mb-4 text-center">💡</div>
                  <h4 className="text-2xl font-bold mb-4 text-center">Notre approche</h4>
                  <p className="text-purple-100 text-center leading-relaxed">
                    Présentation détaillée des technologies, matériaux et machines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Commencez l'exploration
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Plongez dans l'univers de l'impression 3D et découvrez tout ce qui est possible
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all hover:scale-105"
            >
              Retour à l'accueil
              <span>→</span>
            </Link>
            <Link
              href="/galerie"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-purple-300 hover:bg-purple-50 transition-all"
            >
              Voir la galerie 3D
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
