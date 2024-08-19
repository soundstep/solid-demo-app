#!/usr/bin/env bash

echo "Building for ES5 in dist-es5"
rm -rf dist-es5
cp -R dist dist-es5
pnpm exec babel dist --out-dir dist-es5
echo "Success"
