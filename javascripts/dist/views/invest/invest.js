define(["jumi","asyncload","weixin","getPara","vue","isLogin","isLoginwx","prism","scrolltotop","DateFormat","wxBackbtn"],function(t,e,a,i,n,r,o,s,l,d,c){var m=i.get(),p=m.preType?m.preType:0,u=m.itemFlag?m.itemFlag:"no";localStorage.setItem("itemFlag",u);var h=localStorage.getItem("token"),f=location.href.split("&code=")[0],g=location.href.split("&code=")[1],y={preType:p,itemId:m.itemId,token:h,requestSource:"WAP"};if(g){var v=g.split("&state=")[0];o(v,f)}else r(function(){$.ajax({url:"/item/getItemBasicInfo",type:"post",dataType:"json",timeout:3e4,data:y,success:function(e){"0000"==e.code?new n({el:"body",components:{"my-banner":{template:"#bannerTemplate",data:function(){return{data:e.data,itemFlag:e.data.itemFlag}}},"my-item":{template:"#itemTemplate",data:function(){return{data:e.data,scaleStr:""}},ready:function(){var t=e.data.scale;t=t>=100?100:t,$(".progress-bar").animate({width:t+"%"},1e3),this.scaleStr=t.toFixed(2)}},"my-video":{template:"#videoTemplate",data:function(){return{data:e.data}},ready:function(){var t=this,e=t.data.sourceVideoPath;""!=e&&!function(t){new prismplayer({id:"J_prismPlayer",source:t,autoplay:!0,width:"100%",height:"250px",skinLayout:[{align:"blabs",x:0,y:0,name:"controlBar",children:[{align:"tlabs",x:0,y:0,name:"progress"},{align:"tl",x:15,y:26,name:"playButton"},{align:"tl",x:10,y:24,name:"timeDisplay"},{align:"tr",x:20,y:25,name:"fullScreenButton"},{align:"tr",x:20,y:25,name:"volume"}]}]})}(e)}},"my-detail":{template:"#detailTemplate",data:function(){return{data:e.data}},methods:{safeguard:function(){t.alert({title:"保障与风险",content:e.data.h5Safeguard,button:!1})}}},"my-trends":{template:"#trendsTemplate",data:function(){return{data:e.data,itemtrends:[]}},methods:{detailDynamics:function(t){var e=this,a=e.itemtrends[t].id;location.href="/h5/views/notice/projectDynamics.html?inforId="+a}},filters:{timeStr:function(t){return new Date(t).Format("yyyy-MM-dd hh:mm")}},ready:function(){var t=this,e={itemId:m.itemId,requestSource:"WAP",token:h};$.ajax({url:"/item/getItemTrendsList",type:"post",dataType:"json",data:e,success:function(e){t.data=e.data,t.itemtrends=e.data.jmNoticeList}})}},"my-support":{template:"#supportTemplate",data:function(){return{data:e.data,lists:[],currentPage:1,pageSize:10,isLoading:0}},ready:function(){var t=this,e={itemId:m.itemId,requestSource:"WAP",currentPage:1,pageSize:999,token:h};$.ajax({url:"/item/getInvestorList",type:"post",dataType:"json",data:e,success:function(e){t.data=e.data,t.lists=e.data.investorList}})}},"my-foot":{template:"#footTemplate",data:function(){return{data:e.data}},methods:{addToWeixin:function(){var a="",i="",n="";i="ios"==localStorage.fromapp?'<span class="clr-strike">微信扫描</span> 二维码，添加客服微信':"android"==localStorage.fromapp?'<span class="clr-strike">微信扫描</span> 二维码，添加客服微信':'<span class="clr-strike">长按</span> 识别二维码，添加客服微信',a=""!=e.data.wxImagePath?"\t<p>"+i+'</p>\t<p><img src="'+e.data.wxImagePath+'" alt="" style="width:auto;height:15rem;margin:0 auto;"></p>':"<p>暂无讨论群，请随时关注！</p>",n='<div style="text-align:center;">'+a+"</div>",t.alert({title:"客服二维码",content:n,button:!1})}},filters:{countFilter:function(t){var e=new Number(t);return e>99?e="99+":0==e&&(e=""),e}}}},ready:function(){$(".async").asyncload(),$("#myloading").remove();var t=this;localStorage.setItem("itemFlag",t.$children[0].itemFlag);var e=location.origin+"/h5/views/invest/invest.html?itemId="+m.itemId+"&itemFlag="+t.$children[0].itemFlag;if("ios"==localStorage.fromapp){var i={title:t.$children[0].data.shareTitle,desc:t.$children[0].data.shareContent,img:t.$children[0].data.imagePath11,url:e};window.webkit.messageHandlers.share.postMessage(i)}else if("android"==localStorage.fromapp){var i={title:t.$children[0].data.shareTitle,desc:t.$children[0].data.shareContent,img:t.$children[0].data.imagePath11,url:e};window.Android.callAndroidAction("0",JSON.stringify(i))}else a.setTitle(t.$children[0].data.shareTitle).setDesc(t.$children[0].data.shareContent).setImg(t.$children[0].data.imagePath11).setUrl(e).share(!0);$(".tab-handle li").click(function(){var t=$(this).index();$(".tab-con").find(".tabCon").hide().eq(t).show(),$(".tab-handle li").removeClass("active").eq(t).addClass("active")}),$(window).scroll(function(){var t=$(window).scrollTop(),e=$("#tabFixed").offset().top,a=$("#tabBox").offset().top;t>=e&&$("#tabFixed").addClass("tabFixed"),t<=a&&$("#tabFixed").removeClass("tabFixed")})}}):(t.tips("暂无权限，即将回到首页"),setTimeout(function(){location.href=location.origin+"/h5/views/main/index.html"},3e3))}})});if(location.href.split("from=")[1]){var x=location.href.split("from=")[1],w=x.split("&isappinstalled")[0];w&&c.setReturnUrl()}});