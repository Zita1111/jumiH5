define(["nav","bigwheel","asyncload","weixin","isLogin","isLoginwx","getPara","vue"],function(e,t,a,i,o,l,n,s){var c=localStorage.getItem("token"),r={token:c,requestSource:"WAP"},h=n.get();if(h.from)var d=location.href.split("&code=")[1];else var d=location.href.split("?code=")[1];$.ajax({url:"/activity/getTurnTableIndex",type:"post",dataType:"json",data:r,success:function(t){"0000"==t.code&&new s({el:"body",components:{"my-wheel":{template:"#wheelTemplate",data:function(){return{data:t.data,awardList:t.data.jmAwardList,freetimes:t.data.freeTimes,isIOSShow:"ios"==localStorage.fromapp}},methods:{toLogin:function(){d||o()},viewshistory:function(){d||o(function(){location.href="/h5/views/wheel/wheelRecord.html"})}}}},ready:function(){if(d){var t=d.split("&state=")[0];l(t,"/h5/views/wheel/wheel.html")}var a=this;e.setActiveNav("discover"),$(".async").asyncload(),$("#myloading").remove(),$("#wheelBox").luckDraw({width:"25",height:"25",line:3,list:3,click:".wheel-start",callback:function(e){console.log(e),a.$children[0].freetimes=e.data.freetimes}}),i.setTitle("聚米众筹天天转盘，富力转不停").setDesc().setImg().setUrl(location.origin+"/h5/views/wheel/wheel.html").share()}})}})});