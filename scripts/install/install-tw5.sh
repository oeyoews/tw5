#!/usr/bin/env bash

#set -e

#TODO: add some interactive for installation

TARGET="${HOME}"/REPOS/

FISHFORYOU="https://gitlab.com/oeyoews/tw5.git"

ASNAME="TiddlyWiki5"

mkdir "${TARGET}"

git clone --depth 1 "${FISHFORYOU}"  "${TARGET}/{$ASNAME}"

echo "🍺 successfully download ${FISHFORYOU}"
echo "🖍️ Please into $HOME/$TARGET/$ASNAME to use it"

#main() {

#}

#main
