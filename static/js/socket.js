function getCookie(name) {
  var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
function setCookie(name, value, days) {
  var d = new Date;
  d.setTime(d.getTime() + 60*60*1000*days);
  window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function GetRequest() {
  var url = location.search;
  var theRequest = new Object()
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
Request = GetRequest();
var usertoken = getCookie("wawajitoken");
var ua = window.navigator.userAgent.toLowerCase();
// var urlhost = process.env.API_AJAX;
// console.log(urlhost)
// if(Request.user_id){
// }else if(Request.share){
//   console.log("activity")
// }else{
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    if(!usertoken){
      if(Request.token != undefined){
        setCookie("wawajitoken",Request.token,8);
        setCookie("port",Request.port == 1 ? "true" : "false");
        setCookie("getdiamond",Request.getdiamond == 1 ? "true" : "false");
      }else{
        var lacoUrl = encodeURIComponent(window.location.href.split("#")[0]);
        window.location.href = "http://back.fkzzz.cn/user/oauth?url="+lacoUrl; // 生产环境微信授权登录
      }
    }
  }
//}
