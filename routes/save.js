/**
 * @author        wangsen04
 * @date          2014-11-17
 * @version       1.0.0
 * @fileOverview  save.js
 * @description   控制前端日志上传路由，接收get参数，MongoDB查询存入
 */
var express = require('express');
var url = require('url');
var model = require('../model/db-model.js');
var router = express.Router();

//jslog存储
router.get('/jslog.gif', function (req, res) {
    console.log("-----test:"+req.headers.referer+"----------");
    var queryPart = url.parse(req.url, true).query;
    queryPart.createTime=new Date();
    var jsLog = new model.JsLog(queryPart);
    jsLog.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('save success');
            res.send('已保存');
        }
    });

});


//ajaxlog存储
router.get('/ajaxlog.gif', function (req, res) {
    var queryPart = url.parse(req.url, true);
    var ajaxLog = new model.AjaxLog(queryPart);
    ajaxLog.save(function (err) {
        if (err) {
            console.log('save failed');
        } else {
            res.send('已保存ajaxlog');
        }
    });
});



module.exports = router;