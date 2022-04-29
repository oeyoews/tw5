#!/usr/bin/env bash
# set -e
# set -x
alias yarn='yarn --offline'
alias date='date +"%Y-%m-%d %H:%M:%S"'

# creat debug dir
TEST=test
STARTDIR="$PWD"

echo start dir is $STARTDIR

rm -rf $TEST && mkdir $TEST || exit
echo 🎉 Testing: creat new test directory

# cp current to temp
cp -r assets scripts tiddlers static package.json *.info $TEST || exit
echo 🐶  cp some folder

cd $TEST || exit
echo $PWD
echo 🔥 enter testdir

# TODO: if have subwiki delete
rm -rf tiddlers/subwiki

rm -rf static/tidpatch/*
# TODO: try to optimize this command
touch static/tidpatch/fix.tid
echo 💊  remove subwiki contents

# patch for html
# yarn copy@tidpatch
cp static/tidpatch/* tiddlers/

# add public must before public copy steps for versel(if public else .)
#yarn use package, so this alias is no effect
# yarn build
rm -rf public
tiddlywiki --output public --build index >/tmp/output.log 2>&1
echo '🗂️ Generated new public folder'

# public folder and files
#yarn copy@assets
# TODO: add adjust statement
cp -r assets public

tree -L 1 public

echo 🎉 Testing success
echo 🕐 `date`

# maybe security
cd $STARTDIR
echo return to start dir $PWD

# TODO: how to adapt vercel
#echo 🚒 start open google-chrome-stable
#google-chrome-stable ${PWD}/public/index.html > /tmp/testtw5.log 2>&1

#todo add main

#main() {

#}

#main
