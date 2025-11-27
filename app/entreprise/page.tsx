import Link from "next/link";

export default function EntreprisePage() {
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
              Site Vitrine
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              PROTOPRINT DYNAMICS
            </h1>
            <p className="text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Impression 3D professionnelle FDM et SLA - Prototypage et petites séries
            </p>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
            À propos de ce site
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">PROTOPRINT DYNAMICS</strong> est spécialisée dans l'impression 3D professionnelle,
              proposant des solutions FDM et SLA pour le prototypage, les petites séries et les pièces techniques.
            </p>
            <p>
              Nous mettons en avant nos <strong className="text-gray-900">capacités techniques</strong> : 5 imprimantes professionnelles,
              large gamme de matériaux, et services complémentaires (CAO, gravure laser, usinage CNC) pour des projets clés en main.
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 p-10 rounded-3xl border border-purple-100">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📌</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Note importante</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ce site est purement informatif et ne propose pas de services commerciaux,
                  de système de commande ou de paiement en ligne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-20 text-center">
            Objectifs du site
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "📚",
                title: "Technologies",
                desc: "Présenter les technologies FDM et SLA avec leurs avantages respectifs et applications idéales",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                emoji: "🖨️",
                title: "Parc machine",
                desc: "5 imprimantes professionnelles : Bambu Lab H2C, Creality K2 Plus, A1 Mini, et Elegoo Saturn 3",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                emoji: "💡",
                title: "Services +",
                desc: "CAO, gravure laser, usinage CNC - Solutions complètes pour vos projets clés en main",
                gradient: "from-pink-500 to-red-600"
              }
            ].map((obj, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${obj.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all h-full border border-gray-100">
                  <div className="text-6xl mb-6 text-center">{obj.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{obj.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre parc machine */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Notre parc machine
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              5 imprimantes professionnelles FDM et SLA pour tous types de projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FDM */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-10 rounded-3xl border-2 border-purple-200 shadow-lg">
              <h3 className="text-3xl font-bold text-purple-700 mb-6">4 imprimantes FDM</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-purple-100">
                  <div className="font-bold text-gray-900 mb-2">Bambu Lab H2C (×1)</div>
                  <div className="text-sm text-gray-600">Buses 0,2-0,8 mm - Haute précision ±0.05mm</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-purple-100">
                  <div className="font-bold text-gray-900 mb-2">Creality K2 Plus (×2)</div>
                  <div className="text-sm text-gray-600">Multicolore 12 couleurs - Prototypes & goodies</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-purple-100">
                  <div className="font-bold text-gray-900 mb-2">A1 Mini (×2)</div>
                  <div className="text-sm text-gray-600">18×18×18 cm - Production série, 4 couleurs</div>
                </div>
              </div>
              <div className="mt-6 bg-purple-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Technologie FDM</strong> - Dépôt de filament fondu pour prototypage rapide et petites séries
                </p>
              </div>
            </div>

            {/* SLA */}
            <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl border-2 border-pink-200 shadow-lg">
              <h3 className="text-3xl font-bold text-pink-700 mb-6">1 imprimante SLA</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-pink-100">
                  <div className="font-bold text-gray-900 mb-2">Elegoo Saturn 3 (×1)</div>
                  <div className="text-sm text-gray-600 mb-4">Stéréolithographie - Précision extrême ±0.02mm</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                      <span>Pièces très détaillées</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                      <span>Finitions ultra fines</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                      <span>Grand choix de couleurs résine</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                      <span>Résine ESD disponible</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-pink-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Technologie SLA</strong> - Polymérisation par UV pour pièces techniques et maquettes
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/imprimantes"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all hover:scale-105"
            >
              Découvrir le parc machine en détail
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu du site */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">
            Ce que vous trouverez sur ce site
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "🖨️",
                title: "Parc machine détaillé",
                desc: "5 imprimantes : Bambu Lab H2C, Creality K2 Plus, A1 Mini et Elegoo Saturn 3 avec leurs spécifications",
                color: "blue"
              },
              {
                emoji: "🔬",
                title: "Technologies FDM et SLA",
                desc: "Comment fonctionnent ces deux technologies d'impression 3D complémentaires",
                color: "purple"
              },
              {
                emoji: "🎨",
                title: "Matériaux FDM et SLA",
                desc: "PLA, ABS, ASA, PETG, PETG-CF, PEHT, PPS, ESD + résines colorées et ESD noire",
                color: "pink"
              },
              {
                emoji: "⚙️",
                title: "Services complémentaires",
                desc: "CAO, gravure laser, usinage CNC pour des projets clés en main",
                color: "indigo"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500 to-${item.color}-700 rounded-3xl blur opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{item.emoji}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            Explorez le site
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Découvrez toutes les sections pour en apprendre plus sur l'impression 3D professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/imprimantes"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-purple-700 font-semibold rounded-2xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Voir nos imprimantes
              <span>→</span>
            </Link>
            <Link
              href="/galerie"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-all"
            >
              Galerie 3D interactive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
