define(["jumi","nav","asyncload","getPara","isLogin","isLoginwx","vue","weixin"],function(e,t,a,n,i,o,r,s){var c=n.get(),d=c.itemid,l=localStorage.getItem("token"),u=c.preType?c.preType:0,p={preType:u,itemId:d,token:l,requestSource:"WAP"};$.ajax({url:"/item/getItemGearList",type:"post",dataType:"json",data:p,success:function(a){"0000"==a.code&&new r({el:"body",components:{"my-grade":{template:"#gradeTemplate",data:function(){return{data:a.data,gearList:a.data.gearList}},methods:{toLink:function(t,a,n,o){i(function(){var n={requestSource:"WAP",token:l,gearId:a};$.ajax({url:"/needLogin/buy/toSupportCheck",type:"post",dataType:"json",data:n,success:function(n){if("0000"==n.code){if(0==n.data.costType)location.href="/h5/views/payment/investCartweixin.html?itemid="+t+"&gearId="+a;else if(1==n.data.costType){if(0==n.data.realStatus)return e.alert({skin:"ui-dialog-bankcard",content:"您尚未开户，请先开户",button:[{value:"取消"},{value:"立即开户",callback:function(){location.href="/h5/views/account/settings/bankcardToBind.html?redirectURL=/h5/views/invest/investGrade.html?itemid="+t}}]}),!1;location.href="/h5/views/payment/investCart.html?itemid="+t+"&gearId="+a}}else e.tips(n.msg)}})})}}},"my-explain":{template:"#explainTemplate",data:function(){return{data:a.data}},filters:{moneyStr:function(e){e=e.toString().replace(/\$|\,/g,"");for(var t=0;t<Math.floor((e.length-(1+t))/3);t++)e=e.substring(0,e.length-(4*t+3))+","+e.substring(e.length-(4*t+3));return e}}}},ready:function(){t.setActiveNav("index"),$(".async").asyncload(),$("#myloading").remove();var e=location.href.split("&code=")[0],a=location.href.split("&code=")[1];if(a){var n=a.split("&state=")[0];o(n,e)}s.setTitle().setDesc().setImg().setUrl().share()}})}})});