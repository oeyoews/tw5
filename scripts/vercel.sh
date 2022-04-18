#!/usr/bin/env bash

#yarn copyfiles && yarn copytidpatch && yarn copyicon && yarn copyseo && yarn copymanifest  &&  yarn copyworkbox  && yarn devbuild && yarn workboxinje

# patch for html
yarn copytidpatch

# add public must before public copy steps for versel(if public else .)
yarn devbuild

# public folder and files
yarn copyassets
yarn copymanifest

# copy scripts/sw.js to public
yarn workboxinje
