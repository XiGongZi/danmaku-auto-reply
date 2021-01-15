const keywords = require("./json/keywords.json");
const fs = require("fs");


let arr = [];

for (let key in keywords) {
  arr.push(key);
}


let res = {
  keywords: arr,
  keywordsObj: keywords,
}

fs.writeFile("./src/json/keywordsDic.json", JSON.stringify(res), err => {
  console.log(err);
});