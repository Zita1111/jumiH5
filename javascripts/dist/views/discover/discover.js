define(["jumi","nav","asyncload","weixin","vue","md5","scrolltotop"],function(e,t,a,r,o,i,s){var d=localStorage.getItem("token"),u={activityNumber:2,requestSource:"WAP"};$.ajax({url:"/activity/getActivityHomePageInfo",type:"post",dataType:"json",data:u,success:function(a){"0000"==a.code&&new o({el:"body",components:{"my-discover":{template:"#discoverTemplate",data:function(){return{data:a.data,specialList:a.data.specialList,isIOSShow:"ios"==localStorage.fromapp}},methods:{highlight:function(){var e=/^\S{0}$/,t=1==$("#userpwdreal").attr("proving")?1:0,a=1==$("#userconfirmpwdreal").attr("proving")?1:0,r=!e.test(this.userpwdreal)&&!e.test(this.userconfirmpwdreal),o=t&&a;r&&o?($(".ui-dialog-upgrade .ui-dialog-footer button.ui-dialog-autofocus").removeAttr("disabled","disabled"),$(".ui-dialog-upgrade .ui-dialog-footer button.ui-dialog-autofocus").css({color:"#ec6121"})):($(".ui-dialog-upgrade .ui-dialog-footer button.ui-dialog-autofocus").attr("disabled","disabled"),$(".ui-dialog-upgrade .ui-dialog-footer button.ui-dialog-autofocus").css({color:"#999"}))},userpwdrealKeyup:function(){var t=/^[0-9]*$/;return t.test(this.userpwdreal)?(6==this.userpwdreal.length?$("#userpwdreal").attr("proving",1):$("#userpwdreal").attr("proving",0),void this.highlight()):($("#userpwdreal").attr("proving",0),e.tips("支付密码格式错误！"),void(this.userpwdreal=""))},userconfirmpwdrealKeyup:function(){var t=this.userconfirmpwdreal.length;6==t?this.userconfirmpwdreal==this.userpwdreal?$("#userconfirmpwdreal").attr("proving",1):($("#userconfirmpwdreal").attr("proving",0),e.tips("两次设置的支付密码不一致！")):$("#userconfirmpwdreal").attr("proving",0),this.highlight()}}}},ready:function(){var a=this;t.setActiveNav("discover"),$("#myloading").remove(),$(".async").asyncload(),r.setTitle().setDesc().setImg().setUrl().share();var o={token:d,requestSource:"WAP"};$.ajax({url:"/common/getResetPayPasswordIndex",type:"post",datatype:"json",data:o,success:function(t){"0000"==t.code&&1==t.data.isLogin&&0==t.data.hasChangePaypassword&&e.alert({title:"",content:'<div class="textcenter"><p>尊敬的用户：</p><p>聚米众筹进行了4.0账户安全升级，</p><p>请完成账户升级操作</p></div>',button:[{value:"立即前往",callback:function(){$("#realname").html(t.data.realname),$("#idNumber").html(t.data.idNumber),e.alert({title:"",skin:"ui-dialog-upgrade",content:document.getElementById("upgradeWrap"),button:[{value:"立即修改",callback:function(){var r={password:i(a.$children[0].userpwdreal).toLocaleUpperCase(),newPassword:i(a.$children[0].userpwdreal).toLocaleUpperCase(),confirmPassword:i(a.$children[0].userconfirmpwdreal).toLocaleUpperCase(),pwdType:"paypassword",token:d,requestSource:"WAP"};$.ajax({url:"/userCenter/setting/resetPayPassword",type:"post",datatype:"json",data:r,success:function(){"0000"==t.code?e.alert({title:"",skin:"ui-dialog-upsuccess",content:document.getElementById("upsuccess"),button:[{value:"完成",callback:function(){}}]}):e.tips(t.msg)}})}}]}),$(".ui-dialog .ui-dialog-footer button.ui-dialog-autofocus").attr("disabled","disabled")}}]})}})}})}})});