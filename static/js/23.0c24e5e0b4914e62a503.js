webpackJsonp([23],{RLPI:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="http://back.fkzzz.cn/",a={data:function(){return{payOrders:[],isMore:!0,clickNum:1,chooseList:["当日明细","最近三日","最近七日"],id:null,isRecord:null}},mounted:function(){var e=this,t=getCookie("userId");$.ajax({type:"GET",url:i+"/usercenter/expense?time=0&user_id="+t,data$Type:"jsonp",data:{},success:function(t){var s=JSON.parse(t).message;t.mode;if(""==s)e.isRecord=!1;else{for(var i=0;i<s.length;i++){var a=parseInt(s[i].time);s[i].time=e.format(a),1==s[i].mode?s[i].size="+"+s[i].size:s[i].size=-s[i].size}e.payOrders=s}s.length<10?e.isMore=!1:e.isMore=!0}})},methods:{theDetailBodyBack:function(){this.$router.go(-1)},format:function(e){var t=new Date(1e3*e);return t.getFullYear()+"/"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"/")+(t.getDate()+" ")+(t.getHours()+":")+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())},setDays:function(){var e=$("#sel>option:selected").val();0==e?this.id=0:1==e?this.id=3:2==e&&(this.id=7);var t=this,s=getCookie("userId"),a=i+"/usercenter/expense?user_id="+s+"&num=999&time="+t.id;$.get(a).then(function(e){var s=JSON.parse(e),i=s.message;s.mode;console.log(t.id);for(var a=0;a<i.length;a++){var r=parseInt(i[a].time);i[a].time=t.format(r),1==i[a].mode?i[a].size="+"+i[a].size:i[a].size=-i[a].size}t.isMore=!1,t.payOrders=i},function(e){}),$(".mingxiList").animate({height:"100%",scrollTop:0},500)},getMore:function(){var e=this;this.clickNum++;var t=this.clickNum,s=getCookie("userId");$.post("http://back.fkzzz.cn//usercenter/expense",{page:t,user_id:s},{emulateJSON:!0}).then(function(t){var s=JSON.parse(t),i=s.message;s.mode;(0==s.status||i.length<=10)&&(e.isMore=!1);for(var a=0;a<i.length;a++){var r=parseInt(i[a].time);i[a].time=e.format(r),1==i[a].mode?i[a].size="+"+i[a].size:i[a].size=-i[a].size,e.payOrders.push(i[a])}console.log(i)}).catch(function(e){})}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"theDetailBody"},[i("div",{staticClass:"user-header"},[i("a",{staticClass:"nav-item1",on:{click:e.theDetailBodyBack}},[i("img",{attrs:{src:s("82+b")}})]),e._v(" "),i("a",{staticClass:"personinfo"},[e._v("我的钻石明细")]),e._v(" "),i("select",{attrs:{id:"sel"},on:{change:e.setDays}},e._l(e.chooseList,function(t,s){return i("option",{domProps:{value:s}},[e._v(e._s(t))])}))]),e._v(" "),i("div",[i("ul",{staticClass:"mingxiList"},e._l(e.payOrders,function(t){return i("li",[i("p",[i("a",[e._v(e._s(t.remark))]),i("br"),e._v(" "),i("span",[e._v(e._s(t.time))])]),e._v(" "),i("div",[i("a",{staticClass:"tenNum"},[e._v(e._s(t.size))]),e._v(" "),i("span",[e._v("钻")])])])})),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isMore,expression:"isMore"}],staticClass:"loadMore",on:{click:e.getMore}},[e._v("点击加载更多")]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isMore,expression:"!isMore"}],staticClass:"noMore"},[e._v("没有更多记录了")])])])},staticRenderFns:[]};var o=s("Z0/y")(a,r,!1,function(e){s("bvb1")},"data-v-aa816cdc",null);t.default=o.exports},bvb1:function(e,t){}});
//# sourceMappingURL=23.0c24e5e0b4914e62a503.js.map