// ==UserScript==
// @name        tsdm 广告去除
// @homepage
// @icon
// @version     0.1
// @description 自动删除 tsdm 页面上的广告
// @author      ridersaying
// @license     MIT
// @grant       none
// @match       http://www.tsdm6.com/*
// @match       http://www.tsdm8.com/*
// @namespace https://greasyfork.org/users/1185853
// ==/UserScript==

let ads = document.getElementsByTagName('img')
for (let j = 0; j < ads.length; j++) {
  if (ads[j].id.search('show_img') != -1) {
    // remove ad by id
    console.log(`remove ad id== ${ads[j].id}`)
    ads[j].remove()
  }
}

let ads2 = document.getElementsByTagName('img')
for (let j = 0; j < ads2.length; j++) {
  if (ads2[j].alt.search('广告') != -1) {
    // remove ad by alt
    console.log(`remove ad alt== ${ads2[j].alt}`)
    ads2[j].remove()
  }
}
