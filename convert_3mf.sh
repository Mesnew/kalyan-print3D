#!/bin/bash
# Script de conversion .3mf → GLB

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ $# -lt 1 ]; then
    echo "Usage: $0 <fichier.3mf>"
    echo "Exemple: $0 wankel-motor2_1.3mf"
    exit 1
fi

INPUT="$(realpath "$1")"
BASENAME=$(basename "$INPUT" .3mf)
OUTPUT="$(dirname "$INPUT")/$BASENAME.glb"

echo "╔════════════════════════════════════════════════════════╗"
echo "║         Convertisseur .3mf → GLB                       ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
echo "Fichier d'entrée : $INPUT"
echo "Fichier GLB      : $OUTPUT"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Conversion .3mf → GLB avec trimesh"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Activer l'environnement virtuel et exécuter la conversion
cd "$SCRIPT_DIR"
source venv/bin/activate

python3 << EOF
import trimesh
import sys
import os

input_file = "$INPUT"
output_file = "$OUTPUT"

try:
    print(f"📥 Chargement de $(basename "$INPUT")...")

    # Charger le fichier .3mf
    scene = trimesh.load(input_file)

    print(f"✓ Fichier .3mf chargé")

    if isinstance(scene, trimesh.Scene):
        print(f"✓ Scène chargée avec {len(scene.geometry)} géométrie(s)")

        # Compter le total de sommets et faces
        total_vertices = 0
        total_faces = 0

        for name, geom in scene.geometry.items():
            if isinstance(geom, trimesh.Trimesh):
                v = len(geom.vertices)
                f = len(geom.faces)
                total_vertices += v
                total_faces += f
                print(f"  • Pièce {name}: {v:,} sommets, {f:,} faces")

        print(f"\n📊 Total: {total_vertices:,} sommets, {total_faces:,} faces")
    else:
        print(f"✓ Mesh unique chargé: {len(scene.vertices)} sommets, {len(scene.faces)} faces")

    print(f"\n💾 Export vers $(basename "$OUTPUT")...")

    # Exporter en GLB
    scene.export(output_file, file_type='glb')

    if os.path.exists(output_file):
        size = os.path.getsize(output_file)
        print(f"✓ Export GLB réussi!")
        print(f"\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        print(f"✅ CONVERSION TERMINÉE AVEC SUCCÈS !")
        print(f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        print(f"\nFichier créé: {output_file}")
        print(f"Taille: {size:,} octets ({size/1024/1024:.2f} Mo)")
        sys.exit(0)
    else:
        print(f"\n✗ Le fichier de sortie n'a pas été créé")
        sys.exit(1)

except Exception as e:
    print(f"\n✗ Erreur: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)
EOF

exit_code=$?

deactivate

if [ $exit_code -eq 0 ]; then
    echo ""
    echo "Vous pouvez maintenant utiliser le fichier GLB pour la visualisation 3D."
    echo ""
else
    echo ""
    echo "✗ Échec de la conversion"
    exit 1
fi
