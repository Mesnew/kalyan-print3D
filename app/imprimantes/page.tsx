import Link from "next/link";

export default function ImprimantesPage() {
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
              Parc Machine Professionnel
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Notre parc machine
            </h1>
            <p className="text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              5 imprimantes 3D professionnelles pour tous types de projets
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos technologies d'impression
            </h2>
            <p className="text-lg text-gray-600">
              FDM et SLA - Deux technologies complémentaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FDM */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-10 rounded-3xl border-2 border-purple-200 shadow-lg">
              <h3 className="text-3xl font-bold text-purple-700 mb-4">Technologie FDM</h3>
              <p className="text-gray-600 mb-6">
                <strong>Fused Deposition Modeling</strong> - Dépôt de filament fondu couche par couche
              </p>
              <div className="bg-white p-6 rounded-xl mb-4 border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">±0.05 mm</div>
                <div className="text-sm text-gray-600">Précision d'impression</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Prototypage rapide et petites séries</li>
                <li>• Buses ajustables (0,2 à 0,8 mm)</li>
                <li>• Impression multicolore (jusqu'à 12 couleurs)</li>
                <li>• Production série automatisée</li>
              </ul>
            </div>

            {/* SLA */}
            <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl border-2 border-pink-200 shadow-lg">
              <h3 className="text-3xl font-bold text-pink-700 mb-4">Technologie SLA</h3>
              <p className="text-gray-600 mb-6">
                <strong>Stéréolithographie</strong> - Polymérisation de résine par UV
              </p>
              <div className="bg-white p-6 rounded-xl mb-4 border border-pink-100">
                <div className="text-3xl font-bold text-pink-600 mb-2">±0.02 mm</div>
                <div className="text-sm text-gray-600">Précision d'impression</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Pièces très détaillées</li>
                <li>• Finitions de surface ultra fines</li>
                <li>• Idéal pour maquettes esthétiques</li>
                <li>• Pièces techniques de précision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parc Machines - FDM */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Imprimantes FDM
            </h2>
            <p className="text-lg text-gray-600">
              4 imprimantes FDM pour répondre à tous vos besoins
            </p>
          </div>

          <div className="space-y-12">
            {/* Bambu Lab H2C */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-4">
                    Machine #1 - FDM
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Bambu Lab H2C</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Machine haute précision avec buses interchangeables pour allier qualité et rapidité
                  </p>

                  <div className="bg-purple-50 p-6 rounded-xl mb-6">
                    <h4 className="font-bold text-gray-900 mb-4">Caractéristiques clés</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <div>
                          <div className="font-semibold text-gray-900">Buses : 0,2 à 0,8 mm</div>
                          <div className="text-gray-600">Ajustez précision vs rapidité</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <div>
                          <div className="font-semibold text-gray-900">Quantité : 1 machine</div>
                          <div className="text-gray-600">Précision FDM : ±0.05 mm</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">✓ Usages principaux</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Prototypage ultra rapide (buse large)</li>
                      <li>• Impression très précise (buse fine)</li>
                      <li>• Association qualité & rapidité</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Capacités techniques</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">±0.05mm</div>
                        <div className="text-xs text-gray-500 mt-1">Précision</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">0,2-0,8</div>
                        <div className="text-xs text-gray-500 mt-1">Buses (mm)</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-blue-900">Polyvalence :</strong> Cette machine permet à la fois du prototypage ultra rapide avec des buses larges, et de l'impression très précise avec des buses fines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Creality K2 Plus */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-blue-200">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
                    Machines #2 & #3 - FDM
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Creality K2 Plus (×2)</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Impressions rapides, précises et multicolores pour prototypes et goodies
                  </p>

                  <div className="bg-blue-50 p-6 rounded-xl mb-6">
                    <h4 className="font-bold text-gray-900 mb-4">Caractéristiques clés</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <div>
                          <div className="font-semibold text-gray-900">Quantité : 2 machines</div>
                          <div className="text-gray-600">Technologie FDM</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <div>
                          <div className="font-semibold text-gray-900">Jusqu'à 12 couleurs</div>
                          <div className="text-gray-600">Impressions multicolores complexes</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">✓ Usages principaux</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Impression rapide et précise de prototypes</li>
                      <li>• Goodies personnalisés multicolores</li>
                      <li>• Demandes particulières créatives</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Capacités techniques</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">12</div>
                        <div className="text-xs text-gray-500 mt-1">Couleurs max</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">2</div>
                        <div className="text-xs text-gray-500 mt-1">Machines</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-xl">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-indigo-900">Polyvalence :</strong> Ces machines permettent des impressions multicolores jusqu'à 12 couleurs simultanées, idéales pour les prototypes complexes et les goodies personnalisés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* A1 Mini */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4">
                    Machines #4 & #5 - FDM
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">A1 Mini (×2)</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Machines automatisées pour production en série de petites pièces
                  </p>

                  <div className="bg-green-50 p-6 rounded-xl mb-6">
                    <h4 className="font-bold text-gray-900 mb-4">Caractéristiques clés</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <div>
                          <div className="font-semibold text-gray-900">Quantité : 2 machines</div>
                          <div className="text-gray-600">Production automatisée</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <div>
                          <div className="font-semibold text-gray-900">Volume : 18 × 18 × 18 cm</div>
                          <div className="text-gray-600">Idéal pour petites pièces</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <div>
                          <div className="font-semibold text-gray-900">4 couleurs simultanées</div>
                          <div className="text-gray-600">Impression multicolore</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">✓ Usages principaux</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Production en série automatisée</li>
                      <li>• Petites pièces (jusqu'à 18 cm³)</li>
                      <li>• Impressions multicolores (4 couleurs)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Capacités techniques</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">18³cm</div>
                        <div className="text-xs text-gray-500 mt-1">Volume</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">4</div>
                        <div className="text-xs text-gray-500 mt-1">Couleurs</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-emerald-900">Automatisation :</strong> Ces machines sont optimisées pour la production en série de petites pièces avec un processus automatisé et fiable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imprimante SLA */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Imprimante SLA
            </h2>
            <p className="text-lg text-gray-600">
              Haute précision pour pièces détaillées
            </p>
          </div>

          {/* Elegoo Saturn 3 */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-pink-200">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-bold mb-4">
                  Machine SLA
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">Elegoo Saturn 3</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Stéréolithographie haute précision pour pièces très détaillées
                </p>

                <div className="bg-pink-50 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-900 mb-4">Caractéristiques clés</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-pink-600 font-bold">•</span>
                      <div>
                        <div className="font-semibold text-gray-900">Précision : ±0.02 mm</div>
                        <div className="text-gray-600">Finitions ultra fines</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-pink-600 font-bold">•</span>
                      <div>
                        <div className="font-semibold text-gray-900">Technologie : SLA</div>
                        <div className="text-gray-600">Stéréolithographie par UV</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-pink-600 font-bold">•</span>
                      <div>
                        <div className="font-semibold text-gray-900">Machine : Elegoo Saturn 3</div>
                        <div className="text-gray-600">Référence professionnelle</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">✓ Usages principaux</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Pièces très détaillées</li>
                    <li>• Finis de surface très fins</li>
                    <li>• Pièces techniques de précision</li>
                    <li>• Maquettes détaillées</li>
                    <li>• Objets esthétiques</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-2xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Capacités techniques</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-pink-600">±0.02mm</div>
                      <div className="text-xs text-gray-500 mt-1">Précision</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-pink-600">SLA</div>
                      <div className="text-xs text-gray-500 mt-1">Technologie</div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Résines disponibles</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Grand choix de couleurs</strong> en résine</li>
                    <li>• <strong>Résine ESD noire</strong> disponible</li>
                    <li>• Protection électrostatique pour pièces techniques</li>
                  </ul>
                </div>

                <div className="bg-rose-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-rose-900">Précision extrême :</strong> La technologie SLA permet d'obtenir des détails impossibles à reproduire en FDM, avec une surface lisse nécessitant peu de post-traitement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matériaux disponibles */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Matériaux disponibles
            </h2>
            <p className="text-lg text-gray-600">
              Large gamme de matériaux pour tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Matériaux FDM */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-purple-100">
              <div className="text-5xl mb-6">🔷</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Matériaux FDM</h3>
              <p className="text-gray-600 mb-6">
                Prototypage, pièces techniques et propriétés spécifiques
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-gray-900 mb-1">PLA</div>
                  <div className="text-gray-600">Facile à imprimer, écologique</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-gray-900 mb-1">ABS</div>
                  <div className="text-gray-600">Résistance mécanique et thermique</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-gray-900 mb-1">ASA</div>
                  <div className="text-gray-600">Résistance UV et intempéries</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-gray-900 mb-1">PETG</div>
                  <div className="text-gray-600">Équilibre robustesse/flexibilité</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-gray-900 mb-1">PETG-CF</div>
                  <div className="text-gray-600">Renforcé fibre de carbone</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-gray-900 mb-1">PEHT</div>
                  <div className="text-gray-600">Haute température</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-gray-900 mb-1">PPS</div>
                  <div className="text-gray-600">Performance industrielle</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-gray-900 mb-1">ESD</div>
                  <div className="text-gray-600">Protection électrostatique</div>
                </div>
              </div>
            </div>

            {/* Matériaux SLA */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-pink-100">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Résines SLA</h3>
              <p className="text-gray-600 mb-6">
                Haute précision pour pièces détaillées et finitions exceptionnelles
              </p>
              <div className="space-y-4">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <div className="font-bold text-gray-900 mb-2">Grand choix de couleurs</div>
                  <div className="text-sm text-gray-600">Personnalisez vos créations avec une large palette de résines colorées</div>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <div className="font-bold text-gray-900 mb-2">Résine ESD noire</div>
                  <div className="text-sm text-gray-600">Protection électrostatique pour pièces techniques sensibles</div>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <div className="font-bold text-gray-900 mb-2">Finitions ultra fines</div>
                  <div className="text-sm text-gray-600">Surface lisse et détails complexes impossibles en FDM</div>
                </div>
              </div>
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
            Découvrez nos technologies
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Apprenez comment fonctionnent les technologies FDM et SLA, et explorez nos services complémentaires
          </p>
          <Link
            href="/impression-3d"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-700 font-semibold rounded-2xl hover:shadow-2xl transition-all hover:scale-105"
          >
            En savoir plus sur les technologies
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
