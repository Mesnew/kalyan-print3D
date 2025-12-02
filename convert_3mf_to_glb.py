#!/usr/bin/env python3
"""
Script Blender pour convertir .3mf en GLB
Usage: blender --background --python convert_3mf_to_glb.py -- <input.3mf> [output.glb]
"""

import bpy
import sys
from pathlib import Path

def clear_scene():
    """Nettoyer la scène Blender"""
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)

def convert_3mf_to_glb(input_file, output_file=None):
    """Convertir .3mf vers GLB"""
    input_path = Path(input_file)

    if not input_path.exists():
        print(f"✗ Erreur: Le fichier {input_file} n'existe pas")
        return False

    if output_file is None:
        output_file = input_path.with_suffix('.glb')
    else:
        output_file = Path(output_file)

    print(f"\n{'='*60}")
    print(f"Conversion .3mf → GLB: {input_path.name} → {output_file.name}")
    print(f"{'='*60}\n")

    # Nettoyer la scène
    clear_scene()

    # Importer le fichier .3mf
    print(f"📥 Import de {input_path.name}...")
    try:
        # Blender 3.x+ utilise wm.3mf_import
        bpy.ops.wm.threeformat_import(filepath=str(input_path))
        print(f"✓ Fichier .3mf importé")
    except AttributeError:
        # Essayer avec l'ancien nom
        try:
            bpy.ops.import_mesh.threemf(filepath=str(input_path))
            print(f"✓ Fichier .3mf importé (méthode legacy)")
        except AttributeError:
            # Essayer avec import_scene
            try:
                bpy.ops.import_scene.threemf(filepath=str(input_path))
                print(f"✓ Fichier .3mf importé (import_scene)")
            except Exception as e:
                print(f"✗ Erreur lors de l'import: {e}")
                print("\n⚠ L'addon 3MF n'est peut-être pas activé dans Blender")
                print("Solution: Activer l'addon '3D Manufacturing Format (3MF)' dans Blender")
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
        print("Usage: blender --background --python convert_3mf_to_glb.py -- <input.3mf> [output.glb]")
        sys.exit(1)

    if len(argv) < 1:
        print("✗ Erreur: Fichier d'entrée requis")
        sys.exit(1)

    input_file = argv[0]
    output_file = argv[1] if len(argv) > 1 else None

    success = convert_3mf_to_glb(input_file, output_file)
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
