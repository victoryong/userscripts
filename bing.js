// ==UserScript==
// @name         自己写的bing网页优化
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  我不喜欢的，统统去掉！
// @author       victor
// @match        *://*.bing.com/*
// @grant        none
// ==/UserScript==

/********* common functions **********/
var $$ = function(s) { return document.querySelectorAll(s) }
var $ = function(s) { return document.querySelector(s) }

function is_invalid(s) { return s == null || s == 'undefined' || s == 'null' }


function __remove_elems(selectors) {
	// query all elements of each selector in parameter selectors which is a css selector list, and then remove all of them
	for (var i = 0; i < selectors.length; i++) {
		var elems = $$(selectors)
		for (var j = 0; j < elems.length; j++) {
			console.log(elems[j])
			elems[j].remove()
		}
	}
}


function __modify_elem_style(style_json_arr) {
	// modify style of elements, ele can be one element or list of some elements
	// parameter style_json_arr is a json array, like this: [{'selector': '#id1', 'attr1': 'val1', 'attr2': 'val2'}, ...]
	// if (!is_invalid(ele)){
	//     var tmp = function (){}
	//     var attr_val = '"' + val + '"'

	//     // define a modify function according to parameter st
	//     if (st == 'border-radius' || st == 'borderRadius'){
	//         tmp = function (){ if(!is_invalid(this)) { this.style.borderRadius = attr_val }}
	//         console.log(ele, '    border-radius=' + attr_val)
	//     } else if(st == 'border') {
	//         tmp = function () { if(!is_invalid(this)) { this.style.border = attr_val }}
	//         console.log(ele, '    border=' + attr_val)
	//     } else if 

	//     // if ele is a list of elements, execute the new style on each element
	//     if (ele instanceof Node){
	//         if (!is_invalid(ele)) { tmp.call(ele) }
	//     } else if (ele instanceof NodeList){
	//         for (var i = 0; i < ele.length; i++){
	//             if (!is_invalid(ele[i])) { tmp.call(ele[i]) }
	//         }
	//     } else {
	//         console.log('[ERROR] wrong type of ele')
	//     }
	// }


	var css_text_nodes = []
	for (var i in style_json_arr) {
		// process one selector
		var selector = style_json_arr[i]['selector']
		if (is_invalid(selector)) {
			continue
		}

		// extract all attributes and their values
		var css_text = ''
		for (var j in style_json_arr[i]) {
			if (j == 'selector') {
				continue
			}
			css_text += '\t' + j + ': ' + style_json_arr[i][j] + ';\n'
		}

		if (css_text.trim().length > 0) {
			css_text = selector + '{\n' + css_text + '}\n'
			css_text_nodes[css_text_nodes.length] = document.createTextNode(css_text)
		}
	}

	if (css_text_nodes.length > 0) {
		var style_element = document.createElement('style')
		style_element.type = 'text/css'
		style_element.appendChild(document.createTextNode('\n'))

		for (var i in css_text_nodes) {
			style_element.appendChild(css_text_nodes[i])
		}
		console.log(style_element)
		$('head').appendChild(style_element)
	}
}


/********* specialized functions **********/
function remove_elements() {
	console.log('[INFO] remove elements below: ')
	__remove_elems([
		'li.b_ad',
		'div.sb_add.sb_adTA',
	])
	console.log('[INFO] remove ended. ')
}


function modify_styles() {
	console.log('[INFO] modify styles: ')

	__modify_elem_style([
		{ 'selector': 'ol#b_results > li', 'border-radius': '8px', 'border-width': '1px', 'border-style': 'solid', 'border-width': '1px', 'border-color': 'transparent' },
		// {'selector': 'aside[aria-label="更多结果"]', 'position': 'fixed'}
	])

	console.log('[INFO] modify styles ended. ')
}


function hover_style() {
	console.log('[INFO] set hover styles...')

		// hover the cards in main content
		! function() {
			var sel = 'ol#b_results > li'
			var li_list = $$(sel)
			//li_list = Array.prototype.slice.call(li_list, 0, li_list.length - 4)

			for (var i = 0; i < li_list.length && !li_list[i].className.includes('b_pag'); i++) {
				li_list[i].addEventListener('mouseover', function() {
					this.style.background = '#00ffff47'
					this.style.boxShadow = '2px 2px 5px #eee'
					this.style.borderColor = '#00d9ff'
					// this.style.borderRadius = '5px'
				})

				li_list[i].addEventListener('mouseout', function() {
					this.style.background = ''
					this.style.boxShadow = ''
					this.style.borderColor = ''
				})
			}
			console.log('  "' + sel + '": background, box-shadow, border ')
		}()

	console.log('[INFO] set hover styles ended')
}


/********* main entrance **********/
(function() {
	'use strict'

	remove_elements();
	modify_styles();
	hover_style();
})()