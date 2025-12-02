# Kalyan 3D Print - Site Web d'Impression 3D

Site web moderne présentant votre micro-entreprise d'impression 3D, construit avec Next.js et Three.js.

## 🚀 Fonctionnalités

- **Page d'accueil** : Présentation attractive de vos services
- **Page Impression 3D** : Explication détaillée des technologies et matériaux
- **Page Entreprise** : Présentation de votre micro-entreprise et vos valeurs
- **Galerie 3D interactive** : Modèles 3D interactifs avec Three.js
  - Imprimante 3D en rotation
  - Exemples de prototypes
  - Formes géométriques complexes
- **Page Contact** : Formulaire de demande de devis
- **Design responsive** : Adapté à tous les écrans (mobile, tablette, desktop)

## 🛠️ Technologies utilisées

- **Next.js 16** : Framework React pour le rendu côté serveur
- **TypeScript** : Typage statique pour un code plus robuste
- **Tailwind CSS v3** : Framework CSS utilitaire pour le styling
- **Three.js** : Bibliothèque 3D pour WebGL
- **React Three Fiber** : Renderer React pour Three.js
- **@react-three/drei** : Helpers pour React Three Fiber

## 📦 Installation et démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur `http://localhost:3000` (ou un autre port si 3000 est occupé).

## 📁 Structure du projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── impression-3d/     # Page technologie
│   ├── entreprise/        # Page entreprise
│   ├── galerie/           # Galerie 3D
│   ├── contact/           # Page contact
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── Navigation.tsx     # Barre de navigation
│   ├── Scene3D.tsx        # Container Three.js
│   ├── RotatingCube.tsx   # Cube 3D rotatif
│   ├── Printer3D.tsx      # Modèle d'imprimante 3D
│   └── GeometricShape.tsx # Forme géométrique
├── public/                # Fichiers statiques
├── tailwind.config.ts     # Configuration Tailwind
├── tsconfig.json          # Configuration TypeScript
└── next.config.js         # Configuration Next.js
```

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs principales sont définies dans `tailwind.config.ts` et utilisent la palette Tailwind. Pour changer la couleur principale (actuellement bleue) :

- Remplacez `blue-600`, `blue-700`, etc. par une autre couleur dans les fichiers des pages

### Ajouter vos informations

Modifiez les pages suivantes pour personnaliser le contenu :

- `app/entreprise/page.tsx` : Informations sur votre entreprise
- `app/contact/page.tsx` : Email, téléphone, horaires
- `app/layout.tsx` : Titre et description du site

### Ajouter des modèles 3D personnalisés

Pour ajouter vos propres modèles 3D :

1. Créez un nouveau composant dans `components/`
2. Utilisez `@react-three/fiber` pour créer votre modèle
3. Importez-le dans `app/galerie/page.tsx`

Exemple pour charger un fichier .GLB ou .GLTF :

```typescript
import { useGLTF } from '@react-three/drei';

function MyModel() {
  const { scene } = useGLTF('/models/votre-modele.glb');
  return <primitive object={scene} />;
}
```

## 🌐 Déploiement

### Vercel (Recommandé)

Le moyen le plus simple de déployer ce site Next.js :

1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez votre repository GitHub
3. Vercel détectera automatiquement Next.js et configurera le build

### Autres options

- **Netlify** : Compatible avec Next.js
- **VPS** : Utilisez `npm run build` puis `npm start`
- **Docker** : Créez une image Docker avec Node.js

## 📝 Notes importantes

- Les modèles 3D sont créés avec des formes géométriques de base
- Le formulaire de contact n'est pas encore connecté à un backend (à configurer)
- Les images peuvent être ajoutées dans le dossier `public/`

## 🔧 Prochaines étapes suggérées

- [ ] Connecter le formulaire de contact à un service email
- [ ] Ajouter vos vrais modèles 3D (fichiers .GLB/.GLTF)
- [ ] Ajouter des photos de vos réalisations
- [ ] Configurer Google Analytics
- [ ] Ajouter un blog pour partager vos créations
- [ ] Intégrer un système de paiement pour les commandes en ligne

## 📄 Licence

Ce projet est créé pour votre usage personnel et commercial.
