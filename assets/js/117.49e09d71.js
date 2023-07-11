(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{519:function(s,t,n){"use strict";n.r(t);var a=n(58),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"自动排列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动排列"}},[s._v("#")]),s._v(" 自动排列")]),s._v(" "),n("p",[s._v("当栅格无法放置内容时，系统会自动添加栅格用于放置溢出的元素，我们需要使用以下属性控制自动添加栅格的尺寸。")]),s._v(" "),n("h2",{attrs:{id:"属性说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性说明"}},[s._v("#")]),s._v(" 属性说明")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("选项")]),s._v(" "),n("th",[s._v("说明")]),s._v(" "),n("th",[s._v("对象")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("grid-auto-rows")]),s._v(" "),n("td",[s._v("控制自动增加的栅格行的尺寸，grid-auto-flow:row; 为默认")]),s._v(" "),n("td",[s._v("容器")])]),s._v(" "),n("tr",[n("td",[s._v("grid-auto-columns")]),s._v(" "),n("td",[s._v("控制自动增加的栅格列的尺寸，grid-auto-flow: column;")]),s._v(" "),n("td",[s._v("容器")])])])]),s._v(" "),n("h2",{attrs:{id:"自动栅格行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动栅格行"}},[s._v("#")]),s._v(" 自动栅格行")]),s._v(" "),n("p",[s._v("下面定义了2X2的栅格，但有多个元素，系统将自动创建栅格用于放置额外元素。我们使用grid-auto-rows来控制增加栅格的行高。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://doc.houdunren.com/assets/img/image-20201017142201592.6f7e0324.png",alt:"image-20201017142201592"}})]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('&lt;style>\n  main {\n    display: grid;\n    grid-template-rows: repeat(2, 50px);\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: 50px;\n    grid-auto-columns: 200px;\n  }\n  div {\n    background: blueviolet;\n    background-clip: content-box;\n    border: solid 1px #ddd;\n    color: white;\n  }\n&lt;/style>\n&lt;main>\n  &lt;div href="">我的音乐&lt;/div>\n  &lt;div href="">西方音乐&lt;/div>\n  &lt;div href="">北方音乐&lt;/div>\n  &lt;div href="">后盾人&lt;/div>\n  &lt;div href="">向军老师&lt;/div>\n  &lt;div href="">训练营&lt;/div>\n&lt;/main>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"自动行列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动行列"}},[s._v("#")]),s._v(" 自动行列")]),s._v(" "),n("p",[s._v("下面创建了2X2栅格，我们将第2个DIV设置的格栅已经超过了四个栅格，所以系统会自动创建栅格。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://doc.houdunren.com/assets/img/image-20201017142907082.74d40353.png",alt:"image-20201017142907082"}})]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('&lt;style>\n  main {\n    display: grid;\n    grid-template-rows: repeat(2, 50px);\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-columns: 10vw;\n    grid-auto-rows: 10vh;\n  }\n  div {\n    background: blueviolet;\n    background-clip: content-box;\n    border: solid 1px #ddd;\n    color: white;\n  }\n  div:nth-child(2) {\n    grid-area: 5/5/5/5;\n  }\n&lt;/style>\n&lt;main>\n  &lt;div href="">后盾人&lt;/div>\n  &lt;div href="">向军老师&lt;/div>\n&lt;/main>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);