define(["jumi","nav","vue","isLogin","getPara","weixin"],function(e,n,t,o,i,a){var c=i.get(),u=c.result;o(function(){new t({el:"body",components:{"my-openaccount":{template:"#openaccountTemplate",data:function(){return{result:u}},methods:{backIndex:function(){location.href="/h5/views/main/index.html"},personInfo:function(){location.href="/h5/views/account/account.html"}}}},ready:function(){$("#myloading").remove(),a.setTitle().setDesc().setImg().setUrl().share()}})})});