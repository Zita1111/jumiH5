define(["jumi","vue","getPara","weixin"],function(e,t,a,s){var o=a.get(),n={investBillId:o.investLogid,code:o.code,requestSource:"WAP"};$.ajax({url:"/hongbao/cashHongbao/getRevResult",type:"post",dataType:"json",data:n,success:function(a){"0000"==a.code&&(1==a.data.revResult.hasRedirect?location.href=a.data.revResult.redirectUrl:new t({el:"body",components:{"my-redpacket":{template:"#redpacketTemplate",data:function(){return{revResult:a.data.revResult,count:a.data.revResult.count,nickName:a.data.revResult.nickName,revAmt:a.data.revResult.revAmt,phone:a.data.revResult.phone,openId:a.data.revResult.openId,unionId:a.data.revResult.unionId,nickName:a.data.revResult.nickName,initRevStatus:a.data.revResult.revStatus,userHeadImgUrl:a.data.revResult.userHeadImgUrl,revUserInfoList:a.data.revResult.revUserInfoList,shareInfo:a.data.shareInfo,clickstatus:!0,clickRegister:!0,pageShowstatus:0,userphone:"",phoneCode:"",countTime:60,setIntervalCode:null,sliderSuccess:!1,flagVoice:!0,isNewUser:""}},watch:{phone:function(e,t){var a=/^1\d{10}$/,s=/^\d{4}$/,o=a.test(this.userphone),n=s.test(this.phoneCode);o&&n?($(".pullDown").removeAttr("disabled"),$(".pullDown").removeClass("disabled")):($(".pullDown").attr("disabled","disabled"),$(".pullDown").addClass("disabled"))},phoneCode:function(e,t){var a=/^1\d{10}$/,s=/^\d{4}$/,o=a.test(this.userphone),n=s.test(this.phoneCode);o&&n?($(".pullDown").removeAttr("disabled"),$(".pullDown").removeClass("disabled")):($(".pullDown").attr("disabled","disabled"),$(".pullDown").addClass("disabled"))}},methods:{toReceive:function(t){var a=this,s={investBillId:o.investLogid,nickName:a.nickName,openId:a.openId,requestSource:"WAP",unionId:a.unionId,userHeadImgUrl:a.userHeadImgUrl};return a.clickstatus&&(a.clickstatus=!1,$.ajax({url:"/hongbao/cashHongbao/receiveHongbao",type:"post",dataType:"json",data:s,success:function(t){"0000"==t.code?0==t.data.hasRegister?a.pageShowstatus=1:1==t.data.hasRegister&&(a.revUserInfoList=t.data.revUserInfoList,2==t.data.revStatus?(a.pageShowstatus=3,a.count=t.data.count):3==t.data.revStatus?a.pageShowstatus=4:(a.pageShowstatus=2,a.revAmt=t.data.revAmt,a.phone=t.data.phone)):(e.tips(t.msg),a.clickstatus=!0)}})),t.preventDefault(),!1},inputPhoneKeyup:function(){var e=/^1\d{10}$/;e.test(this.userphone)&&!this.sliderSuccess?($(".getCode").removeAttr("disabled"),$(".getCode").removeClass("disabled")):($(".getCode").attr("disabled","disabled"),$(".getCode").addClass("disabled"))},getVoicecode:function(){var t=this;if(t.flagVoice){var a={phone:t.userphone,requestSource:"WAP"};t.flagVoice=!1,$.ajax({url:"/common/authcode/voiceCode",type:"get",datatype:"json",data:a,success:function(a){"0000"==a.code?e.tips("语音验证码发送成功，请注意接听来电..."):e.tips(a.msg),setTimeout(function(){t.flagVoice=!0},5e3)}})}},getCode:function(){var t=this;$(".getVoicecode").removeAttr("disabled"),$(".getVoicecode").removeClass("disabled");var a=["FFFF0N00000000005AD9",(new Date).getTime(),Math.random()].join(":"),s=NoCaptcha.init({renderTo:"#sliderNc",appkey:"FFFF0N00000000005AD9",scene:"nc_register_h5",token:a,trans:{key1:"code0"},elementID:["usernameID"],is_Opt:0,language:"cn",timeout:1e4,retryTimes:5,errorTimes:5,inline:!1,apimap:{},bannerHidden:!0,initHidden:!0,callback:function(s){var o={phone:t.userphone,scence:"nc_register_h5",sessionId:s.csessionid,sig:s.sig,token:a};$.ajax({url:"/common/authcode/slidValidate",type:"post",datatype:"json",data:o,success:function(a){"0000"==a.code?(e.tips("验证码发送成功，请注意查收..."),clearInterval(t.setIntervalCode),t.sliderSuccess=!0,$(".getCode").attr("disabled","disabled"),$(".getCode").addClass("disabled"),t.setIntervalCode=setInterval(function(){t.countTime--,$(".getCode").html(t.countTime+"s"),t.countTime<=0&&(clearInterval(t.setIntervalCode),t.sliderSuccess=!1,t.countTime=60,$(".getCode").html("重新获取"),$(".getCode").removeAttr("disabled"),$(".getCode").removeClass("disabled"))},1e3)):e.tips(a.msg)}})},error:function(e){}});NoCaptcha.setEnabled(!0),s.reset(),NoCaptcha.upLang("cn",{LOADING:"加载中...",SLIDER_LABEL:"请按住滑块，拖动到最右边",CHECK_Y:"验证通过",ERROR_TITLE:"非常抱歉，这出错了...",CHECK_N:"验证未通过",OVERLAY_INFORM:"经检测你当前操作环境存在风险，请输入验证码",TIPS_TITLE:"验证码错误，请重新输入"}),s.show(),$(".getCode").attr("disabled","disabled"),$(".getCode").addClass("disabled")},pullDown:function(){var t=this,a={investBillId:o.investLogid,nickName:t.nickName,openId:t.openId,phone:t.userphone,code:t.phoneCode,unionId:t.unionId,userHeadImgUrl:t.userHeadImgUrl,requestSource:"WAP"};t.clickRegister?(t.clickRegister=!1,$.ajax({url:"/hongbao/cashHongbao/registerReceive",type:"post",data:a,dataType:"json",success:function(a){"0000"==a.code?(localStorage.setItem("token",a.data.token),t.revUserInfoList=a.data.revUserInfoList,t.revAmt=a.data.revAmt,t.phone=a.data.phone,1==a.data.isNewUser&&1==a.data.revStatus&&(t.isNewUser=1,t.pageShowstatus=2),0==a.data.isNewUser&&1==a.data.revStatus&&(t.isNewUser=0,t.pageShowstatus=2),2==a.data.revStatus&&(t.pageShowstatus=3,t.count=a.data.count),3==a.data.revStatus&&(t.pageShowstatus=4)):e.tips(a.msg)}})):(e.tips("您的操作过于频繁，请稍后再试~"),t.clickRegister=!0)}}}},ready:function(){var t=this;if($("#myloading").remove(),0==t.$children[0].initRevStatus?t.$children[0].pageShowstatus=0:1==t.$children[0].initRevStatus?(t.$children[0].pageShowstatus=2,e.tips("您已经领过该红包了~")):2==t.$children[0].initRevStatus&&(t.$children[0].pageShowstatus=3),"ios"==localStorage.fromapp){var a={title:t.$children[0].shareInfo.shareTitle,desc:t.$children[0].shareInfo.shareContent,img:t.$children[0].shareInfo.shareImageUrl,url:t.$children[0].shareInfo.shareLinkUrl};window.webkit.messageHandlers.share.postMessage(a)}else if("android"==localStorage.fromapp){var a={title:t.$children[0].shareInfo.shareTitle,desc:t.$children[0].shareInfo.shareContent,img:t.$children[0].shareInfo.shareImageUrl,url:t.$children[0].shareInfo.shareLinkUrl};window.Android.callAndroidAction("0",JSON.stringify(a))}else s.setTitle(t.$children[0].shareInfo.shareTitle).setDesc(t.$children[0].shareInfo.shareContent).setImg(t.$children[0].shareInfo.shareImageUrl).setUrl(t.$children[0].shareInfo.shareLinkUrl).share()}}))}})});