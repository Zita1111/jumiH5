define(["jumi","nav","vue","isLogin","isLoginwx","tab","weixin","load","scrolltotop","getPara","Ddate"],function(t,e,a,n,o,l,c,i,u,r,s){var d=localStorage.getItem("token"),g=r.get(),p={year:g.year,month:g.month,currentPage:1,pageSize:20,subjectCode:"100200",token:d,requestSource:"WAP"};n(function(){$.ajax({url:"/userCenter/billAccount/getBillAccountList",type:"post",data:p,dataType:"json",success:function(n){"0000"==n.code&&new a({el:"body",components:{"my-redpacketlog":{template:"#redpacketLogTemplate",data:function(){return{selectedYear:"",selectedMonth:"",allList:{items:n.data.billAccountResAll,currentPage:1,pageSize:20,isLoading:0},inList:{items:n.data.billAccountResInto,currentPage:1,pageSize:20,isLoading:0},outList:{items:n.data.billAccountResOut,currentPage:1,pageSize:20,isLoading:0},isIOSShow:"ios"==localStorage.fromapp}},methods:{showDetail:function(e){$.ajax({url:"/userCenter/billAccount/getJmAcctSeqById",type:"post",dataType:"json",data:{id:e,requestSource:"WAP",token:d},success:function(e){if("0000"==e.code){var a=e.data.createTime,n=0==e.data.flag?"-"+e.data.amt:"+"+e.data.amt,o=e.data.remark?e.data.remark:"无";t.alert({title:"记录详情",content:"<div>   <p>记录时间："+a+"</p>   <p>交易金额："+n+"</p>   <p>摘要："+o+"</p></div>",button:!1,quickClose:!0})}}})}}}},ready:function(){var t=this;e.setActiveNav("account"),$("#myloading").remove(),c.setTitle().setDesc().setImg().setUrl().share(),""!=g.year&&""!=g.month?$("#date").text(g.year+"年"+g.month+"月"):$("#date").text("请选择日期并搜索"),s.init({trigger:"#date",callback:function(t){location.href="/h5/views/account/reward/redpacketLog.html?year="+t.year+"&month="+t.month}}),i.pullup({el:"#tabs1",button:"#loadMoreButton1",callback:function(e){var a=t.$children[0];e.currentPage++;var n={year:g.year,month:g.month,subjectCode:"100200",token:d,flag:2,pageSize:20,currentPage:e.currentPage,requestSource:"WAP"};$.ajax({url:"/userCenter/billAccount/getBillAccountList",type:"post",dataType:"json",data:n,success:function(t){if("0000"==t.code)if(null!=t.data&&null!=t.data.billAccountResAll&&t.data.billAccountResAll.length>0){for(var n=0;n<t.data.billAccountResAll.length;n++)a.allList.items.push(t.data.billAccountResAll[n]);e.isLoading=0}else e.isLoading=2,$(e.button).html("-- 我已倾囊相授 --")}})}}),i.pullup({el:"#tabs2",button:"#loadMoreButton2",callback:function(e){var a=t.$children[0];e.currentPage++;var n={year:g.year,month:g.month,subjectCode:"100200",token:d,flag:1,pageSize:20,currentPage:e.currentPage,requestSource:"WAP"};$.ajax({url:"/userCenter/billAccount/getBillAccountList",type:"post",dataType:"json",data:n,success:function(t){if("0000"==t.code)if(null!=t.data&&null!=t.data.billAccountResInto&&t.data.billAccountResInto.length>0){for(var n=0;n<t.data.billAccountResInto.length;n++)a.inList.items.push(t.data.billAccountResInto[n]);e.isLoading=0}else e.isLoading=2,$(e.button).html("-- 我已倾囊相授 --")}})}}),i.pullup({el:"#tabs3",button:"#loadMoreButton3",callback:function(e){var a=t.$children[0];e.currentPage++;var n={year:g.year,month:g.month,subjectCode:"100200",token:d,flag:0,pageSize:20,currentPage:e.currentPage,requestSource:"WAP"};$.ajax({url:"/userCenter/billAccount/getBillAccountList",type:"post",dataType:"json",data:n,success:function(t){if("0000"==t.code)if(null!=t.data&&null!=t.data.billAccountResOut&&t.data.billAccountResOut.length>0){for(var n=0;n<t.data.billAccountResOut.length;n++)a.outList.items.push(t.data.billAccountResOut[n]);e.isLoading=0}else e.isLoading=2,$(e.button).html("-- 我已倾囊相授 --")}})}})}})}})});var b=location.href.split("&code=")[0],m=location.href.split("&code=")[1];if(m){var h=m.split("&state=")[0];o(h,b)}});