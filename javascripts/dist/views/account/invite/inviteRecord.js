define(["nav","tab","vue","scrolltotop","isLogin","isLoginwx","asyncload","weixin","load"],function(e,t,a,n,o,i,r,c,s){var d=localStorage.getItem("token"),l={token:d,requestSource:"WAP",currentPage:1,pageSize:10};o(function(){$.ajax({url:"/userCenter/inviteFriend/getInviteRecordList",type:"get",data:l,dataType:"json",success:function(t){"0000"==t.code&&null!=t.data&&new a({el:"body",components:{"my-record":{template:"#recordTemplate",data:function(){return{data:t,items:t.data,currentPage:1,pageSize:10,isLoading:0}}}},ready:function(){var t=this;e.setActiveNav("account"),$("#myloading").remove(),c.setTitle().setDesc().setImg().setUrl().share(),s.pullup({button:"#loadMoreButton",callback:function(e){var a=t.$children[0];e.currentPage++;var n={loadType:"1",token:d,pageSize:10,currentPage:e.currentPage,requestSource:"WAP"};$.ajax({url:"/userCenter/inviteFriend/getInviteRecordList",type:"post",dataType:"json",data:n,success:function(t){if("0000"==t.code)if(null!=t.data&&t.data.length>0){for(var n=0;n<t.data.length;n++)a.items.push(t.data[n]);e.isLoading=0}else e.isLoading=2,$(e.button).html("-- 我已倾囊相授 --")}})}})}})}})});var u=location.href.split("?code=")[0],g=location.href.split("?code=")[1];if(g){var p=g.split("&state=")[0];i(p,u)}});