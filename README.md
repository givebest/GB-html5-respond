# GB-html5-respond
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

```




## 感谢他们

参考： [https://github.com/amfe/lib-flexible](https://github.com/amfe/lib-flexible)       



## License

[MIT](./LICENSE) © 2017 [givebest](https://github.com/givebest)

 
