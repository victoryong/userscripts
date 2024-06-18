// ==UserScript==
// @name         Ynote Page Optimization
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Victor X
// @match        https://note.youdao.com/web/
// @icon         data:image/jpeg;base64,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
// @grant        none
// ==/UserScript==

// define a global flag map for recording the status of all the actions
// FLAGS: 
//   data: Map(key1: {func, delaytime, isForever, execTimes, handler}, key2: ....), 
//   attr: FLAGS.DEFAULT: obj of default configuration {maxtimes, delaytime, finished}
const FLAGS = new Map()
FLAGS.DEFAULT = {
  MAXTIMES: 5,
  DELAYTIME: 1000,
  FINISHED: 0
}

FLAGS.isFinished = function (k) { return !this.get(k).isForever && this.get(k).execTimes >= this.FINISHED }
// FLAGS.setTimeout = function (k) {
//     if (!this.isFinished(k)) {
//         var thisFlag = this.get(k)
//         thisFlag.execTimes += 1
//         this.set(k, thisFlag)
//         setTimeout(thisFlag.func, thisFlag.delaytime)
//     } else {
//         console.log('[*] task: ', k, 'exceed MAXTIMES')
//     }
// }
FLAGS.setInterval = (k) => {
  var thisFlag = this.get(k)
  thisFlag.handler !== undefined && clearInterval(thisFlag.handler)
  thisFlag.handler = setInterval(() => {
    if (!FLAGS.isFinished(k)) {
      thisFlag.execTimes += 1
      FLAGS.set(k, thisFlag)
      thisFlag.func()
    } else {
        console.log('[*] task: ', k, 'exceed MAXTIMES')
        clearInterval(thisFlag.handler)
    }
  }, thisFlag.delaytime);
}
FLAGS.run = function (k) { this.setInterval(k) }
FLAGS.bulkAdd = function (taskList) {
  taskList.forEach(function (t) {
    console.log('[+] register task:', t[0])
    t[1].execTimes = -FLAGS.DEFAULT.MAXTIMES
    t[1].isForever = t[1].isForever || false
    t[1].delaytime = t[1].delaytime || FLAGS.DEFAULT.DELAYTIME
    FLAGS.set(t[0], t[1])
  })
}
FLAGS.addAndRun = function (taskList) {
  if (taskList.length > 0 && !Array.isArray(taskList[0])) {
    taskList = [taskList]
  }
  this.bulkAdd(taskList)
  taskList.forEach(function (t){ FLAGS.run(t[0]) })
}
FLAGS.makeFinished = function (k) {
    console.log('[+] task: ', k, 'finished')
    var thisFlag = this.get(k)
    thisFlag.execTimes = this.DEFAULT.FINISHED + 1
    this.set(k, thisFlag)
}


// define some fundamenetal functions of DOM operation
let _$ = document.querySelector.bind(document)
let _$$ = document.querySelectorAll.bind(document)

function tryElementAction(selector, actionFunc = function (e){ return e && true }, onAll = false) {
  try {
    const el = onAll ? _$$(selector) : [_$(selector)]

    for (let e of el) {
      if (!actionFunc(e)) {
        return false
      }
    }
    return true
  }catch (err) {
    console.log('[-]', selector, err)
    return false
  }
}

function tryRemoveElement(selector, judgeFunc = undefined, rmAll = false) {
  return tryElementAction(selector, function (e){
    if (judgeFunc && !judgeFunc(e)) return false
    e.remove()
    return true
  }, rmAll)
}

// function tryElementActionAndSetTimeout(selector, flagKey, thisFunc, actionFunc = function (e){ return true }, onAll = false) {
//   if (tryElementAction(selector, actionFunc, onAll)) {
//     return true
//   }
//     console.log('thisFuck:', thisFunc)
//   FLAGS.setTimeout(flagKey, thisFunc)
//   return false
// }

// ynote page actions
function removeSidebarAd(){
  tryRemoveElement('ad-component', rmAll=true)
  tryElementAction('#flexible-list-left recent > div > div.list-bd.noItemNum', (e) => {e.removeClass('adList')} )
}

function removeVipAd(){
  tryElementAction('list > div.list recent > div > div.list-bd', function (e){
      if (!e) return false
        e.style.top = '0px'
        e.style.position = 'relative'
      return true
    }
  )
}


// function dynamicResetList(t){
//     return tryElementActionAndSetTimeout(
//     'ul.tree-container',
//     t[0],
//     t[1],
//     function (e){
//       if (!e) return false
//       e.onclick = function () {
//         FLAGS.addAndRun(tasks[1])
//       }
//       return true
//     },
//      true
//   )
// }


let __o = (f) => { return {func: f, isForever: true} }
const tasks = [
  ['rm_sidebar_ad', __o(removeSidebarAd)],
    ['rm_vip_ad', __o(removeVipAd)],
    // ['dynamic_reset_list', __o(dynamicResetList)]
]

// bind onload event
window.onload = function (){
    FLAGS.addAndRun(tasks)
}


