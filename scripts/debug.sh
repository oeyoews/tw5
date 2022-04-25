# creat debug dir
rm -rf debug && mkdir debug
echo 🎉 start: creat debug dir

# cp curren to temp
cp -r assets scripts tiddlers static *.info *.json debug
echo 🐶 1. cp some folder

cd debug
echo 🔥 2. enter debug dire

rm -rf tiddlers/subwiki
echo 💊 3. remove subwiki contents

yarn buildvercel
echo 🌹 end: start buildvercel
