(window.webpackJsonp=window.webpackJsonp||[]).push([[711],{1114:function(t,s,a){"use strict";a.r(s);var n=a(58),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"去掉-pathmatch-产生的警告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去掉-pathmatch-产生的警告"}},[t._v("#")]),t._v(" 去掉 pathMatch 产生的警告")]),t._v(" "),a("h2",{attrs:{id:"需求说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求说明"}},[t._v("#")]),t._v(" 需求说明")]),t._v(" "),a("p",[t._v("在 "),a("a",{attrs:{href:"https://github.com/lanqiao-courses/vue-router/tree/v3.1.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router v3.1.3"),a("OutboundLink")],1),t._v(" 版本代码中存在一个 Bug，当 "),a("code",[t._v("pathMatch")]),t._v(" 为空值时，会产生警告，请修复此问题。")]),t._v(" "),a("h2",{attrs:{id:"问题复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题复现"}},[t._v("#")]),t._v(" 问题复现")]),t._v(" "),a("p",[t._v("在浏览器控制台打开 "),a("code",[t._v("Console")]),t._v(" 选项，效果如下:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/wddzhahaha/images/raw/master/img/e2341ae24208ea3da7aa8b6a9d393403-0",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"修复流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复流程"}},[t._v("#")]),t._v(" 修复流程")]),t._v(" "),a("p",[t._v("打开控制台的 "),a("code",[t._v("Console")]),t._v(" ,查看和测试修复后的效果。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://doc.shiyanlou.com/courses/5036/1777363/e5ff8119d2a15de72beb820e0a5f9df2-0",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" filler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n      regexpCompileCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regexpCompileCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Regexp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathMatch\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// warn(false, `missing param for ${routeMsg}: ${e.message}`)  这里直接注销掉就可以了")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// delete the 0 if it was added")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("h2",{attrs:{id:"考察点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#考察点"}},[t._v("#")]),t._v(" 考察点")]),t._v(" "),a("p",[t._v("有一说一，不明所以，直接注销掉警告就能通过测试，真的是这样吗？")])])}),[],!1,null,null,null);s.default=e.exports}}]);