#!/bin/bash
# Wrapper pour utiliser trimesh avec l'environnement virtuel

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Activer l'environnement virtuel et exécuter le script
source "$SCRIPT_DIR/venv/bin/activate"
python3 "$SCRIPT_DIR/convert_with_trimesh.py" "$@"
deactivate
