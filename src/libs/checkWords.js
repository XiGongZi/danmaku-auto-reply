const keys = require("../json/keywords.json");



let fun = {
  keywords: [],
  keywordsObj: keys,
  // 检测是否含关键词
  checkKeywords(data) {
    for (let key in this.keywordsObj) {
      this.keywords.push(key);
    }
    // console.log(data);
    let needwords = [];
    let length = data.length;
    console.log("23", this.keywords);
    // console.log("23", this.keywords);
    let keywordsLength = this.keywords.length;
    // console.log("233")
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < keywordsLength; j++) {
        if (data[i] && data[i].indexOf(this.keywords[j])>-1) needwords.push(this.keywordsObj[this.keywords[j]]);
      }
    }
    // console.log("needwords", needwords);
    return needwords;
  },
  init(words) {
    return this.checkKeywords(words);
  }
}
module.exports = fun;
