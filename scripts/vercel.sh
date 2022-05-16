#!/usr/bin/env bash

# === tolerant for not vercel(not exe yarn automatically)
#yarn install

yarn clean

# === Test
# add test
# NOTICE: this second test scripts, not conflice parent path
yarn test

# patch for html
yarn copy@tidpatch

# add public must before public copy steps for versel(if public else .)
# NOTES: will destory image
yarn build@online

# === Vercel
# public folder and files
yarn copy@workbox

yarn sitemap

# copy scripts/sw.js to public
yarn workbox@inje

yarn visual@public

# TODO: how to add failed flag
echo 🎉 Vercel build success 🎣
#echo 🕑 `date`
echo -e "\033[51;36m
███████╗███╗   ██╗██████╗
██╔════╝████╗  ██║██╔══██╗
█████╗  ██╔██╗ ██║██║  ██║
██╔══╝  ██║╚██╗██║██║  ██║
███████╗██║ ╚████║██████╔╝
╚══════╝╚═╝  ╚═══╝╚═════╝
\033[0m"
