<div style="text-align: left;background: #f6f8fa; border-radius: 3px;float:none; display: inline-block; padding: 4px;">

<details>
<summary>TOC</summary>

<!-- vim-markdown-toc GitLab -->

* [UpdateTime](#updatetime)
  * [Videos](#videos)
  * [Gallery](#gallery)
  * [RelatedSoftwares](#relatedsoftwares)
  * [Features](#features)
  * [Linux](#linux)
    * [Service](#service)
  * [Run](#run)
  * [Platform](#platform)
  * [APK](#apk)
  * [PWA](#pwa)
    * [motivate](#motivate)
  * [TODO](#todo)
  * [Broken](#broken)
  * [FAQ](#faq)

<!-- vim-markdown-toc -->
</details>


</div>

# UpdateTime

* 2022-04-08T15:41:51

## Videos

* <a href="https://www.bilibili.com/video/BV1NT4y1e7WM?share_source=copy_web" target="_blank">Demo</a>
* <a href="https://www.bilibili.com/video/BV1NT4y1e7WM?share_source=copy_web" target="_blank">Demo2</a>

## [Gallery](docs/Gallery.md)

## [RelatedSoftwares](docs/RelatedSoftwares.md)

## Features

* [x] git
* [x] timer(optional default is disable)
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

> like this

* `npm run dev` depend git bashui in windows
* `yarn dev`
* `yarn localbuild`

> NOTE: if you use npm run dev &, only use npm run dev again ,
> and ctrl c to exit this node program

## [Platform](./docs/Platform.md)

## [APK](https://gitlab.com/xxx)

## PWA

### motivate

TODO

## [TODO](docs/TODO.md)

## Broken

* [x] jd mobile casue this sticky title in mobile can't work
* [ ] no table border color

<!-- ## bug-->
<!--* ~~`\$__themes_nico_notebook_ui_Bottombar.tid`-->
<!--\$__themes_nico_notebook_ui_Topbar.tid~~-->

## [FAQ](https://oeyoew.fun/#FAQ)
