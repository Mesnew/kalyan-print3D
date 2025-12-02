import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Background3D from "@/components/Background3D";

export const metadata: Metadata = {
  title: "PROTOPRINT DYNAMICS - Impression 3D Professionnelle",
  description: "Impression 3D professionnelle FDM et SLA - Prototypage, petites séries, pièces techniques - CAO, gravure laser, usinage CNC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="relative">
        <Background3D />
        <Navigation />
        <main className="min-h-screen relative pt-16">
          {children}
        </main>
        <footer className="relative bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-3">PROTOPRINT DYNAMICS</h3>
                <p className="text-gray-400 text-sm">
                  Impression 3D FDM et SLA - Prototypage et petites séries
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/impression-3d" className="hover:text-white transition-colors">Technologie</a></li>
                  <li><a href="/imprimantes" className="hover:text-white transition-colors">Machines</a></li>
                  <li><a href="/galerie" className="hover:text-white transition-colors">Galerie</a></li>
                  <li><a href="/entreprise" className="hover:text-white transition-colors">À propos</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-sm">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/contact" className="hover:text-white transition-colors">Nous contacter</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
              <p>&copy; 2025 PROTOPRINT DYNAMICS - Impression 3D Professionnelle</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
