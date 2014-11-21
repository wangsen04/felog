/**
 * @file 前端日志统计脚本
 * @author 赵军 zhaojun04@baidu.com
 * @date 2014-11-17
 * @version 1.0.0
 */

!function (url) {
    var errorPage;

    //规范上送格式
    function normalData(params) {
        return '';
    }

    //监听js错误
    function listenerJsError() {
        window.onerror = function (msg, fileName, row) {
            var params = {
                errorMsg: msg,
                fileName: fileName,
                errorRow: row,
                errorPage: errorPage
            }
            send(normalData(params));
        }
    }

    //监听ajax错误
    function listenerAjaxError() {

    }

    //日志上送
    function send(data) {
        var img = new Image(1, 1);
        img.onload = img.onerror = function () {
             img = img.onload = img.onerror = null;
        }
        img.src = url + '?' + data;
    }

    function run() {
        listenerAjaxError();
        listenerJsError();
    }

    try {
        errorPage = location.href;
        run();
    } catch (e) {
    };
}();