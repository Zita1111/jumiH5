define(["jquery","vue","jumi","weixin"],function(e,t,i,n){e.ajax({url:"/activity/convertibility",type:"post",dataType:"json",success:function(s){new t({el:"body",components:{"my-anniversary":{template:"#anniversaryTemplate",data:function(){return{data:s,receiver:"",phone:"",address:""}},methods:{isLogin:function(e){this.data.is_login?e():isLogin()},toLink:function(t,n){var s=this;this.isLogin(function(){e.ajax({url:"/activity/willconvert",data:{price:t,upgrade:n},dataType:"json",type:"post",success:function(a){return a.eligible?void i.alert({skin:"ui-dialog-bankcard",title:"是否确认兑换该奖品？",content:document.getElementById("message"),button:[{value:"取消"},{value:"提交",callback:function(){var a={price:t,upgrade:n,receiver:s.receiver,phone:s.phone,address:s.address};e.ajax({url:"/activity/convert",type:"post",dataType:"json",data:a,success:function(e){e.result?(s.receiver="",s.phone="",s.address="",i.tips("兑换成功~")):i.tips(e.message)}})}}]}):void(a.is_convert?i.alert({title:"提示",content:"您已参与过兑换活动，已成功兑换了【"+a.product+"】；具体活动动态请关注官方通知。"}):i.alert({title:"提示",content:"您尚未达到该奖励的兑换条件。"}))}})})},toLinkUpgrade:function(t,n){var s=this;this.isLogin(function(){e.ajax({url:"/activity/willconvert",data:{price:t,upgrade:n},dataType:"json",type:"post",success:function(a){return a.eligible?void i.alert({skin:"ui-dialog-bankcard",title:"是否确认兑换该奖品？",content:document.getElementById("message"),button:[{value:"取消"},{value:"提交",callback:function(){var a={price:t,upgrade:n,receiver:s.receiver,phone:s.phone,address:s.address};e.ajax({url:"/activity/convert",type:"post",dataType:"json",data:a,success:function(e){e.result?(s.receiver="",s.phone="",s.address="",i.tips("兑换成功~")):i.tips(e.message)}})}}]}):void(a.is_convert?i.alert({title:"提示",content:"您已参与过兑换活动，已成功兑换了【"+a.product+"】；具体活动动态请关注官方通知。"}):i.alert({skin:"ui-dialog-bankcard",title:"提示",content:"在【2017年4月30日】前，投资满【"+a.price+"元】，邀请【"+a.user_count+"】位好友并且每位好友累计投资达到10000元，即可完成升级兑换！是否立即邀请？",button:[{value:"取消"},{value:"立即邀请",callback:function(){location.href="/h5/views/account/invite/invite.html"}}]}))}})})},receiverKeyup:function(){this.receiver.length>12&&(this.receiver=this.receiver.substring(0,12))},phoneKeyup:function(){this.phone.length>11&&(this.phone=this.phone.substring(0,11))},addressKeyup:function(){this.address.length>120&&(this.address=this.address.substring(0,120))}}}},ready:function(){e("#myloading").remove();var t={title:"聚米两周年庆！史上最大力度活动来袭！",desc:"黄金条，液晶电视，无人机...超多壕礼等你来拿，转盘100%中奖！更有价值6188元大奖送给你！",img:"https://jumifinance.oss-cn-hangzhou.aliyuncs.com/investdetail/1491361901378054729.jpg",url:"jumizc.com/h5/views/activity/anniversaryInvest.html"};if("ios"==localStorage.fromapp){var i=decodeURIComponent(location.href.split("#")[0]);i=i.split(".")[0],i=i.split("//")[1];var s="https://"+i+".";t.url=s+t.url,window.webkit.messageHandlers.share.postMessage(t)}else if("android"==localStorage.fromapp){var i=decodeURIComponent(location.href.split("#")[0]);i=i.split(".")[0],i=i.split("//")[1];var s="https://"+i+".";t.url=s+t.url,window.Android.callAndroidAction("0",JSON.stringify(t))}else n.setTitle(t.title).setDesc(t.desc).setImg(t.img).setUrl(t.url).share(!0)}})}})});