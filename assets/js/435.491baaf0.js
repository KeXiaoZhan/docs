(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{838:function(t,s,a){"use strict";a.r(s);var n=a(58),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"二叉搜索树的最近公共祖先"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉搜索树的最近公共祖先"}},[t._v("#")]),t._v(" 二叉搜索树的最近公共祖先")]),t._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。")]),t._v(" "),a("p",[t._v("百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”")]),t._v(" "),a("p",[t._v("例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20220605230345444.png",alt:"image-20220605230345444"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20220605230356862.png",alt:"image-20220605230356862"}})]),t._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[t._v("本题是二叉搜索树，二叉搜索树是有序的，那得好好利用一下这个特点。")]),t._v(" "),a("p",[t._v("在有序树里，如果判断一个节点的左子树里有p，右子树里有q呢？")]),t._v(" "),a("p",[t._v("其实只要从上到下遍历的时候，"),a("strong",[t._v("cur节点是数值在[p, q]区间中")]),t._v("则说明该节点cur就是最近公共祖先了。")]),t._v(" "),a("p",[t._v("和"),a("a",{attrs:{href:"https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("二叉树：公共祖先问题"),a("OutboundLink")],1),a("a",{attrs:{href:"https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v("不同，普通二叉树求最近公共祖先需要使用回溯，从底向上来查找，二叉搜索树就不用了，因为搜索树有序（相当于自带方向），那么只要从上向下遍历就可以了。")]),t._v(" "),a("p",[t._v("那么我们可以采用前序遍历（其实这里没有中节点的处理逻辑，遍历顺序无所谓了）。")]),t._v(" "),a("p",[t._v("如图所示：p为节点3，q为节点5")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20220605232900909.png",alt:"image-20220605232900909"}})]),t._v(" "),a("p",[t._v("可以看出直接按照指定的方向，就可以找到节点4，为最近公共祖先，而且不需要遍历整棵树，找到结果直接返回")]),t._v(" "),a("p",[a("strong",[t._v("递归三部曲")])]),t._v(" "),a("ul",[a("li",[t._v("确定递归函数返回值以及参数")])]),t._v(" "),a("p",[t._v("参数就是当前节点，以及两个结点 p、q。")]),t._v(" "),a("p",[t._v("返回值是要返回最近公共祖先，所以是TreeNode *  。")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("TreeNode* traversal(TreeNode* cur, TreeNode* p, TreeNode* q)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("确定终止条件")])]),t._v(" "),a("p",[t._v("遇到空返回就可以了，代码如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("if (cur == NULL) return cur;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("确定单层递归的逻辑")])]),t._v(" "),a("p",[t._v("在遍历二叉搜索树的时候就是"),a("strong",[t._v("寻找区间[p->val, q->val]")]),t._v("（注意这里是左闭又闭）")]),t._v(" "),a("p",[t._v("那么如果 cur->val 大于 p->val，同时 cur->val 大于q->val，那么就应该向左遍历（说明目标区间在左子树上）。")]),t._v(" "),a("p",[a("strong",[t._v("需要注意的是此时不知道p和q谁大，所以两个都要判断")])]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    TreeNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traversal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[a("strong",[t._v("细心的同学会发现，在这里调用递归函数的地方，把递归函数的返回值left，直接return")]),t._v("。")]),t._v(" "),a("p",[t._v("在"),a("a",{attrs:{href:"https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("二叉树：公共祖先问题"),a("OutboundLink")],1),t._v("https://programmercarl.com/0236.二叉树的最近公共祖先.html)中，如果递归函数有返回值，如何区分要搜索一条边，还是搜索整个树。")]),t._v(" "),a("p",[t._v("搜索一条边的写法：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("if (递归函数(root->left)) return ;\nif (递归函数(root->right)) return ;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("搜索整个树写法：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("left = 递归函数(root->left);\nright = 递归函数(root->right);\nleft与right的逻辑处理;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("本题就是标准的搜索一条边的写法，遇到递归函数的返回值，如果不为空，立刻返回。")]),t._v(" "),a("p",[t._v("如果 cur->val 小于 p->val，同时 cur->val 小于 q->val，那么就应该向右遍历（目标区间在右子树）。")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    TreeNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traversal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("剩下的情况，就是cur节点在区间（p->val <=  cur->val && cur->val <= q->val）或者 （q->val <=  cur->val && cur->val <=  p->val）中，那么cur就是最近公共祖先了，直接返回cur。")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("return cur;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lowestCommonAncestor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//递归终止条件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//确定单层递归逻辑")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lowestCommonAncestor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//隐含了if语句，使用了单边搜索的语法")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lowestCommonAncestor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//到这里说明在[p.val,q.val]之间，返回root")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);