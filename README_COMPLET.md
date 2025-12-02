# 🎉 Guide Complet de Conversion 3D

## ✅ Conversions Disponibles

Vous pouvez maintenant convertir les formats suivants en GLB :

### 1. STEP → GLB (Fichiers CAO)
```bash
./convert.sh fichier.step
```
**Exemple réussi :** `K2_BODY.step.step` → `K2_BODY.glb` (623 Ko)

### 2. 3MF → GLB (Fichiers d'impression 3D)
```bash
./convert_3mf.sh fichier.3mf
```
**Exemple réussi :** `wankel-motor2_1.3mf` → `wankel-motor2_1.glb` (3,2 Mo)

---

## 📊 Résultats des Conversions

### K2_BODY (STEP)
- **Format source :** STEP (2,8 Mo)
- **Format final :** GLB (623 Ko)
- **Méthode :** STEP → OBJ (FreeCAD) → GLB (Blender)
- **Mesh :** 13 004 faces

### Wankel Motor (3MF)
- **Format source :** 3MF (3,6 Mo)
- **Format final :** GLB (3,2 Mo)
- **Méthode :** 3MF → GLB (trimesh/Python)
- **Contenu :** 11 pièces, 181 914 faces

---

## 🛠️ Scripts Disponibles

### Scripts Principaux

| Script | Usage | Format |
|--------|-------|--------|
| `convert.sh` | Fichiers STEP/CAO | `.step`, `.stp` |
| `convert_3mf.sh` | Fichiers 3MF | `.3mf` |

### Scripts Intermédiaires

| Script | Description |
|--------|-------------|
| `convert_obj_to_glb.py` | OBJ → GLB (Blender) |
| `convert_3mf_to_glb.py` | 3MF → GLB (Blender, nécessite addon) |
| `step_to_obj.sh` | STEP → OBJ (FreeCAD) |

---

## 🚀 Utilisation Rapide

### Convertir un fichier STEP
```bash
./convert.sh model.step
```

### Convertir un fichier 3MF
```bash
./convert_3mf.sh model.3mf
```

### Convertir tous les fichiers d'un dossier
```bash
# Tous les STEP
for file in *.step; do ./convert.sh "$file"; done

# Tous les 3MF
for file in *.3mf; do ./convert_3mf.sh "$file"; done
```

---

## 📦 Dépendances Installées

- ✅ **Blender 5.0.0** - Conversion OBJ → GLB
- ✅ **FreeCAD 1.0.2** - Conversion STEP → OBJ
- ✅ **Python 3.13.7** - Scripts de conversion
- ✅ **trimesh** (venv) - Conversion 3MF → GLB

---

## 🔍 Formats Supportés

### Entrée
- ✅ `.step` / `.stp` (Fichiers CAO)
- ✅ `.3mf` (Fichiers impression 3D)
- ✅ `.obj` (Wavefront OBJ)

### Sortie
- ✅ `.glb` (GL Transmission Format Binary)
- ✅ `.obj` (fichier intermédiaire)

---

## 💡 Conseils et Astuces

### Qualité du Mesh (STEP)

Pour ajuster la qualité lors de la conversion STEP, éditez `convert.sh` :

```python
# Haute qualité (plus de détails, fichier plus gros)
LinearDeflection=0.05
AngularDeflection=0.3

# Basse qualité (moins de détails, fichier plus petit)
LinearDeflection=0.2
AngularDeflection=0.8
```

### Visualiser les fichiers GLB

**En ligne :**
- https://gltf-viewer.donmccurdy.com/
- https://sandbox.babylonjs.com/
- https://threejs.org/editor/

**Applications :**
- Blender (File → Import → glTF 2.0)
- Microsoft 3D Viewer (Windows)
- Preview (macOS)

### Nettoyer les fichiers intermédiaires

```bash
# Supprimer les fichiers OBJ intermédiaires
rm *.obj

# Garder seulement les GLB
find . -type f ! -name "*.glb" -name "*.obj" -delete
```

---

## 📖 Workflow Complet

### Conversion STEP
```
STEP (CAO)
    ↓ FreeCAD
OBJ (Mesh 3D)
    ↓ Blender
GLB (Web 3D)
```

### Conversion 3MF
```
3MF (Impression 3D)
    ↓ trimesh
GLB (Web 3D)
```

---

## 🎯 Exemples Pratiques

### Convertir et visualiser immédiatement
```bash
./convert.sh model.step
xdg-open model.glb  # Ouvre avec l'app par défaut
```

### Conversion par lot avec progression
```bash
#!/bin/bash
total=$(ls *.step | wc -l)
current=0

for file in *.step; do
    ((current++))
    echo "[$current/$total] Conversion de $file..."
    ./convert.sh "$file"
done

echo "✅ $total fichiers convertis !"
```

### Convertir et compresser
```bash
./convert.sh model.step
gzip -k model.glb  # Crée model.glb.gz
```

---

## ❓ FAQ

### Q: Puis-je convertir d'autres formats ?

**Formats déjà supportés :**
- `.step`, `.stp` → ✅
- `.3mf` → ✅
- `.obj` → ✅

**Pour ajouter un format :**
1. Vérifiez si Blender ou FreeCAD le supporte
2. Créez un script basé sur `convert.sh`
3. Ou demandez-moi !

### Q: Le fichier GLB est trop gros ?

**Solutions :**
1. Réduire la qualité du mesh (voir section Qualité)
2. Compresser avec gzip : `gzip -k fichier.glb`
3. Utiliser Draco compression (Blender supporte déjà)

### Q: Erreur lors de la conversion STEP ?

**Vérifications :**
```bash
# FreeCAD installé ?
which freecadcmd

# Blender fonctionne ?
blender --version

# Fichier STEP valide ?
file votre_fichier.step
```

### Q: Erreur lors de la conversion 3MF ?

```bash
# Vérifier que trimesh est installé
source venv/bin/activate
python -c "import trimesh; print(trimesh.__version__)"
deactivate
```

---

## 📝 Structure des Fichiers

```
kalyan-print3D-main/
├── convert.sh              # Script principal STEP → GLB
├── convert_3mf.sh          # Script principal 3MF → GLB
├── convert_obj_to_glb.py   # Convertisseur OBJ → GLB
├── convert_3mf_to_glb.py   # Convertisseur 3MF → GLB (Blender)
├── step_to_obj.sh          # Convertisseur STEP → OBJ
├── venv/                   # Environnement Python avec trimesh
├── K2_BODY.step.step       # Exemple fichier STEP
├── K2_BODY.glb             # Résultat conversion STEP
├── wankel-motor2_1.3mf     # Exemple fichier 3MF
├── wankel-motor2_1.glb     # Résultat conversion 3MF
├── README_COMPLET.md       # Ce fichier
└── README_FINAL.md         # Guide STEP uniquement
```

---

## 🎊 Résumé

✅ **2 formats convertis avec succès**
- STEP → GLB (via FreeCAD + Blender)
- 3MF → GLB (via trimesh/Python)

✅ **Scripts automatisés créés**
- `convert.sh` pour STEP
- `convert_3mf.sh` pour 3MF

✅ **2 conversions réussies**
- K2_BODY.step.step → K2_BODY.glb
- wankel-motor2_1.3mf → wankel-motor2_1.glb

**Commandes à retenir :**
```bash
./convert.sh fichier.step    # STEP → GLB
./convert_3mf.sh fichier.3mf # 3MF → GLB
```

---

**Besoin d'aide ?** Tous les scripts sont commentés et incluent des messages d'erreur détaillés.
