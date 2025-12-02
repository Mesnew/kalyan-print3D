#!/bin/bash
# Wrapper pour convertir STEP → OBJ avec FreeCAD

if [ $# -lt 1 ]; then
    echo "Usage: $0 <input.step> [output.obj]"
    exit 1
fi

INPUT="$(realpath "$1")"
OUTPUT="${2:-}"

if [ -z "$OUTPUT" ]; then
    # Générer automatiquement le nom de sortie
    BASENAME=$(basename "$INPUT")
    # Enlever toutes les extensions .step et .stp
    while [[ "$BASENAME" =~ \.(step|STEP|stp|STP)$ ]]; do
        BASENAME="${BASENAME%.*}"
    done
    OUTPUT="$(dirname "$INPUT")/$BASENAME.obj"
fi

OUTPUT="$(realpath -m "$OUTPUT")"

# Créer un script Python temporaire
TEMP_SCRIPT=$(mktemp /tmp/freecad_convert_XXXXXX.py)
echo "DEBUG: Temp script: $TEMP_SCRIPT"

cat > "$TEMP_SCRIPT" << 'PYTHON_EOF'
import sys
import os
from pathlib import Path

def convert():
    try:
        import FreeCAD
        import Part
        import Mesh
        import MeshPart
    except ImportError:
        print("Error: This script must be run with FreeCAD")
        return False

    # sys.argv[0] = 'freecadcmd', sys.argv[1] = script name
    # So we start from sys.argv[2] for actual arguments
    input_file = sys.argv[2] if len(sys.argv) > 2 else os.environ.get('INPUT_FILE')
    output_file = sys.argv[3] if len(sys.argv) > 3 else os.environ.get('OUTPUT_FILE')

    if not input_file or not output_file:
        print("Error: Input and output files required")
        return False

    input_path = Path(input_file)

    if not input_path.exists():
        print(f"Error: File {input_file} does not exist")
        return False

    output_path = Path(output_file)

    print(f"Converting STEP to OBJ: {input_path.name} -> {output_path.name}")

    try:
        # Import STEP file
        print(f"Importing {input_path.name}...")
        shape = Part.read(str(input_path))
        print(f"STEP file imported successfully")

        # Create mesh from shape
        print(f"Creating mesh...")
        mesh = MeshPart.meshFromShape(
            Shape=shape,
            LinearDeflection=0.1,
            AngularDeflection=0.523599,
            Relative=False
        )
        print(f"Mesh created with {mesh.CountFacets} faces")

        # Export to OBJ
        print(f"Exporting to {output_path.name}...")
        mesh.write(str(output_path))
        print(f"OBJ export successful!")

        print(f"Conversion complete! File created: {output_path}")

        return True

    except Exception as e:
        print(f"Error during conversion: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    result = convert()
    sys.exit(0 if result else 1)
PYTHON_EOF

# Exécuter le script avec FreeCAD
echo "============================================================"
echo "STEP → OBJ Conversion"
echo "Input:  $INPUT"
echo "Output: $OUTPUT"
echo "============================================================"
echo ""

export INPUT_FILE="$INPUT"
export OUTPUT_FILE="$OUTPUT"

# Exécuter FreeCADcmd avec le script temporaire (NE PAS passer INPUT/OUTPUT comme args!)
freecadcmd "$TEMP_SCRIPT" 2>&1

EXIT_CODE=${PIPESTATUS[0]}

# Nettoyer
echo "DEBUG: Keeping temp script at: $TEMP_SCRIPT (for debugging)"
# rm -f "$TEMP_SCRIPT"

# Vérifier si le fichier a été créé
if [ -f "$OUTPUT" ]; then
    echo ""
    echo "✓ Conversion successful!"
    echo "Output file: $OUTPUT"
    echo "File size: $(du -h "$OUTPUT" | cut -f1)"
    exit 0
else
    echo ""
    echo "✗ Conversion failed - output file not created"
    exit 1
fi
