# creat debug dir
rm -rf debug && mkdir debug
echo 🎉 start: remove debug dir and creat debug dir

# cp curren to temp no static
cp -r assets scripts tiddlers  *.info *.json debug
echo 🐶 1. cp some folder

cd debug
echo 🔥 2. enter debug dire

rm -rf tiddlers/subwiki
echo 💊 3. remove subwiki contents

# to fix no internet, use npm run
npm run buildvercel
echo 🌹 end: start buildvercel

echo 🚒 start open google-chrome-stable
google-chrome-stable ${PWD}/public/index.html
