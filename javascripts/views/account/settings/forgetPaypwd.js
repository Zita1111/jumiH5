define(["jumi", "vue", "isLogin", "isLoginwx", "weixin"], function(
  jumi,
  vue,
  isLogin,
  isLoginwx,
  weixin
) {
  var token = localStorage.getItem("token"); //为了验证用户是否登录
  // console.log(token);
  var parainit = {
    token: token,
    requestSource: "WAP"
  };
  isLogin(function() {
    $.ajax({
      url: "/userCenter/setting/getUserPhone",
      type: "post",
      dataType: "json",
      data: parainit,
      success: function(data) {
        // console.log(data);
        var vm = new vue({
          el: "body",
          components: {
            "my-passwordforget": {
              template: "#passwordForgetTemplate",
              data: function() {
                return {
                  phone: data.data,
                  phone_code: "",
                  isShowHide: false,
                  isShowHideRegister: true,
                  setIntervalID: "",
                  countTime: 60, //验证码时间 ---
                  sliderSuccess: false, //滑动是否通过
                  flagVoice: true, //获取语音验证码是否可点击(控制5s之后才可以再次请求获取语音验证码接口)
                  setIntervalCode: null //验证码开始倒计时---
                };
              },
              methods: {
                toShowHideResiter: function() {
                  var patrn_null = /^\S{0}$/; //非空
                  var patrn_length_fixed = /^\S{4}$/; //固定长度区间
                  var patrn_mobile = /^(13|14|15|16|18|17|19)\d{9}$/; //手机号码
                  var boolPhone =
                    patrn_null.test(this.phone) ||
                    !patrn_mobile.test(this.phone);
                  var boolCode =
                    patrn_null.test(this.phone_code) ||
                    !patrn_length_fixed.test(this.phone_code);

                  if (boolPhone || boolCode) {
                    this.isShowHideRegister = true;
                  } else {
                    this.isShowHideRegister = false;
                  }
                },
                // 验证验证码的正确性
                inputCodeKeyup: function() {
                  var patrn_null = /^\S{0}$/; //非空
                  var patrn_length = /^\S{4}$/; //长度区间

                  if (patrn_null.test(this.phone_code)) {
                    return;
                  }

                  if (!patrn_length.test(this.phone_code)) {
                    this.phone_code = this.phone_code.substring(0, 4);
                  }

                  this.toShowHideResiter();
                },
                getCode: function() {
                  var that = this;
                  $(".getVoicecode").removeAttr("disabled");
                  $(".getVoicecode").removeClass("disabled");
                  // 滑动验证start
                  var nc_token = [
                    "FFFF0N00000000005AD9",
                    new Date().getTime(),
                    Math.random()
                  ].join(":");
                  var nc = NoCaptcha.init({
                    renderTo: "#sliderNc",
                    appkey: "FFFF0N00000000005AD9",
                    scene: "nc_register_h5",
                    token: nc_token,
                    trans: { key1: "code0" },
                    elementID: ["usernameID"],
                    is_Opt: 0,
                    language: "cn",
                    timeout: 10000,
                    retryTimes: 5,
                    errorTimes: 5,
                    inline: false, //弹出二次验证是否为inline方式，默认为false(浮层模式),如果是true的话就是在本页面
                    apimap: {
                      // 'analyze': '//a.com/nocaptcha/analyze.jsonp',
                      // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
                    },
                    bannerHidden: true, //验证通过后，验证码组件是否自动隐藏，默认为 true（这里不用默认的，会占据空间）
                    initHidden: true, //是否默认不渲染，设置为true时，不会自动渲染(false自动渲染)
                    callback: function(data) {
                      // 验证成功之后请求后台接口(前端滑动验证通过时会触发此回调)
                      // window.console && console.log(nc_token);
                      // window.console && console.log(data.csessionid);
                      // window.console && console.log(data.sig);
                      var paramsSlide = {
                        phone: that.phone,
                        scence: "nc_register_h5",
                        sessionId: data.csessionid,
                        sig: data.sig,
                        token: nc_token
                      };
                      $.ajax({
                        url: "/common/authcode/slidValidate",
                        type: "post",
                        datatype: "json",
                        data: paramsSlide,
                        success: function(res) {
                          if (res.code == "0000") {
                            // 验证成功之后验证码开始倒计时
                            jumi.tips("验证码发送成功，请注意查收...");
                            clearInterval(that.setIntervalCode);
                            that.sliderSuccess = true;
                            that.isShowHide = true;
                            that.setIntervalCode = setInterval(function() {
                              that.countTime--;
                              $(".getCode").html(
                                that.countTime + "s后重新获取验证码"
                              );
                              if (that.countTime <= 0) {
                                clearInterval(that.setIntervalCode);
                                that.sliderSuccess = false; //重置滑块状态，未通过（因为可以重新滑动）
                                that.countTime = 60;
                                //获取验证码亮起来
                                $(".getCode").html("重新获取");
                                that.isShowHide = false;
                              }
                            }, 1000);
                          } else {
                            jumi.tips(res.msg);
                          }
                        }
                      });
                    },
                    error: function(s) {}
                  });
                  NoCaptcha.setEnabled(true);
                  nc.reset(); //请务必确保这里调用一次reset()方法

                  NoCaptcha.upLang("cn", {
                    LOADING: "加载中...", //加载
                    SLIDER_LABEL: "请按住滑块，拖动到最右边", //等待滑动
                    CHECK_Y: "验证通过", //通过
                    ERROR_TITLE: "非常抱歉，这出错了...", //拦截
                    CHECK_N: "验证未通过", //准备唤醒二次验证
                    OVERLAY_INFORM:
                      "经检测你当前操作环境存在风险，请输入验证码", //二次验证
                    TIPS_TITLE: "验证码错误，请重新输入" //验证码输错时的提示
                  });
                  nc.show();
                  that.isShowHide = true;
                  //   滑动验证end
                },
                //获取语音验证码
                getVoicecode: function() {
                  var that = this;
                  if (that.flagVoice) {
                    var paraVoice = {
                      phone: that.phone,
                      requestSource: "WAP"
                    };
                    that.flagVoice = false;
                    $.ajax({
                      url: "/common/authcode/voiceCode",
                      type: "get",
                      datatype: "json",
                      data: paraVoice,
                      success: function(res) {
                        if (res.code == "0000") {
                          jumi.tips("语音验证码发送成功，请注意接听来电...");
                        } else {
                          jumi.tips(res.msg);
                        }
                        setTimeout(function() {
                          that.flagVoice = true;
                        }, 5000);
                      }
                    });
                  }
                },
                ok: function() {
                  var paranext = {
                    phone: this.phone,
                    phoneCode: this.phone_code,
                    requestSource: "WAP"
                  };
                  $.ajax({
                    url: "/common/validatePhoneCode",
                    type: "post",
                    dataType: "json",
                    data: paranext,
                    success: function(data) {
                      // console.log(data);
                      if (data.code == "0000") {
                        location.href =
                          "/h5/views/account/settings/passwordResetpay.html?phone=" +
                          paranext.phone;
                      } else {
                        jumi.tips(data.msg);
                      }
                    }
                  });
                }
              }
            }
          },
          ready: function() {
            var that = this;
            // console.log(that);
            $("#myloading").remove();

            //分享
            weixin
              .setTitle()
              .setDesc()
              .setImg()
              .setUrl()
              .share();
          }
        });
      }
    });
  }); //isLogin的结束
  //   微信登陆--该链接后面不带参数
  var url = location.href.split("?code=")[0];
  var locationCodepar = location.href.split("?code=")[1];
  if (locationCodepar) {
    var locationCode = locationCodepar.split("&state=")[0];
    isLoginwx(locationCode, url);
  }
});
