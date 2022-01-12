# HTML5文件结构
## 前言
该文整理自本人自己的笔记，以及我好友的博客：https://yuanke3.github.io/docs/   html5部分
## 基本结构

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 
        meta主要用于设置网页中的一些元数据，元数据不是给用户看
        charset 指定网页的字符集
        name 指定的数据的名称，里面内容表示网站的关键字
        content 指定的数据的内容

        <meta http-equiv="refresh" content="3;url=https://www.baidu.com">
        上面代码表示3秒后跳转到baidu.com
     -->
</body>
</html>
```
### !DOCTYPE html

`!DOCTYPE html` 是html5标准网页声明,全称为`Document Type HyperText Mark-up Language`，意思为文档种类为超文本标记性语言或超文本链接标示语言。支持html5标准的主流浏览器都认识这个声明，`表示网页采用html5`。

### charset="UTF-8"

“utf-8”是一种字符编码。charset=”utf-8”是告知浏览器此页面属于什么字符编码格式，下一步浏览器做好“翻译”工作。

常见的字符编码有：gb2312、gbk、unicode、utf-8。

### http-equiv="X-UA-Compatible" content="IE=edge"
X-UA-Compatible是IE8的一个专有`<meta>`属性，它告诉IE8采用何种IE版本去渲染网页，在html的`<head>`标签中使用

Edge 模式告诉 IE 以最高级模式渲染文档，也就是任何 IE 版本都以当前版本所支持的最高级标准模式渲染，避免版本升级造成的影响。简单的说，就是什么版本 IE 就用什么版本的标准模式渲染。

### name="viewport" content="width=device-width, initial-scale=1.0"
在移动设备上进行网页的重构或开发，首先得搞明白的就是`移动设备上的viewport`了，只有明白了viewport的概念以及弄清楚了跟viewport有关的meta标签的使用，才能更好地让我们的网页适配或响应各种不同分辨率的移动设备

### titile
页面的标题
### body
页面主体
## HTML标签

### 语义化标签
-   h1-h6标签：表示标题。是*块元素*（block element），独占一行

-   p标签：表示页面的一个段落。是*块元素*
-   em标签：表示语气、声调加重突出（重点），使选定内容斜体加粗。例如`<p>今天天气<em>真</em>不错</p>`。是*行内元素*（inline element）
-   strong标签：表示强调重要的内容，使选定内容加粗。例如`<p>你今天必须要<strong>完成</strong>作业！</p>`。是行内元素
-   header：表示网页的头部
-   main：表示网页的主体部分（一个页面中只会有一个main）
-   footer：表示网页的底部
-   nav：表示网页的导航
-   aside：和主体相关的其他内容（侧边栏）
-   article：表示一个独立的文章
-   section：表示一个独立的区块，上边的标签都不能表示时可以用section
-   div：块标签
-   span：行标签
- hgroup标签：为标题分组，可以将一组相关的标签同时放入到hgroup
```html
<body>
    <hgroup>
        <h1>你好啊</h1>
        <h2>我叫赛利亚</h2>
    </hgroup>
</body>
```
- blockquote标签/q标签：表示长引用/短引用。例如
```html
<body>
    鲁迅说：
    <blockquote>
        这句话我没说过
    </blockquote>
    子曰：<q>学而时习之，乐呵乐呵</q>
</body>
```
### 换行段落
```html
<body>
    <p>
        这个段落
        在源代码中
        包含许多行
        但是浏览器
        忽略了它们。
    </p>
    <p>
        这个段落
        <!-- 一行中不管空几个空格，在浏览器中只会显示一个空格,“落”与“在”之间由一个空格-->
        在源代码       中          
        包含   许多行
        但是      浏览器
        忽略了  它们。
    </p>
    <p>段落的行数依赖于浏览器窗口的大小。如果调节浏览器窗口的大小，将改变段落中的行数。</p>
</body>
这个段落 在源代码中 包含许多行 但是浏览器 忽略了它们。
这个段落 在源代码 中 包含 许多行 但是 浏览器 忽略了 它们。
段落的行数依赖于浏览器窗口的大小。如果调节浏览器窗口的大小，将改变段落中的行数。
```

### 换行标签
`<br/>`
```html
<body>
    <p>
        春眠不觉晓，<br/>
        处处闻啼鸟。<br/>
        夜来风雨声，<br/>
        花落知多少。
    </p>
</body>
春眠不觉晓，
处处闻啼鸟。
夜来风雨声，
花落知多少。
```
### 字体标签
`<font> XXXX </font>`

规定文本的字体、字体尺寸、字体颜色。

`<font size=5 color="red"> 红色 </font>`

| 属性  | 值                                     | 
| ----- | -------------------------------------- | 
| color | rgb(x,x,x)<br/>   *#xxxxxx* <br/>*colorname*                     |
| face  | #font_family                           | 
| size  | number                                 | 

### 注释标签
`<!-- XXXX -->`
### a标签(超链接)

`<a>.....</a>`
标签定义超链接，用于从一张页面链接到另一张页面。

`<a href="页面二.html" target="_blank">在新的窗口打开链接</a>`
1.  href属性：跳转目标

1.  target属性：可选值：

    -   _self：默认值，在当前页面打开超链接
    -   _blank：在一个新的页面中打开超链接

1.  无跳转占位符：`<a href="javascript:;">无跳转占位符</a>`

### 锚点标签
`<a name="maodian"> XXX </a>`(name可以改为id)

链接到同一个页面的不同位置,锚点必须先定义再使用
-   跳转顶部：`<a href="#">回到顶部</a>`
 -   跳转底部：

```html
<a href="#bottom">去底部</a>
<a href="#middle">去中间</a>

<p name="middle">我是中间</p>
<p id="bottom">我是底部</p>
```


### 图片标签
`<img src="" alt="">`
1.  src属性：图片路径

1.  alt属性：图片的描述，默认不显示，有些浏览器在图片无法加载时显示。**搜索引擎根据alt内容来识别图片**

1.  width属性：图片宽度（单位是像素）

1.  height属性：图片高度

    **默认情况下，宽度和高度若只修改了一个，则另一个会等比例缩放，就是默认另一边为auto**

-   图片常用格式

    1.  jpeg

        -   支持的颜色比较丰富，不支持透明效果，不支持动图
        -   一般用来显示照片

    1.  gif

        -   支持的颜色比较少，支持简单透明，支持动图
        -   颜色单一的图片、动图

    1.  png

        -   支持的颜色丰富，支持复杂透明，不支持动图
        -   颜色丰富、复杂透明的图片（为网页而生）

    1.  webp

        -   谷歌新推出的专门用来表示网页中的图片的一种格式
        -   它具备其他图片格式的所有优点，而且文件还特别小
        -   缺点：兼容性不好，垃圾ie浏览器不能用

    1.  base64

        -   将图片使用base64进行编码，可以直接将图片转换成字符，通过字符的形式来引用图片
        -   一般都是一些需要和网页一起加载的图片才会使用base64（加载图片速度最快）
### 列表

**无序列表**

`<ul><li> XXX </li></ul>`
| 属性     | 值        | 描述                        |
| -------- | --------- | --------------------------- |
| type |  disc/circle/square        | 规定了标记类型 |

```html
    <ul type="disc">
     <li>苹果</li>
     <li>香蕉</li>
     <li>柠檬</li>
     <li>桔子</li>
    </ul>  

    <h4>空心圆符号列表：</h4>
    <ul type="circle">
     
    </ul>  

    <h4>实心方块符号列表：</h4>
    <ul type="square">
     
    </ul>  
```

**有序列表**
`<ol><li> XXX </li></ol>`
| 属性     | 值        | 描述                        |
| -------- | --------- | --------------------------- |
| reversed |           | 规定列表顺序为降序(9,8,7..) |
| start    | number    | 规定有序列表的起始值        |
| type     | 1 A a I i | 规定在列表中使用的标记类型  |

```html
<h4>大写罗马字母列表:</h4>
    <ol type="I">
        <li>华北</li>
        <li>华南</li>
        <li>华东</li>
        <li>华西</li>
    </ol>
```

### 表格
```html
<table>
    <tr>
        <th>
            
        </th>
    </tr>
    
    <tr>
        <td>
            
        </td>
    </tr>
</table>
```
tr 元素定义表格行，th 元素定义表头，td 元素定义表格单元。
| 属性        | 值                                                           | 描述                           |
| :---------- | ------------------------------------------------------------ | ------------------------------ |
| border      | pixels                                                       | 规定表格边框的宽度             |
| cellpadding | pixels / %                                                   | 规定单元边沿与其内容之间的空白 |
| cellspacing | pixels / %                                                   | 规定单元格之间的空白           |
| frame       | void<br>above<br>below<br>hsides<br>Ihs<br>rhs<br>vsides<br>box<br>border | 规定外侧边框的哪个部分是可见的 |
| width       | pixels  / %                                                  | 规定表格的宽度                 |

### 表单
`<form> XXX </form>`
用于收集用户信息,进行人机交互

**常用控件**
| 控件                                            | 作用                                   |
| ----------------------------------------------- | -------------------------------------- |
| 文本框  `<input type="text">  `                   | 该元素可创建一个单行的文本输入字段     |
| 文本域`<textarea cols="30" rows="10"></textarea>` | 创建一个多行的文本输入字段             |
| 单选按钮`<input type="radio">`                    | 单选按钮是表示一组互斥选项按钮中的一个 |
| 复选框`<input type="checkbox" name="box" id="">`  | 多个选项中选一个或多个或不选           |
| 列表框`<select>  <option>  </option> </select>`   | 选择列表中的某个                       |
| 按钮`<input type="button"> `                      | 代表 HTML 文档中的一个按钮             |
| 掩码`<input type="password">`                     | 隐藏字段                               |

**常用控件属性**
| 属性     | 作用                         |
| -------- | ---------------------------- |
| name     | 指定控件名称，可重复         |
| id       | 指定标签的唯一标识           |
| value    | 控件的值                     |
| checked  | 单选（复选）框默认选中的项目 |
| selected | 列表框默认选中的项目         |
| src      | 图片框图片来源               |
| onclick  | 鼠标点击事件                 |
| disabled | 禁用该控件                   |
| multiple | 允许多选                     |

### 内联框架
```html
<body>
    <!-- 
        src 指定要引入的网页的路径
        frameborder 指定内敛框架的边框
     -->
    <iframe src="https://yuanke3.github.io/docs/" frameborder="0"></iframe>
</body>
```

### 音视频

**音频**

-   audio标签和video标签默认不允许用户自己控制播放停止
-   若要控制播放，要如此写（加个controls）：
```html
<audio src="./source/1.mp3" controls></audio>
```
audio的一些属性：

-   autoplay属性：是自动播放（大部分浏览器都不会自动对音乐进行播放）
-   loop属性：重复播放
-   src属性：无需多言
-   controls+source属性：可以播放音频，同时用来提醒ie用户升级浏览器（只有ie浏览器用户会显示这段文字）。可以用source指定文件，例如：
```html
<audio controls>
    对不起，您的破烂ie浏览器不支持播放音频！快去升级！
    <source src="./source/1.mp3">
</audio>
```
-   embed标签：ie浏览器用embed标签，用src属性来得到音频路径，同时要同时指定width和height属性，不然不显示播放器；同时还要指定type属性值，例如"audio/mp3"
-   最好的兼容方式：
```html
<audio controls>
    <source src="./source/1.mp3">
    <embed src="./source/1.mp3" width="200px" height="300px" type="audio/mp3" />
</audio>
```
2.  **视频**
```html
<video controls">
    <source src="./source/flowers.webm">
    <source src="./source/flowers.mp4">
    <embed src="./source/flowers.mp4" type="video/mp4">
</video>
```

## HTML5新特性

HTML5新特性可以查看**hieeyh**大佬总结的文章，相当详细
> https://juejin.cn/post/6844903486539169805