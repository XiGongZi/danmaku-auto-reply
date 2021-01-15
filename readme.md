# bilibili弹幕自动回复

### 一、概述

此项目用于对bilibili直播间的弹幕进行关键词自动回复。  

代码分为两部分，一部分用来发送请求，入口在  `./src/index.js`, 另一部分需要在对应房间里的控制台内运行（用来获取最新的弹幕）  

正在写关于本项目是如何工作的相关文档  

### 二、使用

1. git clone https://github.com/XiGongZi/danmaku-auto-recall.git
2. npm install
3. 配置登录信息（见下文）
4. npm dev
5. 将./runInBro.js 代码粘贴到目标直播间console



 ##### 配置登录信息


1. 复制 ./src/config/person.config.js.bak 并命名为 person.config.js
2. 在web上登录bilibili
3. 打开相应直播间
4. 按f12打开开发者工具，点击network
5. 发送任意内容弹幕
6. 在network中点击新的 send 发送请求
7. 在 Headers 中奖 Request Headers 中的 cookie 拷贝到 `./src/config/person.config.js` 的 cookie 中
8. 将最下面的数据 From Data 中的 roomid 和 csrf 字段内容拷贝到 `./src/config/person.config.js` 同字段