(window.webpackJsonp=window.webpackJsonp||[]).push([[1092],{1494:function(t,e,n){"use strict";n.r(e);var r=n(58),l=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4"}},[t._v("#")]),t._v(" 4")]),t._v(" "),n("p",[t._v("下面哪些语句可以 在JS里判断"),n("strong",[t._v("一个对象")]),t._v("是否为String类型？")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/wddzhahaha/images/raw/master/img/image-20220317235206549.png",alt:"image-20220317235206549"}})]),t._v(" "),n("p",[t._v("题意中说的oStringObject是一个对象，所以typeof oStringObject是object，这是题目狡猾的地方。")]),t._v(" "),n("p",[t._v("看到评论里一大堆 “字符串也是对象”，“在 JS 中，一切都是对象” 的言论，我真的是醉了！"),n("strong",[t._v("JS 没好好学，就不要在这里误人子弟好吗！")])]),t._v(" "),n("ul",[n("li",[t._v("​    JS 中值的类型分为原始值类型和对象类型。"),n("strong",[t._v("原始值类型包括 number, string, boolean, null 和 undefined；对象类型即 object。首先原始值类型它就不是对象")]),t._v("。")]),t._v(" "),n("li",[t._v("​    另外，要"),n("strong",[t._v("注意 'hello' 和 new String('hello') 的区别，前者是字符串字面值，属于原始类型，而后者是对象")]),t._v("。用 typeof 运算符返回的值也是完全不一样的：")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("typeof` `'hello'``; ``// 'string'``typeof` `new` `String(``'hello'``); ``// 'object'\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("ul",[n("li",[t._v("​    之所以很多人分不清字符串字面值和 String 对象，归根结底就是 JS 的语法对你们太过纵容了。当执行 'hello'.length  时，发现可以意料之中的返回 5，你们就觉得 'hello' 就是 String 对象，不然它怎么会有 String 对象的属性。"),n("strong",[t._v("其实，这是由于 JS 在执行到这条语句的时候，内部将 'hello' 包装成了一个 String 对象，执行完后，再把这个对象丢弃了，这种语法叫做 “装箱”")]),t._v("，在其他面向对象语言里也有（如 C#）。不要认为 JS 帮你装箱了，你就可以在写代码的时候不分箱里箱外了！")])])])}),[],!1,null,null,null);e.default=l.exports}}]);