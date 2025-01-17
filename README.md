<div align="center">
	<img src="./doc/img/banner.jpeg" width="50%">
</div>

[![](https://travis-ci.com/sheepzh/make-zero.svg?branch=main&status=passed)](https://travis-ci.com/sheepzh/make-zero.svg?branch=main&status=passed)
[![codecov](https://codecov.io/gh/sheepzh/make-zero/branch/main/graph/badge.svg?token=S98QSBSKCR&style=flat-square)](https://codecov.io/gh/sheepzh/make-zero)
[![](https://img.shields.io/github/license/sheepzh/make-zero)](https://github.com/sheepzh/make-zero/blob/main/LICENSE)
[![](https://img.shields.io/badge/license-Anti%20996-blue)](https://github.com/996icu/996.ICU)
[![](https://img.shields.io/github/v/release/sheepzh/make-zero)](https://github.com/sheepzh/make-zero/releases)
![visitors](https://visitor-badge.glitch.me/badge?page_id=sheepzh.make-zero)

> Uncertain Language.


English | [简体中文](./README.zh-CN.md)


## What is it?

<b><i>Make Zero</i></b> is a browser plugin/add-on for text encryption. It can run among Chrome, Firefox and the latest Edge.

It can encrypt any texts you typed on net, and only those know your  password can decrypt it and see the origin text.

It makes people with the same consensus more easily to discuss in public and to be ~~punkers~~ 🐶🐶🐶. Meanwhile, it also prevents your exhausted thought output from eventually turning into just corpus, even objects which are monitored and detected as to sensitive words.

<u>**Demo video**</u>: [www.youtube.com](https://youtu.be/y97xMhQpce8)

<u>**Downloads**</u>: [Google Chrome](https://chrome.google.com/webstore/detail/make-zero/ihpcojcdiclghnggnlkcinbmfpomefcc?hl=zh-CN) | [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/gkjmpdoddilgcfoeokeajfecogaaocol) | [FireFox](https://addons.mozilla.org/zh-CN/firefox/addon/make-zero/)


## What can it do?

+ Text encryption and decryption, supports multiple interactive methods: manual, automatic, and fast cryption.
+ Set a custom password, and the default is 123456 after the first installation.
+ A variety of ciphertext styles to choose: fixed password, random ciphertext, Morse code, Cherus.

<div align="center">
  <img src="./doc/img/use-in-douban.gif">
</div>

## How to build it?

At first, make sure nodejs is installed.

```shell
git clone https://github.com/sheepzh/make-zero.git
cd make-zero
npm install

# Build for development
# Two output directories:
#  1. "dist_dev" for Chrome & Edge
#  2. "firefox_dev" for FireFox
# You can load it from above folders in development mode of browers.
npm run build

# Build for production
# The output directory is "chrome_dir"
# Also the package of app and source code to be submitted to the store will be archived and moved to the "market_packages" directory 
npm run build:prod
```

## How to use it?

> A tutorial page will be open after installed, just follow it and do once.

+ Settings

 Click the extension icon of <i>Make Zero</i>, which is always at the top-right corner of browser and the setting page will be popped. You can change password in this page.

+ Automatic encryption

  If automatic encryption is checked in the settings panel, the input boxes with ciphertext will display plaintext when focus and ciphertext after focus lost.

+ Automatic decryption

  If automatic decryption is checked in the settings panel, the detected ciphertext will be replaced with plaintext with current password, after page loaded completely.

+ Manually
  
  Select texts, right click, and choose the menu item to encrypt or decrypt the selected texts. Also you can press the shortcut key <i>Ctrl</i>+<i>,</i> instead of the above operation.

## Any suggestions?

> returnzhy1996@outlook.com
