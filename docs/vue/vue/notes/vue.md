```html
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


添加一个属性选择器 `[v-cloak]` 的CSS 隐藏样式： `[v-cloak] {display: none;}`