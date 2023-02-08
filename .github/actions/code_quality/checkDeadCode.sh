#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

npm run audit:deadcode

UNUSED_EXPORTS_COUNT=$(wc -l < deadcode.txt)

if ((UNUSED_EXPORTS_COUNT > 0)); then
  printf "### Found dead code! :skull:\n\n" >> "$GITHUB_STEP_SUMMARY"
  while read -r line; do printf "%s %s \n" '-' "$line" >> "$GITHUB_STEP_SUMMARY"; done < deadcode.txt
  echo -e "$RED Found $UNUSED_EXPORTS_COUNT unused export(s) (check workflow summary for more info) $NC"
  exit 1
else
  echo -e "$GREEN No dead code found $NC"
  exit 0
fi
