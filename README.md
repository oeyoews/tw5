<div style="text-align: left;background: #f6f8fa; border-radius: 3px; float:none; display: inline-block; padding: 4px;">

<details>
<summary>TOC</summary>

<!-- vim-markdown-toc GitLab -->

* [Update time](#update-time)
* [Demo](#demo)
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

## Update time

* 2022-03-27T00:45:22

## Demo


<div style="text-align: center">
<p>pc</p>
<img src="https://cdn.jsdelivr.net/gh/oeyoews/img/newtwdemo.png" title="img" alt="img" style="zoom: 100%" width=512 />
</div>

<!--<div style="text-align: center">-->
<!--<p>mobile</p>-->
<!--<img src="https://cdn.jsdelivr.net/gh/oeyoews/img/mobpfishing.jpeg" title="img" alt="img" style="zoom: 100%" width=512/>-->
<!--</div>-->

## DependencyGraph

<div style="text-align: center">
<p> tw5graph2</p>
<img src="https://cdn.jsdelivr.net/gh/oeyoews/img/tw5graph2.png" width=512 title="img" alt="img" width=512 style="zoom: 100%" />
</div>

## ProjectStructure

<div style="text-align: center">
<p> FileTreeGraph</p>
<img src="https://cdn.jsdelivr.net/gh/oeyoews/img/filetreegraph2.png" title="img" alt="img" width=512 style="zoom: 80%" />
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
* [x] timer(optional default is disabled)
* [x] private subwiki(git or local)
* [x] support github gitlab workflow

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

- [ ] fix: fix code block for specific type
- [x] feat: use css linkstyle to replace fontawesome plugins(too obscure)
- [ ] feat: use firacode css link
- [ ] fix: fix list link color and bg
- [ ] todo: learn use transition details
- [ ] fix: use div(maybe) to compute current window location for fishing
- [ ] feat: use switch button for two palette associate theme
- [ ] feat: combined with vanilla to notebook theme
- [ ] feat(fishing): add counter for undue
- [ ] fix: fix nico theme in phone, search box have some radius when no focus
- [ ] feat: use filter or backdrop-filter come true blur for commandpalette
- [ ] todo: use import font, such as firacode font
- [ ] __refactor__: fix like drop down border
- [ ] __refactor__: resolve this shine color, maybe can same for tid bg and div bg
- [ ] __refactor__: all stylesheet
<!--- current palette and theme not support others-->
- [x] __crontab__: use timer or crontab to push automaticaly with smtp
- [ ] __precache__: use workbox-cli to precache offline
    * http://csbun.github.io/blog/2018/02/workbox/
    * https://github.com/linonetwo/wiki
- [ ] __git__: use submodule to manage img and tiddler/subwiki
- [ ] __tw5__: customize respawn js, to fix during time bug(in logic)
- [x] __repo__: use runner(renovate) for repository(tw5) in gitlab platform
- [ ] __doc__: add some broken setup notes for config tw5
    1. - [ ] bug: draggin file no appear highlight because this projectify's two macro
- [ ] __fix__: Projectify schedule button disappear in mobile mode(tools)
- [ ] __try__: try publish npm package use devops for relate tw5 project
- [x] __bug__: Fishing calendar cache disappear in sometimes
- [ ] __todo__: Using shell to replace makefile, todo test(to manage multi repository push automaticaly)
- [x] __template__: make a tw template
- [x] __bug__: fix this scrool homepage bug
~~- [x] bug: storyview zoomin just show one tiddler(it a feature)~~
- [x] bug: fix renoavte-bot release step error
- [x] bug: tiny notebook theme style(minimum it)
- [x] __todo__: gitlab runner for tw5
- [x] fishing: fishing multi group how to discard
- [x] search local installed plugins
- [x] bug: alt d wrong
- [x] feat: make heapmap like github's
- [x] todo: better update time
- [ ] todo: tidy tiddlers
- [ ] todo: add shortkeys for close-other-tiddler
- [ ] todo: readjust kbd and checklist stylesheet
- [ ] feat: use hitoko usage
- [ ] feat: adjust backlink btn style like fishing btn
- [ ] feat: change fontawesome icon color
- [ ] feat: change fold to right
- [ ] feat: hide some private tiddlers
- [x] fix: config float message box
- [ ] fix: fix mouse hover
- [ ] bug: notebook reveal mousehover have some bug(part show)
- [ ] bug: heatmap and calendar have some performance with jump specific tiddler
- [ ] bug: fix add padding for link is conflict dropdown results
- [ ] fix: drated ui config
- [ ] feat: use scroll to hide sidebar for mobile, and come true like banner to scrool some button

## Broken

- [x] jd mobile casue this sticky title in mobile can't work
- [ ] no table border color
