define(["jumi","regexp","getPara","vue","weixin"],function(i,e,t,s,n){var o=t.get(),a=localStorage.getItem("token"),o=t.get(),d={addressId:o.address_id,token:a,requestSource:"WAP"};$.ajax({type:"post",url:"/userCenter/setting/getAddressById",dataType:"json",data:d,success:function(t){"0000"==t.code&&new s({el:"body",components:{"my-address":{template:"#addressTemplate",data:function(){return{data:t.data,username:t.data.userName,mobile:t.data.mobile,province:t.data.province,city:t.data.city,address:t.data.address,isUse:t.data.isUse,id:t.data.id,optionProvinces:[],optionCitys:[],isSelectAbled:!0,isabled:!1}},init:function(){var i=this;$.ajax({url:"/h5/javascripts/selectlinkage/area.js",method:"post",dataType:"json",success:function(e){i.optionProvinces=e.province;for(key in i.optionProvinces)if(i.province==i.optionProvinces[key].name)for(m in i.optionProvinces[key].cities.city)i.optionCitys=i.optionProvinces[key].cities.city,i.city==i.optionProvinces[key].cities.city[m]&&(i.city=i.optionProvinces[key].cities.city[m])}})},methods:{changeProvince:function(){for(key in this.optionProvinces)if(this.province==this.optionProvinces[key].name)for(m in this.optionProvinces[key].cities.city)this.optionCitys=this.optionProvinces[key].cities.city,this.city=this.optionProvinces[key].cities.city[0],this.isSelectAbled=!1;this.isAbled()},changeCity:function(){this.isAbled()},toInput:function(){this.isAbled()},isAbled:function(){var i=!e.validate("null",this.username),t=!e.validate("null",this.mobile),s=!e.validate("null",this.province),n=!e.validate("null",this.city),o=!e.validate("null",this.address);i&&t&&s&&n&&o?this.isabled=!1:this.isabled=!0},ok:function(){var t=!e.validate("length","2,8",this.username),s=!e.validate("length","11",this.mobile),n=!e.validate("mobile",this.mobile),d=!e.validate("length","2,50",this.address);if(t)return void i.tips("收件人2-8个字符");if(s)return void i.tips("手机号码长度为11位");if(n)return void i.tips("请输入正确的手机号码");if(d)return void i.tips("地址2-50个字符");var r={userName:this.username,mobile:this.mobile,province:this.province,city:this.city,address:this.address,addressId:this.id,token:a,requestSource:"WAP"};$.ajax({type:"post",url:"/userCenter/setting/updateAddress",dataType:"json",data:r,success:function(i){"0000"==i.code&&(location.href="investCartAddress.html?itemid="+o.itemid+"&gearId="+o.gearId)}})}}}},ready:function(){$("#myloading").remove(),n.setTitle().setDesc().setImg().setUrl().share()}})}})});