# CSS初级

## CSS简介
-   **什么是CSS**

    -   Cascading Style Sheets 层叠样式表

-   层叠样式表是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。
## 引入CSS三种方式
### `外部样式表`

外部样式表，指在html文件的head标签中，使用link引用另一个css文件中定义的样式。如果某个样式表需要被使用许多次，使用外部样式表是最好的选择。
```html
<link rel="stylesheet" type="text/css" href="style.css">
```
rel：是relationship

type：定义css样式文件的类型

href：引用具体的文件名

### `内部样式表`

指在html文件的head标签内声明样式。当单个文档需要特殊的样式时，就应该使用内部样式表.
```html
<!-- 内部样式表 -->
    <style type="text/css">
        h1{
            color:red
        }
        p{
            color:aqua;
            font-size:30px;
        }
    </style>
```

### `内联样式`

内联样式（一般不建议使用），指在某个html内指定改标签内容的样式。由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。

```html
<p style="font-size:30px; color:red">这是一个大小为30px的红色字体</p>
```
## CSS背景
### `背景颜色`

-   background-color 属性指定元素的背景色

    可以为任何HTML元素设置背景色

-   不透明度

    -   方法一：background-color:rgba(0,128,0,1) ;

        使用这种方法，背景内字体不会跟着一起透明

    -   方法二：opacity：0.3

        使用这种方法，背景内字体会跟着一起透明
        
### `背景图像`

background-image 属性指定用作元素背景的图像。

默认情况下，图像会重复，以覆盖整个元素。
### `背景附着`

background-attachment 属性指定背景图像是应该滚动还是固定的（不会随页面的其余部分一起滚动）：

固定

```html
   background-attachment: fixed;
```

滚动

```html
 background-attachment: scroll;
```

### `背景重复`

默认情况下，background-image 属性在水平和垂直方向上都重复图像。

水平方向重复 (background-repeat: repeat-x;)，

如需垂直重复图像，请设置 background-repeat: repeat-y;

如果不想要重复: background-repeat: no-repeat;

### `背景图像的起始位置`

![图片.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbe5ae4fe91647b58cb3eb1de13ac7c9~tplv-k3u1fbpfcp-watermark.image?)

### `背景简写`

在使用简写属性时，属性值的顺序为：

-   background-color
-   background-image
-   background-repeat
-   background-attachment
-   background-position

属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。


## CSS边框
### `边框样式`

border-style 属性指定要显示的边框类型。

允许以下值：

-   dotted - 定义点线边框
-   dashed - 定义虚线边框
-   solid - 定义实线边框
-   double - 定义双边框
-   groove - 定义 3D 坡口边框。效果取决于 border-color 值
-   ridge - 定义 3D 脊线边框。效果取决于 border-color 值
-   inset - 定义 3D inset 边框。效果取决于 border-color 值
-   outset - 定义 3D outset 边框。效果取决于 border-color 值
-   none - 定义无边框
-   hidden - 定义隐藏边框

border-style 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。

### `边框宽度`

border-width 属性指定四个边框的宽度。

可以将宽度设置为特定大小（以 px、pt、cm、em 计），也可以使用以下三个预定义值之一：thin、medium 或 thick：
### `边框颜色`

border-color 属性用于设置四个边框的颜色。

可以通过以下方式设置颜色：

-   name - 指定颜色名，比如 "red"
-   HEX - 指定十六进制值，比如 "#ff0000"
-   RGB - 指定 RGB 值，比如 "rgb(255,0,0)"
-   HSL - 指定 HSL 值，比如 "hsl(0, 100%, 50%)"
-   transparent

注释：如果未设置 `border-color`，则它将继承元素的颜色。

特定边框的颜色

border-color 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。
### `简写属性`

为了缩减代码，也可以在一个属性中指定所有单独的边框属性。

`border` 属性是以下各个边框属性的简写属性：

-   `border-width`
-   `border-style`（必需）
-   `border-color`

### `圆角边框`

border-radius 属性用于向元素添加圆角边框：

## 外边距
### `外边距样式`
CSS margin 属性用于在任何定义的边框之外，为元素周围创建空间。

通过 CSS，您可以完全控制外边距。有一些属性可用于设置元素每侧（上、右、下和左）的外边距。

CSS 拥有用于为元素的每一侧指定外边距的属性：

-   margin-top
-   margin-right
-   margin-bottom
-   margin-left

所有外边距属性都可以设置以下值：

-   auto - 浏览器来计算外边距
-   *length* - 以 px、pt、cm 等单位指定外边距
-   % - 指定以包含元素宽度的百分比计的外边距
-   inherit - 指定应从父元素继承外边距

提示：允许负值。
### `外边距简写`

为了缩减代码，可以在一个属性中指定所有外边距属性。

`margin` 属性是以下各外边距属性的简写属性：

-   margin-top
-   margin-right
-   margin-bottom
-   margin-left

如果 margin 属性有四个值：

-   margin: 25px 50px 75px 100px;

-   -   上外边距是 25px
    -   右外边距是 50px
    -   下外边距是 75px
    -   左外边距是 100px

-   如果 margin 属性设置三个值：

    -   margin: 25px 50px 75px;
    -   -   上外边距是 25px
        -   右和左外边距是 50px
        -   下外边距是 75px

-   如果 margin 属性设置两个值：

    -   margin: 25px 50px;
    -   -   上和下外边距是 25px
        -   右和左外边距是 50px

-   如果 `margin` 属性设置了一个值：

    -   margin: 25px;
    -   -   所有四个外边距都是 25px
### `auto值`

您可以将 margin 属性设置为 auto，以使元素在其容器中水平居中。

然后，该元素将占据指定的宽度，并且剩余空间将在左右边界之间平均分配。
### `inherit值`

元素的外边距继承自父元素的外边距，两者大小一致
### `外边距合并`

**外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。**

**合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。**
-   当一个元素出现在另一个元素上面时，第一个元素的下外边距与第二个元素的上外边距会发生合并。请看下图：

![图片.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52ca5849d165427ca1fd87ec432737e2~tplv-k3u1fbpfcp-watermark.image?)

- 当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的上和/或下外边距也会发生合并。请看下图：

![图片.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a25573fd22fa4f6087ad5fa72ca2af0a~tplv-k3u1fbpfcp-watermark.image?)

- 尽管看上去有些奇怪，但是外边距甚至可以与自身发生合并。

假设有一个空元素，它有外边距，但是没有边框或填充。在这种情况下，上外边距与下外边距就碰到了一起，它们会发生合并：


![图片.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a20ad5cda45409cb80f141b2ce091ab~tplv-k3u1fbpfcp-watermark.image?)

如果这个外边距遇到另一个元素的外边距，它还会发生合并

![图片.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42ca00b68d174d8b9a9c0c0393cdc827~tplv-k3u1fbpfcp-watermark.image?)

这就是一系列段落元素占用空间非常小的原因，因为他们的所有外边距都合并到了一起，形成了一个小的外边距

**注释**：只有普通文档流中块框的垂直外边距才会发生外边距合并。`行内框、浮动框或绝对定位之间的外边距不会合并。`

### `解决外边距合并`
**解决外边距重叠：**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1{
            width: 200px;
            height: 200px;
            background-color: #bfa;
        }
        .box1::before{
            display: table;
            content: "";
        }
        .box2{
            width: 100px;
            height: 100px;
            background-color: orange;
            margin-top: 100px;
        }
    </style>
</head>
<body>
    <div class="box1">
        <div class="box2"></div>
    </div>
</body>
</html>
```
## 内边距
### `Padding - 单独的边`

CSS 拥有用于为元素的每一侧指定内边距的属性：

-   padding-top
-   padding-right
-   padding-bottom
-   padding-left

所有内边距属性都可以设置以下值：

-   *length* - 以 px、pt、cm 等单位指定内边距
-   % - 指定以包含元素宽度的百分比计的内边距
-   inherit - 指定应从父元素继承内边距

提示：不允许负值。
### `Padding - 简写属性`

为了缩减代码，可以在一个属性中指定所有内边距属性。

`padding` 属性是以下各内边距属性的简写属性：

-   padding-top
-   padding-right
-   padding-bottom
-   padding-left

工作原理是这样的：

如果 padding 属性有四个值：

-   padding: 25px 50px 75px 100px;
-   -   上内边距是 25px
    -   右内边距是 50px
    -   下内边距是 75px
    -   左内边距是 100px
### `内边距和元素宽度`

CSS width 属性指定元素内容区域的宽度。

内容区域是元素（盒模型）的内边距、边框和外边距`内的部分`。

因此，如果元素拥有指定的宽度，则添加到该元素的内边距会添加到元素的总宽度中。这通常是不希望的结果。

总之，内边距会增大内容区域，外边距不会增大内容区域

> 使用 `box-sizing 属性`。这将导致元素保持其宽度。如果`增加内边距`，则`可用的内容空间会减少`。


## 宽度/高度
height 和 width 属性用于设置元素的高度和宽度。

height 和 width 属性不包括内边距、边框或外边距。它设置的是元素内边距、边框以及外边距内的区域的高度或宽度。
### `属性`

height 和 width 属性可设置如下值：

-   auto - 默认。浏览器计算高度和宽度。
-   *length* - 以 px、cm 等定义高度/宽度。
-   % - 以包含块的百分比定义高度/宽度。
-   initial - 将高度/宽度设置为默认值。
-   inherit - 从其父值继承高度/宽度。
### `max-width`

max-width 属性用于设置元素的最大宽度。

可以用长度值（例如 px、cm 等）或包含块的百分比（％）来指定 max-width（最大宽度），也可以将其设置为 none（默认值。意味着没有最大宽度）。

使用 max-width 能够改善浏览器对小窗口的处理。


## 框模型
所有 HTML 元素都可以视为方框。在 CSS 中，在谈论设计和布局时，会使用术语“盒模型”或“框模型”。

CSS 框模型实质上是一个包围每个 HTML 元素的框。它包括：外边距、边框、内边距以及实际的内容。下图展示了框模型：

![图片.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbee4cb9593843a8bf142060dd0956bd~tplv-k3u1fbpfcp-watermark.image?)
在 CSS 中，width 和 height 指的是内容区域的宽度和高度。默认情况下，增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。


## 轮廓
轮廓是在元素周围绘制的一条线，在边框之外，以凸显元素。

CSS 拥有如下轮廓属性：
-   outline-style
-   outline-color
-   outline-width
-   outline-offset
-   outline

注意：轮廓与[边框](https://www.w3school.com.cn/css/css_border.asp)不同！

不同之处在于：轮廓是在元素边框之外绘制的，并且可能与其他内容重叠。同样，轮廓也不是元素尺寸的一部分；元素的总宽度和高度不受轮廓线宽度的影响。

**`CSS 轮廓样式`**

outline-style 属性指定轮廓的样式，并可设置如下值：

-   dotted - 定义点状的轮廓。
-   dashed - 定义虚线的轮廓。
-   solid - 定义实线的轮廓。
-   double - 定义双线的轮廓。
-   groove - 定义 3D 凹槽轮廓。
-   ridge - 定义 3D 凸槽轮廓。
-   inset - 定义 3D 凹边轮廓。
-   outset - 定义 3D 凸边轮廓。
-   none - 定义无轮廓。
-   hidden - 定义隐藏的轮廓。
## CSS文本
### `文本颜色`

color 属性用于设置文本的颜色。颜色由以下值指定：

-   颜色名 - 比如 "red"
-   十六进制值 - 比如 "#ff0000"
-   RGB 值 - 比如 "rgb(255,0,0)"

### `文本对齐`

text-align 属性用于设置文本的水平对齐方式。

文本可以左对齐或右对齐，或居中对齐。
### `文本方向`

direction 和 unicode-bidi 属性可用于更改元素的文本方向：
### `文本装饰`

text-decoration 属性用于设置或删除文本装饰。

text-decoration：overline 上划线

text-decoration：line-through 删除线

text-decoration：underline 下划线

text-decoration: none; 通常用于从链接上删除下划线：
### `文本转换`

text-transform 属性用于指定文本中的大写和小写字母。

它可用于将所有内容转换为大写或小写字母，或将每个单词的首字母大写：

text-transform：uppercase 大写

text-transform：lowercase 小写

text-transform：capitalize 首字母大写

### `文字间距`

text-indent 属性用于指定文本第一行的缩进：

letter-spacing 属性用于指定文本中字符之间的间距。

line-height 属性用于指定行之间的间距：

word-spacing 属性用于指定文本中单词之间的间距。

white-space 属性指定元素内部空白的处理方式。
### `文字阴影`


指定水平阴影和垂直阴影

text-shadow: 2px 2px;

向阴影添加颜色

h1 {
  text-shadow: 2px 2px red;
}

向阴影添加模糊效果

text-shadow: 2px 2px 5px red;

## CSS字体
### `属性`
在 CSS 中，我们使用 font-family 属性规定文本的字体。
### `样式`

font-style 属性主要用于指定斜体文本。

此属性可设置三个值：

-   normal - 文字正常显示
-   italic - 文本以斜体显示
-   oblique - 文本为“倾斜”（倾斜与斜体非常相似，但支持较少）
### `粗细`

font-weight 属性指定字体的粗细：

### `大小`

font-size 属性设置文本的大小。

font-size 值可以是绝对或相对大小。

`绝对尺寸`：

-   将文本设置为指定大小
-   不允许用户在所有浏览器中更改文本大小（可访问性不佳）
-   当输出的物理尺寸已知时，绝对尺寸很有用

`相对尺寸`：

-   设置相对于周围元素的大小
-   允许用户在浏览器中更改文本大小

注释：如果您没有指定字体大小，则普通文本（如段落）的默认大小为 16px（16px = 1em）。

`用 em 设置字体大小`

为了允许用户调整文本大小（在浏览器菜单中），许多开发人员使用 em 而不是像素。

1em 等于当前字体大小。浏览器中的默认文本大小为 16px。因此，默认大小 1em 为 16px。

`响应式字体大小`

可以使用` vw 单位`设置文本大小，它的意思是“视口宽度”（"viewport width"）。

这样，文本大小将遵循浏览器窗口的大小，请调整浏览器窗口的大小，以查看字体大小如何缩放：

视口（Viewport）是浏览器窗口的大小。 1vw = 视口宽度的 1％。如果视口为 50 厘米宽，则 1vw 为 0.5 厘米。



## 图标
向 HTML 页面添加图标的最简单方法是使用图标库，比如 Font Awesome。

将指定的图标类的名称添加到任何行内 HTML 元素（如 `<i>` 或 `<span>`）。
## 链接
链接可以使用任何 CSS 属性（例如 color、font-family、background 等）来设置样式。

display: block; 将链接显示为块元素可以使整个链接区域都可以被单击（而不仅仅是文本），我们还可以指定宽度（如果需要，还可以指定内边距、外边距、高度等）。

此外，可以根据链接处于什么状态来设置链接的不同样式。

四种链接状态分别是：(`简单记住为love`)

-   a:link - 正常的，未访问的链接
-   a:visited - 用户访问过的链接
-   a:hover - 用户将鼠标悬停在链接上时
-   a:active - 链接被点击时

`文本装饰`

text-decoration 属性主要用于从链接中删除下划线

`背景色`

background-color 属性可用于指定链接的背景色


# CSS中级
## display
| 属性         | 说明                                   |
| ------------ | ---------------------------------------------------- |
| none         | 此元素不会被显示。                                   |
| block        | 此元素将显示为块级元素，此元素前后会带有换行符。     |
| inline       | 默认。此元素会被显示为内联元素，元素前后没有换行符。 |
| inline-block | 行内块元素。（CSS2.1 新增的值）                      |

display: none; 通常与 JavaScript 一起使用，以隐藏和显示元素，而无需删除和重新创建它们。


## 定位
position 属性规定应用于元素的定位方法的类型。

有五个不同的位置值：

-   static
-   relative
-   fixed
-   absolute
-   sticky

元素其实是使用 top、bottom、left 和 right 属性定位的。但是，除非首先设置了 position 属性，否则这些属性将不起作用。根据不同的 position 值，它们的工作方式也不同。
### `static`

HTML 元素默认情况下的定位方式为 static（静态）。

静态定位的元素不受 top、bottom、left 和 right 属性的影响。

position: static; 的元素不会以任何特殊方式定位；它始终根据页面的正常流进行定位：

### `relative`

position: relative; 的元素相对于其正常位置进行定位。

设置相对定位的元素的 top、right、bottom 和 left 属性将导致其偏离其正常位置进行调整。不会对其余内容进行调整来适应元素留下的任何空间。

### `fixed`

position: fixed; 的元素是相对于视口定位的，这意味着即使滚动页面，它也始终位于同一位置。 top、right、bottom 和 left 属性用于定位此元素。

固定定位的元素不会在页面中通常应放置的位置上留出空隙。
### `absolute`

position: absolute; 的元素相对于最近的定位祖先元素进行定位（而不是相对于视口定位，如 fixed）。

然而，如果绝对定位的元素没有祖先，它将使用文档主体（body），并随页面滚动一起移动。
### `sticky`

position: sticky; 的元素根据用户的滚动位置进行定位。

粘性元素根据滚动位置在相对（relative）和固定（fixed）之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其“粘贴”在适当的位置（比如 position:fixed）

## 溢出
overflow 属性指定在元素的内容太大而无法放入指定区域时是剪裁内容还是添加滚动条。

overflow 属性可设置以下值：

-   visible - 默认。溢出没有被剪裁。内容在元素框外渲染
-   hidden - 溢出被剪裁，其余内容将不可见
-   scroll - 溢出被剪裁，同时添加滚动条以查看其余内容
-   auto - 与 scroll 类似，但仅在必要时添加滚动条

注释：overflow 属性仅适用于具有指定高度的块元素。

## 浮动
float 属性用于定位和格式化内容，通过浮动可以使一个元素向其父元素的左侧或右侧移动

float 属性可以设置以下值之一：

-   left - 元素浮动到其容器的左侧
-   right - 元素浮动在其容器的右侧
-   none - 元素不会浮动（将显示在文本中刚出现的位置）。默认值。
-   inherit - 元素继承其父级的 float 值

### `清除浮动`
clear 属性指定哪些元素可以浮动于被清除元素的旁边以及哪一侧。

clear 属性可设置以下值之一：

-   none - 允许两侧都有浮动元素。默认值
-   left - 左侧不允许浮动元素
-   right- 右侧不允许浮动元素
-   both - 左侧或右侧均不允许浮动元素
-   inherit - 元素继承其父级的 clear 值
**原理：**

设置清除浮动之后，浏览器会自动为元素添加一个上外边距，以使其位置不受其他元素的影响


### `高度塌陷和BFC`

高度塌陷的问题：

-   浮动布局中，父元素的高度默认被子元素撑开的。当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离，将会无法撑起父元素的高度，导致父元素的高度丢失。举例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .outer{
            border: 10px red solid;
        }
        .inner{
            width: 100px;
            height: 100px;
            background-color: #bfa;
            float: left;
        }
    </style>
</head>
<body>
    <div class="outer">
        <div class="inner"></div>
    </div>
</body>
</html>
```
-   父元素高度丢失后，其下的元素会自动上移，导致页面布局混乱
`解决塌陷方法`

固定父元素的高度

开启BFC（Block Formatting Context）块级格式化环境

   -   BFC是CSS的一个隐含属性，可以为一个元素开启BFC

        -   开启BFC后，该元素会变成一个独立的布局区域

        -   开启BFC之后的特点：

            -   开启BFC的元素不会被浮动元素所覆盖
            -   开启BFC的父元素，子元素和父元素外边距不会重叠
            -   开启BFC的元素，可以包含浮动的子元素（`解决塌陷问题`）

`特殊方式开启元素的BFC`：

-   设置元素的浮动（float: left;这样的）（不推荐）
-   将元素设置为行内块元素（display: inline-block;这样的）（不推荐）
-   将元素的overflow设置为一个非visible的值（overflow: hidden; / overflow: auto;这样的）（推荐）
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1{
            width: 200px;
            height: 200px;
            background-color: #bfa;
            overflow: hidden;
        }
        .box2{
            width: 100px;
            height: 100px;
            background-color: yellow;
            margin-top: 100px;
        }
    </style>
</head>
<body>
    <div class="box1">
        <div class="box2"></div>
    </div>
</body>
</html>
```
### `使用after伪类解决高度塌陷问题`
**解决方法：**

利用在浮动元素下面添加一个新的空元素，并清除浮动元素对其的影响（clear: both;），使之撑开父元素。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1{
            border: 10px red solid;
        }
        .box2{
            width: 100px;
            height: 200px;
            background-color: #bfa;
            float: left;
        }
        /* 默认是行内元素 */
        .box1::after{
            content: "";
            display: block;
            /* 清除浮动元素的影响，使内容显示于box2的下面，从而撑开box1 */
            clear: both;
        }
    </style>
</head>
<body>
    <div class="box1">
        <div class="box2"></div>
    </div>
</body>
</html>
```
### `clearfix`

**既解决外边距重叠，又解决塌陷问题（以后直接在需要的元素的类上加上clearfix就好）：**
```css
.clearfix::before, .clearfix::after{
    content: "";
    display: table;
    clear: both;
}
```
## CSS伪类
伪类用于定义元素的特殊状态。

例如，它可以用于：

-   设置鼠标悬停在元素上时的样式
-   为已访问和未访问链接设置不同的样式
-   设置元素获得焦点时的样式
### `first-child`

:first-child 伪类与指定的元素匹配：该元素是另一个元素的第一个子元素。

p:first-child ：匹配首个P元素

p:first-child i ：匹配首个P元素的所有i

p i:first-child 匹配所有P元素的首个i
## 伪元素
CSS 伪元素用于设置元素指定部分的样式。

例如，它可用于：

- 设置元素的首字母、首行的样式
- 在元素的内容之前或之后插入内容
### `::first-line 伪元素`

::first-line 伪元素用于向文本的首行添加特殊样式。
### `::first-letter`

::first-letter 伪元素用于向文本的首字母添加特殊样式。

### `::before 伪元素`

::before 伪元素可用于在元素内容之前插入一些内容。
### `::after 伪元素`

::after 伪元素可用于在元素内容之后插入一些内容。

### `::selection 伪元素`

::selection 伪元素匹配用户选择的元素部分。

## 复合选择器
### `交集选择器`
-   作用：选中同时符合多个条件的元素
-   语法：选择器1选择器2选择器3
-   注意点：交集选择器中如果有元素选择器，必须使用元素选择器开头
-   代码举例：
```css
<style>
    div.red {
        font-size: 30px;
    }
</style>

<body>
    <div class="red">测试1</div>
    <p class="red">测试2</p>
</body>
```
### `并集选择器`

-   作用：同时选择多个选择器对应的元素
-   语法：选择器1, 选择器2, 选择器3

### `关系选择器`
后代选择器 (空格)

子选择器 (>)

相邻兄弟选择器 (+)

通用兄弟选择器 (~)

-   子元素选择器：

    -   语法：父元素 > 子元素

-   后代元素选择器

    -   语法：祖先 后代

-   相邻兄弟选择器：

    -   语法：前一个 + 下一个
    -   选择下边所有兄弟：语法：兄 ~ 弟
```css
li + li {font-weight:bold;}
```
### `属性选择器`
为带有特定属性的 HTML 元素设置样式

我们可以设置带有特定属性或属性值的 HTML 元素的样式。
-   语法：

    -   [属性名]：选择含有指定属性的元素
    -   [属性名=属性值]：选择含有指定属性和属性值的元素
    -   [属性名^=属性值]：选择属性值以指定值开头的元素
    -   [属性名$=属性值]：选择属性值以指定值结尾的元素
    -   [属性名*=属性值]：选择属性值中含有某值的元素
```css
<style>
    p[title]{
        color: orange;
    }
	p[title=abc]{
    	color: red;
	}
	p[title^=yu]{
    	color: black;
	}
	p[title$=pp]{
    	color: gold;
	}
	p[title*=aaa]{
    	color: blue;
	}
</style>

<body>
    <p title="hello">hahaha</p>
    <p>mimimi</p>
    <p title="abc">we are good</p>
    <p title="yuan">66666</p>
    <p title="pppp">noscript</p>
    <p title="nbaaaa">so we</p>
</body>
```
## 选择器权重
当通过不同的选择器，选中相同的元素，并为相同的样式设置不同的值时，此时会发生样式的冲突

### `引例`
结果是红色
```html
<style>
    div{
        color: yellow;
    }
    .red{
        color: red;
    }
</style>

<body>
    <div id="box1" class="red">我是一个div</div>
</body>
```
### `选择的权重（从高到底排列）`
-   内联样式 1000
-   id选择器 100
-   类和伪类选择器 10
-   元素选择器 1
-   通配选择器 0
-   继承的样式 无优先级

 比较优先级时，需要将所有的选择器的优先级进行相加计算，则优先显示，所以，#box1和div#box1会优先使用后者的样式
 
 分组选择器（div,p,span{}）是单独计算的
 
 如果优先级计算后相等，则优先使用靠下的样式
 
 `!important`：可以在某一个样式的后面添加!important，则此时改样式会获取到最高的优先级，甚至超过内联样式。在开发中，这个要慎用！
## 继承
祖先元素的样式会应用到它的后代元素上
-   注意：并不是所有的样式都会被继承，例如背景相关的、布局相关的不会被继承。例如如果p标签包着span，p设置背景颜色，那么span不会继承
## 像素和百分比
长度单位

-   像素：px

-   百分比：

    -   可以设置属性相对于父元素的百分比
    -   设置百分比可以使子元素跟随父元素的改变而改变

-   em：

    -   em是相当于字体大小计算的
    -   1em = 1font-size
    -   em会根据字体大小改变而改变
-   rem：

    -   rem是相对于根元素的自大小来计算
    -   只需要`html{font-size: 30px;}`这样设置网页字体大小，那么1rem = 30px
## RGB值
-   red、green、blue

-   每一种颜色范围在0-255之间

-   格式举例：`background-color: rgb(0, 255, 0) /* 绿色 */`

-   rgb(0, 0, 0)：黑色，rgb(255, 255, 255)：白色

-   rgba：多的那个a是透明度。0表示完全透明（看不到了），.5表示半透明，1表示完全不透明

-   十六进制的RGB值：

    -   语法：#红色绿色蓝色
    -   颜色浓度通过 00-ff 表示
    -   成双的可以简写，例如护眼色`#bfa ==> #bbffaa`
## HSL值
-   H：色相（0-360）、S：饱和度（0-100%）、L：亮度（0-100%）
-   很少用，工业用的
# CSS高级

## 过渡
### `基本使用`
 `transition`如何使用 CSS 过渡？

如需创建过渡效果，必须明确两件事：

-   您要添加效果的 CSS 属性
-   效果的持续时间

注意：如果未规定持续时间部分，则过渡不会有效果，因为默认值为 0。

```css
//width过渡
div {
    width: 100px;
    height: 100px;
    background-color: red;
    transition: width 2s;
}
div:hover {
    //更改width长度
    width: 300px;
}
```
### `指定过渡的速度曲线`

transition-timing-function 属性规定过渡效果的速度曲线。

transition-timing-function 属性可接受以下值：

-   ease - 规定过渡效果，先缓慢地开始，然后加速，然后缓慢地结束（默认）
-   linear - 规定从开始到结束具有相同速度的过渡效果
-   ease-in -规定缓慢开始的过渡效果
-   ease-out - 规定缓慢结束的过渡效果
-   ease-in-out - 规定开始和结束较慢的过渡效果
-   cubic-bezier(n,n,n,n) - 允许您在三次贝塞尔函数中定义自己的值

### `延迟过渡效果`

transition-delay 属性规定过渡效果的延迟（以秒计）。

下例在启动之前有 1 秒的延迟：
```css
div {
  transition-delay: 1s;
}
```
## object-fit属性
object-fit 属性用于指定应如何调整` <img>` 或 `<video>` 的大小以适合其容器。

这个属性告诉内容以不同的方式填充容器。比如“保留长宽比”或者“展开并占用尽可能多的空间”。

object-fit 属性可接受如下值：

-   fill - 默认值。调整替换后的内容大小，以填充元素的内容框。如有必要，将拉伸或挤压物体以适应该对象。
-   contain - 缩放替换后的内容以保持其纵横比，同时将其放入元素的内容框。
-   cover - 调整替换内容的大小，以在填充元素的整个内容框时保持其长宽比。该对象将被裁剪以适应。
-   none - 不对替换的内容调整大小。
-   scale-down - 调整内容大小就像没有指定内容或包含内容一样（将导致较小的具体对象尺寸）


## Flexbox
弹性框布局模块，可以更轻松地设计灵活的响应式布局结构，而无需使用浮动或定位。
### `flex-direction `属性

flex-direction 属性定义容器要在哪个方向上堆叠 flex 项目

column 值设置垂直堆叠 flex 项目（从上到下）：

column-reverse 值垂直堆叠 flex 项目（但从下到上）：

row 值水平堆叠 flex 项目（从左到右）：

row-reverse 值水平堆叠 flex 项目（但从右到左）：

### `flex-wrap` 属性

flex-wrap 属性规定是否应该对 flex 项目换行。

wrap 值规定 flex 项目将在必要时进行换行：

nowrap 值规定将不对 flex 项目换行（默认）：

wrap-reverse 值规定如有必要，弹性项目将以相反的顺序换行：

### `flex-flow` 属性

flex-flow 属性是用于同时设置 flex-direction 和 flex-wrap 属性的简写属性。

### `justify-content` 属性

justify-content 属性用于对齐 flex 项目：

center 值将 flex 项目在容器的中心对齐：

flex-start 值将 flex 项目在容器的开头对齐（默认）：

flex-end 值将 flex 项目在容器的末端对齐：

space-around 值显示行之前、之间和之后带有空格的 flex 项目：

space-between 值显示行之间有空格的 flex 项目：

### `align-items` 属性

center 值将 flex 项目在容器中间对齐：

flex-start 值将 flex 项目在容器顶部对齐：

flex-end 值将弹性项目在容器底部对齐：

stretch 值拉伸 flex 项目以填充容器（默认）：

baseline 值使 flex 项目基线对齐：

### `align-content `属性

align-content 属性用于对齐弹性线。

space-between 值显示的弹性线之间有相等的间距：

space-around 值显示弹性线在其之前、之间和之后带有空格：

stretch 值拉伸弹性线以占据剩余空间（默认）：

center 值在容器中间显示弹性线：

flex-start 值在容器开头显示弹性线：

flex-end 值在容器的末尾显示弹性线：

### `完美居中`

将 justify-content 和 align-items 属性设置为居中，然后 flex 项目将完美居中：

### `order` 属性

order 属性规定 flex 项目的顺序。

### `flex-grow` 属性

flex-grow 属性规定某个 flex 项目相对于其余 flex 项目将增长多少。

### `flex-shrink` 属性

flex-shrink 属性规定某个 flex 项目相对于其余 flex 项目将收缩多少。

### `flex-basis `属性

flex-basis 属性规定 flex 项目的初始长度。

### `flex` 属性

flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。

### `align-self` 属性

align-self 属性规定弹性容器内所选项目的对齐方式。

`align-self 属性将覆盖容器的 align-items 属性所设置的默认对齐方式。
`

center 值将 flex 项目在容器中间对齐：

flex-start 值将 flex 项目在容器顶部对齐：

flex-end 值将弹性项目在容器底部对齐：

auto:默认值。元素继承了它的父容器的 align-items 属性。

stretch:元素被拉伸以适应容器

baseline:元素位于容器的基线上
## CSS3新特性

可参考`守候i`大佬的文章 https://juejin.cn/post/6844903518520901639

## 结束语
我也只是站在了巨人到得肩膀上，本文所写内容摘录自w3c以及好友的博客https://yuanke3.github.io/docs/, 只是一个简化版本，方便回顾复习。

