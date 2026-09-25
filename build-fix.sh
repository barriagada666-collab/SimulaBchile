#!/usr/bin/env bash
set -euo pipefail

echo "========================================="
echo "  Vite & Dependencies Clean Build Fix"
echo "========================================="

echo "[1/4] Cleaning build artifacts and caches..."
rm -rf node_modules/.vite .vite dist package-lock.json

echo "[2/4] Installing dependencies fresh..."
npm install

echo "[3/4] Type checking TypeScript..."
npm run lint

echo "[4/4] Executing production build..."
npm run build

echo "========================================="
echo "  Build completed successfully!"
echo "========================================="
