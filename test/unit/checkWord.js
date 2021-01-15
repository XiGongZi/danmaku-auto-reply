var checkWords = require("../../src/libs/checkWords.js");
var assert  = require("assert");

var keyword = "";

keyword = "年龄";
it(`${keyword} should return ${checkWords.keywordsObj[keyword]}`, function()
{
    var sum = checkWords.checkKeywords([keyword]);
    sum = JSON.stringify(sum);
    assert.equal(sum, JSON.stringify([checkWords.keywordsObj[keyword]]) );
});
