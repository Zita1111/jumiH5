define(["nav","vue","DateFormat","weixin","load","scrolltotop"],function(t,a,e,o,r,n){var d=localStorage.getItem("token"),i={currentPage:1,pageSize:20,token:d,requestSource:"WAP"};$.ajax({url:"/activity/getMyLotteryRecord",type:"post",dataType:"json",data:i,success:function(e){"0000"==e.code&&new a({el:"body",components:{"my-record":{template:"#recordTemplate",data:function(){return{data:e.data,awardLogList:e.data.awardLogList,currentPage:1,isLoading:0,isIOSShow:"ios"==localStorage.fromapp}},methods:{},filters:{timeStr:function(t){return new Date(t).Format("yyyy-MM-dd hh:mm")}}}},ready:function(){var a=this;t.setActiveNav("discover"),$("#myloading").remove(),o.setTitle().setDesc().setImg().setUrl().share(),r.pullup({button:"#loadMoreButton",callback:function(t){var e=a.$children[0];t.currentPage++;var o={pageSize:20,currentPage:t.currentPage,token:d,requestSource:"WAP"};$.ajax({url:"/activity/getMyLotteryRecord",type:"post",dataType:"json",data:o,success:function(a){if("0000"==a.code)if(null!=a.data&&null!=a.data.awardLogList&&a.data.awardLogList.length>0){for(var o=0;o<a.data.awardLogList.length;o++)e.data.awardLogList.push(a.data.awardLogList[o]);t.isLoading=0}else t.isLoading=2,$(t.button).html("-- 我已倾囊相授 --")}})}})}})}})});