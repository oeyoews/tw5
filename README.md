<div style="text-align: left;background: lightgreen;border-radius: 5px; float:none">

<details>
<summary>TOC</summary>

<!-- vim-markdown-toc GitLab -->

* [DependencyGraph](#dependencygraph)
* [ProjectStructure](#projectstructure)
* [RelatedSoftwares](#relatedsoftwares)
* [Features](#features)
* [Linux](#linux)
  * [Service](#service)
* [Run(general)](#rungeneral)
* [TODO](#todo)
* [Broken](#broken)

<!-- vim-markdown-toc -->
</details>

</div>
<!--[![Netlify Status](https://api.netlify.com/api/v1/badges/a42c9618-8fd5-41cd-9cb9-901b588369ad/deploy-status)](https://app.netlify.com/sites/tw5/deploys)-->

## DependencyGraph

<div style="text-align: center">
<p> tw5graph2</p>
<img src="https://cdn.jsdelivr.net/gh/oeyoews/img/tw5graph2.png" width=512 title="img" alt="img" width=512 style="zoom: 100%" />
</div>

## ProjectStructure

<div style="text-align: center">
<p> FileTreeGraph</p>
<img src="https://cdn.jsdelivr.net/gh/oeyoews/img/filetreegraph.png" title="img" alt="img" width=512 style="zoom: 80%" />
</div>

## RelatedSoftwares

* tw5 and it's form
* vercel, netlify, gitlab or github workflow
* mirroring(gitlab) repository to github and gitee
* html-min ...
* use jsdelivr to accelebrate images
* flameshot and ranger to manage images
* power filter
* FileSystemPath
* etc

## Features

- [x] git
* [x] timer
* [x] private subwiki(git or local)

## Linux

* install `make` `node` `git`
* type make in current directory

### Service

* sudo cp tw5.service /etc/systemd/system/
* systemctl daemon-reload
* systemctl start xxx.service
* systemctl enable xxx.service

> if use service, to kill it, and it will start automaticaly instantly

<!-- ## Window-->

<!-- ### methos1-->

<!--* install node git-->
<!--* `npm i -g tiddlywiki`(important)-->
<!--* click run.bat-->

<!-- ### methos2-->

<!--* use TidGi*-->

## Run(general)

* `npm run dev` depend git bashui in windows
* `yarn dev`
* `yarn localbuild`

> NOTE: if you use npm run dev &, only use npm run dev again , and ctrl c to exit this node program

<!-- ## bug-->

<!--* ~~`\$__themes_nico_notebook_ui_Bottombar.tid`-->
<!--\$__themes_nico_notebook_ui_Topbar.tid~~-->

## TODO

- [x] __crontab__: use timer or crontab to push automaticaly with smtp
- [ ] __precache__: use workbox-cli to precache offline
- [ ] __git__: use submodule to manage img and tiddler/subwiki
- [ ] __tw5__: customize respawn js, to fix during time bug(in logic)
- [x] __repo__: use runner(renovate) for repository(tw5) in gitlab platform
- [ ] __doc__: add some broken setup notes for config tw5
    1. - [ ] bug: draggin file no appear highlight because this projectify's two macro
- [ ] __fix__: Projectify schedule button disappear in mobile mode(tools)
- [ ] __try__: try publish npm package use devops for relate tw5 project
- [ ] __bug__: Fishing calendar cache disappear in sometimes
- [ ] __todo__: Using shell to replace makefile, todo test(to manage multi repository push automaticaly)
- [ ] __template__: make a tw template
- [x] __bug__: fix this scrool homepage bug
~~- [x] bug: storyview zoomin just show one tiddler(it a feature)~~
- [ ] bug: fix renoavte-bot release step error
- [ ] bug: tiny notebook theme style(minimum it)
- [x] __todo__: gitlab runner for tw5

## Broken

- [ ] xxx
