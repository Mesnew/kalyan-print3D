# Security Policy

## Mesures de sécurité implémentées

### Headers de sécurité HTTP
- **Strict-Transport-Security (HSTS)** : Force l'utilisation de HTTPS
- **X-Frame-Options** : Protection contre le clickjacking
- **X-Content-Type-Options** : Prévient le MIME type sniffing
- **X-XSS-Protection** : Protection contre les attaques XSS
- **Content-Security-Policy (CSP)** : Politique de sécurité du contenu
- **Referrer-Policy** : Contrôle des informations de référence
- **Permissions-Policy** : Restrictions des permissions du navigateur

### Bonnes pratiques
- Dependencies régulièrement mises à jour (npm audit fix)
- Mode strict React activé
- Cleanup approprié des ressources Three.js
- Pas de données sensibles exposées côté client
- Static site generation (SSG) pour toutes les pages

### Robots.txt et Sitemap
- Fichier robots.txt configuré
- Sitemap XML pour SEO

## Signaler une vulnérabilité

Si vous découvrez une faille de sécurité, veuillez nous contacter directement plutôt que de créer une issue publique.
