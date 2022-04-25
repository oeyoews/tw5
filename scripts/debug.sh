# creat debug dir
rm -rf debug && mkdir debug

# cp curren to temp
cp -r assets scripts tiddlers static *.info *.json debug

cd debug

yarn buildvercel
