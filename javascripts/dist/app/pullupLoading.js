define(["jquery","touch"],function(a,o){o.on("body","dragstart drag dragend",function(o){var d=a(window),t=a("body"),i=t.height(),r=d.height(),e=d.scrollTop();"dragstart"==o.type,"drag"==o.type&&(r+e>=i+60?a("#loadMore").html("正在加载..."):a("#loadMore").html("上拉加载")),"dragend"==o.type&&r+e>=i+60&&1==a("#loadMore").data("isloading")&&(a("#loadMore").data("isloading",!1).attr("data-isloading",!1),setTimeout(function(){for(var o="",d=50;d<100;d++)o+="<li>"+d+"</li>";a("#listBox").append(o),a("#loadMore").html("上拉加载"),a("#loadMore").data("isloading",!0).attr("data-isloading",!0)},1e3))})});