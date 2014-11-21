/**
 * @author        wangsen04
 * @date          2014-11-17
 * @version       1.0.0
 * @fileOverview  db-model.js
 * @description   MongoDB建模，数据库文档结构
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test-fe-log');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("lian jie");
    // yay!
});

var jsLogSchema = new Schema({
    domain: String, //域名
    address: String, //IP/地址
    os: String, //操作系统
    browse: String, //浏览器型号版本
    docType: String, //浏览器模式 u
    userName: String, //登录用户 u
    errorPage: String, //发生错误所在页 u
    errorType: String, //错误类型
    fileName: String, //发生错误文件 u
    errorMsg: String, //错误消息 u
    errorRow: String, //Js错误发生的所在文件行数u
    errorColumn: String, //Js错误发生的所在文件列数，有则上传u
    errorStack: String, //Js错误堆栈信息第二行，有则上传 u
    createTime: { type: Date}  //创建时间
})

var ajaxLogSchema = new Schema({
    domain: String, //域名
    address: String, //IP/地址
    os: String, //操作系统
    browse: String, //浏览器型号版本
    docType: String, //浏览器模式 u
    userName: String, //登录用户 u
    errorPage: String, //发生错误所在页 u
    rqUrl:String,//ajax请求路径 u
    rq:String,//Ajax请求参数  u
    ajaxStatus:String,//0: success, 1: error u
    httpStatus:String,//HTTP响应状态 u
    res: String  //Ajax响应数据 u
})

//构建jslog
exports.JsLog = mongoose.model('jslog', jsLogSchema);

//构建ajaxlog
exports.AjaxLog = mongoose.model('ajaxlog', ajaxLogSchema);


//var Cat = mongoose.model('Cat', { name: String });
//
//var kitty = new Cat({ name: 'Zildjian' });
//kitty.save(function (err) {
//    if (err) // ...
//        console.log('meow');
//});