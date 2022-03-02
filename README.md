<div style="text-align: left;background: lightgreen;border-radius: 5px; float:none">

<details>
<summary>TOC</summary>

<!-- vim-markdown-toc GitLab -->

* [README](#readme)
  * [dependency](#dependency)
  * [feature](#feature)
  * [Linux](#linux)
    * [service](#service)
  * [run(general)](#rungeneral)
  * [todo](#todo)

<!-- vim-markdown-toc -->
</details>

</div>
<!--[![Netlify Status](https://api.netlify.com/api/v1/badges/a42c9618-8fd5-41cd-9cb9-901b588369ad/deploy-status)](https://app.netlify.com/sites/tw5/deploys)-->

# README

## dependency

<div style="text-align: center">
<p> Hello </p>
<img src="https://cdn.jsdelivr.net/gh/oeyoews/img/tw5graph.png" width=512 title="img" alt="img" style="zoom: 100%" />
</div>

## feature

- [ ] todo

## Linux

* install `make` `node` `git`
* type make in current directory

### service

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

## run(general)

* `npm run dev` depend git bashui in windows
* `yarn dev`
* `yarn localbuild`

> NOTE: if you use npm run dev &, only use npm run dev again , and ctrl c to exit this node program

<!-- ## bug-->

<!--* ~~`\$__themes_nico_notebook_ui_Bottombar.tid`-->
<!--\$__themes_nico_notebook_ui_Topbar.tid~~-->

## todo

- [ ] use workbox-cli
- [ ] use submodule to manage
- [ ] use timer or crontab to push automaticaly with smtp
