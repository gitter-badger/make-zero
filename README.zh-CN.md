<div align="center">
	<img src="./doc/img/banner.jpeg" width="50%">
</div>

[![codecov](https://codecov.io/gh/sheepzh/make-zero/branch/main/graph/badge.svg?token=S98QSBSKCR&style=flat-square)](https://codecov.io/gh/sheepzh/make-zero)
[![](https://img.shields.io/github/license/sheepzh/make-zero)](https://github.com/sheepzh/make-zero/blob/main/LICENSE)
[![](https://img.shields.io/badge/license-Anti%20996-blue)](https://github.com/996icu/996.ICU)
[![](https://img.shields.io/github/v/release/sheepzh/make-zero)](https://github.com/sheepzh/make-zero/releases)
![visitors](https://visitor-badge.glitch.me/badge?page_id=sheepzh.make-zero)

> 语言属于未知。


[English](./README.md) | 简体中文


## 它是什么？

MakeZero 是一个用于加密网络文本的 Chrome 插件。

它能够加密你在微博，豆瓣或者博客等 SNS 社区中发送的任何文本内容，只有拥有相同密码的人能够解密。

极大地方便了有相同共识的小群体能在微博/豆瓣等公共场所讨论~~国家大是~~ 🐶🐶🐶，同时也防止你殚精竭虑绞尽脑汁的语言输出，最终变成语料，变成被监控和探测的敏感词。

<u>**插件演示视频**</u>：[www.bilibili.com](https://www.bilibili.com/video/BV1x54y1t7MR)

<u>**下载地址**</u>: [Google Chrome](https://chrome.google.com/webstore/detail/make-zero/ihpcojcdiclghnggnlkcinbmfpomefcc?hl=zh-CN) | [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/gkjmpdoddilgcfoeokeajfecogaaocol) | [FireFox](https://addons.mozilla.org/zh-CN/firefox/addon/make-zero/)


## 它能做什么？

+ 文本加解密，支持多种交互方式：手动，自动，快捷加密。
+ 自定义密码，初次安装时缺省为 123456。
+ 多种密文风格供选择：固定密文，随机密文，摩斯码，切噜语。

<div align="center">
  <img src="./doc/img/use-in-douban.gif">
</div>

## 如何编译？

先确保已经安装 nodejs

```shell
git clone https://github.com/sheepzh/make-zero.git
cd make-zero
npm install

# 开发环境编译，输出目录：dist_dev(可加载至 Chrome，Edge)，firefox_dev(可加载至 FireFox)
# Chrome 内核浏览器与 FireFox 浏览器 manifest.json 有细微差别
npm run build

# 生产环境编译
# 输出目录：chrome_dir，以及 market_packages (发布到各大插件商城的 zip，以及源码 zip)
npm run build:prod
```

## 如何使用？

> 安装完成后会自动弹出插件的使用教程，按步骤操作一遍即可。

+ 插件设置

 点击 MakeZero 的小图标打开主面板。可在该界面修改密码和密文风格，以及是否自动加/解密。

+ 自动加密

  如果设置面板勾选了自动加密，网页输入框在输入/获取焦点时会显示明文；输入完成/失去焦点时，框内文本会自动变成密文。

+ 自动解密

  如果设置面板勾选了自动解密，网页在加载完成之后会自动将识别出的密文解密成明文。

+ 手动加/解密
  
  直接选中文字，点击右键弹出菜单，然后点击菜单项 make-zero -> 加/解密。或者使用快捷键 Ctrl + ,

## 有什么好的建议吗？

> returnzhy1996@outlook.com