<div style="text-align: left;background: #f6f8fa; border-radius: 3px; float:none; display: inline-block; padding: 4px;">

<details>
<summary>TOC</summary>

<!-- vim-markdown-toc GitLab -->

* [UpdateTime](#updatetime)
* [Gallery](#gallery)
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

## UpdateTime

* 2022-04-08T15:41:51


## [Gallery](docs/Gallery.md)

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


## Run

* `npm run dev` depend git bashui in windows
* `yarn dev`
* `yarn localbuild`

> NOTE: if you use npm run dev &, only use npm run dev again , and ctrl c to exit this node program


## [TODO](docs/TODO.md)

## Broken

- [x] jd mobile casue this sticky title in mobile can't work
- [ ] no table border color

<!-- ## bug-->
<!--* ~~`\$__themes_nico_notebook_ui_Bottombar.tid`-->
<!--\$__themes_nico_notebook_ui_Topbar.tid~~-->
