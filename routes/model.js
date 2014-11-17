/**
 * Created by wangsen04 on 11/17 0017.
 */
var express = require('express');
var url=require('url');

var model=require('../model/db-model.js');
var router = express.Router();

//jslog存储
router.get('/jslog.gif', function(req, res) {

    console.log(url.parse(req.url,true));

   var jsLog=new model.JsLog({
        domain: "aa", //域名
        address: "bb", //IP/地址
        os: "cc", //操作系统
        browse: "dd", //浏览器型号版本
        docType: "ee", //浏览器模式
        userName: "ff", //登录用户
        errorPage: "gg", //发生错误所在页
        errorType: "hh", //错误类型
        fileName: "ii", //发生错误文件
        errorMsg: "jj", //错误消息
        errorRow: "kk", //Js错误发生的所在文件行数
        errorColumn: "ss", //Js错误发生的所在文件列数，有则上传
        errorStack: "ii", //Js错误堆栈信息第二行，有则上传
        createTime: "nn"  //创建时间
    });
    jsLog.save(function(err){
        if(err){
            console.log('save failed');
        }else{
            res.send('已保存');
        }

    });

});



router.get('/ajaxlog.gif', function(req, res) {
   var ajaxLog=new model.AjaxLog({
       domain: "ajax_aa", //域名
       address: "ajax_bb", //IP/地址
       os: "ajax_cc", //操作系统
       browse: "ajax_dd", //浏览器型号版本
       docType: "ajax_ee", //浏览器模式
       userName: "ajax_ff", //登录用户
       errorPage: "ajax_gg", //发生错误所在页
       rqUrl:"ajax_hh",//ajax请求路径
       rq:"ajax_ii",//Ajax请求参数
       ajaxStatus:"0",//0: success, 1: error
       httpStatus:"200",//HTTP响应状态
       res: "ajax"  //Ajax响应数据
    });
    ajaxLog.save(function(err){
        if(err){
            console.log('save failed');
        }else{
            res.send('已保存ajaxlog');
        }

    });

});

module.exports = router;