#!/usr/bin/env bash

#yarn copyfiles && yarn copytidpatch && yarn copyicon && yarn copyseo && yarn copymanifest  &&  yarn copyworkbox  && yarn devbuild && yarn workboxinje

# patch
yarn copytidpatch

# add public must before public copy steps for versel(if public else .)
yarn devbuild

# public
yarn copyassets
yarn copyseo
yarn copymanifest

yarn workboxinje
