#!/usr/bin/env bash

# add test
# NOTICE: this second test scripts, not conflice parent path
yarn test

# patch for html
yarn copy@tidpatch

# make sure install
yarn install
# add public must before public copy steps for versel(if public else .)
yarn build

# public folder and files
yarn copy@assets
yarn copy@workbox

# copy scripts/sw.js to public
yarn workbox@inje

yarn visual@files

# TODO: how to add failed flag
echo 🎉🎣 Vercel build success
echo 🕑 `date`
