(window.webpackJsonp=window.webpackJsonp||[]).push([[1077],{1486:function(t,a,e){"use strict";e.r(a);var _=e(58),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"连等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连等"}},[t._v("#")]),t._v(" 连等")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wddzhahaha/images/raw/master/img/image-20220319143135795.png",alt:"image-20220319143135795"}})]),t._v(" "),e("p",[t._v("let obj = { num1: 117 }")]),t._v(" "),e("blockquote",[e("p",[t._v("​    把obj放在栈里，把 { num1:117} 放在堆里，让obj指向堆里的 { num1:117 }")])]),t._v(" "),e("p",[t._v("​    let res = obj;")]),t._v(" "),e("blockquote",[e("p",[t._v("把res放在栈里，把res也指向堆里的 { num1:117 }")])]),t._v(" "),e("p",[t._v("​    "),e("img",{attrs:{src:"https://gitee.com/wddzhahaha/images/raw/master/img/5CF2B5AF62EAC1AB9B3014ABE1C84DB5",alt:"img"}})]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[t._v("​    obj.child = obj = { num2: 935 };")]),t._v(" "),e("blockquote",[e("p",[t._v("重点：赋值操作先定义变量(从左到右)，再进行赋值（从右到左）")]),t._v(" "),e("p",[t._v("​    定义变量  obj.child，给堆里的{ num1:117 }加一个child属性，得{num1:117，child:undefined}")]),t._v(" "),e("p",[t._v("​    定义变量  obj,之前在栈里的obj")]),t._v(" "),e("p",[t._v("​       "),e("img",{attrs:{src:"https://gitee.com/wddzhahaha/images/raw/master/img/46C7C66D77EFEE3313314553DA6C2A6A",alt:"img"}})]),t._v(" "),e("p",[t._v("赋值  obj = { num2: 935 }，把{ num2: 935 }放在堆里，把栈里的obj指向堆里的{ num2: 935 }")]),t._v(" "),e("p",[t._v("​       "),e("img",{attrs:{src:"https://uploadfiles.nowcoder.com/images/20220121/177279213_1642745692535/B2F6BADA68A69FEEDD49C57C85A61083",alt:"img"}})]),t._v(" "),e("p",[t._v("赋值  obj.child = obj，把堆里的 {num1:117，child:undefined} 的child指向 {num2: 935}")]),t._v(" "),e("p",[t._v("​       "),e("img",{attrs:{src:"https://gitee.com/wddzhahaha/images/raw/master/img/68E4A983A8A9297D35195CE4080916FC",alt:"img"}}),t._v("\n​")]),t._v(" "),e("p",[t._v("从最后一张图可看出此时：")]),t._v(" "),e("p",[t._v("​       obj = { num2: 935 }")]),t._v(" "),e("p",[t._v("​       res = { num1: 117，child：{ num2: 935 } }")])])])}),[],!1,null,null,null);a.default=v.exports}}]);