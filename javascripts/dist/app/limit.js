define(["jquery"],function(n){var e=function(e){function t(n,e,t){if(e>n){var o=t.substring(0,n);l.val(o)}else a=n-e,a<=0&&(a=0),r.html(a)}function o(){var n=l.val(),e=n.length;t(m,e,n)}var u={dom:null,numDom:null,max:null},i=n.extend({},u,e),l=n(i.dom),r=n(i.numDom),m=i.max,a=0;l.length&&(n(document).on("keyup",i.dom,function(){var e=n(this).val(),o=e.length;t(m,o,e)}),n.browser.msie?l.get(0).onpropertychange=o:l.get(0).addEventListener("input",o,!1))};return window.limit=e});