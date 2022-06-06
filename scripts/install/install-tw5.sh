#!/usr/bin/env bash

#set -e

#TODO: add some interactive for installation

# TODO: need adjust this folder
TARGET="${HOME}"/REPOS/TiddlyWiki5

FISHFORYOU="https://gitlab.com/oeyoews/tw5.git"

git clone --depth 1 "${FISHFORYOU}"  "${TARGET}"

echo "🍺 successfully download ${FISHFORYOU}"
echo "🖍️ Please into $HOME/$TARGET to use it"

#main() {

#}

#main
