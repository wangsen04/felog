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
    docType: String, //浏览器模式
    userName: String, //登录用户
    errorPage: String, //发生错误所在页
    errorType: String, //错误类型
    fileName: String, //发生错误文件
    errorMsg: String, //错误消息
    errorRow: String, //Js错误发生的所在文件行数
    errorColumn: String, //Js错误发生的所在文件列数，有则上传
    errorStack: String, //Js错误堆栈信息第二行，有则上传
    createTime: String  //创建时间
})

var ajaxLogSchema = new Schema({
    domain: String, //域名
    address: String, //IP/地址
    os: String, //操作系统
    browse: String, //浏览器型号版本
    docType: String, //浏览器模式
    userName: String, //登录用户
    errorPage: String, //发生错误所在页
    rqUrl:String,//ajax请求路径
    rq:String,//Ajax请求参数
    ajaxStatus:String,//0: success, 1: error
    httpStatus:String,//HTTP响应状态
    res: String  //Ajax响应数据
})

//构建jslog的表
exports.JsLog = mongoose.model('jslog', jsLogSchema);

//构建ajaxlog的表
exports.AjaxLog = mongoose.model('ajaxlog', ajaxLogSchema);


//var Cat = mongoose.model('Cat', { name: String });
//
//var kitty = new Cat({ name: 'Zildjian' });
//kitty.save(function (err) {
//    if (err) // ...
//        console.log('meow');
//});