#!/usr/bin/env bash

# patch for html
yarn copytidpatch

# add public must before public copy steps for versel(if public else .)
yarn build

# public folder and files
yarn copyassets
yarn copymanifest

# copy scripts/sw.js to public
yarn workboxinje
