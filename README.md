<!-- vim-markdown-toc GitLab -->

* [README](#readme)
  * [Linux](#linux)
    * [service](#service)
  * [Window](#window)
    * [methos1](#methos1)
    * [methos2](#methos2)
  * [run(general)](#rungeneral)
  * [bug](#bug)

<!-- vim-markdown-toc -->

<!--[![Netlify Status](https://api.netlify.com/api/v1/badges/a42c9618-8fd5-41cd-9cb9-901b588369ad/deploy-status)](https://app.netlify.com/sites/tw5/deploys)-->

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

* use TidGi*

## run(general)

* `npm run dev` depend git bashui in windows
* `yarn dev`
* `yarn localbuild`

> NOTE: if you use npm run dev &, only use npm run dev again , and ctrl c to exit this node program

## bug

* ~~`\$__themes_nico_notebook_ui_Bottombar.tid`
\$__themes_nico_notebook_ui_Topbar.tid~~

