define(["jquery","vue","weixin"],function(e,t,i){new t({el:"body",components:{"my-gardenparty":{template:"#gardenPartyTemplate",data:function(){return{data:{}}}}},ready:function(){e("#myloading").remove();var t={title:"当别人还在送钱送红包的时候，我们已经在教你怎么赚钱了!",desc:"当然，我们也送红包，还比他们的大",img:"https://jumifinance.oss-cn-hangzhou.aliyuncs.com/investdetail/1485153670361023362.jpg",url:"jumizc.com/h5/views/activity/gardenParty.html"};if("ios"==localStorage.fromapp){var a=decodeURIComponent(location.href.split("#")[0]);a=a.split(".")[0],a=a.split("//")[1];var n="https://"+a+".";t.url=n+t.url,window.webkit.messageHandlers.share.postMessage(t)}else if("android"==localStorage.fromapp){var a=decodeURIComponent(location.href.split("#")[0]);a=a.split(".")[0],a=a.split("//")[1];var n="https://"+a+".";t.url=n+t.url,window.Android.callAndroidAction("0",JSON.stringify(t))}else i.setTitle(t.title).setDesc(t.desc).setImg(t.img).setUrl(t.url).share(!0)}})});