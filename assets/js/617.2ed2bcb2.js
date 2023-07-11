(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{1021:function(r,t,e){"use strict";e.r(t);var a=e(58),n=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"背包问题总结篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背包问题总结篇"}},[r._v("#")]),r._v(" 背包问题总结篇")]),r._v(" "),e("p",[r._v("关于这几种常见的背包，其关系如下：")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/20210117171307407.png",alt:"416.分割等和子集1"}})]),r._v(" "),e("p",[r._v("通过这个图，可以很清晰分清这几种常见背包之间的关系。")]),r._v(" "),e("p",[r._v("在讲解背包问题的时候，我们都是按照如下五部来逐步分析，相信大家也体会到，把这五部都搞透了，算是对动规来理解深入了。")]),r._v(" "),e("ol",[e("li",[r._v("确定dp数组（dp table）以及下标的含义")]),r._v(" "),e("li",[r._v("确定递推公式")]),r._v(" "),e("li",[r._v("dp数组如何初始化")]),r._v(" "),e("li",[r._v("确定遍历顺序")]),r._v(" "),e("li",[r._v("举例推导dp数组")])]),r._v(" "),e("p",[e("strong",[r._v("其实这五部里哪一步都很关键，但确定递推公式和确定遍历顺序都具有规律性和代表性，所以下面我从这两点来对背包问题做一做总结")]),r._v("。")]),r._v(" "),e("h2",{attrs:{id:"背包递推公式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背包递推公式"}},[r._v("#")]),r._v(" 背包递推公式")]),r._v(" "),e("p",[r._v("问能否能装满背包（或者最多装多少）：dp[j] = max(dp[j], dp[j - nums[i]] + nums[i]); ，对应题目如下：")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/0416.%E5%88%86%E5%89%B2%E7%AD%89%E5%92%8C%E5%AD%90%E9%9B%86.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：416.分割等和子集"),e("OutboundLink")],1),e("a",{attrs:{href:"https://programmercarl.com/0416.%E5%88%86%E5%89%B2%E7%AD%89%E5%92%8C%E5%AD%90%E9%9B%86.html",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1)]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/1049.%E6%9C%80%E5%90%8E%E4%B8%80%E5%9D%97%E7%9F%B3%E5%A4%B4%E7%9A%84%E9%87%8D%E9%87%8FII.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：1049.最后一块石头的重量 II"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("问装满背包有几种方法：dp[j] += dp[j - nums[i]] ，对应题目如下：")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/0494.%E7%9B%AE%E6%A0%87%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：494.目标和"),e("OutboundLink")],1),e("a",{attrs:{href:"https://programmercarl.com/0494.%E7%9B%AE%E6%A0%87%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1)]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：518. 零钱兑换 II"),e("OutboundLink")],1)]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/0377.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E2%85%A3.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：377.组合总和Ⅳ"),e("OutboundLink")],1)]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85%E7%89%88%E6%9C%AC.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：70. 爬楼梯进阶版（完全背包）"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("问背包装满最大价值：dp[j] = max(dp[j], dp[j - weight[i]] + value[i]); ，对应题目如下：")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/0474.%E4%B8%80%E5%92%8C%E9%9B%B6.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：474.一和零"),e("OutboundLink")],1),e("a",{attrs:{href:"https://programmercarl.com/0474.%E4%B8%80%E5%92%8C%E9%9B%B6.html",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("问装满背包所有物品的最小个数：dp[j] =  min(dp[j - coins[i]] + 1, dp[j]); ，对应题目如下：")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/0322.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：322.零钱兑换"),e("OutboundLink")],1)]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/0279.%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：279.完全平方数"),e("OutboundLink")],1)]),r._v(" "),e("h2",{attrs:{id:"遍历顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遍历顺序"}},[r._v("#")]),r._v(" 遍历顺序")]),r._v(" "),e("h3",{attrs:{id:"_01背包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01背包"}},[r._v("#")]),r._v(" 01背包")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-1.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：关于01背包问题，你该了解这些！"),e("OutboundLink")],1),e("a",{attrs:{href:"https://programmercarl.com/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-1.html",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1),r._v("中我们讲解二维dp数组01背包先遍历物品还是先遍历背包都是可以的，且第二层for循环是从小到大遍历。")]),r._v(" "),e("p",[r._v("和"),e("a",{attrs:{href:"https://programmercarl.com/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-2.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：关于01背包问题，你该了解这些！（滚动数组）"),e("OutboundLink")],1),r._v("中，我们讲解一维dp数组01背包只能先遍历物品再遍历背包容量，且第二层for循环是从大到小遍历。")]),r._v(" "),e("p",[e("strong",[r._v("一维dp数组的背包在遍历顺序上和二维dp数组实现的01背包其实是有很大差异的，大家需要注意！")])]),r._v(" "),e("h3",{attrs:{id:"完全背包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完全背包"}},[r._v("#")]),r._v(" 完全背包")]),r._v(" "),e("p",[r._v("说完01背包，再看看完全背包。")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：关于完全背包，你该了解这些！"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("背包问题理论基础完全背包.html)中，讲解了纯完全背包的一维dp数组实现，先遍历物品还是先遍历背包都是可以的，且第二层for循环是从小到大遍历。")]),r._v(" "),e("p",[r._v("但是仅仅是纯完全背包的遍历顺序是这样的，题目稍有变化，两个for循环的先后顺序就不一样了。")]),r._v(" "),e("p",[e("strong",[r._v("如果求组合数就是外层for循环遍历物品，内层for遍历背包")]),r._v("。")]),r._v(" "),e("p",[e("strong",[r._v("如果求排列数就是外层for遍历背包，内层for循环遍历物品")]),r._v("。")]),r._v(" "),e("p",[r._v("相关题目如下：")]),r._v(" "),e("ul",[e("li",[r._v("求组合数："),e("a",{attrs:{href:"https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：518.零钱兑换II"),e("OutboundLink")],1)])]),r._v(" "),e("p",[r._v("求排列数："),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/Iixw0nahJWQgbqVNk8k6gA",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：377. 组合总和 Ⅳ"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85%E7%89%88%E6%9C%AC.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：70. 爬楼梯进阶版（完全背包）"),e("OutboundLink")],1),e("a",{attrs:{href:"https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85%E7%89%88%E6%9C%AC.html",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("如果求最小数，那么两层for循环的先后顺序就无所谓了，相关题目如下：")]),r._v(" "),e("ul",[e("li",[r._v("求最小数："),e("a",{attrs:{href:"https://programmercarl.com/0322.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：322. 零钱兑换"),e("OutboundLink")],1)])]),r._v(" "),e("p",[r._v("、"),e("a",{attrs:{href:"https://programmercarl.com/0279.%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("动态规划：279.完全平方数"),e("OutboundLink")],1),e("a",{attrs:{href:"https://programmercarl.com/0279.%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0.html",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1)]),r._v(" "),e("p",[e("strong",[r._v("对于背包问题，其实递推公式算是容易的，难是难在遍历顺序上，如果把遍历顺序搞透，才算是真正理解了")]),r._v("。")]),r._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),e("p",[e("strong",[r._v("这篇背包问题总结篇是对背包问题的高度概括，讲最关键的两部：递推公式和遍历顺序，结合力扣上的题目全都抽象出来了")]),r._v("。")]),r._v(" "),e("p",[e("strong",[r._v("而且每一个点，我都给出了对应的力扣题目")]),r._v("。")]),r._v(" "),e("p",[r._v("如果把我本篇总结出来的内容都掌握的话，可以说对背包问题理解的就很深刻了，用来对付面试中的背包问题绰绰有余！")]),r._v(" "),e("p",[r._v("背包问题总结：")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%981.jpeg",alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);