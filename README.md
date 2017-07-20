# GB-html5-respond
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgivebest%2FGB-html5-respond.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgivebest%2FGB-html5-respond?ref=badge_shield)

----

## 简介

移动端响应式布局解决方案、用 `JavaScript` 根据屏幕宽度计算 `Root` 字体大小弥补媒体查询断点断层过大问题，元素单位使用 `REM` 即可基于 `Root` 字体大小来改变自身大小。


## 演示

[http://givebest.github.io/gb-respond.html](http://givebest.github.io/GB-respond.html)

## 使用

###  HTML

> 在 Head 引入（CSS前面）

```html	
<head>
  <!-- 省略 -->
  <script src="js/GB-respond.js"></script>
  <link rel="stylesheet" href="css/normalize.css">
</head>
```

### CSS

> 以 375 （设计稿 750 * N） 屏幕宽度为基础，推算出元素相对应的 REM 值，如设计稿字体为：40px，那么换算下来为：40 / 2 / 100 = .2rem

```css

html {
  font-size: 100px;
}

body {
	font-size: .12rem; /* 在 375 屏幕宽相当于 12px */
}

/* 一级容器，包含页面全部元素 */
.wrapper {
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  /* width: 3.75rem; */ 
}
```
> 750（UI稿宽度） / 100（Html font-size） / 2 = 3.75rem    
>  ~~加宽度可解决部分 Android 下 webView 中兼容问题（webView 获取设备宽度小于实际宽度），如：HUAWEI MT7~~ 更新解决文案，详见 [JS](#js)    
>  灵感来源：https://m.taobao.com/#index    

### JS

> Android 设备 WebView 会因设备设置字体（浏览器默认为 `16px`）大小影响，详情： https://github.com/hbxeagle/rem 。

解决方法如下：

```javascript
var doc = window.document,
    docEl = doc.documentElement,
    defaultFontSize = parseFloat(window.getComputedStyle(docEl, null).getPropertyValue('font-size') || 16),  // 获取 WebView 默认字体大小
    width = parseFloat(docEl.getBoundingClientRect().width || docEl.clientWidth),
    fontSize = 100 / designWidth * (width > maxWidth ? maxWidth : width),
    finalFontSize = (defaultFontSize !== 16) ? (fontSize * (16 / defaultFontSize)) : fontSize;  // WebView 默认字体大小不等于 16px 即设备设置改变了默认字体大小，进行换算正确的大小
    docEl.style.fontSize = finalFontSize + 'px';   // 为 Html 设置字体大小
```

## 感谢他们

参考： [https://github.com/amfe/lib-flexible](https://github.com/amfe/lib-flexible)       

 [https://github.com/hbxeagle/rem](https://github.com/hbxeagle/rem) 



## License

[MIT](./LICENSE) © 2017 [givebest](https://github.com/givebest)

 


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgivebest%2FGB-html5-respond.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgivebest%2FGB-html5-respond?ref=badge_large)