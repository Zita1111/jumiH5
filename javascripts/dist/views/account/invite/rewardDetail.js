define(["nav","vue","getPara","isLogin","isLoginwx","asyncload","weixin"],function(e,t,a,n,i,o,r){var s=a.get(),c=localStorage.getItem("token"),d={token:c,requestSource:"WAP",ruleId:s.ruleId};n(function(){$.ajax({url:"/userCenter/inviteFriend/getCurPerRewardList",type:"get",data:d,dataType:"json",success:function(a){"0000"==a.code?null!=a.data&&new t({el:"body",components:{"my-record":{template:"#recordTemplate",data:function(){return{data:a,items:a.data,currentPage:1,pageSize:10,isLoading:0}},methods:{}}},ready:function(){e.setActiveNav("account"),$("#myloading").remove(),r.setTitle().setDesc().setImg().setUrl().share()}}):jumi.tips(a.msg)}})});var l=location.href.split("&code=")[0],u=location.href.split("&code=")[1];if(u){var g=u.split("&state=")[0];i(g,l)}});