<!-- vim-markdown-toc GitLab -->

* [README](#readme)
  * [Linux](#linux)
    * [service](#service)
  * [Window](#window)
    * [methos1](#methos1)
    * [methos2](#methos2)
  * [run(general)](#rungeneral)

<!-- vim-markdown-toc -->

[<img src="https://api.netlify.com/api/v1/badges/2a2a2a02-e09a-4909-b4dd-0079e879b37d/deploy-status" alt="Netlify Status" style="zoom:80%;" />](https://app.netlify.com/sites/hugo2/deploys)
# README

## Linux

* install `make` `node` `git`
* type make in current directory

### service

* sudo cp tw5.service /etc/systemd/system/
* systemctl daemon-reload
* systemctl start xxx.service
* systemctl enable xxx.service

> if use service, to kill it, and it will start automaticaly instantly

## Window

### methos1

* install node git
* `npm i -g tiddlywiki`(important)
* click run.bat

### methos2

* use tidGIt-desktop(太微)

## run(general)

`npm run dev` depend git bashui in windows
`yarn dev`

> NOTE: if you use npm run dev &, only use npm run dev again , and ctrl c to exit this node program
