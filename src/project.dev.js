window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  HelloWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        popup: cc.Node,
        webView: cc.WebView
      },
      onLoad: function onLoad() {
        this.webView.url = "https://www.baidu.com";
        this.popup.active = false;
        this.gameCanvas = document.getElementsByClassName("gameCanvas")[0];
        this.gameCanvas.style.position = "relative";
      },
      update: function update(dt) {},
      onWebViewFinished: function onWebViewFinished() {},
      onSelectGameBtnClicked: function onSelectGameBtnClicked() {
        this.showGameSelectPopup(!this.popup.active);
      },
      showGameSelectPopup: function showGameSelectPopup(isShow) {
        this.popup.active = isShow;
        this.gameCanvas.style.zIndex = isShow ? 10 : 0;
      },
      onPopupCloseBtnClicked: function onPopupCloseBtnClicked() {
        this.showGameSelectPopup(false);
      },
      onSpadesBtnClicked: function onSpadesBtnClicked() {
        this.onPopupCloseBtnClicked();
        this.webView.url = "https://www.baidu.com";
      },
      onGinRummyBtnClicked: function onGinRummyBtnClicked() {
        this.onPopupCloseBtnClicked();
        this.webView.url = "https://www.cocos.com";
      },
      onPattiBtnClicked: function onPattiBtnClicked() {
        this.onPopupCloseBtnClicked();
        this.webView.url = "https://www.163.com";
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "HelloWorld" ]);