/**
* GB-respond.js
* @see https://github.com/givebest/GB-html5-respond
* @author givenlovs[at]msn.com
* @(c) 2017
**/
;(function (win) {
  var doc = win.document,
    docEl = doc.documentElement,
    designWidth = 750 / 2,   // 设计稿宽度
    maxWidth = 1280 / 2;   // 最大支持宽度（无限制会导致 Pad 等大屏设备展示内容过少、图像失真等）

  win.addEventListener('resize', function() {
    throttle(refreshRem);
  }, false);

  // @see https://github.com/amfe/lib-flexible/blob/master/src/flexible.js
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      throttle(refreshRem);
    }
  }, false);

  // 初始化
  refreshRem();

  /**
   * 计算字体大小
   * @return {[type]} [description]
   */
  function refreshRem () {
    var width = docEl.getBoundingClientRect().width || docEl.clientWidth,
      fontSize = 100 / designWidth * (width > maxWidth ? maxWidth : width) + 'px';
      docEl.style.fontSize = fontSize;
  }

  /**
   * 节流函数
   * @param  {[type]} method  [description]
   * @param  {[type]} context [description]
   * @return {[type]}         [description]
   */
  function throttle (method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout (function () {
      method.call(context);
    }, 100);
  }
})(window);