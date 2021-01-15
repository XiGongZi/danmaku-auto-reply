
/**
 * @author gongzixi
 * 
 * @功能描述 每隔一定时间获取最新弹幕并发送给目标机器
 * 
 * @使用 复制到房间即可
 */

let fun = {
  lastLen: 0,
  times: 1,
  interval: {},
  clear() {
    clearInterval(fun.interval);
  },
  setint() {
    fun.interval = setInterval(()=>{
      console.log(`第${fun.times}次检查`);
      fun.times++;
      let len = $("#chat-items").children().length;
      if (len > 90) $(".chat-items").html("");
      if (len > fun.lastLen) fun.wordsInit();
    },3000);
  },
  // 获取最新的单词列表
  wordsInit() {
    var words = fun.getWords();
    if (words.length) fun.recall(words);
  },
  // 回复
  recall(data) {
      console.log("will send data is ", data);
      fun.post({info: data})
  },
  post(data) {
    $.ajax({
      url: 'http://localhost:8081/send',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      async: false,
      success: function(msg) {
          // alert(msg);
          console.log("msg", msg)
      }
  });
  },
  // 从dom中获取新的文字数组
  getWords() {
    var list = $("#chat-items").children();
    var strArr = list.slice(fun.lastLen);
    var arr = [];
    var length = strArr.length;
    for (var i = 0; i < length; i++) {
      let danmaku = strArr[i].dataset.danmaku || "";
      if (danmaku) arr.push(danmaku);
    }
    fun.lastLen+= length;
    return arr;
  },
  init() {
    $(".chat-items").html("");
    // fun.lastLen = 0;
    fun.setint();
  }
}
fun.init()

