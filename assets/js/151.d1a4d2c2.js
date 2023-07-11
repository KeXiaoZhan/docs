(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{556:function(t,v,_){"use strict";_.r(v);var e=_(58),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"基本指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本指令"}},[t._v("#")]),t._v(" 基本指令")]),t._v(" "),_("p",[t._v("git fetch "),_("strong",[t._v("获取远程所有分支")])]),t._v(" "),_("p",[t._v("git branch 查看本地分支")]),t._v(" "),_("p",[t._v("git branch -a查看本地和远程分支")]),t._v(" "),_("p",[t._v("git pull  == git fetch + git merge  去拉远程仓库更新代码")]),t._v(" "),_("p",[t._v("git add添加到暂存区")]),t._v(" "),_("p",[t._v("git commit 添加到本地版本库")]),t._v(" "),_("p",[t._v("git push origin master:master  推送本地master分支到远程的master分支，一般对应分支添加到对应分支，所以master可以省略一个")]),t._v(" "),_("p",[t._v("git switch -c 如果没有这个分支就创建然后切换")]),t._v(" "),_("p",[t._v("git log 查看可回退版本")]),t._v(" "),_("p",[t._v("git reset 回退")]),t._v(" "),_("p",[t._v("git restore 文件名 在"),_("strong",[t._v("添加到暂存区之前")]),t._v("也可以方便的进行某个文件回退")]),t._v(" "),_("p",[_("code",[t._v("git restore --staged<file>")]),t._v("把暂存区文件退出暂存区")]),t._v(" "),_("p",[_("strong",[t._v("扩展：")])]),t._v(" "),_("p",[t._v("git status 可以看哪些文件改动，哪些文件是新增的，哪些文件已经被git add提交了")]),t._v(" "),_("p",[t._v("git diff +文件名 可以查看文件改的内容")]),t._v(" "),_("p",[t._v("git log 查看可回退版本")]),t._v(" "),_("p",[t._v("git show +可回退版本id 查看某次提交内容")]),t._v(" "),_("p",[t._v("git checkout . 撤销所有文件修改")]),t._v(" "),_("p",[t._v("git checkout master 切换到master分支，和上面一样是checkout，但是作用不一样")]),t._v(" "),_("p",[t._v("git merge a分支  会把a分支合并到当前选择的分支")]),t._v(" "),_("h2",{attrs:{id:"合作开发流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#合作开发流程"}},[t._v("#")]),t._v(" 合作开发流程")]),t._v(" "),_("p",[t._v("创建一个测试版本分支")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20221211214110503.png",alt:"image-20221211214110503"}})]),t._v(" "),_("p",[t._v("再创建测试版本某个开发人员的分支")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20221211214126929.png",alt:"image-20221211214126929"}})]),t._v(" "),_("p",[t._v("先切换到自己分支")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20221211214222240.png",alt:"image-20221211214222240"}})]),t._v(" "),_("p",[_("strong",[t._v("然后拉取最新的开发版本：git pull origin dev（开发版本分支）")])]),t._v(" "),_("p",[t._v("然后git add添加到暂存区")]),t._v(" "),_("p",[t._v("再git commit添加记录到版本库")]),t._v(" "),_("p",[t._v("然后再git push到远程自己的分支")]),t._v(" "),_("p",[t._v("然后合并请求到开发版本库")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20221211214254653.png",alt:"image-20221211214254653"}})]),t._v(" "),_("p",[_("strong",[t._v("注意：绝对不要先在本地合并分支添加到master，因为有可能不小心覆盖别人的代码，合并分支最好再远程合并")])]),t._v(" "),_("p",[t._v("如果解决冲突时合并错了，使用git log 查看可回退版本，使用git reset 回退，有多种回退方式")]),t._v(" "),_("p",[t._v("在"),_("strong",[t._v("添加到暂存区之前")]),t._v("也可以方便的进行某个文件回退，使用git restore 文件名")]),t._v(" "),_("p",[t._v("如果文件已经在暂存区，可以使用"),_("code",[t._v("git restore --staged<file>")]),t._v("把add文件变成不add，再执行git restore .还可以回退版本")]),t._v(" "),_("p",[_("strong",[t._v("如果已经commit了的")]),t._v("，也可以取消掉，先git log获取版本编号，然后git reset取消")]),t._v(" "),_("p",[t._v("master和dev分支都别直接动，都在平台上合并，只能动自己分支")]),t._v(" "),_("p",[t._v("github的合并请求就是pull request")]),t._v(" "),_("p",[_("strong",[t._v("罕见情况")])]),t._v(" "),_("p",[t._v("如果当前分支版本写一半了，领到突然说要改回原始状态重新写，之前的先不要了，可以使用git stash把写一半的保留下来，然后去干新的活，之后再回去继续搞")]),t._v(" "),_("p",[t._v("git stash pop 可以把之前暂存的修改重新推出来")]),t._v(" "),_("h2",{attrs:{id:"如果要在本地合并分支到master"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如果要在本地合并分支到master"}},[t._v("#")]),t._v(" 如果要在本地合并分支到master")]),t._v(" "),_("p",[t._v("先git fetch 获取所有远程分支")]),t._v(" "),_("p",[t._v("git checkout x分支 切换到"),_("strong",[t._v("本地")]),t._v("x分支")]),t._v(" "),_("p",[t._v("git pull orgin x分支 把"),_("strong",[t._v("远程")]),t._v("x分支代码拉去下来")]),t._v(" "),_("p",[t._v("git checkout master 切换到"),_("strong",[t._v("本地")]),t._v("master分支")]),t._v(" "),_("p",[t._v("git merge x分支，合并x分支到"),_("strong",[t._v("本地")]),t._v("master分支")]),t._v(" "),_("p",[t._v("如果有冲突，可以在vscode手动解决")]),t._v(" "),_("p",[t._v("git status 查看修改的文件")]),t._v(" "),_("p",[t._v("git add 添加到暂存区")]),t._v(" "),_("p",[t._v('git commit -m "xxxx" 提交记录到版本库')]),t._v(" "),_("p",[t._v("git log 查看git提交信息，可以发现 上面git commit 提交的xxxx记录已经查得到了")]),t._v(" "),_("p",[t._v("最后，git push origin master 修改"),_("strong",[t._v("远程")]),t._v("master分支")])])}),[],!1,null,null,null);v.default=s.exports}}]);