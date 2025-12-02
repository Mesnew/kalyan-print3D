#!/usr/bin/env python3
"""
Script FreeCAD pour convertir STEP en OBJ (puis utilisable dans Blender)
Usage: freecadcmd convert_step_to_obj.py <input.step> [output.obj]
"""

import sys
import os
from pathlib import Path

def convert_step_to_obj(input_file, output_file=None):
    """Convertir STEP vers OBJ avec FreeCAD"""
    try:
        import FreeCAD
        import Part
        import Mesh
        import MeshPart
    except ImportError:
        print("✗ Erreur: Ce script doit être exécuté avec FreeCAD")
        print("Usage: freecadcmd convert_step_to_obj.py <input.step>")
        return False

    input_path = Path(input_file)

    if not input_path.exists():
        print(f"✗ Erreur: Le fichier {input_file} n'existe pas")
        return False

    if output_file is None:
        # Gérer les doubles extensions comme .step.step
        name = input_path.name
        # Enlever toutes les extensions .step ou .stp
        while name.lower().endswith('.step') or name.lower().endswith('.stp'):
            if name.lower().endswith('.step'):
                name = name[:-5]
            elif name.lower().endswith('.stp'):
                name = name[:-4]
        output_file = input_path.parent / (name + '.obj')
    else:
        output_file = Path(output_file)

    print(f"\n{'='*60}")
    print(f"Conversion STEP → OBJ: {input_path.name} → {output_file.name}")
    print(f"{'='*60}\n")

    try:
        # Importer le fichier STEP
        print(f"📥 Import de {input_path.name}...")
        shape = Part.read(str(input_path))
        print(f"✓ Fichier STEP importé")

        # Créer un mesh depuis la forme
        print(f"🔨 Création du mesh...")
        mesh = MeshPart.meshFromShape(
            Shape=shape,
            LinearDeflection=0.1,
            AngularDeflection=0.523599,  # 30 degrés en radians
            Relative=False
        )
        print(f"✓ Mesh créé avec {mesh.CountFacets} faces")

        # Exporter en OBJ
        print(f"💾 Export vers {output_file.name}...")
        mesh.write(str(output_file))
        print(f"✓ Export OBJ réussi!")

        print(f"\n✅ Conversion terminée avec succès!")
        print(f"Fichier créé: {output_file}")

        return True

    except Exception as e:
        print(f"✗ Erreur lors de la conversion: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: freecadcmd convert_step_to_obj.py <input.step> [output.obj]")
        print("\nExemple:")
        print("  freecadcmd convert_step_to_obj.py model.step")
        print("  freecadcmd convert_step_to_obj.py model.step output.obj")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None

    success = convert_step_to_obj(input_file, output_file)
    sys.exit(0 if success else 1)
