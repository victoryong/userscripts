// ==UserScript==
// @name         自己写的百度网页优化
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  我不喜欢的，统统去掉！
// @author       victor
// @match        *://*.baidu.com/*
// @icon
// @run-at       document-end
// ==/UserScript==

function remove_elems(selectors) {
	for (var i = 0; i <selectors.length; i++){
		$(selectors[i]).remove()
	}
}

function polysemant() {
    var polysemant = $('.polysemant-list')
    if (polysemant.length > 0) {
        polysemant.width('98%')
        polysemant.children().width('98%')
        polysemant.css('margin-bottom', '5px')
        $('body > div.body-wrapper > div.content-wrapper').prepend(polysemant)
    }
}

(function () {
	'use strict'
	// Baike
	// Resize elements
	$('body.wiki-lemma div.main-content').width('70%')
	$('body.wiki-lemma div.side-content').width('14%')
	$('body.wiki-lemma div.content').width('98%')
	$('body.wiki-lemma .feature_poster .poster').width('98%')
	$('body.wiki-lemma .feature_poster .poster .con').width('70%')
	$('body.wiki-lemma .feature_poster .poster .summary-pic').width('22%')

    polysemant()

	// Remove
	remove_elems([
		'div#side_box_unionAd',
		'div.side-content div.lemmaWgt-promotion-slide',
		'div.right-ad',
		'div.fc-guess-like.new',
		'div.wgt-footer-main',
		'div.declare-wrap',
		'div.topbar.cmn-clearfix',
		'div.navbar-wrapper',
		'div.main-content div.top-tool',
		'body > div.body-wrapper > div.before-content',
		'body.wiki-lemma > div.lemmaWgt-searchHeader',
		'body div.side-content > div.lemmaWgt-promotion-vbaike',
		'body > div.body-wrapper.feature.feature_small.starSmall > div.secondsknow-large-container.J-secondsknow-large-container'
		])

	// Modify styles
	$('body.wiki-lemma div.para').css('font-size', '15px').css('line-height', '1.6')
	$('sub').css('font-size', '90%')

    
})()