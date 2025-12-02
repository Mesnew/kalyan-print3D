# Solutions pour Convertir STEP → GLB

## ✅ Solutions Testées et Résultats

### ❌ Blender Direct
**Statut** : Bloqué par problème de dépendances ICU
**Erreur** : `libicudata.so.78` manquante, conflit avec `brltty` et `harfbuzz-icu`

### ❌ Trimesh (Python)
**Statut** : Ne supporte pas STEP sans module cascadio (complexe)
**Résultat** : `No module named 'cascadio'`

---

## 🎯 Solutions Recommandées (par ordre de préférence)

### 1️⃣ FreeCAD (MEILLEURE SOLUTION) ⭐

FreeCAD est spécialement conçu pour les fichiers CAO STEP.

**Installation :**
```bash
sudo pacman -S freecad
```

**Utilisation :**
```bash
# Méthode 1 : Script Python FreeCAD
freecadcmd convert_step_to_obj.py K2_BODY.step.step

# Si Blender fonctionne, continuer avec :
blender --background --python convert_obj_to_glb.py -- K2_BODY.obj

# Méthode 2 : Script automatique (une fois Blender réparé)
./batch_convert.sh K2_BODY.step.step
```

**Avantages :**
- ✓ Support natif STEP excellent
- ✓ Pas de dépendances problématiques
- ✓ Conversion de haute qualité

---

### 2️⃣ Réparer Blender

Mettre à jour tous les paquets qui dépendent d'ICU en même temps.

**Commande à exécuter :**
```bash
sudo pacman -Syu brltty harfbuzz-icu icu blender
```

Cette commande mettra à jour :
- `icu` vers la version 78.1-1
- `brltty` et `harfbuzz-icu` vers des versions compatibles
- `blender` sera réinstallé

**Après la réparation :**
```bash
# Tester Blender
blender --version

# Convertir
./batch_convert.sh K2_BODY.step.step
```

---

### 3️⃣ Convertisseur en Ligne

**Avantages :** Aucune installation nécessaire
**Inconvénients :** Nécessite une connexion internet, limite de taille de fichier

**Sites recommandés :**

1. **CAD Exchanger** (Le meilleur pour STEP)
   - URL : https://cadexchanger.com/
   - Formats : STEP, IGES, STL, OBJ, GLB, GLTF, etc.
   - Gratuit avec inscription

2. **AnyConv**
   - URL : https://anyconv.com/step-to-glb-converter/
   - Gratuit, pas d'inscription
   - Upload → Convert → Download

3. **Aspose**
   - URL : https://products.aspose.app/3d/conversion/step-to-glb
   - Gratuit
   - Support batch conversion

**Instructions :**
1. Allez sur un des sites
2. Uploadez `K2_BODY.step.step`
3. Sélectionnez GLB comme format de sortie
4. Téléchargez le résultat

---

### 4️⃣ Blender avec Docker

Si les problèmes persistent, utilisez Blender dans un conteneur.

```bash
# Installer Docker si nécessaire
sudo pacman -S docker
sudo systemctl start docker

# Utiliser Blender dans Docker
docker run --rm -v $(pwd):/data nytimes/blender:latest \
  blender --background --python /data/convert_to_glb.py -- \
  /data/K2_BODY.step.step
```

---

## 🔍 Concernant les fichiers .MF

Aucun fichier `.mf` n'a été trouvé dans le répertoire actuel.

**Questions :**
- Quel logiciel a créé ces fichiers ?
- Où sont-ils situés ?
- S'agit-il d'un format propriétaire ?

Une fois que j'aurai plus d'informations, je pourrai créer un convertisseur approprié.

---

## 📊 Comparaison des Solutions

| Solution | Difficulté | Qualité | Rapidité | Recommandation |
|----------|-----------|---------|----------|----------------|
| FreeCAD | ⭐ Facile | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 🥇 **MEILLEUR** |
| Réparer Blender | ⭐⭐ Moyen | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 🥈 Bon |
| En ligne | ⭐ Facile | ⭐⭐⭐⭐ | ⭐⭐ | 🥉 Acceptable |
| Docker | ⭐⭐⭐ Difficile | ⭐⭐⭐⭐⭐ | ⭐⭐ | Derniers recours |

---

## 🚀 Action Immédiate Recommandée

**Option A** (la plus simple) :
```bash
sudo pacman -S freecad
freecadcmd convert_step_to_obj.py K2_BODY.step.step
```

**Option B** (si vous voulez réparer Blender) :
```bash
sudo pacman -Syu brltty harfbuzz-icu icu blender
blender --version
./batch_convert.sh K2_BODY.step.step
```

**Option C** (pas d'installation) :
Allez sur https://anyconv.com/step-to-glb-converter/

---

## 📝 Notes

- Les scripts créés : `convert_to_glb.py`, `convert_step_to_obj.py`, `convert_obj_to_glb.py`, `convert_trimesh.sh`, `batch_convert.sh`
- Environnement virtuel Python : `venv/` (avec trimesh installé)
- Documentation complète : `README_CONVERSION.md`

**Besoin d'aide ?** Dites-moi quelle solution vous préférez et je vous guiderai !
