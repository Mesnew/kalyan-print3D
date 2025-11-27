# Documentation de Déploiement

## 🌐 Site en production

**URL:** https://3dprint.mesnew.fr

## 📋 Configuration du serveur

### Service systemd

Le site fonctionne comme un service systemd qui démarre automatiquement au démarrage du serveur.

**Fichier:** `/etc/systemd/system/3dprint-nextjs.service`

```bash
# Commandes utiles
sudo systemctl status 3dprint-nextjs.service   # Vérifier le statut
sudo systemctl restart 3dprint-nextjs.service  # Redémarrer le service
sudo systemctl stop 3dprint-nextjs.service     # Arrêter le service
sudo systemctl start 3dprint-nextjs.service    # Démarrer le service
sudo journalctl -u 3dprint-nextjs.service -f   # Voir les logs en temps réel
```

### Configuration Nginx

**Fichier:** `/etc/nginx/sites-available/3dprint.mesnew.fr`

Le site est configuré avec :
- Reverse proxy vers `localhost:3003`
- Certificat SSL Let's Encrypt
- Redirection automatique HTTP → HTTPS
- Support WebSocket pour le hot-reload

```bash
# Commandes utiles
sudo nginx -t                   # Tester la configuration
sudo systemctl reload nginx     # Recharger la configuration
sudo systemctl restart nginx    # Redémarrer Nginx
```

### Certificat SSL

- **Fournisseur:** Let's Encrypt via Certbot
- **Renouvellement:** Automatique (tous les 90 jours)
- **Fichiers:**
  - Certificate: `/etc/letsencrypt/live/3dprint.mesnew.fr/fullchain.pem`
  - Private Key: `/etc/letsencrypt/live/3dprint.mesnew.fr/privkey.pem`

```bash
# Renouveler manuellement (si besoin)
sudo certbot renew

# Voir les certificats installés
sudo certbot certificates
```

## 🚀 Déployer des modifications

### 1. Mettre à jour le code

```bash
cd /home/ubuntu/sites/website-3D-print-kalyan

# Faire vos modifications...
# Puis builder l'application
npm run build
```

### 2. Redémarrer le service

```bash
sudo systemctl restart 3dprint-nextjs.service
```

### 3. Vérifier que tout fonctionne

```bash
# Vérifier le statut du service
sudo systemctl status 3dprint-nextjs.service

# Tester localement
curl -I http://localhost:3003

# Tester en ligne
curl -I https://3dprint.mesnew.fr
```

## 🔧 Dépannage

### Le site ne charge pas

```bash
# 1. Vérifier le service Next.js
sudo systemctl status 3dprint-nextjs.service
sudo journalctl -u 3dprint-nextjs.service -n 50

# 2. Vérifier Nginx
sudo systemctl status nginx
sudo nginx -t

# 3. Vérifier que le port 3003 est en écoute
sudo netstat -tlnp | grep 3003
```

### Erreurs de build

```bash
# Nettoyer et rebuilder
cd /home/ubuntu/sites/website-3D-print-kalyan
rm -rf .next
npm run build
```

### Problème de certificat SSL

```bash
# Renouveler le certificat
sudo certbot renew --force-renewal -d 3dprint.mesnew.fr
sudo systemctl reload nginx
```

## 📊 Monitoring

### Voir les logs en temps réel

```bash
# Logs de l'application Next.js
sudo journalctl -u 3dprint-nextjs.service -f

# Logs Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Vérifier l'utilisation des ressources

```bash
# CPU et mémoire du service
sudo systemctl status 3dprint-nextjs.service

# Processus Node.js
ps aux | grep node
```

## 🔄 Backup

### Fichiers importants à sauvegarder

- Code source: `/home/ubuntu/sites/website-3D-print-kalyan/`
- Configuration Nginx: `/etc/nginx/sites-available/3dprint.mesnew.fr`
- Service systemd: `/etc/systemd/system/3dprint-nextjs.service`

### Commande de sauvegarde

```bash
# Créer une archive
tar -czf backup-3dprint-$(date +%Y%m%d).tar.gz \
  /home/ubuntu/sites/website-3D-print-kalyan \
  /etc/nginx/sites-available/3dprint.mesnew.fr \
  /etc/systemd/system/3dprint-nextjs.service
```

## 📝 Informations techniques

- **Framework:** Next.js 16.0.0
- **Runtime:** Node.js v23.8.0
- **Port interne:** 3003
- **Port public:** 443 (HTTPS), 80 (HTTP → redirigé vers HTTPS)
- **Serveur web:** Nginx 1.24.0
- **OS:** Ubuntu Linux

## 🔐 Sécurité

- ✅ HTTPS avec certificat SSL Let's Encrypt
- ✅ Redirection automatique HTTP → HTTPS
- ✅ Headers de sécurité configurés dans Nginx
- ✅ Service systemd isolé avec utilisateur `ubuntu`
- ✅ Renouvellement automatique des certificats SSL
