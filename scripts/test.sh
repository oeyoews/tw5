# creat debug dir
TEST=test

rm -rf $TEST && mkdir $TEST || exit
echo 🎉 start: remove debug dir and creat debug dir

# cp curren to temp
cp -r assets scripts tiddlers static *.info *.json $TEST || exit
echo 🐶 1. cp some folder

cd $TEST
echo 🔥 2. enter debug dire

rm -rf tiddlers/subwiki
rm -rf static/tidpatch/* touch static/tidpatch/fix
echo 💊 3. remove subwiki contents

yarn  buildvercel
echo 🌹 end: start buildvercel

echo 🚒 start open google-chrome-stable
google-chrome-stable ${PWD}/public/index.html
