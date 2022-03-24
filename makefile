run:
	setsid tiddlywiki  --listen port=8090 > /tmp/tw.log 2>&1 &
8092:
	setsid tiddlywiki  --listen port=8092 > /tmp/tw.log 2>&1 &
krun:
	kill node
	setsid tiddlywiki  --listen port=8090 > /tmp/tw.log 2>&1 &
lrun:
	setsid tiddlywiki --listen port=8090 host=0.0.0.0 > /tmp/tw.log 2>&1 &

gitsync:
	git add . && git commit -m "⏰ This is an crontab automatic push" && git push && echo 🎉

test:
	echo 🎉


output:
	@#TODO
install:
	@#TODO
