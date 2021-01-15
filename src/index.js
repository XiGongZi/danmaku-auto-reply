const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
// const sendInfo = require("./axios/axios");
const checkWord = require("./app.js");
const cors = require('cors');
const corsConfig = require('./config/cors-config');


const port = 8081;
  
app.use(cors(corsConfig));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

  app.use(express.static(path.join(__dirname, './')));
  // 解决跨域问题
  app.all('*', function(req, res, next) {
    next();
  });
  app.use("/send", async function(req, res, next){
    try {
      console.log("send!", req.body.info);
      checkWord.init(req.body.info);
      // console.log("res", res);
      // if (!req.body.info) throw("未读取到info信息")
      // const res = await sendInfo(req.body.info); 
      res.json({isOk: 200, message: "ok"});
    } catch (e) {
      res.json({isOk: 201, message: e})
    }
    // if ()
  });
  app.listen(port, function() {
    console.log('server is running at port ' + port);
  });
// }