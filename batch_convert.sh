#!/bin/bash
# Script de conversion par lot STEP → GLB

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "╔════════════════════════════════════════════════════════════╗"
echo "║       Convertisseur STEP/OBJ → GLB (Blender/FreeCAD)      ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Vérifier les dépendances
check_dependencies() {
    local has_blender=false
    local has_freecad=false

    if command -v blender &> /dev/null; then
        if blender --version &> /dev/null; then
            has_blender=true
            echo -e "${GREEN}✓${NC} Blender détecté et fonctionnel"
        else
            echo -e "${YELLOW}⚠${NC} Blender installé mais non fonctionnel"
        fi
    else
        echo -e "${RED}✗${NC} Blender non trouvé"
    fi

    if command -v freecadcmd &> /dev/null || command -v freecad &> /dev/null; then
        has_freecad=true
        echo -e "${GREEN}✓${NC} FreeCAD détecté"
    else
        echo -e "${RED}✗${NC} FreeCAD non trouvé"
    fi

    echo ""

    if [ "$has_blender" = false ] && [ "$has_freecad" = false ]; then
        echo -e "${RED}Erreur:${NC} Aucun outil de conversion disponible!"
        echo ""
        echo "Veuillez installer l'un des outils suivants:"
        echo "  • Blender: sudo pacman -S blender icu"
        echo "  • FreeCAD: sudo pacman -S freecad"
        echo ""
        echo "Consultez README_CONVERSION.md pour plus de détails."
        exit 1
    fi
}

# Convertir STEP → OBJ avec FreeCAD
convert_step_to_obj() {
    local input="$1"

    # Gérer les doubles extensions (.step.step ou .stp.step, etc.)
    local basename_file=$(basename "$input")
    local dirname_file=$(dirname "$input")

    # Enlever toutes les extensions .step et .stp (insensible à la casse)
    while [[ "$basename_file" =~ \.(step|STEP|stp|STP)$ ]]; do
        basename_file="${basename_file%.*}"
    done

    local output="$dirname_file/$basename_file.obj"

    echo -e "${YELLOW}→${NC} Conversion STEP → OBJ: $(basename "$input")"

    local freecad_cmd=""
    if command -v freecadcmd &> /dev/null; then
        freecad_cmd="freecadcmd"
    elif command -v freecad &> /dev/null; then
        freecad_cmd="freecad"
    else
        echo -e "${RED}✗${NC} FreeCAD non disponible"
        return 1
    fi

    if $freecad_cmd "$SCRIPT_DIR/convert_step_to_obj.py" "$input" "$output"; then
        echo -e "${GREEN}✓${NC} OBJ créé: $(basename "$output")"
        echo "$output"
        return 0
    else
        echo -e "${RED}✗${NC} Échec de la conversion STEP → OBJ"
        return 1
    fi
}

# Convertir OBJ → GLB avec Blender
convert_obj_to_glb() {
    local input="$1"
    local output="${input%.obj}.glb"

    echo -e "${YELLOW}→${NC} Conversion OBJ → GLB: $(basename "$input")"

    if blender --background --python "$SCRIPT_DIR/convert_obj_to_glb.py" -- "$input" "$output" 2>&1 | grep -v "^Read" | grep -v "^Info:"; then
        if [ -f "$output" ]; then
            echo -e "${GREEN}✓${NC} GLB créé: $(basename "$output")"
            echo "$output"
            return 0
        fi
    fi

    echo -e "${RED}✗${NC} Échec de la conversion OBJ → GLB"
    return 1
}

# Convertir STEP → GLB (workflow complet)
convert_step_to_glb() {
    local input="$1"

    # Essayer la conversion directe avec Blender d'abord
    if command -v blender &> /dev/null && blender --version &> /dev/null; then
        # Gérer les doubles extensions
        local basename_file=$(basename "$input")
        local dirname_file=$(dirname "$input")

        # Enlever toutes les extensions .step et .stp
        while [[ "$basename_file" =~ \.(step|STEP|stp|STP)$ ]]; do
            basename_file="${basename_file%.*}"
        done

        local output="$dirname_file/$basename_file.glb"

        echo -e "${YELLOW}→${NC} Tentative de conversion directe STEP → GLB"

        if blender --background --python "$SCRIPT_DIR/convert_to_glb.py" -- "$input" "$output" 2>&1 | grep -v "^Read" | grep -v "^Info:"; then
            if [ -f "$output" ]; then
                echo -e "${GREEN}✓${NC} Conversion directe réussie!"
                return 0
            fi
        fi
    fi

    # Sinon, utiliser le workflow FreeCAD → Blender
    echo -e "${YELLOW}→${NC} Utilisation du workflow: STEP → OBJ → GLB"

    local obj_file=$(convert_step_to_obj "$input")
    if [ $? -eq 0 ] && [ -f "$obj_file" ]; then
        convert_obj_to_glb "$obj_file"

        # Nettoyer le fichier OBJ intermédiaire
        # rm -f "$obj_file"

        return 0
    else
        return 1
    fi
}

# Programme principal
main() {
    check_dependencies

    if [ $# -eq 0 ]; then
        echo "Usage: $0 <fichier1.step> [fichier2.step] ..."
        echo ""
        echo "Exemples:"
        echo "  $0 model.step"
        echo "  $0 *.step"
        echo "  $0 K2_BODY.step.step"
        exit 1
    fi

    local success_count=0
    local fail_count=0

    for file in "$@"; do
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

        if [ ! -f "$file" ]; then
            echo -e "${RED}✗${NC} Fichier non trouvé: $file"
            ((fail_count++))
            continue
        fi

        local ext="${file##*.}"
        ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

        case "$ext" in
            step|stp)
                if convert_step_to_glb "$file"; then
                    ((success_count++))
                else
                    ((fail_count++))
                fi
                ;;
            obj)
                if convert_obj_to_glb "$file"; then
                    ((success_count++))
                else
                    ((fail_count++))
                fi
                ;;
            *)
                echo -e "${RED}✗${NC} Format non supporté: .$ext"
                echo "   Formats supportés: .step, .stp, .obj"
                ((fail_count++))
                ;;
        esac
    done

    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${GREEN}✓${NC} Réussies: $success_count"
    echo -e "${RED}✗${NC} Échouées: $fail_count"
    echo ""
}

main "$@"
