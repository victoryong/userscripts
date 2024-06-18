// define a global flag map for recording the status of all the actions
// FLAGS:
//   data: Map(key1: {func, delaytime, isForever, execTimes, handler}, key2: ....),
//   attr: FLAGS.DEFAULT: obj of default configuration {MAXTIMES, DELAYTIME, FINISHED}
//   methods: 
//     isFinished(k): get finish status of task specified by key k
//     setInterval(k): launch the scheduled task speckfied by key k
//     bulkAdd(taskList): add a series tasks in batches according to the format requirements of FLAGS
//     bulkRun(taskList): add a series tasks in batches according to the format requirements of FLAGS and run them
//     makeFinished(k): mark the task specified by key k to be finished so that the task will no longer be executed
const FLAGS = new Map()
FLAGS.DEFAULT = {
  MAXTIMES: 5,
  DELAYTIME: 1000,
  FINISHED: 0
}

FLAGS.isFinished = function (k) { return !this.get(k).isForever && this.get(k).execTimes >= this.FINISHED }

FLAGS.setInterval = function (k) {
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

FLAGS.bulkAdd = function (taskList, addOnly=true) {
  if (taskList.length > 0 && !Array.isArray(taskList[0])) {
    taskList = [taskList]
  }

  taskList.forEach(function (t) {
    console.log('[+] register task:', t[0])
    t[1].execTimes = -FLAGS.DEFAULT.MAXTIMES
    t[1].isForever = t[1].isForever || false
    t[1].delaytime = t[1].delaytime || FLAGS.DEFAULT.DELAYTIME
    FLAGS.set(t[0], t[1])

    // run task as the same time
    addOnly || FLAGS.setInterval(t[0])
  })
}

FLAGS.bulkRun = function (taskList) { this.bulkAdd(taskList, false) }

FLAGS.makeFinished = function (k) {
  console.log('[+] task: ', k, 'finished')
  var thisFlag = this.get(k)
  thisFlag.execTimes = this.DEFAULT.FINISHED + 1
  this.set(k, thisFlag)
}


// demo
// let __o = (f) => { return { func: f, isForever: true } }
// const tasks = [
//   ['rm_vip_ad', __o(removeVipAd)]
// ]
// FLAGS.bulkRun(tasks)