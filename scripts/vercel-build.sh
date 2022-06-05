#!/usr/bin/env bash

# === tolerant for not vercel(not exe yarn automatically)
#yarn install

yarn clean

# patch for html
yarn copy-tidpatch

# add public must before public copy steps for versel(if public else .)
# NOTES: will destory image
# yarn build@online > /dev/null 2>&1
# creat public folder
yarn build-online

# copy some install scripts to public folder
yarn copy-install

# === Vercel
# public folder and files
yarn copy-workbox

yarn sitemap

# copy scripts/sw.js to public
yarn workbox-inje

yarn visual-public

# TODO: how to add failed flag
echo 🧁 Vercel build success
