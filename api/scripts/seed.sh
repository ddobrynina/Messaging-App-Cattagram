#!/usr/bin/env bash


ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if ! docker compose ps mongo --status running >/dev/null 2>&1; then
  echo "Mongo service is not running. Start it with: docker compose up -d mongo" >&2
  exit 1
fi

docker compose exec -T mongo mongosh --quiet < "$ROOT_DIR/scripts/populate_dummy_data.js"
echo "Seed complete."
