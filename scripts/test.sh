#!/usr/bin/env bash

set -e
set -x


# creat debug dir
TEST=test

rm -rf $TEST && mkdir $TEST || exit
echo 🎉 start: remove debug dir and creat debug dir

# cp curren to temp
cp -r assets scripts tiddlers static package.json *.info $TEST || exit
echo 🐶 1. cp some folder

cd $TEST || exit
echo 🔥 2. enter debug dire

rm -rf tiddlers/subwiki
rm -rf static/tidpatch/*
touch static/tidpatch/fix.tid
echo 💊 3. remove subwiki contents

alias yarn='yarn --offline'
# patch for html
yarn copytidpatch

# add public must before public copy steps for versel(if public else .)
#yarn use package, so this alias is no effect
yarn build

# public folder and files
yarn copyassets

echo 🚒 start open google-chrome-stable
google-chrome-stable ${PWD}/public/index.html > /tmp/testtw5.log 2>&1

#todo add main
