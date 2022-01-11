:: git pull

:: start /b tiddlywiki --listen port=8090  > .log.txt 2>&1

:: "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" http://127.0.0.1:8090
::
:: start /b tiddlywiki --listen port=8090  > .log.txt 2>&1 && start http://127.0.0.1:8090

@echo off
echo tw is staruping

start /b  tiddlywiki --listen port=8090  > .log.txt 2>&1
start /MAX http://127.0.0.1:8090

echo tw startup finished successfully
echo ===
echo NOTE: If close this window, this serve will be close.

REM pause
