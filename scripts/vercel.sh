#!/usr/bin/env bash

# add test
yarn test

# patch for html
yarn copy@tidpatch

# add public must before public copy steps for versel(if public else .)
yarn build

# public folder and files
yarn copy@assets
yarn copy@workbox

# copy scripts/sw.js to public
yarn workbox@inje

# TODO: how to add failed flag
echo 🎉🎣 vercel build success
