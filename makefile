run:
	setsid tiddlywiki  --listen port=8090 > /tmp/tw.log 2>&1 &
8091:
	setsid tiddlywiki  --listen port=8091 > /tmp/tw.log 2>&1 &
krun:
	kill node
	setsid tiddlywiki  --listen port=8090 > /tmp/tw.log 2>&1 &
