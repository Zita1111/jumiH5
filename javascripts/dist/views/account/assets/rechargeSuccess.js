define(["jumi","nav","vue","isLogin","getPara","weixin"],function(e,n,t,i,a,o){a.get();i(function(){new t({el:"body",components:{"my-recharge":{template:"#rechargeTemplate",data:function(){return{}},methods:{backindex:function(){location.href="/h5/views/main/index.html"},back:function(){location.search?location.href=location.search.substring(13):location.href="/h5/views/main/index.html"}}}},ready:function(){n.setActiveNav("account"),$("#myloading").remove(),o.setTitle().setDesc().setImg().setUrl().share()}})})});