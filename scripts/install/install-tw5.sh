#!/usr/bin/env bash

# version: 1.0.0
# set -e

TARGET="${HOME}"/REPOS/TiddlyWiki5
TARGETBK="${HOME}"/REPOS/.TiddlyWiki5

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
  mv "$TARGET" "$TARGETBK"
  git clone --depth 1 "${FISHFORYOU}"  "${TARGET}"
}

function echomsg() {
  echo "🍺 successfully download the repository ${FISHFORYOU}"
  echo "🖍️ Please into $HOME/$TARGET to use it"
}

main() {
  isCmdExist \git || exit
  clone
  echomsg
  isCmdExist \tiddlywiki5
}

main
