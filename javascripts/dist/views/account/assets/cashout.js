define(["jumi","nav","vue","isLogin","isLoginwx","md5","weixin"],function(e,t,a,s,o,n,c){var i=localStorage.getItem("token"),r={token:i,requestSource:"WAP"};s(function(){$.ajax({url:"/userCenter/userAccount/getMyCashInfo",type:"post",dataType:"json",data:r,success:function(s){console.log(s),"0000"==s.code&&new a({el:"body",components:{"my-cashout":{template:"#cashoutTemplate",data:function(){return{data:s.data,canCashMoney:s.data.canCashMoney,cashFreeTimes:s.data.cashFreeTimes,fees:s.data.fees,arriveMoney:0,cashMoney:"",paypassword:"",isShowButton:!0}},methods:{isFee:function(){var e=this;if(e.cashFreeTimes>0)e.arriveMoney=e.cashMoney;else{var t=Math.round(100*(e.cashMoney-e.fees))/100;t<=0?e.arriveMoney=0:e.arriveMoney=t}},isClickappear:function(){var e=this;""!=e.cashMoney?e.isShowButton=!1:e.isShowButton=!0},allCashout:function(){var t=this;Number(t.canCashMoney)<10?(e.tips("提现金额最低10元！"),t.cashMoney=""):t.cashMoney=t.canCashMoney,t.isFee(),t.isClickappear()},cashoutInputKeyup:function(){var e=this;e.isFee(),e.isClickappear()},cashoutInputBlur:function(){$(".footer").css({display:"block"});var e=this;e.cashMoney.match(/^0\d+/)&&(e.cashMoney=e.cashMoney.replace(/^0(\d+)/,"$1")),e.cashMoney.match(/^\./)&&(e.cashMoney=e.cashMoney.replace(/\./,"0.")),e.cashMoney.match(/^-/)&&(e.cashMoney=e.cashMoney.replace(/^-/,""))},cashoutInputFocus:function(){$(".footer").css({display:"none"})},aboutCashout:function(){e.alert({title:"温馨提示",content:"1.用户提现申请发起后，提款金额将在3个工作日内到账；<br/>2.单笔单日提现金额最高50万元，提现手续费根据用户对应的会员等级而定；<br/>具体会员等级权益请在个人中心的用户会员等级模块查看。如在提现中遇到任何问题，请拨打聚小米电话：18969000782",button:!1})},cashouttips:function(){e.alert({title:"部分余额无法提现",content:"由于存管规则，部分金额在T+1日后，银行核对账目后才可提现，在此期间这些金额可以用于投资。",button:!1})},resetpayStatus:function(){var e=this,t=$(".fake input");e.paypassword="",$(".active").css("left","0px");for(var a=e.paypassword.trim(),s=a.length,o=0;o<s;o++)t.eq(o).val(a[o]),t.eq(o).next().length&&$(".active").css("left",t.eq(o+1).offset().left-t.eq(0).offset().left-parseInt($(".wrap").css("padding-left"))+"px");t.each(function(e,t){e>=s&&$(this).val("")})},ok:function(){var t=this;t.resetpayStatus();var a=/^(([1-9]{1}\d*(\.\d{1,2})?)|(0\.([1-9]|\d[1-9])))$/,s=t.cashMoney;return s<10?void e.tips("提现金额需大于等于10元！"):s>Number(t.canCashMoney)?void e.tips("账户余额不足！"):a.test(s)?void e.alert({skin:"ui-dialog-paypwd",title:"请输入6位数字支付密码",content:document.getElementById("phonecodeWrap"),button:[{value:"忘记密码？",callback:function(){location.href="/h5/views/account/settings/forgetPaypwd.html"}}]}):void e.tips("金额必须保留两位小数，且大于0.00")},inputpwdKeyup:function(){var t=this,a=/^[0-9]*$/,s=$(".fake input");if(t.paypassword||$(".active").css("left","0px"),a.test(t.paypassword)){for(var o=t.paypassword.trim(),c=o.length,r=0;r<c;r++)s.eq(r).val(o[r]),s.eq(r).next().length&&$(".active").css("left",s.eq(r+1).offset().left-s.eq(0).offset().left-parseInt($(".wrap").css("padding-left"))+"px");if(s.each(function(e,t){e>=c&&$(this).val("")}),6==c){var p={cashMoney:t.cashMoney,payPassword:n(t.paypassword).toLocaleUpperCase(),confirmPayPassword:n(t.paypassword).toLocaleUpperCase(),token:i,requestSource:"WAP"};$.ajax({type:"post",url:"/userCenter/userAccount/applyCash",data:p,dataType:"json",success:function(a){"0000"==a.code?location.href="/h5/views/account/assets/cashoutSuccess.html":(e.tips(a.msg),t.resetpayStatus(),document.getElementById("real").focus())}})}}else e.tips("请输入6位数字支付密码"),t.resetpayStatus()}}}},ready:function(){t.setActiveNav("account"),$("#myloading").remove(),c.setTitle().setDesc().setImg().setUrl().share()}})}})});var p=location.href.split("&code=")[0],u=location.href.split("&code=")[1];if(u){var h=u.split("&state=")[0];o(h,p)}});