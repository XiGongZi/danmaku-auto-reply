var axios = require('axios');
var axiosConfig = require('../config/person.config');
var FormData = require('form-data');

module.exports = msg => {
  
var data = new FormData();
data.append('color', '16777215');
data.append('fontsize', '25');
data.append('msg', msg);
data.append('rnd', '1610469349');
data.append('roomid', axiosConfig.roomid);
data.append('csrf', axiosConfig.csrf);
// data.append('mode', '1');
// 看地球
// data.append('roomid', '14047');
// 我自己
// data.append('roomid', '551690');
// 冬灰条

// 
// data.append('bubble', '0');
// data.append('csrf_token', '80676f9e981815d4820ef964a73e7a27');

var config = {
  method: 'post',
  url: 'https://api.live.bilibili.com/msg/send',
  headers: { 
    'access-control-allow-origin': 'https://live.bilibili.com', 
    'bili-status-code': '0', 
    'cookie': axiosConfig.cookie, 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  return JSON.stringify(response.data);
})
.catch(function (error) {
  return error;
});

}