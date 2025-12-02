# 🎉 Conversion STEP → GLB : Configuré et Testé !

## ✅ Statut

La conversion de `K2_BODY.step.step` en `K2_BODY.glb` a été réalisée avec succès !

### Fichiers créés :
- ✅ `K2_BODY.obj` (1,1 Mo) - Fichier intermédiaire
- ✅ `K2_BODY.glb` (623 Ko) - **Fichier GLB final**

## 🚀 Utilisation Simple

Pour convertir n'importe quel fichier STEP en GLB :

```bash
./convert.sh votre_fichier.step
```

### Exemples :

```bash
# Conversion simple
./convert.sh model.step

# Conversion avec double extension
./convert.sh K2_BODY.step.step

# Conversion de plusieurs fichiers
for file in *.step; do
    ./convert.sh "$file"
done
```

## 🔧 Comment ça fonctionne

Le script `convert.sh` automatise 2 étapes :

1. **STEP → OBJ** avec FreeCAD
   - Importe le fichier CAO STEP
   - Génère un mesh 3D
   - Exporte en format OBJ

2. **OBJ → GLB** avec Blender
   - Importe le fichier OBJ
   - Exporte en format GLB (optimisé pour le web)

## 📁 Scripts disponibles

### Scripts principaux :
- `convert.sh` - **Script principal** (recommandé)
- `convert_obj_to_glb.py` - Conversion OBJ → GLB avec Blender

### Scripts auxiliaires (pour usage avancé) :
- `batch_convert.sh` - Conversion par lot avec détection automatique
- `convert_to_glb.py` - Conversion directe STEP → GLB (nécessite addon Blender)
- `convert_step_to_obj.py` - Conversion STEP → OBJ (ancienne version)
- `convert_step_freecad.py` - Conversion STEP → OBJ avec variables d'env
- `step_to_obj.sh` - Wrapper bash pour FreeCAD
- `convert_trimesh.sh` - Conversion avec Python/trimesh (support STEP limité)

## 🛠️ Dépendances Installées

- ✅ **Blender 5.0.0** - Pour la conversion OBJ → GLB
- ✅ **FreeCAD 1.0.2** - Pour la conversion STEP → OBJ
- ✅ **Python 3.13.7** avec trimesh (dans venv/) - Alternative Python

## 📊 Performance

Pour `K2_BODY.step.step` (2,8 Mo) :
- STEP → OBJ : ~5-10 secondes (13 004 faces)
- OBJ → GLB : <1 seconde
- **Taille finale GLB : 623 Ko** (compression ~78%)

## 💡 Conseils

### Qualité du mesh

Pour ajuster la qualité/taille du mesh, modifiez les paramètres FreeCAD dans `convert.sh` :

```python
# Haute qualité (plus de faces, fichier plus gros)
mesh = MeshPart.meshFromShape(
    Shape=shape,
    LinearDeflection=0.05,    # Réduire pour plus de détails
    AngularDeflection=0.3,    # Réduire pour plus de détails
    Relative=False
)

# Basse qualité (moins de faces, fichier plus petit)
mesh = MeshPart.meshFromShape(
    Shape=shape,
    LinearDeflection=0.2,     # Augmenter pour moins de détails
    AngularDeflection=0.8,    # Augmenter pour moins de détails
    Relative=False
)
```

### Nettoyer les fichiers intermédiaires

Si vous voulez seulement le fichier GLB final :

```bash
./convert.sh model.step && rm model.obj
```

## 🔍 Visualisation du GLB

Vous pouvez visualiser les fichiers GLB avec :

- **En ligne** : https://gltf-viewer.donmccurdy.com/
- **Blender** : File → Import → glTF 2.0 (.glb/.gltf)
- **Three.js** : Bibliothèque JavaScript pour intégration web
- **Babylon.js** : Moteur 3D pour le web

## ❓ FAQ

### Q: Comment convertir tous mes fichiers STEP ?

```bash
for file in *.step *.STEP; do
    [ -f "$file" ] && ./convert.sh "$file"
done
```

### Q: Le fichier GLB est trop gros ?

Réduisez le `LinearDeflection` dans le script (voir section Qualité du mesh).

### Q: Puis-je convertir des fichiers .stp ?

Oui ! Le script gère automatiquement les extensions .step et .stp.

### Q: Et les fichiers .MF mentionnés au début ?

Aucun fichier .mf n'a été trouvé dans le répertoire. Si vous avez ces fichiers :
1. Précisez leur emplacement
2. Indiquez quel logiciel les a créés
3. Je créerai un convertisseur adapté

## 🎯 Résumé

✅ **Blender réparé** (problème de dépendances ICU résolu)
✅ **FreeCAD installé** et configuré
✅ **Scripts de conversion** créés et testés
✅ **Conversion réussie** : K2_BODY.step.step → K2_BODY.glb

**Commande à retenir :** `./convert.sh votre_fichier.step`

---

**Besoin d'aide ?** Consultez les autres fichiers README ou les commentaires dans les scripts.
