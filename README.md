<div style="text-align: left;background: #f6f8fa; border-radius: 3px; float:none; display: inline-block; padding: 4px;">

<details>
<summary>TOC</summary>

<!-- vim-markdown-toc GitLab -->

* [UpdateTime](#updatetime)
* [Demo](#demo)
* [DependencyGraph](#dependencygraph)
* [ProjectStructure](#projectstructure)
* [RelatedSoftwares](#relatedsoftwares)
* [Features](#features)
* [Linux](#linux)
  * [Service](#service)
* [Run](#run)
* [TODO](#todo)
* [Broken](#broken)

<!-- vim-markdown-toc -->
</details>

</div>
<!--[![Netlify Status](https://api.netlify.com/api/v1/badges/a42c9618-8fd5-41cd-9cb9-901b588369ad/deploy-status)](https://app.netlify.com/sites/tw5/deploys)-->

## UpdateTime

* 2022-03-27T00:45:22

## Demo


<div style="text-align: center">
<p>pc</p>
<img src="https://cdn.jsdelivr.net/gh/oeyoews/img/pc2.png" title="img" alt="img" style="zoom: 100%" width=512 />
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

## Run

* `npm run dev` depend git bashui in windows
* `yarn dev`
* `yarn localbuild`

> NOTE: if you use npm run dev &, only use npm run dev again , and ctrl c to exit this node program


## [TODO](TODO.md)
<!-- ## bug-->

<!--* ~~`\$__themes_nico_notebook_ui_Bottombar.tid`-->
<!--\$__themes_nico_notebook_ui_Topbar.tid~~-->

## Broken

- [x] jd mobile casue this sticky title in mobile can't work
- [ ] no table border color
