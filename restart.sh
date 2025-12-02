#!/bin/bash

# Script de redémarrage du site Kalyan 3D Print
# Usage: ./restart.sh

echo "🔄 Redémarrage du site Kalyan 3D Print..."
echo ""

# Afficher le répertoire actuel
echo "📁 Répertoire: $(pwd)"
echo ""

# Vérifier si nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé. Êtes-vous dans le bon répertoire?"
    exit 1
fi

# Étape 1: Construction du site
echo "🔨 Étape 1/2: Construction du site (cela peut prendre quelques minutes)..."
NODE_OPTIONS="--max-old-space-size=2048" npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de la construction du site"
    exit 1
fi

echo "✅ Construction terminée avec succès"
echo ""

# Étape 2: Redémarrage de PM2
echo "🔄 Étape 2/2: Redémarrage de PM2..."
pm2 restart kalyan-3d-print

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du redémarrage de PM2"
    exit 1
fi

echo ""
echo "✅ Redémarrage terminé avec succès!"
echo ""

# Attendre quelques secondes et vérifier le statut
sleep 3
echo "📊 Statut de l'application:"
pm2 list | grep kalyan-3d-print

echo ""
echo "🌐 Le site est maintenant accessible sur le port 3003"
echo "   Local: http://localhost:3003"
