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

router.get('/js/error/query', function (req, res) {
//    JsLog.remove({creatTime:undefined},function(err){
//        if (err) return console.error(err);
//    });

    JsLog.find({}, function (err, docs) {
        if (err) return console.error(err);
        console.log( docs);

        res.render('read', {title: 'jsLog查询', jsLog: docs,moment:moment});
    });


});

router.post('/js/error/query', function (req, res) {
    var domain=req.body.domain;
    var start=req.body.startTime;
    var end=req.body.endTime;

    domain=domain?domain:undefined;
    start=new Date(start);
    end=new Date(end);

    JsLog.find({createTime:{$gt: start, $lt: end}}, function (err, docs) {
        if (err) return console.error(err);
        //console.log('------- JsLog.find------' + docs);

        res.render('read', {title: 'jsLog查询', jsLog: docs});
    });


});

module.exports = router;