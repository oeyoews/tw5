#!/usr/bin/env bash

# version: 1.0.0
# set -e

TARGET="${HOME}"/REPOS/TiddlyWiki5

FISHFORYOU="https://gitlab.com/oeyoews/tw5.git"

function isCmdExist() {
	local cmd="$1"

	which "$cmd" >/dev/null 2>&1
	if [ $? -ne 0 ]; then
    echo "🍺 Please install $cmd firstly"
    return 0
	fi
}

function clone() {
  rm -rf "$TARGET"
  git clone --depth 1 "${FISHFORYOU}"  "${TARGET}"
}

function echomsg() {
  echo "🍺 successfully download the repository ${FISHFORYOU}"
  echo "🖍️ Please into $TARGET to use it"
}

function echologo() {
    # TODO: reference ohmyzsh or spacevim colorful
    local logo="demo"
}

main() {
  isCmdExist git || exit
  clone || exit
  echomsg
  echologo
  isCmdExist tiddlywiki5
}

main
