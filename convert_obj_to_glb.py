#!/usr/bin/env python3
"""
Script Blender pour convertir OBJ en GLB
Usage: blender --background --python convert_obj_to_glb.py -- <input.obj> [output.glb]
"""

import bpy
import sys
from pathlib import Path

def clear_scene():
    """Nettoyer la scène Blender"""
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)

def convert_obj_to_glb(input_file, output_file=None):
    """Convertir OBJ vers GLB"""
    input_path = Path(input_file)

    if not input_path.exists():
        print(f"✗ Erreur: Le fichier {input_file} n'existe pas")
        return False

    if output_file is None:
        output_file = input_path.with_suffix('.glb')
    else:
        output_file = Path(output_file)

    print(f"\n{'='*60}")
    print(f"Conversion OBJ → GLB: {input_path.name} → {output_file.name}")
    print(f"{'='*60}\n")

    # Nettoyer la scène
    clear_scene()

    # Importer le fichier OBJ
    print(f"📥 Import de {input_path.name}...")
    try:
        bpy.ops.wm.obj_import(filepath=str(input_path))
        print(f"✓ Fichier OBJ importé")
    except AttributeError:
        # Pour les anciennes versions de Blender
        try:
            bpy.ops.import_scene.obj(filepath=str(input_path))
            print(f"✓ Fichier OBJ importé (méthode legacy)")
        except Exception as e:
            print(f"✗ Erreur lors de l'import: {e}")
            return False

    # Vérifier qu'il y a des objets
    if len(bpy.context.scene.objects) == 0:
        print("✗ Erreur: Aucun objet importé")
        return False

    print(f"✓ {len(bpy.context.scene.objects)} objet(s) importé(s)")

    # Sélectionner tous les objets
    bpy.ops.object.select_all(action='SELECT')

    # Exporter en GLB
    print(f"💾 Export vers {output_file.name}...")
    try:
        bpy.ops.export_scene.gltf(
            filepath=str(output_file),
            export_format='GLB',
            use_selection=True,
            export_materials='EXPORT',
            export_normals=True,
            export_texcoords=True,
            export_apply=True
        )
        print(f"✓ Export GLB réussi")
    except Exception as e:
        print(f"✗ Erreur lors de l'export: {e}")
        return False

    print(f"\n✅ Conversion terminée avec succès!")
    print(f"Fichier créé: {output_file}")

    return True

def main():
    """Point d'entrée principal"""
    try:
        argv = sys.argv[sys.argv.index("--") + 1:]
    except ValueError:
        print("Usage: blender --background --python convert_obj_to_glb.py -- <input.obj> [output.glb]")
        sys.exit(1)

    if len(argv) < 1:
        print("✗ Erreur: Fichier d'entrée requis")
        sys.exit(1)

    input_file = argv[0]
    output_file = argv[1] if len(argv) > 1 else None

    success = convert_obj_to_glb(input_file, output_file)
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
