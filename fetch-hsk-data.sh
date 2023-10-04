#!/usr/bin/env bash
mkdir .tmp
cd .tmp
git clone https://github.com/gigacool/hanyu-shuiping-kaoshi.git
cd hanyu-shuiping-kaoshi
mv json ../../src/lib
mv hsk.json ../../src/lib/json
cd ../..
rm -rf .tmp
