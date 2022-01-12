## 数据绑定渲染
### 双大括号语法
`{{表达式}}`

- 用户获取数据
- 可以使用js表达式

### 一次性插值
`v-once`

实现一次性插值，当数据改变时，插值处的内容不会更新
```html
<span v-once>{{message}}</span>
```
### 输出HTML指令
`v-html='xxxx'`
```html
<span v-html="contentHtml"></span>

data: {
    message: 'haha',
    number: 1,
    //contentHtml: '<span style="color:red">红色字体内容</span>'
    contentHtml: '<span style="color:red">红色字体内容><script>alert("hello vue")<\/script></span>'
}
```
### 元素绑定指令
`v-bind:元素属性名='xxxx`

缩写`:元素的属性名='xxxx`

将数据动态绑定到指定元素上
```html
<img v-bind:src="imgUrl" alt="VueLogo">
data: {
    imgUrl: 'https://cn.vuejs.org/images/logo.png'
}
```

`v-model`
双向绑定
### 事件绑定指令
`v-on:事件名称="事件处理函数名"`

缩写`@事件名称="事件处理函数名`

用于监听DOM事件
```html
<button v-on:click="add">点击+1</button>

methods: { //指定事件处理方法, 在模板页面中通过 v-on:事件名 来调用
    add: function () { //key为方法名
        console.log('add被调用')
    }
}
```
#### 事件修饰符
`@click.stop="doThis"`

.stop 阻止单击事件继续传播 event.stopPropagation()

.prevent 阻止事件默认行为 event.preventDefault()

.once 点击事件将只会触发一次

#### 按键修饰符
格式： `v-on:keyup.按键名` 或 `@keyup.按键名`

常用按键名：

.enter

.tab

.delete (捕获“删除”和“退格”键)

.esc

.space

.up

.down

.left

.right

`<input @keyup.enter="keyEnter">`
进入输入框按回车时调用keyEnter
## 计算属性与监听器
### 计算属性
`computed`

计算属性是一个data元素，但它使用起来却像是一个函数

计算属性有缓存 ，只有当计算属性体内的属性值被更改之后才会被调用，不然不会被调用

计算属性默认情况下：只有getter函数，而没有setter函数，所以只支持单向

如果你要进行双向，则需要自定义setter函数
```html
<div id="app">
    数学：<input type="text" v-model="mathScore">
    英语：<input type="text" v-model="englishScore"><br>
    <!-- 绑定计算属性后面不加上小括号 -->
    总得分（计算属性-单向绑定）：<input type="text" v-model="sumScore1"><br>
    总得分（计算属性-双向绑定）：<input type="text" v-model="sumScore2">
</div>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            mathScore: 80,
            englishScore: 90,
        },
        computed: { //定义计算属性选项
            //这个是单向绑定，默认只有getter方法
            sumScore1: function () { //计算属性有缓存，如果计算属性体内的属性值没有发生改变，则不会重新计算，只有发生改变 的时候才会重新计算
                console.log('sumScore1计算属性被调用')
                return (this.mathScore-0) + (this.englishScore-0)
            },

            sumScore2: { //有了setter和getter之后就可以进行双向绑定
                //获取数据
                get: function() {
                    console.log('sumScore2.get被调用')
                    return (this.mathScore-0) + (this.englishScore-0)
                },
                //设置数据， 当 sumScore2 计算属性更新之后 ，则会调用set方法
                set: function(newValue) { // newVulue 是 sumScore2 更新之后的新值
                    console.log('sumScore2.set被调用')
                    var avgScore = newValue / 2
                    this.mathScore = avgScore
                    this.englishScore = avgScore
                }
            }
        }
    })
</script>
```
### 监听器
当属性数据发生变化时,对应属性的回调函数会自动调用, 在函数内部进行计算

通过 `watch` 选项 或者 vm 实例的 `$watch()` 来监听指定的属性
```html
<div id="app">
    数学：<input type="text" v-model="mathScore">
    英语：<input type="text" v-model="englishScore"><br>
    <!-- 通过 watch 选项 监听数学分数， 当数学更新后回调函数中重新计算总分sumScore3 -->
     总得分（监听器）: <input type="text" v-model="sumScore3">
</div>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            mathScore: 80,
            englishScore: 90,
            sumScore3: 0 // 通过监听器，计算出来的总得分
        },
        //监听器，
        watch: {
            //需求：通过 watch 选项 监听数学分数， 当数学更新后回调函数中重新计算总分sumScore3
            mathScore: function(newValue, oldValue) {
                console.log('watch监听器,监听到了数学分数已经更新')
                //  newValue 是更新后的值，oldValue更新之前的值
                this.sumScore3 = (newValue-0) + (this.englishScore-0)
            }
        },
    })
     //监听器方式2: 通过 vm 实例进行调用
    //第1个参数是被监听 的属性名， 第2个是回调函数 
    vm.$watch('englishScore', function(newValue) {
        //newValue就是更新之后的英语分数
        this.sumScore3 = (newValue-0) + (this.mathScore-0)
    })
</script>
```

## class与style绑定v-bind
`v-bind:class='表达式'` 或 `:class='表达式'`

class 的表达式可以为：

字符串 `:class="activeClass"`

对象 `:class="{active: isActive, error: hasError}"`

数组 `:class="['active', 'error']"` 注意要加上单引号,不然是获取data中的值

`v-bind:style='表达式'` 或 `:style='表达式'`

style 的表达式一般为对象

`:style="{color: activeColor, fontSize: fontSize + 'px'}"`

注意：对象中的value值 activeColor 和 fontSize 是data中的属性
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .active {
            color: green; 
        }
        .delete {
            background: red;
        }
        .error {
            font-size: 35px;
        }
    </style>
</head>
<body>
    <div id="app">
        <h3>Class绑定，v-bind:class 或 :class </h3>
        <!-- <p class="active">字符串表达式</p> -->
        <p v-bind:class="activeClass">字符串表达式</p>
        <!-- key值是样式 名，value值是data中绑定的属性
        当isDelete为true的时候，delete就会进行渲染
        -->
        <p :class="{delete: isDelete, error: hasError}">对象表达式</p>

        <p :class="['active', 'error']">数组表达式</p>

        <h3>Style绑定，v-bind:style 或 :style</h3>
        <p :style="{color: activeColor, fontSize: fontSize + 'px'}">Style绑定</p>
        
    </div>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                activeClass: 'active',
                isDelete: false,
                hasError: true,
                activeColor: 'red',
                fontSize: 100
            }
        })
    </script>
</body>
</html>
```

## 条件渲染 v-if

`v-if `是否渲染当前元素

`v-else`

`v-else-if`

`v-show `与 `v-if `类似，只是元素始终会被渲染并保留在 DOM 中,只是简单切换元素的 CSS 属性 display 来显示或隐藏

## 列表渲染指令 v-for
`<div v-for="(item, index) in items" :key="item.id"></div>`
## 表单数据双向绑定v-model
v-model 指令用于表单数据双向绑定，针对以下类型：

- text 文本

- textarea 多行文本

- radio 单选按钮

- checkbox 复选框

- select 下拉框
```html
<body>
    <div id="demo">
            <!-- @submit.prevent 阻止事件的默认行为，当前阻止的是action行为 -->
        <form action="#" @submit.prevent="submitForm">
            姓名(文本)：<input type="text" v-model="name">
            <br><br>

            性别(单选按钮)：
                <input name="sex" type="radio" value="1" v-model="sex"/>男
                <input name="sex" type="radio" value="0" v-model="sex"/>女
            <br><br>

            技能(多选框)：
                <input type="checkbox" name="skills" value="java" v-model="skills">Java开发
                <input type="checkbox" name="skills" value="vue" v-model="skills">Vue.js开发
                <input type="checkbox" name="skills" value="python" v-model="skills">Python开发
            <br><br>

            城市(下拉框)：
            <select name="citys" v-model="city">
                <option v-for="c in citys" :value="c.code">
                    {{c.name}}
                </option>
            </select>
            <br><br>

            说明(多行文本)：<textarea cols="30" rows="5" v-model="desc"></textarea>
            <br><br>
            <button type="submit" >提交</button>
        </form>
    </div>

    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#demo',
            data: {
                name: '',
                sex: '1',   //默认选中的是 男
                skills: ['vue', 'python'], //默认选中 Vue.js开发 、Python开发
                citys: [
                    {code: 'bj', name: '北京'},
                    {code: 'sh', name: '上海'},
                    {code: 'gz', name: '广州'}
                ],
                city: 'sh', // 默认选中的城市：上海
                desc: ''
                },
                methods: {
                    submitForm: function () { //处理提交表单
                        //发送ajax异步处理
                        alert(this.name + ', ' + this.sex + ', ' + this.skills +  ', ' + this.city + ', ' + this.desc)
                    }
                }
            })
    </script>
```
## 过渡&动画
元素在显示和隐藏时，实现过滤或者动画的效果。常用的过渡和动画都是使用 CSS 来实现的

- 在 CSS 中操作 trasition （过滤 ）或 animation （动画）达到不同效果

- vue为目标元素添加一个父元素 `<trasition name='xxx'>` , 让父元素通过自动应用 class 类名来达到效果
过渡与动画时，会为对应元素动态添加的相关 class 类名：

1. xxx-enter ：定义显示前的效果。

2. xxx-enter-active ：定义显示过程的效果。

3. xxx-enter-to : 定义显示后的效果。

4. xxx-leave : 定义隐藏前的效果。

5. xxx-leave-active ：定义隐藏过程的效果。

6. xxx-leave-to :定义隐藏后的效果。

![图片.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e9e0fb2552b4353bd8ced7829484a0e~tplv-k3u1fbpfcp-watermark.image?)

**示例代码**
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 显示或隐藏的过渡效果 */
        .bd-enter-active, .bd-leave-active {
            transition: opacity 1s;  /* 过渡，渐变效果持续时长1s */
        }
        /* 显示前或隐藏后的效果 */
        .bd-enter, .bd-leave-to {
            opacity: 0; /* 都是隐藏效果 */
        }
        /* 可以针对显示和隐藏指定不同的效果 */
        /* 显示过渡效果 1秒 */
        .bai-enter-active {
            transition: all 1s; /* all 所有效果，持续1s */
        }
        /* 隐藏过渡效果 5秒 */
        .bai-leave-active {
            transition: all 5s; /* all 所有效果，持续5s */
        }
        /* 显示前或隐藏后的效果 */
        .bai-enter, .bai-leave-to {
            opacity: 0;
            transform: translateX(10px); /* 水平方向 移动 10px */
        }
    </style>
</head>
<body>
    <div id="app1">
        <button @click="show = !show">渐变过渡</button>
        <transition name="bd">
            <p v-show="show">baidu</p>
        </transition>
    </div>
    <div id="app2">
        <button @click="show = !show">渐变平滑过渡</button>
        <transition name="bai">
            <p v-show="show">baidu</p>
        </transition>
    </div>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#app1',
            data: {
                show: true
            }
        })
        new Vue({
            el: '#app2',
            data: {
                show: true
            }
        })
    </script>
</body>
</html>
```

## 内置指令总结
`v-html` 内容按普通 HTML 插入，可防止 XSS 攻击

`v-show` 根据表达式的真假值，切换元素的 display CSS 属性来显示隐藏元素

`v-if` 根据表达式的真假值，来渲染元素

`v-else` 前面必须有 v-if 或 v-else-if

`v-else-if` 前面必须有 v-if 或 v-else-if

`v-for` 遍历的数组或对象

`v-on` 绑定事件监听器

`v-bind` 用于绑定元素属性

`v-model` 在表单控件或者组件上创建双向绑定

`v-once` 一次性插值，当后面数据更新后视图数据不会更新

`v-pre` 可以用来显示原始插入值标签 {{}},就是让双大括号语法失效，直接显示{{}} ,并跳过这个元素和它的子元素的编译过程。

`v-text` 等价于 {{}} 用于显示内容，但区别在于: {{}} 会造成闪烁问题， v-text 不会闪烁,如果还想用 {{}} 又不想有闪烁问题，则使用 v-cloak 来处理

`v-cloak` 如果想用 {{}} 又不想有闪烁问题，则使用 v-cloak 来处理 

添加一个属性选择器 `[v-cloak]` 的CSS 隐藏样式： `[v-cloak] {display: none;}`

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 将带有 v-clock 属性的标签隐藏 */
        [v-clock] {
            display: none
        }
    </style>
</head>
<body>
    <div id="app" v-clock>
        <!-- v-pre
        1. 用于显示双大括号{{}}
        2. 跳过这个元素和它的子元素的编译过程，这样可以提高性能。 -->
        <span v-pre>{{你好}}</span>
        <h3>{{message}}</h3>
        <h3 v-text="message"></h3>
    </div>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                message: 'hello mxg.....'
            }
        })
    </script>
</body>

```

## 自定义指令
除了内置指令外，Vue 也允许注册自定义指令。有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候使用自定义指令更为方便。

**注意**：注册时，指令名不要带 v-

和js行为有关的操作，最好在inserted中执行，和样式相关的操作都可在bind中执行
### 注册全局指令
```js
// 指令名不要带 v-
Vue.directive('指令名', {

    bind: function (el) {
    
    },
    // el 代表使用了此指令的那个 DOM 元素
    // binding 可获取使用了此指令的绑定值 等
    inserted: function (el, binding) {
        // 逻辑代码
    }
})
```
### 注册局部指令
```js
directives : {
    '指令名' : { // 指令名不要带 v-
        inserted (el, binding) {
        // 逻辑代码
        }
    }
}
```
## 过滤器
过滤器对将要显示的文本，先进行特定格式化处理，然后再进行显示

**注意**：过滤器并没有改变原本的数据, 只是产生新的对应的数据

全局过滤器
```js
Vue.fifilter(过滤器名称, function (value1[,value2,...] ) {
    // 数据处理逻辑
})
```

局部过滤器
```js
new Vue({
    fifilters: {
        过滤器名称: function (value1[,value2,...] ) {
        // 数据处理逻辑
        }
    }
})
```

过滤器可以用在两个地方：双花括号 {{}} 和 v-bind 表达式
```html
<!-- 在双花括号中 -->
<div>{{数据属性名称 | 过滤器名称}}</div> 
<div>{{数据属性名称 | 过滤器名称(参数值)}}</div> 
<!-- 在 `v-bind` 中 --> 
<div v-bind:id="数据属性名称 | 过滤器名称"></div> 
<div v-bind:id="数据属性名称 | 过滤器名称(参数值)"></div>
```
```html
<body>
    <div id="app">
        <h3>测试过滤器单个参数</h3>
        <!-- 原始属性名|过滤器 -->
        <p>{{content | contentFilter}}</p>
        <input type="text" :value="content | contentFilter">

        <h3>测试过滤器多个参数</h3>
        <p>{{javaScore | add(vueScore, pythonScore)}}</p>
        <input type="text" :value="javaScore | add(vueScore, pythonScore)">
    </div>
    <script src="node_modules/vue/dist/vue.js"></script>
    <script>

        /*全局过滤器*/
        /* Vue.filter('contentFilter', function (value) {
            if(!value) {
                return ''
            }
            return value.toString().toUpperCase().replace('TMD', '***').replace('SB', '***')
        }) */

        new Vue({
            el: '#app',
            data: {
                content: '小伙子，tmd就是个SB',
                javaScore: 90,
                vueScore: 99,
                pythonScore: 89
            },

            filters: { //定义局部 过滤器
                contentFilter (value) { // contentFilter 过滤名, value
                    if(!value) {
                        return ''
                    }
                    return value.toString().toUpperCase().replace('TMD', '***').replace('SB', '***')
                },
                add (num1, num2, num3) {// add 过滤名， num1 其实就是引用时 | 左边的那个参数
                    return num1 + num2 + num3
                }
            }
        })
    </script>
</body>
</html>
```
## 插件
1. 插件通常会为 Vue 添加全局功能，一般是添加全局方法/全局指令/过滤器等

2. Vue 插件有一个公开方法 install ，通过 install 方法给 Vue 添加全局功能

3. 通过全局方法 Vue.use() 使用插件，它需要在你调用 new Vue() 启动应用之前完成

**定义插件**
```js
(function() {
    
    // 声明 MyPlugin 插件对象
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
          alert('MyPlugin.myGlobalMethod全局方法调用了')
        }
      
        // 2. 添加全局指令
        Vue.directive('my-directive', {
          inserted (el, binding) {
            el.innerHTML = "MyPlugin.my-directive指令被调用了" + binding.value
          }
        })
            
        // 3. 添加实例方法
        Vue.prototype.$myMethod = function (value) {
            alert('Vue 实例方法myMethod被调用了:' + value)
        }
      }

      // 将插件添加到 window 对象
      window.MyPlugin = MyPlugin
})()
```
**使用插件**
```html
<body>
    <div id="app">
        <span v-my-directive="content"></span>
    </div>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <!-- 要引入在vue.js下面 -->
    <script src="./js/plugins.js"></script>
    <script>

        // 1. 引入插件MyPlugin，其实就是安装 MyPlugin 插件
        Vue.use(MyPlugin)

        var vm = new Vue({
            el: '#app',
            data: {
                content: 'hello'
            }
        })
        // 调用插件中的 实例方法 ，注意是vm调用，不是Vue
        // 注意，不要少了$符号
        vm.$myMethod('baidu')

        // 调用全局方法，注意是Vue进行调用，不是vm
        Vue.myGlobalMethod()
    </script>
</body>
</html>
```

## 组件

**全局注册**

全局注册之后，可以在任何新创建的 Vue 实例 (new Vue) 的模板中使用

简单格式：
```js
Vue.component('组件名',{
    template: '定义组件模板'，
    data: function(){ //data 选项在组件中必须是一个函数
    return {}
    }
    //其他选项：methods
})
```
组件名：

可使用驼峰(camelCase)或者横线分隔(kebab-case)命名方式

但 DOM 中只能使用横线分隔方式进行引用组件

官方强烈推荐组件名字母全小写且必须包含一个连字符

template：定义组件的视图模板

data ：在组件中必须是一个函数

**局部注册**
```js
1. JS 对象来定义组件:
var ComponentA = { data: function(){}，template: '组件模板A'}
var ComponentA = { data: function(){}，template: '组件模板A'}
2. 在Vue实例中的 components 选项中引用组件：
new Vue({
    el: '#app',
    data: {},
    components: { // 组件选项
        'component-a': ComponentA // key：组件名，value: 引用的组件对象
        'component-b': ComponentB
    }
})
```

**全局与局部注册示例**
```html
<body>
    <div id="app">
        <!-- 引用组件时，组件名必须采用横线分隔符 -->
        <component-a></component-a>
        <component-a></component-a>
        <component-b></component-b>
    </div>

    <div id="app2">
        <component-a></component-a>
    </div>
    <script src="node_modules/vue/dist/vue.js"></script>
    <script>
        //全局注册组件
        /*
        组件名：
            1. 驼峰、横线分隔符命名方式
            2. 使用组件时，必须采用横线分隔符的方式进行引用

        组件可以理解为就是特殊的Vue实例 ， 不需要手动的实例化而已，它用于管理自已的模板
        */
        Vue.component('component-a', {
            // template选项指定组件的模板代码
            template: '<div><h1>头部组件---{{ name }}</h1></div>',
            data: function () { // 在组件中，data选项必须 是一个函数  
                return {
                    name: '全局组件'
                }
            }
        })

        // 定义局部 组件对象 
        const ComponentB = {
            template: '<div>这是 {{ name }}</div>',
            data: function () {
                return {
                    name: '局部组件'
                }
            }
        }

        new Vue({
            el: '#app',
            // 组件选项
            components: { 
                // key: value   key 组件名，value 就是组件对象
                'component-b': ComponentB
            }
        })

        new Vue({
            el: '#app2'
        }) 
    </script>
</body>
```
## 父子组件间通信
### 组件间通信方式
1. props 父组件向子组件传递数据

2. $emit 自定义事件

3. slot 插槽分发内容
### props向子组件传递数据
1. props 只用于父组件向子组件传递数据

2. 所有标签属性都会成为组件对象的属性, 模板页面可以直接引用
**声明组件对象中定义 props**

> 在子组件中定义`props`，接收父组件的数据

1.  在声明组件对象中使用`prop`选项指定

```
    const Mycomponent = {
        template: '<div></div>',
        props: 此处值由以下3种方式,
        components: {
            子组件
        }
    }
```

-   方式1: 指定传递属性名，注意是数组形式

```
props: ['id', 'name', 'salary', 'isPublished', 'commentIds', 'author', 'getEmp']
```

-   方式2: 指定传递属性名和数据类型，注意是`对象形式`

```
props: {
    id: Number,
    name: String,
    salary: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    getEmp: Function
}
```

-   方式3: 指定属性名、数据类型、必要性、默认值

```
props: {
    type: String,
    required: true,
    default: 'mxg'
}
```
**引用组件时动态赋值**

> 在父组件中使用

在引用组件时，通过v-bind动态赋值

```html
<my-component v-bind:id="2" :name="meng" :salary="9999" :is-published="true" :comment-ids="[1, 2]" :author="{name: 'alan'}" :get-emp="getEmp">
</my-component>
```
### 自定义事件向父组件传递
1. 自定义事件只用于子组件向父组件发送消息(数据)

2. 隔代组件或兄弟组件间通信此种方式不合适
**绑定自定义事件**

在父组件中定义事件监听函数，并引用子组件标签上 v-on 绑定事件监听。
```html
// 通过 v-on 绑定
// @自定义事件名=事件监听函数
// 在子组件中触发 delete_hobby 事件来调用 deleteHobby 函数

<dashboard @delete_hobby="deleteHobby"></dashboard>
```
**触发监听事件函数执行**

在子组件中触发父组件的监听事件函数调用
```js
// 子组件触发事件函数调用
// this.$emit(自定义事件名, data)
//index是传给父组件方法deleteHobby的参数
this.$emit('delete_hobby', index)
```
### slot 插槽分发内容
作用: 主要用于父组件向子组件传递 标签+数据 , （而上面prop和自定事件只是传递数据）

**子组件定义插槽**

在子组件中定义插槽, 当父组件向指定插槽传递标签数据后, 插槽处就被渲染，否则插槽处不会被渲染
```html
<div>
    <!-- name属性值指定唯一插槽名，父组件通过此名指定标签数据-->
    <slot name="aaa">不确定的标签结构 1</slot>
    <div>组件确定的标签结构</div>
    <slot name="bbb">不确定的标签结构 2</slot>
</div>
```
**父组件传递标签数据**
```html
<child>
    <!--slot属性值对应子组件中的插槽的name属性值-->
    <div slot="aaa">向 name=aaa 的插槽处插入此标签数据</div>
    <div slot="bbb">向 name=bbb 的插槽处插入此标签数据</div>
</child>
```
## 非父子组件间通信PubSubJS
Vue.js 可通过 PubSubJS 库来实现非父子组件之间的通信 ，使用 PubSubJS 的消息发布与订阅模式，来进行数据的传递。

理解：订阅信息 ==== 绑定事件监听 ，发布消息 ==== 触发事件。

**注意**：
但是必须先执行订阅事件 subscribe ，然后才能 publish 发布事件。

**订阅消息(绑定事件监听)**

先在 created 钩子函数中订阅消息
```js
// event接收的是消息名称，data接收发布时传递的数据
PubSub.subscribe('消息名称(相当于事件名)', function(event, data) {
    // 事件回调处理
})
```
**发布消息(触发事件)**
```js
PubSub.publish('消息名称(相当于事件名)', data)
```

## 生命周期

![图片.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/225ad7dee75d48f3b3be0d09b8a8f932~tplv-k3u1fbpfcp-watermark.image?)
生命周期分为三大阶段：初始化显示、更新显示、销毁Vue实例

**初始化阶段的钩子函数**：

beforeCreate() 实例创建前：数据和模板均未获取到

created() 实例创建后: 最早可访问到 data 数据，但模板未获取到

beforeMount() 数据挂载前：模板已获取到，但是数据未挂载到模板上。

mounted() 数据挂载后：数据已挂载到模板中

**更新阶段的钩子函数**：

beforeUpdate() 模板更新前：data 改变后，更新数据模板前调用

updated() 模板更新后：将 data 渲染到数据模板中

**销毁阶段的钩子函数**：

beforeDestroy() 实例销毁前

destroyed() 实例销毁后

## axios
目前 Vue 官方没有内置任何 ajax 请求方法

在 vue 2+ 版本中，axios是官方推荐使用非常棒的第三方 ajax 请求库
### 参考文档

https://github.com/axios/axios/blob/master/README.md

引入axios: `npm install axios`

### 示例

```js
window.AppHome = {
        template,
        data() {
            return {
                hobbies: ['coding', '睡觉', '打豆豆', '看书'],
                empList: [

                ]
            }
        },
        created() {
            axios.get('http://127.0.0.1:5500/vue-07-lifecycle&ajx/04-bootstrap-ajax/emp.json')
                .then( response => {
                    // handle success
                    console.log(response.data, this)
                    this.empList = response.data
                })
                .catch( error => {
                    // handle error
                    console.log(error.message)
                    alert(error.message)
                })
        }
```
## vue-router 路由
Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得非常简单。

通过根据不同的请求路径，切换显示不同组件进行渲染页面。

安装路由:`npm install vue-router`

引入 vue-router.js：
````js
<script src="./node_modules/vue-router/dist/vue-router.js"></script>
````
### **基本路由使用-示例代码**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>路由管理</title>
</head>

<body>
    <div id="app">
        <div class="header">
            <h1>头部</h1>
        </div>
        <div class="left">
            <p>
            <ul>
                <li><a href="#/foo">Go Foo</a></li>
                <li><a href="#/bar">Go Bar</a></li>
                <!-- 下面是官方推荐的写法 -->
                <!-- 
                    通过 router-link 标签会默认渲染出 a 标签
                    其中通过 to 属性指定跳转链接，不用带上 # 号
                -->
                <li><router-link to="/foo">Go to Foo</router-link><br/></li>
                <li><router-link to="/bar">Go to Bar</router-link></li>
            </ul>
            </p>
        </div>
        <div class="main">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
        </div>
    </div>

    <script src="./node_modules/vue/dist/vue.js"></script>
    <script src="./node_modules/vue-router/dist/vue-router.js"></script>
    <script>
        // 1. 定义组件
        const Foo = {
            template: '<div>我是Foo组件</div>'
        }
        const Bar = {
            template: '<div>我是Bar组件</div>'
        }

        // 2. 配置路由表，当点击指定url时，显示对应的那个组件
        const router = new VueRouter({
            routes: [ // 注意单词是routes!
                { 
                    path: '/foo', 
                    component: Foo 
                },
                { 
                    path: '/bar', 
                    component: Bar 
                }
            ]
        })

        // 3. 将路由器注入到实例中
        new Vue({
            el: '#app',
            router // router: router
        })
    </script>
</body>

</html>
```
### **嵌套路由**
```js
{
    path: '/news',
    component: News,
    children: [
        // 当匹配到 /news/sport 请求时，
        // 组件 Sport 会被渲染在 News 组件中的 <router-view> 中
    {
        path: '/news/sport',
        component: Sport
    },
    // 简写方式，等价于 /news/tech 路径，注意前面没有 / ,有 / 就是根目录了
    {
        path: 'tech',
        component: Tech
    },
    //点击新闻管理默认选中 新闻，
    // 就是/news后面没有子路径时, redirect 重定向到 体育
    {
        path: '',
        redirect: '/news/sport'
    }
```
### **缓存路由组件**

默认情况下，当路由组件被切换后组件实例会销毁，当切换回来时实例会重新创建。

如果可以缓存路由组件实例，切换后不用重新加载数据，可以提高用户体验。

`<keep-alive>`可缓存渲染的路由组件。

```html
<keep-alive>
    <router-view></router-view>
</keep-alive>
```

### **路由组件传递数据**
路由配置
```js
{
    path: '/news/sport',
    component: Sport,
    children: [
    {
        path: '/news/sport/detail/:id', // :id 路径变量占位符
        component: SportDetail
    }
    ]
},
```
路由跳转路径
```js
<!--
要动态拼接值, 则 to 属性值是 JS 表达式,
要写 JS 表达式, 则要使用 v-bind 方式绑定属性
注意 + 前面有单引号 ''
-->
<router-link :to="'/news/sport/detail/' + sport.id">
    {{sport.title}}
</router-link>
```
在路由组件中读取请求参数
```js
this.$route.params.id
```

## 编程式路由
### 声明式与编程式区别
声明式(直接通过`<a>`标签href指定链接跳转) | 编程式(采用js代码链接跳转，如localhost.href) |
| -------------------------- | ------------------------------- |
| `<router-link :to="...">`  | `router.push(...)`|

### 编程式路由导航 API
```js
this.$router.push(path) // 相当于点击路由链接(后退1步，会返回当前路由界面)
this.$router.replace(path) // 用新路由替换当前路由(后退1步，不可返回到当前路由界面)
this.$router.back() // 后退回上一个记录路由
this.$router.go(n) // 参数 n 指定步数
this.$router.go(-1) // 后退回上一个记录路由
this.$router.go(1) // 向前进下一个记录路由
```
### 示例
```js
    methods: {
            pushTech (id) {
                // push 可后退回来
                this.$router.push(`/news/tech/detail/${id}`) // ES6新语法，不需要+号，只需要弄一个美元符号$即可
            },
            replaceTech (id) {
                // replace 不可后退回来
                this.$router.replace(`/news/tech/detail/${id}`)
            }
        }
```