define(["jumi","vue","isLogin","isLoginwx","weixin"],function(e,t,o,s,i){var n=localStorage.getItem("token"),a={token:n,requestSource:"WAP"};o(function(){$.ajax({url:"/userCenter/setting/getUserPhone",type:"post",dataType:"json",data:a,success:function(o){new t({el:"body",components:{"my-passwordforget":{template:"#passwordForgetTemplate",data:function(){return{phone:o.data,phone_code:"",isShowHide:!1,isShowHideRegister:!0,setIntervalID:"",countTime:60,sliderSuccess:!1,flagVoice:!0,setIntervalCode:null}},methods:{toShowHideResiter:function(){var e=/^\S{0}$/,t=/^\S{4}$/,o=/^(13|14|15|16|18|17|19)\d{9}$/,s=e.test(this.phone)||!o.test(this.phone),i=e.test(this.phone_code)||!t.test(this.phone_code);s||i?this.isShowHideRegister=!0:this.isShowHideRegister=!1},inputCodeKeyup:function(){var e=/^\S{0}$/,t=/^\S{4}$/;e.test(this.phone_code)||(t.test(this.phone_code)||(this.phone_code=this.phone_code.substring(0,4)),this.toShowHideResiter())},getCode:function(){var t=this;$(".getVoicecode").removeAttr("disabled"),$(".getVoicecode").removeClass("disabled");var o=["FFFF0N00000000005AD9",(new Date).getTime(),Math.random()].join(":"),s=NoCaptcha.init({renderTo:"#sliderNc",appkey:"FFFF0N00000000005AD9",scene:"nc_register_h5",token:o,trans:{key1:"code0"},elementID:["usernameID"],is_Opt:0,language:"cn",timeout:1e4,retryTimes:5,errorTimes:5,inline:!1,apimap:{},bannerHidden:!0,initHidden:!0,callback:function(s){var i={phone:t.phone,scence:"nc_register_h5",sessionId:s.csessionid,sig:s.sig,token:o};$.ajax({url:"/common/authcode/slidValidate",type:"post",datatype:"json",data:i,success:function(o){"0000"==o.code?(e.tips("验证码发送成功，请注意查收..."),clearInterval(t.setIntervalCode),t.sliderSuccess=!0,t.isShowHide=!0,t.setIntervalCode=setInterval(function(){t.countTime--,$(".getCode").html(t.countTime+"s后重新获取验证码"),t.countTime<=0&&(clearInterval(t.setIntervalCode),t.sliderSuccess=!1,t.countTime=60,$(".getCode").html("重新获取"),t.isShowHide=!1)},1e3)):e.tips(o.msg)}})},error:function(e){}});NoCaptcha.setEnabled(!0),s.reset(),NoCaptcha.upLang("cn",{LOADING:"加载中...",SLIDER_LABEL:"请按住滑块，拖动到最右边",CHECK_Y:"验证通过",ERROR_TITLE:"非常抱歉，这出错了...",CHECK_N:"验证未通过",OVERLAY_INFORM:"经检测你当前操作环境存在风险，请输入验证码",TIPS_TITLE:"验证码错误，请重新输入"}),s.show(),t.isShowHide=!0},getVoicecode:function(){var t=this;if(t.flagVoice){var o={phone:t.phone,requestSource:"WAP"};t.flagVoice=!1,$.ajax({url:"/common/authcode/voiceCode",type:"get",datatype:"json",data:o,success:function(o){"0000"==o.code?e.tips("语音验证码发送成功，请注意接听来电..."):e.tips(o.msg),setTimeout(function(){t.flagVoice=!0},5e3)}})}},ok:function(){var t={phone:this.phone,phoneCode:this.phone_code,requestSource:"WAP"};$.ajax({url:"/common/validatePhoneCode",type:"post",dataType:"json",data:t,success:function(o){"0000"==o.code?location.href="/h5/views/account/settings/passwordResetpay.html?phone="+t.phone:e.tips(o.msg)}})}}}},ready:function(){$("#myloading").remove(),i.setTitle().setDesc().setImg().setUrl().share()}})}})});var c=location.href.split("?code=")[0],r=location.href.split("?code=")[1];if(r){var d=r.split("&state=")[0];s(d,c)}});