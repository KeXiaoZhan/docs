## 问题

```js
console.log(web);// undefined
var web = "baidu.com";
```
还没声明web,就先去访问了，理论上会报错，但是这里输出undefined

这是因为js在解析代码时，会先把var声明的变量提升到**函数作用域最顶部**，这就是`var的变量提升特性`，
上方代码相当于
```js
var web;
console.log(web);// undefined
web = "baidu.com";
```
再看一个例子,因为false,if代码不执行,为何下面还能访问到web?竟然不报错！
```js
function ke() {
    if (false) { //false,代码不执行,为何下面还能访问到web?竟然不报错！
        var web = "baidu.com";
    }
    console.log(web); //undefined
}
ke();
```
输出也是undefined,不报错，原因也是**变量提升**(提升到函数作用域顶部)，上面代码相当于
```js
function ke() {
    var web;//这就是提升到函数级作用域最顶部
    if (false) { //false,代码不执行,但web已经定义在上方了
        web = "baidu.com";
    }
    console.log(web); //undefined
}
ke();
```
> 小结：变量提升是一件很不好的事情，意味着**变量不先声明就能用了**，后面程序员都尽量不使用var了，改用let和const


## 解决方法 暂时性死区TDZ
TDZ 又称暂时性死区，指**变量在作用域内已经存在**，但必须在`let/const`声明**赋值成功后**才可以使用，**如果提前使用就要报错**。

TDZ可以让程序保持**先声明后使用**的习惯，让程序更稳定。

```js
    console.log(web);//Cannot access 'web' before initialization
    let web = "baidu.com"
```
只有在let声明**赋值成功**后才可以使用变量，所以上方console会报错

再来看一个复杂点的案例
```js
    hd = "houdunren";
    function run() {
        console.log(hd);//Cannot access 'hd' before initialization
        let hd = "hdcms";
    }
    run();
```
可能会有同学有疑惑，“run里的hd不能提前用，那不是还有run外面一个hd吗？怎么会报错？”

很简单，因为暂时性死区的性质: **变量在作用域内已经存在**(画重点)，hd说:"我存在啊，你不用去找外面的了",不过你**不能在hd赋值完成前**提前访问他，**不然就报错了**


说了那么多次赋值后才能访问了，可能就会有小机灵鬼来找茬了，如果let声明的hd没被赋值呢？

不要慌，看下方代码
```js
    function run() {
        let hd;
        console.log(hd);//undefined
    }
    run();
```
说明什么？说明程序员就算是不给let声明的变量赋值，人家底层代码也是会先帮你赋上一个undefined，暂时性死区的总结仍然成立，**你只有等到变量赋值成功后才能使用它**。

## 暂时性死区扩展
我们知道let 和 const 是声明的变量作用域为块级作用域，会产生暂时性死区TDZ

还有一种变量也会产生暂时性死区，它就是**函数的形参**

直接给出例子,

下面代码中，b形成暂时性死区，**b赋值前**，a不能提前访问b，报错
```js
function hd(a = b, b = 3) {}
hd(); //Cannot access 'b' before initialization
```
因为a已经赋值，所以b可以使用a变量，下面代码访问正常
```js
function hd(a = 2, b = a) {}
hd(); 
```

> 结束语: 本文所用代码示例摘自后盾人大佬的博客, 我在其基础上加了很多注释方便理解。后盾人大佬博客:https://doc.houdunren.com/
