#!/bin/bash
# Script simple de conversion STEP → GLB

set -e

if [ $# -lt 1 ]; then
    echo "Usage: $0 <fichier.step>"
    echo "Exemple: $0 model.step"
    exit 1
fi

INPUT="$(realpath "$1")"
BASENAME=$(basename "$INPUT")

# Enlever toutes les extensions .step et .stp
while [[ "$BASENAME" =~ \.(step|STEP|stp|STP)$ ]]; do
    BASENAME="${BASENAME%.*}"
done

DIR=$(dirname "$INPUT")
OBJ_FILE="$DIR/$BASENAME.obj"
GLB_FILE="$DIR/$BASENAME.glb"

echo "╔════════════════════════════════════════════════════════╗"
echo "║         Convertisseur STEP → GLB                       ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
echo "Fichier d'entrée : $INPUT"
echo "Fichier OBJ      : $OBJ_FILE"
echo "Fichier GLB      : $GLB_FILE"
echo ""

# Étape 1: STEP → OBJ avec FreeCAD
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Étape 1/2: Conversion STEP → OBJ avec FreeCAD"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

cat > /tmp/step_to_obj_$$.py << 'EOF'
import sys, os
from pathlib import Path

input_file = os.environ.get('INPUT_FILE')
output_file = os.environ.get('OUTPUT_FILE')

if not input_file or not output_file:
    print("ERROR: Variables INPUT_FILE et OUTPUT_FILE requises")
    sys.exit(1)

try:
    import FreeCAD, Part, MeshPart

    print(f"📥 Import STEP: {Path(input_file).name}")
    shape = Part.read(input_file)
    print("✓ STEP importé")

    print("🔨 Création du mesh...")
    mesh = MeshPart.meshFromShape(Shape=shape, LinearDeflection=0.1, AngularDeflection=0.523599, Relative=False)
    print(f"✓ Mesh créé: {mesh.CountFacets} faces")

    print("💾 Export OBJ...")
    mesh.write(output_file)
    print(f"✓ OBJ créé: {Path(output_file).name}")

except Exception as e:
    print(f"✗ ERREUR: {e}")
    sys.exit(1)
EOF

INPUT_FILE="$INPUT" OUTPUT_FILE="$OBJ_FILE" freecadcmd /tmp/step_to_obj_$$.py 2>&1 | \
    grep -v "^FreeCAD" | grep -v "^(C)" | grep -v "^FreeCAD is free" | grep -v "^$" | grep -v "^saving" | grep -v "(%)"

rm -f /tmp/step_to_obj_$$.py

if [ ! -f "$OBJ_FILE" ]; then
    echo "✗ Échec: fichier OBJ non créé"
    exit 1
fi

echo ""

# Étape 2: OBJ → GLB avec Blender
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Étape 2/2: Conversion OBJ → GLB avec Blender"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

blender --background --python "$(dirname "$0")/convert_obj_to_glb.py" -- "$OBJ_FILE" "$GLB_FILE" 2>&1 | \
    grep -E "(^📥|^✓|^💾|^✅|^Fichier créé|Conversion.*→)" | grep -v "^Read" | grep -v "^Info"

if [ ! -f "$GLB_FILE" ]; then
    echo "✗ Échec: fichier GLB non créé"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ CONVERSION TERMINÉE AVEC SUCCÈS !"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Fichiers créés :"
echo "  • OBJ: $OBJ_FILE ($(du -h "$OBJ_FILE" | cut -f1))"
echo "  • GLB: $GLB_FILE ($(du -h "$GLB_FILE" | cut -f1))"
echo ""
echo "Vous pouvez maintenant utiliser le fichier GLB pour la visualisation 3D."
echo ""
