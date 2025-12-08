#!/bin/bash

# 🚀 Automatyczny skrypt do aktualizacji kodu na GitHub
# Użycie: ./update.sh "Twoja wiadomość" lub po prostu ./update.sh

# Kolory dla ładnych komunikatów
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}════════════════════════════════════════${NC}"
echo -e "${BLUE}   🚀 Auto-Update GitHub Script 🚀${NC}"
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo ""

# Sprawdź czy są zmiany
if [[ -z $(git status -s) ]]; then
    echo -e "${YELLOW}⚠️  Brak zmian do wysłania${NC}"
    exit 0
fi

echo -e "${GREEN}📝 Znaleziono zmiany:${NC}"
git status -s
echo ""

# Dodaj wszystkie zmiany
echo -e "${BLUE}📦 Dodawanie plików...${NC}"
git add .

# Wiadomość commit (użyj argumentu lub domyślną)
if [ -z "$1" ]; then
    COMMIT_MSG="Auto-update: $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MSG="$1"
fi

# Commit
echo -e "${BLUE}💾 Tworzenie commit: ${COMMIT_MSG}${NC}"
git commit -m "$COMMIT_MSG"

# Push
echo -e "${BLUE}🌐 Wysyłanie na GitHub...${NC}"
git push

echo ""
echo -e "${GREEN}✅ Gotowe! Kod zaktualizowany na GitHub${NC}"
echo -e "${GREEN}🔗 https://github.com/BunnyBUcks/platforma-angielski-${NC}"
echo -e "${BLUE}════════════════════════════════════════${NC}"
