define(["jumi","vue","autoHeight","regexp","md5","getPara","weixin"],function(t,e,i,o,s,a,n){a.get();new e({el:"body",components:{"my-login":{template:"#loginTemplate",data:function(){return{mobile:"",password:"",isShowHide:!0}},methods:{toShowHide:function(){var t=o.validate("null",this.mobile),e=o.validate("null",this.password),i=!o.validate("mobile",this.mobile),s=!o.validate("length","6,16",this.password);t||e||i||s?this.isShowHide=!0:this.isShowHide=!1},inputMobileBlur:function(){var e=o.validate("null",this.mobile),i=!o.validate("mobile",this.mobile);if(!e){if(i)return void t.tips("手机号码格式不正确！");var s={phone:this.mobile,requestSource:"WAP"};$.ajax({url:"/common/validatePhoneIsExist",type:"post",dataType:"json",data:s,success:function(e){"0000"===e.code?e.data.result||t.tips("该手机号尚未注册，请先注册"):t.tips(e.msg)}}),this.toShowHide()}},inputMobileKeyup:function(){this.toShowHide()},inputPasswordBlur:function(){this.toShowHide()},inputPasswordKeyup:function(){var t=o.validate("null",this.password),e=!o.validate("length","6,16",this.password);t||(e&&(this.password=this.password.substring(0,16)),this.toShowHide())},toLogin:function(){var e={phone:this.mobile,password:s(this.password).toLocaleUpperCase(),requestSource:"WAP"};$.ajax({url:"/login/login",type:"post",data:e,dataType:"json",success:function(e){"0000"===e.code?(localStorage.setItem("token",e.data.token),location.href="/h5/views/main/index.html"):t.tips(e.msg)}})}}}},ready:function(){$("#myloading").remove(),i.setHeight(),document.getElementById("mobile").focus(),n.setTitle().setDesc().setImg().setUrl().share()}})});