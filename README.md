<div style="text-align: left;background: lightgreen;border-radius: 5px; float:none">

<details>
<summary>TOC</summary>

<!-- vim-markdown-toc GitLab -->

* [Dependency](#dependency)
* [Features](#features)
* [Linux](#linux)
  * [Service](#service)
* [Run(general)](#rungeneral)
* [Todo](#todo)

<!-- vim-markdown-toc -->
</details>

</div>
<!--[![Netlify Status](https://api.netlify.com/api/v1/badges/a42c9618-8fd5-41cd-9cb9-901b588369ad/deploy-status)](https://app.netlify.com/sites/tw5/deploys)-->

## Dependency

<div style="text-align: center">
<p> Hello </p>
<img src="https://cdn.jsdelivr.net/gh/oeyoews/img/tw5graph.png" width=512 title="img" alt="img" style="zoom: 100%" />
</div>

## Features

- [x] git
* [x] timer

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

## Todo

- [x] use timer or crontab to push automaticaly with smtp
- [ ] use workbox-cli to precache offline
- [ ] use submodule to manage img and tiddler/subwiki
- [ ] customize respawn js, to fix during time bug(in logic)
- [ ] use runner(renovate) for repository(tw5) in gitlab platform
- [ ] add some broken setup notes for config tw5
- [ ] Projectify schedule button disappear in mobile mode(tools)
- [ ] try publish npm package use devops for relate tw5 project
- [ ] Fishing calendar cache disappear in sometimes
- [ ] Using shell to replace makefile, todo test(to manage multi repository push automaticaly)
