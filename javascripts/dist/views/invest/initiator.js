define(["asyncload","getPara","vue","weixin","scrolltotop"],function(e,t,a,n,o){var s=t.get(),i={founderId:s.user_id,requestSource:"WAP"};$.ajax({url:"/item/getFounderDetailInfo",type:"post",dataType:"json",data:i,success:function(e){new a({el:"body",components:{"my-zpf":{template:"#zpfTemplate",data:function(){return{data:e.data,itemlist:e.data.itemList}}}},ready:function(){$("img.async").asyncload(),$("#myloading").remove(),n.setTitle().setDesc().setImg().setUrl().share()}})}})});