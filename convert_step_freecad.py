#!/usr/bin/env python3
"""
Script FreeCAD pour convertir STEP en OBJ
Usage: INPUT_FILE=input.step OUTPUT_FILE=output.obj freecadcmd convert_step_freecad.py
"""

import sys
import os
from pathlib import Path

def convert_step_to_obj(input_file, output_file):
    """Convertir STEP vers OBJ avec FreeCAD"""
    try:
        import FreeCAD
        import Part
        import Mesh
        import MeshPart
    except ImportError:
        print("✗ Erreur: Ce script doit être exécuté avec FreeCAD")
        return False

    input_path = Path(input_file)

    if not input_path.exists():
        print(f"✗ Erreur: Le fichier {input_file} n'existe pas")
        return False

    output_path = Path(output_file)

    print(f"\n{'='*60}")
    print(f"Conversion STEP → OBJ: {input_path.name} → {output_path.name}")
    print(f"{'='*60}\n")

    try:
        # Importer le fichier STEP
        print(f"📥 Import de {input_path.name}...")
        shape = Part.read(str(input_path.resolve()))
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
        print(f"💾 Export vers {output_path.name}...")
        mesh.write(str(output_path.resolve()))
        print(f"✓ Export OBJ réussi!")

        print(f"\n✅ Conversion terminée avec succès!")
        print(f"Fichier créé: {output_path.resolve()}")

        return True

    except Exception as e:
        print(f"✗ Erreur lors de la conversion: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    # Récupérer les fichiers depuis les variables d'environnement
    input_file = os.environ.get('INPUT_FILE')
    output_file = os.environ.get('OUTPUT_FILE')

    if not input_file:
        print("✗ Erreur: Variable INPUT_FILE non définie")
        print("\nUsage:")
        print("  INPUT_FILE=model.step OUTPUT_FILE=output.obj freecadcmd convert_step_freecad.py")
        sys.exit(1)

    if not output_file:
        # Générer automatiquement le nom de sortie
        input_path = Path(input_file)
        name = input_path.name

        # Enlever toutes les extensions .step ou .stp
        while name.lower().endswith('.step') or name.lower().endswith('.stp'):
            if name.lower().endswith('.step'):
                name = name[:-5]
            elif name.lower().endswith('.stp'):
                name = name[:-4]

        output_file = str(input_path.parent / (name + '.obj'))

    success = convert_step_to_obj(input_file, output_file)
    sys.exit(0 if success else 1)
