webpackJsonp([9],{"9yeQ":function(e,a,t){"use strict";function i(e){var a=window.document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return a?a[2]:null}function n(e,a,t){var i=new Date;i.setTime(i.getTime()+36e5*t),window.document.cookie=e+"="+a+";path=/;expires="+i.toGMTString()}Object.defineProperty(a,"__esModule",{value:!0}),Request=function(){var e=location.search,a=new Object;if(-1!=e.indexOf("?"))for(var t=e.substr(1).split("&"),i=0;i<t.length;i++)a[t[i].split("=")[0]]=unescape(t[i].split("=")[1]);return a}();var s="http://back.fkzzz.cn/",A={name:"",data:function(){return{rulesShow:!1,modalShow:!1,info:""}},components:{},created:function(){},mounted:function(){var e=this,a=i("wawajitoken");if(a)$.ajax({type:"POST",url:s+"userinfo",data$Type:"jsonp",data:{token:a},success:function(a){if(0==JSON.parse(a).status)e.$alert("登录状态已失效，点击确认重新登录").then(function(){e.clearAll(),n("wawajitoken","",-1);var a=encodeURIComponent(window.location.href);window.location.href="http://weixin.fkzzz.cn/user/oauth?url="+a});else{var t=JSON.parse(a).message,i=JSON.parse(t);n("userId",i.user_id),n("name",i.nickname),n("muser_id",i.muser_id),""==i.img_url||null==i.img_url?n("headimg","defalut"):n("headimg",i.img_url)}}});else{var t=window.location.href.split("#")[1].split("?")[1];if(""==t||null==t){var A=encodeURIComponent(window.location.href);window.location.href="http://weixin.fkzzz.cn/user/oauth?url="+A}else{var o=t.substring(6,46);n("wawajitoken",o,8),$.ajax({type:"POST",url:s+"userinfo",data$Type:"jsonp",data:{token:o},success:function(a){if(0==JSON.parse(a).status)e.$alert("登录状态已失效，点击确认重新登录").then(function(){e.clearAll(),n("wawajitoken","",-1);var a=encodeURIComponent(window.location.href);window.location.href="http://weixin.fkzzz.cn/user/oauth?url="+a});else{var t=JSON.parse(a).message,i=JSON.parse(t);n("userId",i.user_id),n("name",i.nickname),n("muser_id",i.muser_id),""==i.img_url||null==i.img_url?n("headimg","defalut"):n("headimg",i.img_url)}}})}}},methods:{rule:function(){this.rulesShow=!0},del:function(){this.modalShow=!1},cancel:function(){this.rulesShow=!1},clearAll:function(){var e=document.cookie.match(/[^ =;]+(?=\=)/g);if(e)for(var a=e.length;a--;)n(e[a],"",-1)},start:function(){var e=this,a=(i("wawajitoken"),i("userId")),t=i("name"),A=i("headimg");A="defalut"==A?"":i("headimg"),$.ajax({type:"POST",url:s+"active/initactive",data$Type:"jsonp",data:{user_id:a,user_nick:t,img_url:A},success:function(a){var t=JSON.parse(a).status,i=JSON.parse(a).message;console.log(i),0==t?e.$layer.msg("进入房间失败，请重新进入"):3==t?(e.modalShow=!0,e.info="活动维护暂停中"):(n("gnum",i.gnum),n("num",i.num),n("tnum",i.tnum),n("znum",i.znum),e.$router.push({path:"/activity/activityHome"}))}})}}},o={render:function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"box"},[i("div",{staticClass:"maintop"},[i("img",{staticClass:"wawa1",attrs:{src:"https://fkzzz.oss-cn-qingdao.aliyuncs.com/img/51wawa1.png"}}),e._v(" "),i("img",{staticClass:"wawa2",attrs:{src:t("HAia")},on:{click:e.rule}})]),e._v(" "),i("div",{staticClass:"startgame"},[i("p",{on:{click:e.start}},[e._v("开始游戏")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.rulesShow,expression:"rulesShow"}],staticClass:"rules"},[i("div",{staticClass:"head"},[i("a",[e._v("活动说明")]),e._v(" "),i("img",{attrs:{src:t("JyxM")},on:{click:e.cancel}})]),e._v(" "),i("hr"),e._v(" "),e._m(0)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.modalShow,expression:"modalShow"}],staticClass:"modal"},[i("div",{staticClass:"modalbody"},[i("div",{staticClass:"delete"},[i("img",{attrs:{src:t("fghg")},on:{click:e.del}})]),e._v(" "),i("p",[e._v(e._s(e.info))])])])])},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"main"},[t("div",{staticClass:"one"},[t("div",[e._v("活动时间")]),e._v(" "),t("p",[e._v("2018年4月30日-5月6日")])]),e._v(" "),t("div",{staticClass:"two"},[t("div",[e._v("规则详情")]),e._v(" "),t("ul",[t("li",[e._v("1 . 新登录疯狂抓抓抓用户都将赠送50钻石")]),e._v(" "),t("li",[e._v("2 .每人每天5次抓取机会（含好友互相抓取次数），好友每天最高偷取次数5次 ")]),e._v(" "),t("li",[e._v("3 . 邀请好友给娃娃机添加奖品（奖品随机） ，每天被添加5次")]),e._v(" "),t("li",[e._v("4 . 同一好友可给机器每天增加1次奖品（奖品随机）")]),e._v(" "),t("li",[e._v("5 . 抓取获得的奖品可直接在疯狂抓抓抓的账号查看，娃娃将以邮寄的方式寄出")]),e._v(" "),t("li",[e._v("6 . 严禁打扰游戏公平性，一经发现将保留停止活动权限，活动奖品清零处理，情节严重者将被封号处理")])])]),e._v(" "),t("div",{staticClass:"two"},[t("div",[e._v("活动奖品")]),e._v(" "),t("ul",[t("li",[e._v("1 . 娃娃（时尚娃娃可邮寄）")]),e._v(" "),t("li",[e._v("2 .钻石（疯狂抓抓抓代币，可免费实景抓娃娃")]),e._v(" "),t("li",[e._v("3 .高级钻石礼盒（最高可获取666钻） ")]),e._v(" "),t("li",[e._v("4 .免邮券（可在疯狂抓抓内免去邮寄费用）")]),e._v(" "),t("li",{staticClass:"zhu"},[e._v("注：活动奖品可在疯狂抓抓抓“个人中心”模块查看")]),e._v(" "),t("li",{staticClass:"zhu"},[e._v("如若钻石没有加上，请单击个人中心退出登录，重新进入即可")])])])])}]};var r=t("Z0/y")(A,o,!1,function(e){t("Y4Ce")},"data-v-54e5a456",null);a.default=r.exports},HAia:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAlCAMAAAAX3hVdAAAApVBMVEUAAAAAAADFxcWNjY3n5+f6+vo8PDzIyMh5eXnX19f8/PwAAAAAAADu7u5fX18AAADz8/OsrKx1dXVkZGQAAAAAAAD09PTd3d3a2trOzs4AAADs7Oyzs7OOjo4AAAC5ubmdnZ1EREQAAAAAAAAAAADi4uLh4eEAAAAAAAAAAAAAAAAAAAAAAADg4ODt7e3e3t7T09OWlpZubm46OjosLCwAAAD///+/ESgDAAAANnRSTlOAAL+g3/iI0pjP/Hgk55AK9bCmn0tH7+Hfx3PuxbE+uKiUbnYS5uVdWU9AHwTX7+LatqOQjDxooMlhAAACwklEQVRIx73Xh3KjMBAG4A0tBgMGFzBuuCWX5vTb93+0Y6VFAhvmYpu7fyYEeTKflEVIMtxU8/z0sO3DpelvH56ea15FH0xmcH1mk0GDPhhDVxkPjnV/Bt1l5tf13/z5aJFGnheli9F1/qqqT0BkOUeV+fIqfqL1FVC+7rGW+y+opGeeO3rWfVmUiNXplG+iankspGtoqvRaWAMNoPhSH+yo8emxOQQY8q33eawbqGLxxxw2tb4bCP2R7jd2OXJqlaO3Nye6a8g06T0r1jo8kr4Hiqp5Sq1U1f5EL8uvdNk0yaSL1mFf6GMxW1jTleEsJcUxhG5ldd0xw0Z9fAMvYl2Zo840RZ05UIpKJFhczEJnWOuENur9F/DFfMHWjGqVOUsvbPEiLZhSM1Jncble2L/4KbbUHdPL9cLe0q+IKT0jVSKgx2aaAdIbdJ4+A/FQPa3dUvtWtz0x3TgW6Q66P9PJ/pvOY0c1djJqeo7rZp39qF2Pam8P6TGuazp92DJ2Wfe0XeenGiK6rLsYZD/TZ3LOLNp1npFrtDGXUJKQbGWsi5+WOSPn+6hd57fJRdPCmO5izOS4lW5j2Dbf5eI+b9PnIOLYNjgB8U6CodDNw1puKjGivaa1BkLDrOk+rzPLNp33vxjdQrJF1Q2QuriK7gxbifV1htdIuGvW78qhY0jFd8HAwCFdKy5m1K/rnOhjtb6r3eOdWu9Hu0eGbnlj9wAwEWpO/brUHfEB85nS92pvgqHH4DfAN3flDcutwQ5BUoRDgIEVIP07ZsBqLynQ+GAYGWLOexPvq5Jn8vXj45U7KnAuTMz/NOGCQkxi6hYPDv+NmDMU21H7qj4TwIZrr2quN1UyBd+DenKz2gqNIjl35+vzTMenJX2eoYxBnfTe6KT3ds1Jj+cL6zz6TrM6OgPvOj0D/7fzO2ff/XePf/u96Q8dGa5X1+rUlgAAAABJRU5ErkJggg=="},JyxM:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAsBAMAAAADaCwMAAAAFVBMVEUAAAD+/v7+/v7+/v7+/v7+/v7+/v6eIHNEAAAAB3RSTlMA1IAVQQvrr56mkgAAAI1JREFUOMuVk8sJgEAMBYPYgViAHYgVWIIt2H8TKu8wh2EJLijZMOMnyda8lNf5Xtuu9LR+NwlBJYSUAIgAZwGMCIoQyDEMGxDJEAjC2QsnAY4gHCG4hOASgls4gku4jTvv5/Tv9Xf6v/o6uG59nd0X97Hvu+eE2IznsJlbz7lxOHAE4QiDczo+11f9WQ+uKBFNlz4ESwAAAABJRU5ErkJggg=="},Y4Ce:function(e,a){}});
//# sourceMappingURL=9.281d50aa91b789afeabd.js.map