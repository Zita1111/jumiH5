define(["jumi","nav","tab","vue","scrolltotop","isLogin","isLoginwx","asyncload","weixin","load"],function(e,t,n,a,i,s,o,m,c,r){var l=localStorage.getItem("token"),d={currentPage:1,pageSize:10,token:l,requestSource:"WAP"};s(function(){$.ajax({url:"/comment/personComment/v1.0",type:"get",data:d,success:function(t){"0000"==t.code?new a({el:"body",components:{"my-message":{template:"#messageTemplate",data:function(){return{messageList:t.data,isLoading:0}},methods:{activeHref:function(e){var t=e.commentType,n=e.itemId,a=e.id,i=null;switch(t){case 3:i="/h5/views/invest/investComment.html?itemid="+n+"&commentType=3#cid"+a;break;case 2:i="/h5/views/invest/investComment.html?itemid="+n+"&commentType=2#cid"+a;break;case 1:i="/h5/views/invest/investComment.html?itemid="+n+"&commentType=1#cid"+a;break;case 0:i="/h5/views/invest/investComment.html?itemid="+n+"&commentType=0#cid"+a}return i}}}},ready:function(){var t=location.href.split("?code=")[0],n=location.href.split("?code=")[1];if(n){var a=n.split("&state=")[0];o(a,t)}var i=this;$("#myloading").remove(),r.pullup({button:"#loadMoreButton",callback:function(t){var n=i.$children[0].messageList;t.currentPage++;var a={pageSize:10,currentPage:t.currentPage,requestSource:"WAP",token:l};$.ajax({url:"/comment/personComment/v1.0",type:"get",dataType:"json",data:a,success:function(a){if("0000"==a.code)if(a.data&&a.data.length>0){for(var i=0,s=a.data.length;i<s;i++)n.push(a.data[i]);setTimeout(function(){$(".async").asyncload()},0),t.isLoading=0}else t.isLoading=2,$(t.button).html("-- 我已倾囊相授 --");else e.tips(a.msg)}})}}),c.setTitle().setDesc().setImg().setUrl().share()}}):e.tips(t.msg)}})})});