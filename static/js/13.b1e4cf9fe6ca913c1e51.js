webpackJsonp([13],{Qd1I:function(t,a){},R6PK:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAMAAAC5KTl3AAAAe1BMVEUAAAAB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0woB0wqGb064AAAAKHRSTlMA7gxO3QXQYzikaiUT5pVwGUiwRMvEvfTJtqyM1TIsnVxTH3U+WYV8mb9EtQAAAvFJREFUWMOtl+mSqyAQhQ+KgPtu3GL2Gd7/CW+pM0mEaDRzvx+BShVN031oacxhpBc7pzspJaG5fUkNbCIKc1k2XLieBctzBW9KmYcR1mJWxDYN1SfTJpWJNRwpO7522TgyesQ7BCvNJfdKJrCEFfg3LHPzAwuzuKz28A6vZu6si8TBGhwyc1DuC6xj73O84ELPWMuZXl54QKMtkqOOFgPfxRZcX4lFRwS2IUg3UVvrYCtO+6zcpsZ26uY5Ox624/n7+zzn+ASe/85OGT4jO/1OYnxGnP2M7FUpsFsppV987bEAG/dOuLb+i8g7ZboQiWQIKTFUsVA5wTZmyzHxemXYqsClSjlrwu6VWCgC3+/6Rb/H2A2/hTVblAFrN93AYv2Sb3TD2try2n505o6xs3AtMeEke85A0Y83oOlHf86J8oowwIRksBAY8eh+1I1hnUtIEOIQYgKRGvRw4d2MhfCAQhGktv5wDRO629HqEr2SZQHqLlpor8GTMHQbLgVRLvZUTfnVl0+Qq3bFCaSlhGYSAaGEZSfUr5yEVL8FzwviXhyVOAzSEHZvU5Wn1HzA4WEgu42JPPfDfjQeqjdDiwMMdrfwXQ2aSO1+SNJBKooAI3/IhfLn3YTpSx0tF0Wsi92WIyl5ayGuellqNHLkSHUDRNFkACeABpXtKf4Oan7QLSRK8h2ITP+4t7efmdAtKIfOxFAfFDwttQ8SvT5g8Yln5Mo1MbQapddJPS8PEkOrk1qt1kmLh4X9y1qNmmOZM29sO+CnTH5hCq/HTRhWYqoHZuk4liY+wyx/J8zCJ1jsvnXu4BOc/OkdFmE7Een+4zsKVsuxFd5Ooud+8J50//ym1ZujM9ZzftUuhdRd7wEN/9ZfCJ/P9Tgh1hASc9a5LIneCynJ3AWlN8R522Q1y7eoy9liv8ny7v2VzRif6Xk5y9YVgjQh9slTC/jJJkmKtXhORVgQxm5kwIjcOAwYqRxvY/kQTlBQIiXxaRE4YjZ8/wDCh2cVR/CcNwAAAABJRU5ErkJggg=="},dFI9:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=s("WrX8"),e=s.n(o),i=s("dMEC"),n=s.n(i);function r(t,a,s){var o=new Date;o.setTime(o.getTime()+864e5*s),window.document.cookie=t+"="+a+";path=/;expires="+o.toGMTString()}var c={name:"ActivityLogin",data:function(){return{aa:!0,login_05:e.a,login_07:n.a}},props:{Register:{type:Object,default:function(){return{name:"ActivityRegister"}}},ForgetPassword:{type:Object,default:function(){return{name:"ActivityForgetPassword"}}}},components:{},mounted:function(){},methods:{weixinLogin:function(){"micromessenger"!=window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)&&_this.$confirm("请在微信端登录")},accountCancel:function(){$("#txtSize").val("")},passwordCancel:function(){1==this.aa?($("#am-pwd").attr("type","text"),$("#passwordCancel").attr("src",this.login_05),this.aa=!1):($("#am-pwd").attr("type","password"),$("#passwordCancel").attr("src",this.login_07),this.aa=!0)},passwordShow:function(){$("#am-pwd").val("")},loginBtn:function(){var t=this,a=$("#txtSize").val(),s=$("#am-pwd").val();""===a||""===s?t.$alert("内容不能为空！"):$.ajax({type:"POST",url:"http://back.fkzzz.cn/user/phonelogin?channel_id=51activity",data$Type:"jsonp",data:{phone:a,password:s},success:function(a){var s=JSON.parse(a);if(0==s.status)t.$alert(s.message);else{r("wawajitoken",s.message.token);var o=s.message.token;$.ajax({type:"POST",url:"http://back.fkzzz.cn/userinfo",data$Type:"jsonp",data:{token:o},success:function(a){if(0==JSON.parse(a).status)t.$confirm("登录状态已失效，请重新退出登录");else{var s=JSON.parse(a).message,o=JSON.parse(s);console.log(o),r("userId",o.user_id),r("name",o.nickname),r("muser_id",o.muser_id),""==o.img_url||null==o.img_url?r("headimg","defalut"):r("headimg",o.img_url),t.$layer.msg("登录成功!"),t.$router.push({path:"/activity/index"})}}})}}})}}},l={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[t._m(0),t._v(" "),o("div",{staticClass:"am-form am-top"},[o("div",{staticClass:"am-form-box"},[o("label",{staticClass:"zhanghao"},[t._v("账号/手机号")]),t._v(" "),o("div",{staticClass:"am-account"},[o("input",{staticClass:"txtSize",attrs:{id:"txtSize",type:"tel",placeholder:"请输入您的账号/手机号码",maxlength:"11"}}),t._v(" "),o("img",{staticClass:"am-account-cancel",attrs:{src:s("ihNH")},on:{click:t.accountCancel}})]),t._v(" "),o("label",{staticClass:"mima"},[t._v("密码")]),t._v(" "),o("div",{staticClass:"am-form-group am-passWord"},[o("input",{staticClass:"am-pwd",attrs:{id:"am-pwd",type:"password",placeholder:"填写密码",maxlength:"16"}}),t._v(" "),o("img",{staticClass:"am-password-cancel",attrs:{id:"passwordCancel",src:t.login_07},on:{click:t.passwordCancel}}),t._v(" "),o("img",{staticClass:"am-password-show",attrs:{src:s("ihNH")},on:{click:t.passwordShow}})]),t._v(" "),o("p",{staticClass:"am-loginBtn"},[o("button",{staticClass:"am-btn am-btn-default",attrs:{type:"button",id:"login-button"},on:{click:t.loginBtn}},[t._v("登 录")])])]),t._v(" "),o("div",{staticClass:"footEnd"},[o("router-link",{attrs:{to:t.Register}},[o("a",{attrs:{href:"javascript:;"}},[t._v("注册")])]),t._v(" "),o("router-link",{attrs:{to:t.ForgetPassword}},[o("a",{attrs:{href:"javascript:;"}},[t._v("忘记密码")])])],1),t._v(" "),o("div",{staticClass:"otherLogin"},[o("a",[o("img",{staticClass:"weixin",attrs:{src:s("R6PK")},on:{click:t.weixinLogin}})])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"am-background"},[a("img",{staticClass:"am-bg",attrs:{src:"http://fkzzz.oss-cn-qingdao.aliyuncs.com/img/1074835438.jpg"}})])}]};var w=s("Z0/y")(c,l,!1,function(t){s("Qd1I")},"data-v-853f47d6",null);a.default=w.exports}});
//# sourceMappingURL=13.b1e4cf9fe6ca913c1e51.js.map