// ==UserScript==
// @name         自己写的知乎优化
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  我不喜欢的，统统去掉！
// @author       victor
// @match        *://*.zhihu.com/*
// @icon
// @run-at       document-end
// ==/UserScript==

function $(selector ){
    return document.querySelectorAll(selector)
}

function __remove_elems(selectors) {
	for (var i = 0; i <selectors.length; i++){
		var elems = $(selectors)
        for (var j in elems){
            try{
                elems[j].parentNode.removeChild(elems[j])
            }catch (e){
                // console.log(e)
                // console.log(elems[j])
            }
        }
	}
}


function async_optimize(){
	// Resize elements

	// Remove
    __remove_elems([
		'div.TopstoryItem--advertCard', // 主界面中插在每条文章中的广告
		'div.Feed[data-za-extra-module*="video_id"]',  // 视频
	])
	
}



(function () {
	'use strict'
	async_optimize()
    window.onscroll = async_optimize
})()