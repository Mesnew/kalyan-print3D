import Link from "next/link";

export default function Impression3DPage() {
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
              Technologies FDM et SLA
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              L'Impression 3D
            </h1>
            <p className="text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              La fabrication additive qui transforme vos concepts en réalité
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            Qu'est-ce que l'impression 3D ?
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              L'<strong className="text-gray-900">impression 3D</strong>, également appelée{" "}
              <strong className="text-gray-900">fabrication additive</strong>, est un procédé
              révolutionnaire qui crée des objets physiques en déposant des matériaux couche par
              couche, selon un modèle numérique 3D.
            </p>
            <p>
              Cette technologie permet de produire des formes complexes qui seraient impossibles
              ou très coûteuses à réaliser avec les méthodes de fabrication traditionnelles, tout
              en offrant une liberté de design inégalée.
            </p>
          </div>
        </div>
      </section>

      {/* Technologie FDM */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nos technologies d'impression
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              FDM et SLA - Deux technologies complémentaires pour tous vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* FDM */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-purple-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
                FDM
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Fused Deposition Modeling</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dépôt de filament thermoplastique fondu, couche par couche, pour créer des objets robustes et fonctionnels.
              </p>
              <div className="bg-purple-50 p-6 rounded-xl mb-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">±0.05 mm</div>
                <div className="text-sm text-gray-600">Précision d'impression</div>
              </div>
              <h4 className="font-bold text-gray-900 mb-3">✓ Points forts</h4>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Prototypage rapide et petites séries</li>
                <li>• Ajustable rapidité vs précision (buse 0,2 à 0,8 mm)</li>
                <li>• Large gamme de matériaux</li>
                <li>• Impression multicolore jusqu'à 12 couleurs</li>
              </ul>
            </div>

            {/* SLA */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-pink-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-bold mb-6">
                SLA
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Stéréolithographie</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Polymérisation de résine liquide par lumière UV, pour des pièces extrêmement détaillées avec un fini de surface très fin.
              </p>
              <div className="bg-pink-50 p-6 rounded-xl mb-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">±0.02 mm</div>
                <div className="text-sm text-gray-600">Précision d'impression</div>
              </div>
              <h4 className="font-bold text-gray-900 mb-3">✓ Points forts</h4>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Pièces très détaillées et finis ultra fins</li>
                <li>• Idéal pour maquettes et objets esthétiques</li>
                <li>• Pièces techniques de haute précision</li>
                <li>• Grand choix de couleurs et résine ESD</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-purple-100">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Principe FDM</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  La technologie <strong>FDM (Fused Deposition Modeling)</strong> consiste à faire fondre un filament thermoplastique
                  et à le déposer couche par couche pour créer l'objet selon un modèle 3D numérique.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Préparation du modèle</div>
                      <div className="text-sm text-gray-600">Fichier 3D découpé en couches par logiciel</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Extrusion du matériau</div>
                      <div className="text-sm text-gray-600">Filament fondu et déposé avec précision</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Construction couche par couche</div>
                      <div className="text-sm text-gray-600">Objet formé progressivement</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-purple-50 p-8 rounded-2xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">✓ Avantages</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Large gamme de matériaux
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Excellent rapport qualité/prix
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Pièces fonctionnelles robustes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Production rapide et flexible
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Grands volumes d'impression
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-8 rounded-2xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">🎯 Applications idéales</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Prototypage rapide
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Pièces de production
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Objets sur-mesure
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matériaux disponibles */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Matériaux disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une large gamme de matériaux pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Matériaux FDM */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
                <div className="text-6xl mb-6">🔷</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Matériaux FDM</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Matériaux polyvalents pour prototypage, pièces techniques et propriétés spécifiques
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>PLA</strong> - Facile à imprimer, écologique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>ABS</strong> - Résistance mécanique et thermique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>ASA</strong> - Résistance UV et intempéries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>PETG</strong> - Équilibre robustesse/flexibilité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>PETG-CF</strong> - Renforcé fibre de carbone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>PEHT</strong> - Haute température</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>PPS</strong> - Performance industrielle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>ESD</strong> - Protection électrostatique</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Matériaux SLA */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
                <div className="text-6xl mb-6">✨</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Résines SLA</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Résines haute précision pour pièces détaillées et finitions exceptionnelles
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Grand choix de couleurs</strong> - Personnalisez vos créations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Résine ESD noire</strong> - Protection électrostatique pour pièces techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Finitions ultra fines</strong> - Surface lisse et détails complexes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Précision ±0.02 mm</strong> - Pour maquettes et objets esthétiques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services complémentaires */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nos services complémentaires
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une offre complète pour concrétiser vos projets de A à Z
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CAO */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all h-full border border-gray-100">
                <div className="text-6xl mb-6">🖥️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Conception CAO</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nous concevons vos pièces sur logiciel de Conception Assistée par Ordinateur
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Du croquis au modèle 3D</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Conception fonctionnelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Optimisation pour l'impression</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Accompagnement du concept à la pièce finale</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gravure Laser */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all h-full border border-gray-100">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gravure laser</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Personnalisation et marquage de précision sur vos pièces
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Personnalisation de pièces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Gravure de logos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Textes et inscriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Marquages techniques ou décoratifs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Usinage CNC */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all h-full border border-gray-100">
                <div className="text-6xl mb-6">🔧</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Usinage CNC</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fabrication sur commande numérique pour projets complexes
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pièces usinées de précision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Matériaux non imprimables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Complément à l'impression 3D</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Projets hybrides complexes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Découvrez notre parc machine
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            5 imprimantes professionnelles FDM et SLA pour tous vos besoins
          </p>
          <Link
            href="/imprimantes"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-700 font-semibold rounded-2xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Voir le parc machine
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
