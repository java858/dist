webpackJsonp([28],{bjFf:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Je9S"),n=s("WrX8"),o=s.n(n),c=s("dMEC"),i=s.n(c),l={name:"phoneregister",data:function(){return{aa:!0,login_05:o.a,login_07:i.a,show:!0,count:60,timer:null}},mounted:function(){$("#phoneInput").on("input",function(){var t=$(this).val().replace(/\s/g,"");11==t.length&&(/^1[3|4|5|7|8][\d]{9}$/.test(t)||(this.$layer.msg("输入的手机号码有误"),$("#phoneInput").val("")))})},methods:{phoneCancel:function(){$("#phoneInput").val("")},pwdCancel:function(){1==this.aa?($("#pwdInput").attr("type","text"),$("#pwdCancel").attr("src",this.login_05),this.aa=!1):($("#pwdInput").attr("type","password"),$("#pwdCancel").attr("src",this.login_07),this.aa=!0)},pwdShow:function(){$("#pwdInput").val("")},sendCode:function(){var t=this,a=$("#phoneInput").val();""===a?t.$layer.msg("手机号不能为空"):$.ajax({type:"POST",url:"http://back.fkzzz.cn/register/code",data$Type:"jsonp",data:{phone:a},success:function(a){var s=JSON.parse(a);if(console.log(s),0==s.status)t.$layer.msg(s.message);else{t.count=60,t.show=!1;var e=setInterval(function(){0==t.count?(t.show=!0,clearInterval(e)):t.count--},1e3);t.$layer.msg(s.message)}}})},register:function(){var t=this,a=$("#phoneInput").val(),s=$("#codeInput").val(),e=$("#pwdInput").val();""===a||""===s||""===e?t.$layer.msg("内容不能为空"):$.ajax({type:"POST",url:"http://back.fkzzz.cn/register/postRegister?channel_id=fkzzz",data$Type:"jsonp",data:{phone:a,password:e,code:s},success:function(a){var s=JSON.parse(a);0===s.status?t.$layer.msg(s.message):1===s.status&&t.$alert("注册成功!").then(function(){t.$router.push({path:"/visit/login"})})}})}},components:{HeaderComponent:e.a}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"teleregi"},[e("header-component",{attrs:{title:"手机注册"}}),t._v(" "),e("router-view"),t._v(" "),e("div",{staticClass:"am-top"},[e("div",{staticClass:"am-form-box"},[e("label",{staticClass:"zhanghao"},[t._v("手机号")]),t._v(" "),e("div",{staticClass:"am-account"},[e("input",{staticClass:"txtSize",attrs:{type:"number",id:"phoneInput",placeholder:"请输入您的手机号码",maxlength:"11"}}),t._v(" "),e("img",{staticClass:"am-account-cancel",attrs:{src:s("ihNH")},on:{click:t.phoneCancel}})]),t._v(" "),e("label",{staticClass:"zhanghao"},[t._v("验证码")]),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"code-input",attrs:{id:"codeInput",type:"text",placeholder:"输入验证码",maxlength:"6"}}),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"send-code",attrs:{id:"sendCode",type:"button"},on:{click:t.sendCode}},[t._v("获取验证码")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"count"},[t._v("("+t._s(t.count)+")重新发送")])]),t._v(" "),e("label",{staticClass:"mima"},[t._v("密码")]),t._v(" "),e("div",{staticClass:"am-passWord"},[e("input",{staticClass:"am-pwd",attrs:{id:"pwdInput",type:"password",placeholder:"填写密码",maxlength:"16"}}),t._v(" "),e("img",{staticClass:"am-password-cancel",attrs:{id:"pwdCancel",src:t.login_07},on:{click:t.pwdCancel}}),t._v(" "),e("img",{staticClass:"am-password-show",attrs:{src:s("ihNH")},on:{click:t.pwdShow}})]),t._v(" "),e("p",{staticClass:"am-loginBtn"},[e("button",{staticClass:"am-btn-default",attrs:{type:"button"},on:{click:t.register}},[t._v("注 册")])])])])],1)},staticRenderFns:[]};var p=s("Z0/y")(l,r,!1,function(t){s("lvl0")},null,null);a.default=p.exports},lvl0:function(t,a){}});
//# sourceMappingURL=28.9436cffc191576144729.js.map