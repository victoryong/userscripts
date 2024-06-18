// define some fundamenetal functions of DOM operation
let _$ = document.querySelector.bind(document)
let _$$ = document.querySelectorAll.bind(document)

// js operations
function tryMultiAction(selectors, actionFunc = function (e) { return e && true }) {
  for (let s of selectors) {
    tryElementAction(s, actionFunc, true)
  }
}

function tryElementAction(selector, actionFunc = function (e) { return e && true }, onAll = false) {
  try {
    const el = onAll ? _$$(selector) : [_$(selector)]

    for (let e of el) {
      if (!actionFunc(e)) {
        return false
      }
    }
    return true
  } catch (err) {
    console.log('[-]', selector, err)
    return false
  }
}

function tryRemoveElements(selector, judgeFunc = undefined, rmAll = false) {
  let tryFunc = Array.isArray(selector) && tryMultiAction || tryElementAction
  return tryFunc(selector, function (e) {
    if (judgeFunc && !judgeFunc(e)) return false
    e.remove()
    return true
  }, rmAll)
}


// css operations
function addStyleBlock(styleText, blkId) {
  let s = document.createElement('style')
  if (blkId){
    s.id = blkId
  }
  s.innerHTML = styleText
  document.head.appendChild(s)
}

function hideElements(selectors) {
  if (Array.isArray(selectors)) {
    selectors = Array.join(selectors)
  }
  addStyleBlock(selectors + " { display: none } ", 'remove-elems')
}