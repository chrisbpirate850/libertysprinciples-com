#!/usr/bin/env bash
# Run Lighthouse mobile audit against the locally-served static export.
#
# Prereqs:
#   1. `npm run build` has produced ./out/
#   2. A static server is serving ./out/ on http://localhost:3001/
#      e.g.: cd out && python3 -m http.server 3001
#   3. Chrome / Chromium is installed and discoverable
#      (set CHROME_PATH if not auto-detected)
#
# Output: writes JSON report to /tmp/lh-home.json
set -e
cd "$(dirname "$0")/.."
export CHROME_PATH="${CHROME_PATH:-/usr/bin/google-chrome}"
./node_modules/.bin/lighthouse "http://localhost:3001/" \
  --form-factor=mobile \
  --output=json \
  --output-path=/tmp/lh-home.json \
  --chrome-flags="--headless=new --no-sandbox --disable-dev-shm-usage --disable-gpu" \
  --quiet
