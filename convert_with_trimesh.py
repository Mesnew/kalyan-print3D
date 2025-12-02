#!/usr/bin/env python3
"""
Convertisseur STEP/OBJ → GLB utilisant Python pur (trimesh)
Usage: python3 convert_with_trimesh.py <input_file> [output_file]
"""

import sys
from pathlib import Path

def check_dependencies():
    """Vérifier et installer les dépendances nécessaires"""
    required = ['trimesh', 'pygltflib']
    missing = []

    for package in required:
        try:
            __import__(package)
        except ImportError:
            missing.append(package)

    if missing:
        print("⚠ Dépendances manquantes détectées")
        print(f"📦 Installation de: {', '.join(missing)}")
        print()

        import subprocess
        try:
            # Installer trimesh avec les extras pour supporter plus de formats
            if 'trimesh' in missing:
                subprocess.check_call([
                    sys.executable, '-m', 'pip', 'install',
                    'trimesh[easy]', '--user'
                ])
            if 'pygltflib' in missing:
                subprocess.check_call([
                    sys.executable, '-m', 'pip', 'install',
                    'pygltflib', '--user'
                ])
            print("✓ Dépendances installées avec succès!")
            print()
        except subprocess.CalledProcessError as e:
            print(f"✗ Erreur lors de l'installation: {e}")
            print("\nInstallez manuellement avec:")
            print("  pip install trimesh[easy] pygltflib")
            return False

    return True

def convert_to_glb(input_file, output_file=None):
    """Convertir un fichier 3D vers GLB"""

    if not check_dependencies():
        return False

    import trimesh
    import numpy as np

    input_path = Path(input_file)

    if not input_path.exists():
        print(f"✗ Erreur: Le fichier {input_file} n'existe pas")
        return False

    if output_file is None:
        output_file = input_path.with_suffix('.glb')
    else:
        output_file = Path(output_file)

    print(f"\n{'='*60}")
    print(f"Conversion: {input_path.name} → {output_file.name}")
    print(f"{'='*60}\n")

    ext = input_path.suffix.lower()

    try:
        # Charger le fichier
        print(f"📥 Chargement de {input_path.name}...")

        if ext in ['.step', '.stp']:
            print("⚠ Avertissement: trimesh a un support limité pour les fichiers STEP")
            print("   Pour de meilleurs résultats, utilisez FreeCAD ou Blender")
            print()

            # trimesh peut essayer de charger les fichiers STEP via des plugins
            try:
                mesh = trimesh.load(str(input_path))
            except Exception as e:
                print(f"✗ Impossible de charger le fichier STEP avec trimesh")
                print(f"   Erreur: {e}")
                print()
                print("Solutions recommandées:")
                print("  1. Installer FreeCAD: sudo pacman -S freecad")
                print("  2. Utiliser le workflow: ./batch_convert.sh")
                print("  3. Convertir en ligne: https://anyconv.com/step-to-glb-converter/")
                return False
        else:
            # Pour les autres formats (OBJ, STL, PLY, etc.)
            mesh = trimesh.load(str(input_path))

        print(f"✓ Fichier chargé")

        # Vérifier le type de mesh
        if isinstance(mesh, trimesh.Scene):
            print(f"✓ Scène chargée avec {len(mesh.geometry)} géométrie(s)")
        elif isinstance(mesh, trimesh.Trimesh):
            print(f"✓ Mesh chargé avec {len(mesh.vertices)} sommets et {len(mesh.faces)} faces")
        else:
            print(f"✓ Objet 3D chargé: {type(mesh).__name__}")

        # Exporter en GLB
        print(f"💾 Export vers {output_file.name}...")

        # Exporter avec trimesh
        mesh.export(str(output_file), file_type='glb')

        # Vérifier que le fichier a été créé
        if output_file.exists():
            file_size = output_file.stat().st_size
            print(f"✓ Export GLB réussi ({file_size:,} octets)")

            print(f"\n✅ Conversion terminée avec succès!")
            print(f"Fichier créé: {output_file}")

            return True
        else:
            print(f"✗ Le fichier de sortie n'a pas été créé")
            return False

    except Exception as e:
        print(f"✗ Erreur lors de la conversion: {e}")
        import traceback
        traceback.print_exc()

        print("\n💡 Suggestions:")
        print("  • Vérifiez que le fichier d'entrée est valide")
        print("  • Essayez avec un autre format (OBJ, STL)")
        print("  • Utilisez FreeCAD ou Blender pour plus de compatibilité")

        return False

def main():
    """Point d'entrée principal"""
    if len(sys.argv) < 2:
        print("Convertisseur STEP/OBJ → GLB (Python/trimesh)")
        print()
        print("Usage: python3 convert_with_trimesh.py <input_file> [output_file]")
        print()
        print("Formats supportés:")
        print("  • Entrée: OBJ, STL, PLY, OFF, DAE, GLTF, (STEP*)")
        print("  • Sortie: GLB")
        print()
        print("*Note: Le support STEP est limité. Utilisez FreeCAD pour de meilleurs résultats.")
        print()
        print("Exemples:")
        print("  python3 convert_with_trimesh.py model.obj")
        print("  python3 convert_with_trimesh.py model.stl output.glb")
        print("  python3 convert_with_trimesh.py K2_BODY.step.step")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None

    success = convert_to_glb(input_file, output_file)
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
