define(["jumi","nav","isLogin","isLoginwx","vue","weixin"],function(t,e,a,n,o,c){var r=localStorage.getItem("token"),s={token:r,requestSource:"WAP"};a(function(){$.ajax({url:"/userCenter/userAccount/getBankHistory",type:"post",dataType:"json",data:s,success:function(e){"0000"==e.code&&new o({el:"body",components:{"my-backlist":{template:"#backlistTemplate",data:function(){return{data:e.data,bankHistories:e.data.bankHistories,jmOnlineBanks:e.data.jmOnlineBanks}},methods:{supportBankcard:function(){t.alert({title:"支持绑定的银行卡",content:document.getElementById("bankcardListBox"),button:!1})},addBankcard:function(){location.href="/h5/views/account/settings/bankcardToBindAndCashout.html"},delBank:function(e){t.alert({skin:"ui-dialog-bankcard",title:"提示",content:"确定删除该条银行卡记录吗？",button:[{value:"取消",callback:function(){}},{value:"确认",callback:function(){var a={id:e,token:r,requestSource:"WAP"};$.ajax({url:"/userCenter/userAccount/deleteBankCard",type:"post",dataType:"json",data:a,success:function(e){"0000"==e.code?(t.tips("成功删除该条银行卡记录~"),location.reload()):t.tips(e.msg)}})}}]})},bindBank:function(e){var a={bankCardId:e,token:r,requestSource:"WAP"};t.alert({title:"提示",content:"<p>1、实名认证是验证您所绑定的银行账户是否属于您本人，确保您的资金安全，账户中的资金只能被提现到您本人的银行卡中。</p><p>2、您在绑定银行卡的过程中，为了确保您与第三方监管平台已成功建立资金保障关系，会向您的聚米账户充值1元，充值金额您可正常使用，请您放心！</p>",button:[{value:"知道了",callback:function(){$.ajax({url:"/userCenter/userAccount/bindCard",type:"post",dataType:"json",data:a,success:function(e){"0000"==e.code?($("#payForm").attr("action",e.data.rechargeUrl),$("#req_data").val(e.data.reqData),document.getElementById("payForm").submit()):t.tips(e.msg)}})}}]})}},filters:{fourBankcard:function(t){return t.substr(t.length-4,4)}}}},ready:function(){$("#myloading").remove(),c.setTitle().setDesc().setImg().setUrl().share()}})}})});var i=location.href.split("?code=")[0],u=location.href.split("?code=")[1];if(u){var d=u.split("&state=")[0];n(d,i)}});