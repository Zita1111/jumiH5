define(["jumi","nav","asyncload","vue","isLogin","isLoginwx","md5","weixin"],function(t,r,a,e,i,n,s,d){var o=localStorage.getItem("token"),c={token:o,requestSource:"WAP"};i(function(){$.ajax({url:"/userCenter/userAccount/initOpenAccountOrBindCard",type:"post",dataType:"json",data:c,success:function(a){"0000"==a.code&&new e({el:"body",data:function(){return{realname:"",idNumber:"",bankcard:"",userpwdreal:"",userconfirmpwdreal:"",backcardList:a.data.bankList,clickstatus:!0}},methods:{highlight:function(){var t=/^\S{0}$/,r=1==$("#idNumber").attr("proving"),a=1==$("#bankcard").attr("proving"),e=1==$("#userpwdreal").attr("proving"),i=1==$("#userconfirmpwdreal").attr("proving"),n=!(t.test(this.realname)||t.test(this.idNumber)||t.test(this.bankcard)||t.test(this.userpwdreal)||t.test(this.userconfirmpwdreal)),s=r&&a&&e&&i;n&&s?$(".button-fill").removeAttr("disabled"):$(".button-fill").attr("disabled","disabled")},nameKeyUp:function(){this.highlight()},nameBlur:function(){this.highlight()},supportBankcard:function(){t.alert({title:"支持绑定的银行卡",content:document.getElementById("bankcardListBox"),button:!1})},idNumberBlur:function(){var r=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;if(this.idNumber.length>0&&!r.test(this.idNumber))return void t.tips("请输入正确的身份证号！");var a={idNumber:this.idNumber,requestSource:"WAP"};$.ajax({url:"/common/validateIdNumberRepeat",type:"post",dataType:"json",data:a,success:function(r){"0000"==r.code?$("#idNumber").attr("proving",1):"1027"==r.code?t.tips("该身份证号已被注册"):t.tips(r.msg)}}),this.highlight()},bankcardKeyup:function(r){var a=/^[\d ]*$/,e="",i="";if(this.bankcard.length>0&&!a.test(this.bankcard))return $("#userpwdreal").attr("proving",0),void t.tips("请输入有效的银行卡号！");for(var n=0;n<this.bankcard.length;n++)i=this.bankcard.substr(n,1),isNaN(i)||" "==i||(e+=i);this.bankcard="";for(var n=0;n<e.length;n++)6==n&&(this.bankcard=this.bankcard+" "),12==n&&(this.bankcard=this.bankcard+" "),this.bankcard=this.bankcard+e.substr(n,1);this.highlight()},bankcardBlur:function(){var r=/[\d ]{17,21}/;return this.bankcard.length>0&&!r.test(this.bankcard)?($("#bankcard").attr("proving",0),void t.tips("请输入正确的银行卡号！")):($("#bankcard").attr("proving",1),void this.highlight())},userpwdrealKeyup:function(){var r=/^[0-9]*$/;return r.test(this.userpwdreal)?(6==this.userpwdreal.length?$("#userpwdreal").attr("proving",1):$("#userpwdreal").attr("proving",0),void this.highlight()):($("#userpwdreal").attr("proving",0),void t.tips("支付密码应为6位数字"))},userconfirmpwdrealKeyup:function(){var r=this.userconfirmpwdreal.length;6==r?this.userconfirmpwdreal==this.userpwdreal?$("#userconfirmpwdreal").attr("proving",1):($("#userconfirmpwdreal").attr("proving",0),t.tips("两次密码输入不一致")):$("#userconfirmpwdreal").attr("proving",0),this.highlight()},next:function(){var r=this;if(r.clickstatus){r.clickstatus=!1;var a=r.bankcard.replace(/[ ]/g,""),e={realname:r.realname,idNumber:r.idNumber,bankCardId:a,payPassword:s(r.userpwdreal).toLocaleUpperCase(),confirmPayPassword:s(r.userconfirmpwdreal).toLocaleUpperCase(),token:o,requestSource:"WAP"};t.alert({title:"温馨提示",content:"<div>  <p>1.实名认证是验证您所绑定的银行账户是否属于您本人，确保您的资金安全，账户中的资金只能被提现到您本人的银行卡中。</p>  <p>2.您在绑定银行卡的过程中，为了确保您与第三方监管平台已成功建立资金保障关系，会向您的聚米账户充值1元，充值金额您可正常使用，请您放心！</p></div>",button:[{value:"知道了",callback:function(){$.ajax({url:"/userCenter/userAccount/openAccount",type:"post",dataType:"json",data:e,success:function(a){"0000"==a.code?($("#payForm").attr("action",a.data.rechargeUrl),$("#req_data").val(a.data.reqData),document.getElementById("payForm").submit()):(t.tips(a.msg),r.clickstatus=!0)}})}}]})}}},ready:function(){r.setActiveNav("account"),$("#myloading").remove(),$("img.async").asyncload(),d.setTitle().setDesc().setImg().setUrl().share()}})}})});var u=location.href.split("&code=")[0],l=location.href.split("&code=")[1];if(l){var p=l.split("&state=")[0];n(p,u)}});