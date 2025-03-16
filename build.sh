#!/bin/bash

# Try to use npm first
if command -v npm &> /dev/null; then
  echo "Using npm to install dependencies"
  npm install --no-frozen-lockfile
  npm run build
# Fall back to pnpm if npm is not available
elif command -v pnpm &> /dev/null; then
  echo "Using pnpm to install dependencies"
  pnpm install --no-frozen-lockfile
  pnpm run build
else
  echo "Neither npm nor pnpm is available"
  exit 1
fi 