define(["jumi","tab","isLogin","isLoginwx","vue","weixin","load","scrolltotop"],function(e,t,r,a,n,o,s,u){var c=localStorage.getItem("token"),i={currentPage:1,pageSize:10,token:c,sourceType:null,orderStatus:null,requestSource:"WAP"};r(function(){$.ajax({url:"/userCenter/personalCenter/myorderlist",type:"get",data:i,success:function(t){"0000"==t.code?new n({el:"body",components:{"my-active":{template:"#activeTemplate",data:function(){return{currentPageRepay:1,currentStatus:-1,currentSourceType:-1,listSum:{items:t.data,currentPage:1,isLoading:0},isIOSShow:"ios"==localStorage.fromapp}},methods:{goOrigin:function(e,t,r){switch(e){case 0:location.href="/h5/views/invest/invest.html?itemId="+r;break;case 1:1==t?location.href="/h5/views/wheel/wheel.html":location.href="/h5/views/topic/topicDetail.html?action_id="+r}},goDetail:function(e){location.href="/h5/views/account/active/activeDetail.html?orderId="+e},loadDataz:function(){var t=this;$.ajax({url:"/userCenter/personalCenter/myorderlist",type:"get",data:{currentPage:1,pageSize:10,token:c,sourceType:t.currentSourceType==-1?null:t.currentSourceType,orderStatus:t.currentStatus==-1?null:t.currentStatus,requestSource:"WAP"},success:function(r){"0000"==r.code?t.listSum.items=r.data:e.tips(r.msg)},error:function(e){console.error(e)}})},sureHave:function(t){e.alert({skin:"buttonz",fixed:!0,content:"确认收货？",button:[{value:"取消"},{value:"收货",callback:function(){$.ajax({data:{token:c,orderId:t,requestSource:"WAP"},url:"/userCenter/personalCenter/checkOrderStatus",type:"post",dataType:"json",success:function(t){"0000"==t.code?location.reload():e.tips(t.msg)},error:function(e){console.error(e)}})}}]})},deleteOrder:function(t){e.alert({skin:"buttonz",fixed:!0,content:"确认删除订单",button:[{value:"取消"},{value:"删除",callback:function(){$.ajax({data:{token:c,orderId:t,requestSource:"WAP"},url:"/userCenter/personalCenter/deleteorder",type:"post",dataType:"json",success:function(t){"0000"==t.code?location.reload():e.tips(t.msg)},error:function(e){console.error(e)}})}}]})}},watch:{currentStatus:function(){this.currentPageRepay=1,$("#loadMoreButton1").html('<i class="iconfont">&#xe65d;</i> <span>上拉刷新数据</span>'),this.loadDataz(),this.listSum.items=[]},currentSourceType:function(){this.currentPageRepay=1,$("#loadMoreButton1").html('<i class="iconfont">&#xe65d;</i> <span>上拉刷新数据</span>'),this.loadDataz(),this.listSum.items=[]}},filters:{timeFilter:function(e){var t=new Date(e),r=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var n=t.getDate();return n=n<10?"0"+n:n,r+"-"+a+"-"+n},statusFilter:function(e){switch(e){case 0:return"待支付";case 1:return"待确认";case 2:return"待发货";case 6:return"待收货";case 3:return"已完成";default:return"--"}}}}},ready:function(){var e=this;$("#myloading").remove(),o.setTitle().setDesc().setImg().setUrl().share(),s.pullup({el:"#tabs1",button:"#loadMoreButton1",callback:function(t){var r=e.$children[0];r.currentPageRepay++;var a={token:c,sourceType:r.currentSourceType==-1?null:r.currentSourceType,orderStatus:r.currentStatus==-1?null:r.currentStatus,pageSize:10,currentPage:r.currentPageRepay,requestSource:"WAP"};$.ajax({url:"/userCenter/personalCenter/myorderlist",type:"get",data:a,success:function(e){if("0000"==e.code)if(e.data instanceof Array&&e.data.length>0){for(var a=0;a<e.data.length;a++)r.listSum.items.push(e.data[a]);t.isLoading=0}else t.isLoading=2,$(t.button).html("-- 我已倾囊相授 --")}})}})}}):e.tips(t.msg)}})});var l=location.href.split("?code=")[0],d=location.href.split("?code=")[1];if(d){var p=d.split("&state=")[0];a(p,l)}});