import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-sm text-purple-600 font-medium">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              Impression 3D Professionnelle
            </div>

            {/* Titre principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Donnez vie à<br />
              <span className="gradient-text-purple">vos idées</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies FDM et SLA haute précision.<br />
              Prototypage rapide, petites séries, pièces techniques et services complémentaires.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/imprimantes"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all"
              >
                Découvrir nos machines
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/galerie"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all"
              >
                Voir la galerie
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">±0.02mm</div>
                <div className="text-sm text-gray-500 mt-1">Précision SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5</div>
                <div className="text-sm text-gray-500 mt-1">Imprimantes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">12</div>
                <div className="text-sm text-gray-500 mt-1">Couleurs max</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matériaux Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Matériaux disponibles
            </h2>
            <p className="text-lg text-gray-600">
              Chaque projet mérite le matériau adapté
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Matériaux FDM */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🔷</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Matériaux FDM</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Large gamme de matériaux pour tous vos projets
              </p>
              <ul className="space-y-2 mb-4 text-sm text-gray-700">
                <li>• PLA, ABS, ASA</li>
                <li>• PETG, PETG-CF</li>
                <li>• PEHT, PPS, ESD</li>
              </ul>
              <Link href="/impression-3d" className="inline-flex items-center gap-1 text-purple-600 font-medium text-sm hover:gap-2 transition-all">
                En savoir plus <span>→</span>
              </Link>
            </div>

            {/* Matériaux SLA */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Résines SLA</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Haute précision pour pièces détaillées
              </p>
              <ul className="space-y-2 mb-4 text-sm text-gray-700">
                <li>• Grand choix de couleurs</li>
                <li>• Résine ESD noire</li>
                <li>• Finitions très fines</li>
              </ul>
              <Link href="/impression-3d" className="inline-flex items-center gap-1 text-purple-600 font-medium text-sm hover:gap-2 transition-all">
                En savoir plus <span>→</span>
              </Link>
            </div>

            {/* Services complémentaires */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Services +</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Solutions complètes pour vos projets
              </p>
              <ul className="space-y-2 mb-4 text-sm text-gray-700">
                <li>• Conception CAO</li>
                <li>• Gravure laser</li>
                <li>• Usinage CNC</li>
              </ul>
              <Link href="/impression-3d" className="inline-flex items-center gap-1 text-purple-600 font-medium text-sm hover:gap-2 transition-all">
                En savoir plus <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parc Machines Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre parc machine
            </h2>
            <p className="text-lg text-gray-600">
              5 imprimantes professionnelles pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Bambu Lab H2C */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200 hover:shadow-lg transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                Bambu Lab H2C
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Haute précision FDM
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Buses 0,2 à 0,8 mm - Prototypage ultra rapide et impression très précise
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-lg font-bold text-purple-600">±0.05mm</div>
                  <div className="text-xs text-gray-500">Précision</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-lg font-bold text-purple-600">1</div>
                  <div className="text-xs text-gray-500">Machine</div>
                </div>
              </div>
            </div>

            {/* Creality K2 Plus */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Creality K2 Plus (×2)
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Impression multicolore
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Jusqu'à 12 couleurs - Prototypes rapides et goodies personnalisés
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-lg font-bold text-blue-600">12</div>
                  <div className="text-xs text-gray-500">Couleurs</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-lg font-bold text-blue-600">2</div>
                  <div className="text-xs text-gray-500">Machines</div>
                </div>
              </div>
            </div>

            {/* A1 Mini */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                A1 Mini (×2)
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Production série
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                18×18×18 cm - Automatisées pour petites pièces en série, 4 couleurs
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-lg font-bold text-green-600">18³cm</div>
                  <div className="text-xs text-gray-500">Volume</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-lg font-bold text-green-600">2</div>
                  <div className="text-xs text-gray-500">Machines</div>
                </div>
              </div>
            </div>

            {/* Elegoo Saturn 3 SLA */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-200 hover:shadow-lg transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-4">
                Elegoo Saturn 3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Précision SLA extrême
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Stéréolithographie - Pièces très détaillées et finitions ultra fines
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-lg font-bold text-pink-600">±0.02mm</div>
                  <div className="text-xs text-gray-500">Précision</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-lg font-bold text-pink-600">1</div>
                  <div className="text-xs text-gray-500">Machine</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/imprimantes"
              className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all"
            >
              Découvrir le parc machine complet
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à concrétiser vos projets ?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Explorez notre galerie et découvrez ce qui est possible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/galerie"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-all"
            >
              Voir la galerie
              <span>→</span>
            </Link>
            <Link
              href="/entreprise"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
