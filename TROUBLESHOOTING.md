# Guide de Dépannage

## Problème : Le site n'a pas de CSS (styles manquants)

### Symptômes
- Le site s'affiche mais sans couleurs ni styles
- La navigation et les boutons apparaissent en texte brut
- Les classes Tailwind sont présentes dans le HTML mais ne s'appliquent pas

### Cause
Incompatibilité entre Tailwind CSS v4 et Next.js 16 lors du build initial.

### Solution appliquée

1. **Downgrade vers Tailwind CSS v3** (version stable et compatible) :
```bash
npm uninstall tailwindcss @tailwindcss/postcss
npm install -D tailwindcss@3 postcss@latest autoprefixer@latest
```

2. **Mise à jour de `postcss.config.js`** :
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

3. **Rebuild de l'application** :
```bash
rm -rf .next
npm run build
```

4. **Redémarrage du service** :
```bash
sudo systemctl restart 3dprint-nextjs.service
```

### Vérification

Pour vérifier que le CSS fonctionne correctement :

```bash
# Vérifier la présence du fichier CSS
curl -I https://3dprint.mesnew.fr/_next/static/chunks/*.css

# Vérifier que le CSS contient les classes Tailwind
curl -s https://3dprint.mesnew.fr/_next/static/chunks/*.css | grep "bg-blue-600"
```

Le fichier CSS doit faire environ 11KB et contenir toutes les classes Tailwind avec leurs couleurs.

## Problème : Le site ne répond pas après un redémarrage

### Solution

```bash
# Vérifier le statut du service
sudo systemctl status 3dprint-nextjs.service

# Voir les logs
sudo journalctl -u 3dprint-nextjs.service -n 50

# Redémarrer le service
sudo systemctl restart 3dprint-nextjs.service

# Vérifier Nginx
sudo systemctl status nginx
sudo nginx -t
```

## Problème : Modifications non visibles après un déploiement

### Solution

```bash
cd /home/ubuntu/sites/website-3D-print-kalyan

# Rebuild l'application
npm run build

# Redémarrer le service
sudo systemctl restart 3dprint-nextjs.service

# Vider le cache du navigateur ou tester en mode incognito
```

## Problème : Erreur 502 Bad Gateway

### Cause possible
Le service Next.js n'est pas démarré ou a planté.

### Solution

```bash
# Vérifier que le service tourne
sudo systemctl status 3dprint-nextjs.service

# Vérifier que le port 3003 est en écoute
sudo netstat -tlnp | grep 3003

# Si le service est down, le redémarrer
sudo systemctl start 3dprint-nextjs.service
```

## Commandes utiles

### Logs en temps réel
```bash
# Logs de l'application Next.js
sudo journalctl -u 3dprint-nextjs.service -f

# Logs Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Redémarrer tous les services
```bash
sudo systemctl restart 3dprint-nextjs.service
sudo systemctl reload nginx
```

### Vérifier la santé du site
```bash
# Vérifier localement
curl -I http://localhost:3003

# Vérifier en ligne
curl -I https://3dprint.mesnew.fr
```

### Nettoyer le build
```bash
cd /home/ubuntu/sites/website-3D-print-kalyan
rm -rf .next
rm -rf node_modules/.cache
npm run build
```
