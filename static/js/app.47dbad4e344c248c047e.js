webpackJsonp([38],{Fip2:function(e,t){},H9Jq:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("MVMM"),a={name:"App",data:function(){return{}},created:function(){document.body.removeChild(document.getElementById("appLoading")),setTimeout(function(){document.getElementById("app").style.display="block"},500)}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():t("router-view")],1)},staticRenderFns:[]};var r=n("Z0/y")(a,o,!1,function(e){n("H9Jq")},null,null).exports,c=n("zO6J"),l=function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("wUZA")];e.apply(null,t)}.bind(this)).catch(n.oe)};i.default.use(c.a);var u=new c.a({routes:[{path:"/activity/otherHome",name:"OtherHome",component:function(e){return Promise.all([n.e(0),n.e(6)]).then(function(){var t=[n("M4Mv")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!1}},{path:"/visit/activityLogin",name:"ActivityLogin",component:function(e){return Promise.all([n.e(0),n.e(13)]).then(function(){var t=[n("dFI9")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}},{path:"/visit/activityRegister",name:"ActivityRegister",component:function(e){return Promise.all([n.e(0),n.e(34)]).then(function(){var t=[n("rN8Z")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}},{path:"/visit/activityPhone",name:"ActivityPhone",component:function(e){return Promise.all([n.e(0),n.e(26)]).then(function(){var t=[n("8Zhd")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}},{path:"/visit/activityForgetPassword",name:"ActivityForgetPassword",component:function(e){return Promise.all([n.e(0),n.e(29)]).then(function(){var t=[n("hPZW")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}},{path:"/",name:"HomePage",component:l,meta:{keepAlive:!0}},{path:"/test",name:"testPage",component:function(e){return n.e(36).then(function(){var t=[n("EXDq")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}},{path:"/roomInfo",name:"HomePage",component:l,meta:{keepAlive:!0}},{path:"/usercenter/gucang",name:"gucang",component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){var t=[n("HpXd")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!1}},{path:"/usercenter/index",name:"usercenter",component:function(e){return Promise.all([n.e(0),n.e(17)]).then(function(){var t=[n("hFUI")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/usercenter/userInfo",name:"userInfo",component:function(e){return Promise.all([n.e(0),n.e(12)]).then(function(){var t=[n("d51M")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/usercenter/payrecords",name:"payrecords",component:function(e){return Promise.all([n.e(0),n.e(30)]).then(function(){var t=[n("mjGZ")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/usercenter/mydoll",name:"mydoll",component:function(e){return Promise.all([n.e(0),n.e(25)]).then(function(){var t=[n("b7pA")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/usercenter/mail",name:"mail",component:function(e){return Promise.all([n.e(0),n.e(16)]).then(function(){var t=[n("9hy1")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!1}},{path:"/usercenter/history",name:"mail",component:function(e){return Promise.all([n.e(0),n.e(32)]).then(function(){var t=[n("vhpn")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/usercenter/mydiamond",name:"mail",component:function(e){return Promise.all([n.e(0),n.e(14)]).then(function(){var t=[n("3abo")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/usercenter/myPoints",name:"mail",component:function(e){return Promise.all([n.e(0),n.e(27)]).then(function(){var t=[n("bqtQ")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/usercenter/payresults",name:"payresults",component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){var t=[n("6R7C")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/usercenter/theDetail",name:"mail",component:function(e){return Promise.all([n.e(0),n.e(23)]).then(function(){var t=[n("RLPI")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/usercenter/mailOrder",name:"mail",component:function(e){return Promise.all([n.e(0),n.e(15)]).then(function(){var t=[n("WSwD")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/usercenter/orderDetail",name:"mail",component:function(e){return Promise.all([n.e(0),n.e(10)]).then(function(){var t=[n("YEU6")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/usercenter/address",name:"address",component:function(e){return Promise.all([n.e(0),n.e(18)]).then(function(){var t=[n("p7mo")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/usercenter/newAddress",name:"mail",component:function(e){return Promise.all([n.e(0),n.e(22)]).then(function(){var t=[n("JQXk")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/usercenter/changaddress",name:"changeAddress",component:function(e){return Promise.all([n.e(0),n.e(31)]).then(function(){var t=[n("kfSg")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/visit/register",name:"register",component:function(e){return Promise.all([n.e(0),n.e(21)]).then(function(){var t=[n("Eysv")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/visit/phoneregister",name:"PhoneRegister",component:function(e){return Promise.all([n.e(0),n.e(28)]).then(function(){var t=[n("bjFf")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/visit/normalregister",name:"normalregister",component:function(e){return Promise.all([n.e(0),n.e(33)]).then(function(){var t=[n("Roy8")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/visit/forgetpassword",name:"forgetpassword",component:function(e){return Promise.all([n.e(0),n.e(24)]).then(function(){var t=[n("0kRq")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/visit/setpassword",name:"setpassword",component:function(e){return Promise.all([n.e(0),n.e(35)]).then(function(){var t=[n("/Co8")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/visit/bind",name:"bind",component:function(e){return Promise.all([n.e(0),n.e(19)]).then(function(){var t=[n("9InD")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/visit/login",name:"login",component:function(e){return Promise.all([n.e(0),n.e(20)]).then(function(){var t=[n("W5aY")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/batai",name:"batai",component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("2eOe")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!1}},{path:"/batai/notice",name:"notice",component:function(e){return Promise.all([n.e(0),n.e(7)]).then(function(){var t=[n("YOJP")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/activity/index",component:function(e){return Promise.all([n.e(0),n.e(9)]).then(function(){var t=[n("9yeQ")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!1}},{path:"/activity/activityHome",component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("G5qc")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!1}},{path:"/activity/friends",component:function(e){return Promise.all([n.e(0),n.e(11)]).then(function(){var t=[n("E4Nc")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!1}},{path:"/activity/invitation",component:function(e){return Promise.all([n.e(0),n.e(8)]).then(function(){var t=[n("kA1V")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{keepAlive:!1}},{path:"*",component:l}]}),s=n("OCMt"),p=n.n(s),m=n("u1yq"),h=n.n(m),d=n("I3AK"),f=(n("Fip2"),n("lJzc")),v=n.n(f),y=n("3cXf"),w=n.n(y),b=n("9rMa");i.default.use(b.a);var g={ws:function(){var e=w()({type:10090}),t=new WebSocket("ws://114.80.110.63:34567");return t.onopen=function(n){t.send(e)},t.onmessage=function(e){g.wsEvt=e,console.log(e)},t}(),wsEvt:{},wwjtoken:null,userId:null},P={onopen:function(e){void 0==e.ws&&(e.ws=new WebSocket("ws://114.80.110.63:34567"),e.ws.onopen=function(t){e.ws.send(typeString)},e.ws.onmessage=function(t){e.wsEvt=t})},send:function(e,t){e.ws.send(t)},saveWwjtoken:function(e,t){e.wwjtoken=t},saveUserId:function(e,t){e.userId=t}},A=new b.a.Store({state:g,actions:{onopen:function(e){e.commit("onopen")},send:function(e,t){e.commit("send",t)},saveWwjtoken:function(e,t){e.commit("saveWwjtoken",t)},saveUserId:function(e,t){e.commit("saveUserId",t)}},mutations:P});i.default.use(d.Alert,{}),i.default.use(d.Confirm,{}),i.default.use(d.Toast),i.default.use(v.a,{preLoad:1,error:"../static/wawa_03.png",loading:"../static/wawa_03.png",attempt:1,listenEvents:["scroll","mousewheel"]});function k(e){var t=window.document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}i.default.config.debug=!1,i.default.config.devtools=!1,i.default.config.productionTip=!1,i.default.prototype.$layer=h()(i.default),i.default.prototype.Flexible=p.a,i.default.config.productionTip=!1,new i.default({el:"#app",router:u,store:A,components:{App:r},template:"<App/>"});var x=k("wawajitoken");u.beforeEach(function(e,t,n){$.get("../static/version.json?_="+Math.random()).then(function(e){if(200==e.status){if("1526990022452"!==e.version){return void(1==confirm("系统版本有更新，点击确认加载最新！")?window.location.reload(!0):window.location.reload(!1))}n()}}).catch(function(e){console.error(e),n()}),e.matched.some(function(e){return e.meta.requireAuth})?x?n():n({path:"/visit/login",query:{redirect:e.fullPath}}):n()});var q=window.location.href.split("#")[0];$.ajax({type:"POST",url:"http://back.fkzzz.cn/share/index",data$Type:"jsonp",data:{url:q},success:function(e){var t=JSON.parse(e).wx_js_config;wx.config(JSON.parse(t))}}),wx.ready(function(){var e=k("muser_id"),t=k("userId"),n={title:"疯狂抓抓抓",desc:"网红直播抓娃娃，抓到立即带回家",link:window.location.href.split("?")[0]+"?muser_id="+e+"&user_id="+t,imgUrl:"https://fkzzz.oss-cn-qingdao.aliyuncs.com/img/108-108.png",success:function(e){},cancel:function(e){}};wx.onMenuShareTimeline(n),wx.onMenuShareAppMessage(n),wx.onMenuShareQQ(n),wx.onMenuShareWeibo(n),wx.onMenuShareQZone(n)})},OCMt:function(e,t){!function(e,t){var n,i=e.document,a=i.documentElement,o=i.querySelector('meta[name="viewport"]'),r=i.querySelector('meta[name="flexible"]'),c=0,l=0,u=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var s=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);s&&(l=parseFloat(s[1]),c=parseInt(1/l))}else if(r){var p=r.getAttribute("content");if(p){var m=p.match(/initial\-dpr=([\d\.]+)/),h=p.match(/maximum\-dpr=([\d\.]+)/);m&&(c=parseFloat(m[1]),l=parseFloat((1/c).toFixed(2))),h&&(c=parseFloat(h[1]),l=parseFloat((1/c).toFixed(2)))}}if(!c&&!l){e.navigator.appVersion.match(/android/gi);var d=e.navigator.appVersion.match(/iphone/gi),f=e.devicePixelRatio;l=1/(c=d?f>=3&&(!c||c>=3)?3:f>=2&&(!c||c>=2)?2:1:1)}if(a.setAttribute("data-dpr",c),!o)if((o=i.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(o);else{var v=i.createElement("div");v.appendChild(o),i.write(v.innerHTML)}function y(){var t=a.getBoundingClientRect().width;t/c>540&&(t=540*c);var n=t/10;a.style.fontSize=n+"px",u.rem=e.rem=n}e.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(y,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(n),n=setTimeout(y,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*c+"px":i.addEventListener("DOMContentLoaded",function(e){i.body.style.fontSize=12*c+"px"},!1),y(),u.dpr=e.dpr=c,u.refreshRem=y,u.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},u.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))}},["NHnr"]);
//# sourceMappingURL=app.47dbad4e344c248c047e.js.map