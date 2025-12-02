# Guide de Conversion STEP/MF vers GLB

Ce guide vous aide à convertir vos fichiers CAO (STEP, MF) en format GLB pour la visualisation 3D.

## 🔧 Problèmes Détectés

1. **Blender** : Installé mais problème de bibliothèque (`libicudata.so.78` manquante)
2. **FreeCAD** : Non installé

## 📋 Solutions Disponibles

### Solution 1: Réparer Blender (Recommandé)

Réinstaller Blender avec les dépendances correctes:

```bash
# Mettre à jour le système
sudo pacman -Syu

# Réinstaller Blender et ses dépendances
sudo pacman -S blender icu

# Tester Blender
blender --version
```

Ensuite, utilisez le script fourni:

```bash
blender --background --python convert_to_glb.py -- K2_BODY.step.step
```

### Solution 2: Installer FreeCAD + Blender (Workflow en 2 étapes)

FreeCAD peut lire les fichiers STEP et les convertir en OBJ, puis Blender convertit OBJ en GLB.

```bash
# Installer FreeCAD
sudo pacman -S freecad

# Étape 1: STEP → OBJ avec FreeCAD
freecadcmd convert_step_to_obj.py K2_BODY.step.step

# Étape 2: OBJ → GLB avec Blender (une fois réparé)
blender --background --python convert_obj_to_glb.py -- K2_BODY.obj
```

### Solution 3: Utiliser Python avec trimesh (Sans Blender)

Installer et utiliser des bibliothèques Python pour la conversion:

```bash
# Installer les dépendances
pip install trimesh[easy] pygltflib

# Utiliser le script de conversion
python3 convert_with_trimesh.py K2_BODY.step.step
```

### Solution 4: Utiliser un Convertisseur en Ligne

Si vous avez une connexion internet:

1. **CAD Exchanger** : https://cadexchanger.com/
2. **AnyConv** : https://anyconv.com/step-to-glb-converter/
3. **Aspose** : https://products.aspose.app/3d/conversion/step-to-glb

### Solution 5: Blender avec Docker

Si les problèmes de dépendances persistent:

```bash
# Utiliser Blender dans un conteneur Docker
docker run --rm -v $(pwd):/data nytimes/blender:latest \
  blender --background --python /data/convert_to_glb.py -- /data/K2_BODY.step.step
```

## 📁 Scripts Fournis

- `convert_to_glb.py` - Conversion STEP → GLB directe avec Blender
- `convert_step_to_obj.py` - Conversion STEP → OBJ avec FreeCAD
- `convert_obj_to_glb.py` - Conversion OBJ → GLB avec Blender
- `convert_with_trimesh.py` - Conversion avec Python pur (à créer)
- `batch_convert.sh` - Script de conversion par lot

## 🚀 Usage Rapide

Une fois Blender réparé ou FreeCAD installé:

```bash
# Conversion simple
./batch_convert.sh K2_BODY.step.step

# Conversion de tous les fichiers STEP
./batch_convert.sh *.step
```

## ⚠️ Notes sur les Fichiers .MF

Les fichiers `.mf` ne sont pas un format CAO standard. Veuillez préciser:
- Quel logiciel a créé ces fichiers?
- S'agit-il d'un format propriétaire?
- Avez-vous la documentation du format?

## 🆘 Support

En cas de problème, fournissez:
```bash
# Version du système
uname -a

# Versions des logiciels
blender --version
freecadcmd --version
python3 --version
```
