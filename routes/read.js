/**
 * Created by wangsen04 on 11/17 0017.
 */
var express = require('express');
var url = require('url');
var moment = require('moment');
var model = require('../model/db-model.js');
var router = express.Router();

var JsLog = model.JsLog;
var AjaxLog = model.AjaxLog;

//到查询页面
router.get('/js/error/query', function (req, res) {
    JsLog.find({}, function (err, docs) {
        if (err) return console.error(err);
        console.log( docs);
        res.render('read', {title: 'jsLog查询', jsLog: docs,moment:moment});
    });
});

//post查询
router.post('/js/error/query', function (req, res) {
    var domain=req.body.domain;
    var start=req.body.startTime;
    var end=req.body.endTime;

    reg=/./;
    domain=domain?domain:reg;
    start=new Date(start);
    end=new Date(end);

    JsLog.find({domain:domain,createTime:{$gte: start, $lte: end}}, function (err, docs) {
        if (err) return console.error(err);
        res.render('read', {title: 'jsLog查询', jsLog: docs,moment:moment});
    });
});

module.exports = router;