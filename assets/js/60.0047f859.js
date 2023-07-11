(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{463:function(s,n,a){"use strict";a.r(n);var t=a(58),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"尺寸响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尺寸响应"}},[s._v("#")]),s._v(" 尺寸响应")]),s._v(" "),a("h2",{attrs:{id:"问题分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[s._v("#")]),s._v(" 问题分析")]),s._v(" "),a("p",[s._v("下面是尺寸为375x600的设计稿，绿色区域为200px红色为175px宽度")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22b1e27fcf184a55943c1b6950c957ad~tplv-k3u1fbpfcp-zoom-1.image",alt:"image-20200323124619494"}})]),s._v(" "),a("p",[s._v("使用固定像素定义时在iphone6与iphon6 plus中的显示效果并不相同")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1918b0137bc84521a4b353cd85ff6665~tplv-k3u1fbpfcp-zoom-1.image",alt:"image-20200323125400666"}})]),s._v(" "),a("p",[a("strong",[s._v("实例代码")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />\n  </head>\n  <body>\n    <div class="left"></div>\n    <div class="right"></div>\n  </body>\n  <style>\n    div {\n      height: 600px;\n    }\n    .left {\n      width: 200px;\n      background: #76ba65;\n      float: left;\n    }\n    .right {\n      width: 175px;\n      background: #df0f71;\n      float: left;\n    }\n  </style>\n</html>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h2",{attrs:{id:"自动响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动响应"}},[s._v("#")]),s._v(" 自动响应")]),s._v(" "),a("p",[s._v("实际操作中不同设备只能取宽或高一个尺寸为响应处理，一般情况下我们取宽度响应，高度自动处理。小尺寸时高度产生垂直滚动条，这并不影响什么。")]),s._v(" "),a("p",[a("strong",[s._v("计算公式")])]),s._v(" "),a("p",[s._v("使用rem单位来处理响应，因为改变rem单位会影响所有使用rem的元素，这确实非常的方便。")]),s._v(" "),a("ul",[a("li",[s._v("rem是在根元素中定义的font-size")]),s._v(" "),a("li",[s._v("rem用来在多个设备响应处理时使用")]),s._v(" "),a("li",[s._v("html元素也可以使用:root选择器选择")])]),s._v(" "),a("p",[s._v("下面展示的设计稿为375px宽，下面公式表示1px所占的屏幕尺寸宽度，有以下几点需要说明")]),s._v(" "),a("ul",[a("li",[s._v("100vw表示100%视口宽度")]),s._v(" "),a("li",[s._v("因为使用了vw宽度系统会根据不同设备自动计算rem")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(":root {\n\tfont-size: calc(100vw / 375);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("完整代码如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>houdunren.com</title>\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />\n  </head>\n  <body>\n    <div class="left"></div>\n    <div class="right"></div>\n  </body>\n  <style>\n    :root {\n      font-size: calc(100vw / 375);\n    }\n    div {\n      height: 600rem;\n    }\n    .left {\n      width: 200rem;\n      background: #76ba65;\n      float: left;\n    }\n    .right {\n      width: 175px;\n      background: #df0f71;\n      float: left;\n    }\n  </style>\n</html>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("现在使用不同设备时宽度已经自动可以响应设置了")])])}),[],!1,null,null,null);n.default=e.exports}}]);