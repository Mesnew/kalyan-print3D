#!/usr/bin/env python3
"""
Script pour convertir des fichiers STEP en GLB via Blender
Usage: blender --background --python convert_to_glb.py -- <input_file> [output_file]
"""

import bpy
import sys
import os
from pathlib import Path

def clear_scene():
    """Nettoyer la scène Blender"""
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)

def import_step(filepath):
    """Importer un fichier STEP"""
    print(f"Importation de {filepath}...")

    # Vérifier si l'addon CAD est disponible
    try:
        # Essayer d'activer l'addon si nécessaire
        if 'io_import_dxf' not in bpy.context.preferences.addons:
            pass  # L'addon pourrait ne pas être présent
    except:
        pass

    # Tenter l'import avec différentes méthodes
    imported = False

    # Méthode 1: Essayer avec l'importeur STEP natif (si disponible)
    try:
        bpy.ops.import_mesh.step(filepath=filepath)
        imported = True
        print("✓ Import STEP réussi (méthode native)")
    except AttributeError:
        pass

    # Méthode 2: Essayer avec l'addon CAD
    if not imported:
        try:
            bpy.ops.import_scene.step(filepath=filepath)
            imported = True
            print("✓ Import STEP réussi (addon CAD)")
        except AttributeError:
            pass

    # Méthode 3: Tenter d'importer comme mesh générique
    if not imported:
        try:
            # Essayer l'import comme fichier STL si converti
            print("⚠ Pas d'importeur STEP direct disponible")
            print("Suggestion: Installer l'addon 'Import-Export: CAD format' dans Blender")
            return False
        except:
            pass

    return imported

def export_glb(filepath):
    """Exporter la scène en GLB"""
    print(f"Export vers {filepath}...")

    # Sélectionner tous les objets
    bpy.ops.object.select_all(action='SELECT')

    # Exporter en GLB
    try:
        bpy.ops.export_scene.gltf(
            filepath=filepath,
            export_format='GLB',
            use_selection=True,
            export_materials='EXPORT',
            export_colors=True,
            export_normals=True,
            export_texcoords=True,
            export_apply=True
        )
        print(f"✓ Export GLB réussi: {filepath}")
        return True
    except Exception as e:
        print(f"✗ Erreur lors de l'export: {e}")
        return False

def convert_step_to_glb(input_file, output_file=None):
    """Convertir un fichier STEP en GLB"""
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
        output_file = input_path.parent / (name + '.glb')
    else:
        output_file = Path(output_file)

    print(f"\n{'='*60}")
    print(f"Conversion: {input_path.name} → {output_file.name}")
    print(f"{'='*60}\n")

    # Nettoyer la scène
    clear_scene()

    # Importer le fichier STEP
    if not import_step(str(input_path)):
        print("\n⚠ SOLUTION DE CONTOURNEMENT ⚠")
        print("Blender nécessite un addon pour importer les fichiers STEP.")
        print("\nOptions:")
        print("1. Installer l'addon 'CADExchanger' pour Blender")
        print("2. Utiliser FreeCAD pour convertir STEP → OBJ/STL")
        print("3. Utiliser un convertisseur en ligne")
        return False

    # Vérifier qu'il y a des objets dans la scène
    if len(bpy.context.scene.objects) == 0:
        print("✗ Erreur: Aucun objet importé")
        return False

    print(f"✓ {len(bpy.context.scene.objects)} objet(s) importé(s)")

    # Exporter en GLB
    success = export_glb(str(output_file))

    if success:
        print(f"\n✓ Conversion réussie!")
        print(f"Fichier créé: {output_file}")

    return success

def main():
    """Point d'entrée principal"""
    # Les arguments après '--' sont disponibles dans sys.argv
    try:
        argv = sys.argv[sys.argv.index("--") + 1:]
    except ValueError:
        print("Usage: blender --background --python convert_to_glb.py -- <input_file> [output_file]")
        print("\nExemple:")
        print("  blender --background --python convert_to_glb.py -- model.step")
        print("  blender --background --python convert_to_glb.py -- model.step output.glb")
        sys.exit(1)

    if len(argv) < 1:
        print("✗ Erreur: Fichier d'entrée requis")
        sys.exit(1)

    input_file = argv[0]
    output_file = argv[1] if len(argv) > 1 else None

    success = convert_step_to_glb(input_file, output_file)
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
