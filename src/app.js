const common = require("./libs/common");
const sendInfo = require("./axios/axios");
const checkWord = require("./libs/checkWords");
let fun = {
  power: false,
  list: [],
  needSendList: [],
  loopTimes: 0,
  readySend() {
    let newWord = this.list.shift().substring(0,20);
    // this.needSendList 
    console.log("readySend", newWord);
    const res = sendInfo(newWord);
    console.log("readySend res", res);
  },
  async loopSend() {
    await common.sleep(1000);
    this.loopTimes++;
    console.log(`第${this.loopTimes}次判断`);
    if (this.list.length) {
      this.readySend();
    }
    return this.loopSend();
    // console.log(this.list);
    // console.log(newWord);
  },
  init(words) {
    /**
     * 1. 根据words获取最新列表
     * 2. 和当前队列合并并去重
     */
    try {
      console.log(1);
      let needSend = checkWord.checkKeywords(words);
      console.log(2);
      console.log("needSend", needSend);
      needSend = [...this.list, ...needSend];
      let set = new Set(needSend);
      this.list = [...set];
      console.log("finList", this.list);
      
      // 若未启动则启动loop
      if (!this.power) {
        this.power = true;
        this.loopSend();
      }
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = fun;
