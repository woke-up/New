#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

pids=()

start() {
  local name="$1"
  local dir="$2"
  shift 2
  echo "Starting $name..."
  (
    cd "$dir"
    "$@"
  ) &
  pids+=("$!")
}

cleanup() {
  echo "\nShutting down..."
  for pid in "${pids[@]:-}"; do
    if kill -0 "$pid" 2>/dev/null; then
      kill "$pid"
    fi
  done
}

trap cleanup EXIT INT TERM

start "API server" "./api" npm run dev
start "Socket server" "./socket" npm run dev
start "Client" "./client" npm run dev

wait
