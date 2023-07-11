(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{978:function(t,a,s){"use strict";s.r(a);var n=s(58),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"汉明距离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#汉明距离"}},[t._v("#")]),t._v(" 汉明距离")]),t._v(" "),s("h2",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),s("p",[t._v("两个整数之间的"),s("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB",target:"_blank",rel:"noopener noreferrer"}},[t._v("汉明距离"),s("OutboundLink")],1),t._v("指的是这两个数字对应二进制位不同的位置的数目。")]),t._v(" "),s("p",[t._v("给出两个整数 "),s("code",[t._v("x")]),t._v(" 和 "),s("code",[t._v("y")]),t._v("，计算它们之间的汉明距离")]),t._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("两数异或的结果中1的数量进行累加就是汉明距离")]),t._v(" "),s("h2",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("var hammingDistance = function(x, y) {\n    let ans = x ^ y,count = 0;\n    while(ans) {\n        if(ans & 1) count++;\n        ans = ans >> 1;\n    }\n    return count;\n};\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);