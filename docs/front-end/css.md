# CSS

CSS（层叠样式表）用于描述HTML元素的显示样式。

## 一、基础概念

1.  **什么是 CSS？它的主要作用是什么？**

    CSS（Cascading Style Sheets，层叠样式表）是一种用于描述 HTML 或 XML 等文档呈现样式的语言。其主要作用是控制网页的布局、颜色、字体、间距等视觉表现，实现内容与样式的分离，使网页设计更灵活、维护更高效。

2.  **CSS 有哪几种引入方式？它们的优先级是怎样的？**

    CSS 的引入方式主要有三种：

*   内联样式：通过元素的`style`属性直接设置样式，例如：`<div style="color: red;">内容</div>`。

*   内嵌样式：在`<head>`标签内使用`<style>`标签定义样式，仅作用于当前页面。

*   外部样式：通过`<link>`标签引入外部`.css`文件，可被多个页面共享。

    优先级：内联样式 > 内嵌样式和外部样式（两者优先级取决于代码顺序，后定义的样式覆盖先定义的）。

3.  **什么是 CSS 的层叠性、继承性和优先级？**

*   层叠性：多个样式规则作用于同一元素时，会按优先级高低叠加生效，优先级低的样式被优先级高的覆盖。

*   继承性：子元素会继承父元素的某些样式（如字体、颜色等），但布局相关样式（如`margin`、`padding`）通常不继承。

*   优先级：决定样式规则应用的先后顺序，具体计算方式为：<br> !important > 内联样式 > ID 选择器 > 类选择器 / 属性选择器 / 伪类选择器 > 元素选择器 > 通配符选择器。

4.  `!important`**的作用是什么？使用时需要注意什么？**

    `!important`用于提升样式规则的优先级，使其优先于其他任何样式（除了更高优先级中同样带有`!important`的样式）。

    注意事项：

*   过度使用会破坏 CSS 的层叠机制，增加维护难度。

*   内联样式中的`!important`无法被覆盖，应谨慎使用。

*   尽量通过优化选择器优先级来实现样式控制，而非依赖`!important`。

5.  **CSS 选择器的权重如何计算？**

    CSS 选择器权重采用 “四元组”（a, b, c, d）表示，权重值越高，优先级越高：

*   `a`：是否包含`!important`（1 或 0）。

*   `b`：ID 选择器的数量。

*   `c`：类选择器、属性选择器、伪类选择器的数量。

*   `d`：元素选择器、伪元素选择器的数量。

    比较规则：从`a`到`d`依次比较，前一位数值大的权重更高，例如：`(0, 1, 0, 0)`（ID 选择器） > `(0, 0, 3, 2)`（3 个类选择器 + 2 个元素选择器）。

## 二、选择器



1.  **列举常见的 CSS 选择器类型，并举例说明。**

*   元素选择器：通过 HTML 标签名选择元素，如`p { color: red; }`。

*   ID 选择器：通过元素的`id`属性选择，如`#box { width: 100px; }`。

*   类选择器：通过元素的`class`属性选择，如`.active { background: blue; }`。

*   通配符选择器：选择所有元素，如`* { margin: 0; padding: 0; }`。

*   属性选择器：根据元素属性选择，如`input[type="text"] { border: 1px solid #ccc; }`。

*   伪类选择器：选择元素的特定状态，如`a:hover { text-decoration: underline; }`。

*   伪元素选择器：选择元素的特定部分，如`p::first-letter { font-size: 2em; }`。

*   后代选择器：选择父元素内的后代元素，如`ul li { list-style: none; }`。

*   子选择器：选择父元素的直接子元素，如`div > span { color: green; }`。

*   相邻兄弟选择器：选择紧邻的兄弟元素，如`h1 + p { margin-top: 10px; }`。

2.  **伪类和伪元素有什么区别？分别列举几个常用的伪类和伪元素。**

*   伪类：用于选择元素的特定状态或位置（如 hover、first-child），关键字为`:`，作用于元素本身。

    常用伪类：`:hover`（鼠标悬停）、`:active`（点击激活）、`:focus`（获取焦点）、`:first-child`（第一个子元素）、`:nth-child(n)`（第 n 个子元素）。

*   伪元素：用于选择元素的特定部分（如首字母、前后内容），关键字为`::`，作用于元素的虚拟部分。

    常用伪元素：`::before`（元素前插入内容）、`::after`（元素后插入内容）、`::first-letter`（首字母）、`::first-line`（首行）。

3.  `nth-child(n)`**和**`nth-of-type(n)`**有什么区别？**

*   `nth-child(n)`：根据元素在父元素中的位置（所有子元素排序）选择第 n 个元素，不区分元素类型。例如：`ul li:nth-child(2)`选择`ul`中所有子元素里的第 2 个，且该元素必须是`li`。

*   `nth-of-type(n)`：根据元素类型在父元素中的位置选择第 n 个同类型元素。例如：`ul li:nth-of-type(2)`选择`ul`中第 2 个`li`元素，忽略其他类型的子元素。

4.  **如何选择所有不以**`box`**开头的类名的元素？**

    可使用属性选择器的否定匹配：`[class^="box"]`表示选择类名以`box`开头的元素，而`:not([class^="box"])`则选择类名不以`box`开头的元素，例如：

    `div:not([class^="box"]) { border: 1px dashed #666; }`

5.  **什么是组合选择器？常见的组合选择器有哪些？**

    组合选择器是通过不同方式组合基础选择器，用于选择特定关系的元素。常见的有：

*   后代选择器（空格）：`div p`选择`div`内所有`p`元素（包括嵌套的）。

*   子选择器（`>`）：`div > p`选择`div`的直接子元素`p`。

*   相邻兄弟选择器（`+`）：`h2 + p`选择紧跟在`h2`后的第一个`p`元素。

*   通用兄弟选择器（`~`）：`h2 ~ p`选择`h2`之后所有同层级的`p`元素。

## 三、盒模型



1.  **什么是 CSS 盒模型？它由哪些部分组成？**

    CSS 盒模型是用于描述元素布局的矩形盒子模型，包括四个部分：

*   内容区（content）：元素实际内容所在区域，由`width`和`height`定义。

*   内边距（padding）：内容区与边框之间的空间，可通过`padding-top`、`padding-right`等属性设置。

*   边框（border）：围绕内边距的线条，可通过`border-width`、`border-color`等属性设置。

*   外边距（margin）：边框之外的空间，用于与其他元素分隔，可通过`margin-top`、`margin-right`等属性设置。

2.  **标准盒模型和 IE 盒模型有什么区别？如何切换盒模型模式？**

*   标准盒模型：`width`和`height`仅包含内容区（content），内边距和边框会增加元素的总宽度和高度。

*   IE 盒模型（怪异盒模型）：`width`和`height`包含内容区、内边距和边框，元素总宽度和高度即为设置的`width`和`height`。

    切换方式：通过`box-sizing`属性控制，`box-sizing: content-box`为标准盒模型（默认），`box-sizing: border-box`为 IE 盒模型。

3.  `margin`**的折叠现象是什么？如何避免？**

    `margin`折叠指两个相邻元素（或父元素与子元素）的垂直外边距会合并为一个，取较大值（若一正一负则取和）。

    常见场景：

*   相邻兄弟元素的上下`margin`折叠。

*   父元素与第一个 / 最后一个子元素的`margin-top`/`margin-bottom`折叠。

*   空元素的上下`margin`折叠。

    避免方法：

*   给父元素添加边框或内边距（分隔父子元素的`margin`）。

*   父元素设置`overflow: hidden`（触发 BFC）。

*   使用浮动或定位（脱离文档流，避免折叠）。

4.  `margin: auto`**的作用是什么？在什么情况下能水平居中元素？**

    `margin: auto`用于自动分配元素的外边距。在水平方向上，当元素具有确定的宽度（`width`）且为块级元素时，`margin-left: auto`和`margin-right: auto`可使元素水平居中，例如：

    ```css
    .box {

        width: 300px;

        margin-left: auto;

        margin-right: auto;

    }
    ```

垂直方向上，`margin: auto`默认无法居中，需结合 Flexbox 等布局方式实现。



5.  `padding`**和**`margin`**的区别是什么？它们分别在什么场景下使用？**

*   作用区域：`padding`是元素内部的空间（内容与边框之间），会影响元素的总尺寸（标准盒模型下）；`margin`是元素外部的空间（与其他元素的距离），不影响元素自身尺寸。

*   背景影响：`padding`区域会显示元素的背景（`background`）；`margin`区域为透明，不显示背景。

*   使用场景：`padding`用于调整元素内容与边框的距离（如按钮内部文字的间距）；`margin`用于控制元素与其他元素的间距（如段落之间的距离）。

## 四、布局相关


1.  **如何实现元素的水平居中？列举不同场景下的方法。**

*   块级元素（定宽）：`margin: 0 auto`。

*   块级元素（不定宽）：父元素设置`text-align: center`，子元素设置`display: inline-block`。

*   Flexbox 布局：父元素设置`display: flex; justify-content: center`。

*   定位布局：父元素设置`position: relative`，子元素设置`position: absolute; left: 50%; transform: translateX(-50%)`。

2.  **如何实现元素的垂直居中？列举不同场景下的方法。**

*   单行文本：设置`line-height`等于父元素高度，例如：`height: 50px; line-height: 50px`。

*   Flexbox 布局：父元素设置`display: flex; align-items: center`。

*   定位布局：父元素设置`position: relative`，子元素设置`position: absolute; top: 50%; transform: translateY(-50%)`。

*   表格布局：父元素设置`display: table`，子元素设置`display: table-cell; vertical-align: middle`。

3.  **如何实现元素的水平垂直居中**

*   基于定位（position）的居中方法
    1.  已知元素宽高的绝对定位居中
    父元素设置`position: relative`，子元素设置绝对定位，通过`top`、`left`和负 margin 值实现居中：

        ```css
        .parent {

          position: relative;

          width: 500px;

          height: 300px;

          border: 1px solid #000;

        }

        .child {

          position: absolute;

          width: 100px;

          height: 100px;

          top: 50%;

          left: 50%;

          margin-top: -50px; // 自身高度的一半

          margin-left: -50px; // 自身宽度的一半

          background: red;

        }
        ```
    2.  未知元素宽高的绝对定位居中（transform）
    父元素设置`position: relative`，子元素设置绝对定位，通过`top`、`left`和`transform`实现居中：

        ```css
        .parent {

          position: relative;

          width: 500px;

          height: 300px;

          border: 1px solid #000;

        }

        .child {

          position: absolute;

          top: 50%;

          left: 50%;

          transform: translate(-50%, -50%);

          background: red;

        }
        ```
    3.  基于 Flexbox 布局的居中方法
    Flexbox 是现代布局中实现居中最简洁的方式，父元素设置相关属性即可：


        ```css
        .parent {

          display: flex;

          justify-content: center; // 水平居中

          align-items: center; // 垂直居中

          width: 500px;

          height: 300px;

          border: 1px solid #000;

        }

        .child {

          width: 100px;

          height: 100px;

          background: green;

        }
        ```
    4. 基于 Grid 布局的居中方法
    Grid 布局作为二维布局方案，实现居中同样简单
    ```css
    .parent {

      display: grid;

      place-items: center; // 水平垂直居中

      width: 500px;

      height: 300px;

      border: 1px solid #000;

    }

    .child {

      width: 100px;

      height: 100px;

      background: green;

    }
    ```
4.  **什么是浮动（float）？浮动会带来哪些问题？如何清除浮动？**

    浮动是`float`属性定义的布局方式，使元素脱离文档流，向左或向右移动，直到碰到父元素边缘或其他浮动元素。

    带来的问题：

*   父元素高度塌陷（无法被子元素撑开）。

*   后续元素被浮动元素覆盖。

    清除浮动的方法：

*   父元素添加`overflow: hidden`（触发 BFC）。

*   使用 clearfix 伪元素：



```css
.clearfix::after {

 content: "";

 display: block;

 clear: both;

}
```



*   父元素末尾添加空元素并设置`clear: both`。

5.  **什么是 BFC？它的作用是什么？如何触发 BFC？**

    BFC（Block Formatting Context，块级格式化上下文）是一个独立的渲染区域，内部元素的布局不受外部影响，反之亦然。

    作用：

*   解决浮动元素导致的父元素高度塌陷。

*   阻止元素 margin 折叠。

*   避免元素被浮动元素覆盖。

    触发 BFC 的方式：

*   根元素（`<html>`）。

*   浮动元素（`float: left/right`，非`none`）。

*   绝对定位或固定定位元素（`position: absolute/fixed`）。

*   行内块元素（`display: inline-block`）。

*   overflow 值为`hidden`、`auto`或`scroll`的元素。

6.  **Flexbox 布局的主要属性有哪些？分别作用于容器和项目。**

    作用于容器的属性：

*   `display: flex`：定义弹性容器。

*   `flex-direction`：设置主轴方向（`row`、`row-reverse`、`column`、`column-reverse`）。

*   `justify-content`：主轴上的对齐方式（`flex-start`、`center`、`flex-end`等）。

*   `align-items`：交叉轴上的对齐方式（`flex-start`、`center`、`flex-end`等）。

*   `flex-wrap`：项目是否换行（`nowrap`、`wrap`、`wrap-reverse`）。

*   `align-content`：多根轴线的对齐方式（仅在换行时生效）。

*   `flex-grow`：项目的放大比例（默认 0，不放大）。

*   `flex-shrink`：项目的缩小比例（默认 1，空间不足时缩小）。

*   `flex-basis`：项目在主轴上的初始尺寸。

*   `flex`：`flex-grow`、`flex-shrink`、`flex-basis`的简写（默认`0 1 auto`）。

*   `align-self`：单个项目的交叉轴对齐方式（覆盖容器的`align-items`）。

7.  **Grid 布局和 Flexbox 布局有什么区别？分别适用于什么场景？**

*   维度不同：Grid 布局是二维布局（同时处理行和列），Flexbox 布局是一维布局（只能处理行或列）。

*   控制方式：Grid 布局由容器和项目共同控制，更注重整体布局结构；Flexbox 布局主要由容器控制，更注重项目在单方向上的排列和对齐。

*   适用场景：Grid 布局适合复杂的二维布局（如网页整体框架、不规则网格排列）；Flexbox 布局适合一维排列（如导航栏、列表、卡片内元素对齐）。

8.  **什么是响应式布局？实现响应式布局的方法有哪些？**

    响应式布局指网页能根据不同设备（如电脑、平板、手机）的屏幕尺寸自动调整布局和样式，提供良好的浏览体验。

    实现方法：

*   媒体查询（Media Queries）：通过`@media`规则定义不同屏幕尺寸下的样式，例如：



```css
@media (max-width: 768px) {

 .container { width: 100%; }

}
```



*   弹性布局（Flexbox）和网格布局（Grid）：利用其弹性特性自适应不同尺寸。

*   流式布局：使用百分比而非固定像素设置宽度，使元素随屏幕尺寸缩放。

*   响应式图片：通过`srcset`和`sizes`属性或`<picture>`标签加载不同尺寸的图片。

*   视口设置：在`<head>`中添加`<meta name="viewport" content="width=device-width, initial-scale=1.0">`，确保移动端正确显示。

9.  **媒体查询的语法是什么？常见的媒体特性有哪些？**

    媒体查询的基本语法：



```css
@media [媒体类型] and (媒体特性) {

 // 样式规则

}
```



```css
@media screen and (max-width: 768px) {

 body { font-size: 14px; }

}
```



*   媒体类型：`all`（所有设备，默认）、`screen`（屏幕设备）、`print`（打印设备）等。

*   常见媒体特性：`width`/`max-width`/`min-width`（屏幕宽度）、`height`/`max-height`/`min-height`（屏幕高度）、`orientation`（屏幕方向，`portrait`竖屏 /`landscape`横屏）、`resolution`（屏幕分辨率）等。

    示例：在屏幕宽度小于 768px 时应用样式

10.  **什么是定位（position）？CSS 中有哪些定位方式？**

*   定位是通过`position`属性控制元素在页面中的位置的布局方式。<br> 常见定位方式：

*   `static`（静态定位）：默认值，元素遵循正常文档流，不脱离文档流，`top`/`left`等属性无效。

*   `relative`（相对定位）：元素相对其正常位置偏移，不脱离文档流，原位置仍保留。

*   `absolute`（绝对定位）：元素脱离文档流，相对最近的已定位（非`static`）祖先元素定位，若无则相对根元素（`<html>`）。

*   `fixed`（固定定位）：元素脱离文档流，相对浏览器窗口定位，滚动页面时位置不变。

*   `sticky`（粘性定位）：结合`relative`和`fixed`特性，在滚动到指定位置前为相对定位，之后为固定定位。

11.  `relative`**、**`absolute`**、**`fixed`**定位的区别是什么？**

*   参考对象：`relative`相对自身正常位置；`absolute`相对最近的已定位祖先；`fixed`相对浏览器窗口。

*   文档流：`relative`不脱离文档流，原位置保留；`absolute`和`fixed`脱离文档流，原位置不保留。

*   滚动影响：`relative`和`absolute`位置随页面滚动变化；`fixed`位置不受滚动影响，始终固定在窗口某位置。

*   应用场景：`relative`用于微调元素位置或作为`absolute`的参考容器；`absolute`用于精确定位元素（如弹出框）；`fixed`用于固定显示元素（如导航栏、回到顶部按钮）。


## 五、字体与文本



1.  `font-family`**属性的作用是什么？如何设置多个字体备选？**

    `font-family`用于指定元素的字体类型。为保证兼容性，可设置多个字体备选，浏览器会从第一个开始查找，找到可用字体即应用。

    示例：



```css
body {

font-family: "Microsoft YaHei", Arial, sans-serif;

}
```

说明：优先使用 “微软雅黑”，若不存在则使用 Arial，若仍不存在则使用系统默认无衬线字体（`sans-serif`）。



2.  `font-weight`**的取值有哪些？**`bold`**和**`700`**有什么区别？**

    `font-weight`用于设置字体粗细，取值包括：

*   关键字：`normal`（正常，相当于 400）、`bold`（粗体，相当于 700）、`bolder`（更粗）、`lighter`（更细）。

*   数值：100-900，数值越大字体越粗（400 为正常，700 为粗体）。

    `bold`和`700`在效果上一致，`bold`是关键字形式，`700`是数值形式，两者优先级相同。

3.  **如何设置文本的行高、字间距和 letter-spacing？**

*   行高：通过`line-height`设置，控制文本行之间的间距，例如：`line-height: 1.5`（为字体大小的 1.5 倍）、`line-height: 24px`。

*   字间距：通过`word-spacing`设置单词之间的间距（对中文无效），例如：`word-spacing: 5px`。

*   字母间距：通过`letter-spacing`设置字符（字母、汉字等）之间的间距，例如：`letter-spacing: 2px`。

4.  `text-align`**和**`vertical-align`**的作用分别是什么？**

*   `text-align`：设置文本在水平方向的对齐方式，适用于块级元素，取值包括`left`（左对齐）、`center`（居中）、`right`（右对齐）、`justify`（两端对齐）。

*   `vertical-align`：设置元素在垂直方向的对齐方式，适用于行内元素和表格单元格，取值包括`baseline`（基线对齐）、`middle`（居中对齐）、`top`（顶部对齐）、`bottom`（底部对齐）等。

5.  **如何实现文本溢出显示省略号？**

    单行文本溢出：



```css
.text {

white-space: nowrap; // 禁止换行

overflow: hidden; // 隐藏溢出内容

text-overflow: ellipsis; // 溢出部分显示省略号

width: 200px; // 需设置固定宽度

}
```

多行文本溢出（webkit 内核浏览器）：



```css
.text {

display: -webkit-box;

-webkit-box-orient: vertical;

-webkit-line-clamp: 3; // 显示3行 

overflow: hidden;

width: 200px;

}
```

## 六、背景与边框



1.  `background`**属性的简写形式包含哪些子属性？**

    `background`是复合属性，包含以下子属性（顺序无严格要求，但建议按此顺序书写）：



``` css
.box {

 background: #f0f0f0 url("bg.jpg") no-repeat center/cover fixed;

}
```



*   `background-color`：背景颜色。

*   `background-image`：背景图片（`url()`）。

*   `background-repeat`：背景图片重复方式（`repeat`、`no-repeat`等）。

*   `background-position`：背景图片位置（`center`、`top left`等）。

*   `background-size`：背景图片大小（`cover`、`contain`等，需单独写在`background`后或用`/`分隔位置）。

*   `background-attachment`：背景图片固定方式（`scroll`、`fixed`等）。

    示例：

2.  `background-image`**和**`img`**标签有什么区别？**

*   语义：`img`标签用于显示页面核心内容图片（如产品图），具有语义；`background-image`用于装饰性背景，无语义。

*   可控性：`img`标签可通过`alt`属性提供替代文本，支持`srcset`实现响应式；`background-image`需通过 CSS 控制显示，无法直接提供替代文本。

*   加载：`img`标签的图片会影响页面布局和加载顺序；`background-image`的图片可能在页面主体加载后加载。

*   适用场景：`img`用于重要图片内容；`background-image`用于背景装饰、图标等。

3.  **如何实现背景图片的平铺、拉伸和自适应？**

*   平铺：通过`background-repeat`控制，`repeat`（默认，水平和垂直平铺）、`repeat-x`（水平平铺）、`repeat-y`（垂直平铺）、`no-repeat`（不平铺）。

*   拉伸：`background-size: 100% 100%`，图片会拉伸至填满容器，可能导致变形。

*   自适应：`background-size: cover`（图片等比例缩放，填满容器，超出部分裁剪）、`background-size: contain`（图片等比例缩放，完整显示在容器内，可能留空白）。

4.  `border`**属性的简写形式是什么？如何设置圆角边框和虚线边框？**

    `border`简写形式：`border: width style color`，例如：`border: 1px solid #000`（1px 宽、实线、黑色边框）。

*   圆角边框：通过`border-radius`设置，例如：`border-radius: 5px`（四角均为 5px 圆角）、`border-top-left-radius: 10px`（仅左上角圆角）。

*   虚线边框：通过`border-style`设置为`dashed`（虚线）或`dotted`（点线），例如：`border: 2px dashed red`。

5.  **如何实现边框的三角形效果？**

    利用边框的梯形特性，将元素宽高设为 0，通过设置不同边框的颜色和宽度实现三角形：



```css
.triangle {

 width: 0;

 height: 0;

 border-width: 20px;

 border-style: solid;

 border-color: red transparent transparent transparent; /\* 上三角（红色），其他方向透明 \*/

}
```

说明：修改`border-color`的方向值（如`transparent blue transparent transparent`为右三角）可改变三角形方向。

## 七、动画与过渡



1.  **什么是 CSS 过渡（transition）？它的作用是什么？**

    CSS 过渡允许元素的样式在一定时间内平滑变化，而不是瞬间切换。作用是为元素的状态变化（如 hover、click）添加动画效果，提升用户体验。

    基本语法：



```css
.box {

 transition: property duration timing-function delay;

}
```



```css
.box { width: 100px; transition: width 0.3s ease; }

.box:hover { width: 200px; }
```



*   `property`：需要过渡的 CSS 属性（如`width`、`all`表示所有属性）。

*   `duration`：过渡时间（如`0.3s`）。

*   `timing-function`：过渡速度曲线（如`ease`、`linear`）。

*   `delay`：延迟开始时间（如`0.1s`）。

    示例：鼠标悬停时宽度平滑变化

2.  **CSS 动画（animation）和过渡（transition）有什么区别？**

*   触发方式：过渡需要通过事件（如 hover）触发，动画可自动触发（通过`animation-play-state`控制）。

*   复杂度：过渡适合简单的状态变化（从 A 到 B）；动画可定义多个关键帧（`@keyframes`），实现更复杂的序列效果。

*   控制程度：动画支持暂停（`paused`）、播放（`running`）、循环次数（`animation-iteration-count`）等；过渡一旦开始无法暂停，需等待完成或触发反向事件。

3.  **如何使用**`@keyframes`**定义动画？**

    `@keyframes`用于定义动画的关键帧（动画序列中的特定状态），语法：



```css
@keyframes animationName {

 0% { // 动画开始时的样式 }

 50% { // 动画中间时的样式 }

 100% { // 动画结束时的样式 }

}
```

然后通过`animation`属性应用到元素：



```css
.box {

 animation: animationName 2s ease infinite alternate;

}
```

示例：实现元素左右移动动画



```css
@keyframes move {

 0% { transform: translateX(0); }

 100% { transform: translateX(200px); }

}

.box { animation: move 1s ease infinite alternate; }
```



4.  `transform`**属性有哪些常用功能？**

    `transform`用于对元素进行旋转、缩放、平移、倾斜等变换，常用功能：



```
.box:hover { transform: scale(1.2) rotate(10deg); }
```


*   `translate(x, y)`：平移元素（`translateX(x)`水平平移，`translateY(y)`垂直平移）。

*   `scale(x, y)`：缩放元素（`scaleX(x)`水平缩放，`scaleY(y)`垂直缩放，值为 1 时不变）。

*   `rotate(deg)`：旋转元素（单位为度，如`rotate(30deg)`顺时针旋转 30 度）。

*   `skew(x-deg, y-deg)`：倾斜元素（`skewX(x-deg)`水平倾斜，`skewY(y-deg)`垂直倾斜）。

*   `matrix()`：通过矩阵变换组合以上效果。

    示例：元素悬停时放大并旋转

5.  `transition`**和**`animation`**中使用**`transform`**有什么优势？**

*   性能更好：`transform`变换由 GPU 加速，比修改`width`、`top`等属性更高效，减少页面重绘（repaint）和重排（reflow）。

*   效果更流畅：避免因重排导致的动画卡顿，尤其在移动设备上表现更优。

*   支持 3D 效果：`transform`的 3D 属性（如`perspective`、`rotateX`）可实现立体动画，而传统属性难以实现。
## 八、css变量
1.  什么是css变量？
    css变量是一种特殊的属性，用于存储重复使用的值，如颜色、字体大小等。
2.  如何定义css变量？
    定义css变量使用`--`前缀，例如：`--primary-color: #007bff;`
3.  如何使用css变量？
    使用css变量使用`var()`函数，例如：`color: var(--primary-color);`
    示例：
    ```css
    :root {
        --primary-color: #007bff;
    }
    .box {
        color: var(--primary-color);
    }
    ```
4. css实现换肤
   * 定义基础变量\
   在根元素（:root）中定义全局通用的 CSS 变量，作为默认主题（如浅色模式）。变量名需以 -- 开头，通常按功能分类命名（如颜色、字体、间距等）
   ```css
    :root {​
        /* 颜色变量 */​
        --primary-color: #4285f4; /* 主色调 */​
        --bg-color: #ffffff; /* 背景色 */​
        --text-color: #333333; /* 文本色 */​
        --border-color: #e0e0e0; /* 边框色 */​
    }
   ```
   * 定义其他主题变量\
   为其他主题（如深色模式）定义专属变量，可通过给 html 或 body 添加特定类名（如 dark-theme）来隔离作用域。
   ```css
   :root.dark-theme {​
        --primary-color: #8ab4f8; /* 主色调变亮 */​
        --bg-color: #1a1a1a; /* 背景色加深 */​
        --text-color: #f5f5f5; /* 文本色变浅 */​
        --border-color: #333333; /* 边框色加深 */​
    }
   ```
   * 在样式中使用变量
   定义好变量后，在样式中使用`var()`函数引用变量，例如：`color: var(--primary-color);`
   示例：
   ```css
   .box {
        color: var(--primary-color);
    }
   ```
   * 切换主题
     1. 通过 JavaScript 切换主题\
     通过修改 html 元素的类名，切换 CSS 变量的作用域，实现主题动态切换。同时可将用户选择的主题保存到 localStorage，实现刷新后保持主题状态
     ```js
        <!-- 主题切换按钮 -->
        <button id="themeToggle">切换深色模式</button>
        <!-- 切换主题的 JavaScript 代码 -->
        <script>
            const themeToggleDom = document.getElementById('themeToggle');​
            function toggleTheme() {
                const isDark = document.documentElement.classList.toggle('dark-theme');​
                ​
                // 更新按钮文本​
                themeToggleDom.textContent = isDark ? '切换浅色模式' : '切换深色模式';​
                ​
                // 保存主题偏好到本地存储​
                if (isDark) {​
                    localStorage.setItem('preferred-theme', 'dark-theme');​
                } else {​
                    localStorage.removeItem('preferred-theme');​
                }​
            }
            themeToggleDom.addEventListener('click', toggleTheme);
            // 页面加载时检查本地存储，应用保存的主题
            window.addEventListener('load', () => {
                const preferredTheme = localStorage.getItem('preferred-theme');
                if (preferredTheme) {
                    document.documentElement.classList.add(preferredTheme);
                }
            })
        </script>
     ```
     2. 自动识别系统主题\
     通过 window.matchMedia 检测用户操作系统的主题偏好（如深色模式），自动应用对应主题
     示例：
     ```js
     // 检测用户操作系统的主题偏好
     const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
     // 监听主题偏好变化事件
     prefersDarkScheme.addEventListener('change', (e) => {
        const isDark = e.matches;
        // 切换主题
        toggleTheme(isDark);
     });
     ```

## 九、css预处理
1.  什么是css预处理？
    css预处理是指在css代码编写过程中，使用一种特殊的语法和工具，将其转换为标准的css代码。
2.  scss
    scss是一种css的预处理语言，它扩展了css的功能，增加了变量、嵌套、Mixin、继承等特性，使css代码更加简洁、易维护。
    变量：
    scss允许定义变量，用于存储重复使用的值，如颜色、字体大小等。
    示例：
    ```scss
    $primary-color: #007bff;
    .box {
        color: $primary-color;
    }
    ```

    嵌套：
    scss允许将选择器嵌套在其他选择器内部，使代码更加清晰、易读。
    示例：
    ```scss
    .container {
        width: 100%;
        .box {
            width: 50%;
        }
    }
    ```

    Mixin：
    scss允许定义可重复使用的代码块，称为Mixin。
    示例：
    ```scss
    @mixin flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .box {
        @include flex-center;
    }
    ```

    继承：
    scss允许一个选择器继承另一个选择器的样式，称为继承。
    示例：
    ```scss
    .box {
        width: 100px;
        height: 100px;
    }
    .box2 {
        @extend .box;
        background-color: red;
    }
    ```

    函数：
    scss允许定义函数，用于计算值或处理字符串等。
    示例：
    ```scss
    @function double($value) {
        @return $value * 2;
    }
    .box {
        width: double(100px);
    }
    ```

    条件语句：
    scss允许使用条件语句，如`@if`、`@else if`、`@else`等。
    示例：
    ```scss
    @if 100px > 200px {
        .box {
            width: 100px;
        }
    } @else {
        .box {
            width: 200px;
        }
    }
    ```

    循环语句：
    scss允许使用循环语句，如`@for`、`@each`、`@while`等。
    示例：
    ```scss
    @for $i from 1 through 3 {
        .box#{$i} {
            width: 100px * $i;
        }
    }
    ```

    运算符：
    scss允许使用运算符，如`+`、`-`、`*`、`/`等。
    示例：
    ```scss
    .box {
        width: 100px + 200px;
    }
    ```
    math函数：
    scss允许使用math函数，如`round()`、`ceil()`、`floor()`、`percentage()`等。
    示例：
    ```scss
    .box {
        width: round(100.5px);
    }
    ```

    字符串函数：
    scss允许使用字符串函数，如`unquote()`、`quote()`、`to-upper-case()`、`to-lower-case()`等。
    示例：
    ```scss
    .box {
        content: unquote('hello');
    }
    ```

    列表函数：
    scss允许使用列表函数，如`length()`、`nth()`、`join()`、`append()`等。
    示例：
    ```scss
    .box {
        content: length(100px 200px 300px);
    }
    ```

    颜色函数：
    scss允许使用颜色函数，如`rgba()`、`hsla()`、`lighten()`、`darken()`等。
    示例：
    ```scss
    .box {
        background-color: rgba(255, 0, 0, 0.5);
    }
    ```

    时间函数：
    scss允许使用时间函数，如`time()`、`date()`、`month()`、`year()`等。
    示例：
    ```scss
    .box {
        content: time();
    }
    ```

    其他函数：
    scss允许使用其他函数，如`random()`、`abs()`、`min()`、`max()`等。
    示例：
    ```scss
    .box {
        content: random();
    }
    ```
    
    导入：
    scss允许使用`@import`导入其他scss文件，如`@import 'variables.scss';`。
    示例：
    ```scss
    @import 'variables.scss';
    .box {
        color: $primary-color;
    }
    ```
3. less
    less是一种css的预处理语言，它扩展了css的功能，增加了变量、嵌套、Mixin、继承等特性，使css代码更加简洁、易维护。
    变量：
    less允许定义变量，用于存储重复使用的值，如颜色、字体大小等。
    示例：
    ```less
    @primary-color: #007bff;
    .box {
        color: @primary-color;
    }
    ```
    嵌套：
    less允许将选择器嵌套在其他选择器内部，使代码更加清晰、易读。
    示例：
    ```less
    .container {
        width: 100%;
        .box {
            width: 50%;
        }
    }
    ```
    Mixin：
    less允许定义可重复使用的代码块，称为Mixin。
    示例：
    ```less
    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .box {
        .flex-center;
    }
    ```
    继承：
    less允许一个选择器继承另一个选择器的样式，称为继承。
    示例：
    ```less
    .box {
        width: 100px;
        height: 100px;
    }
    .box2 {
        &:extend(.box);
        background-color: red;
    }
    ```
    条件语句：
    less允许使用`@when`语句，根据条件判断是否应用样式。
    示例：
    ```less
    @primary-color: #007bff;
    .box {
        color: @primary-color;
    }
    .box2 {
        @when @primary-color == #007bff {
            background-color: red;
        }
    }
    ```
    循环语句：
    通过混合自我调用 + 条件判断实现循环终止，类似 for 循环的效果。
    示例：
    ```less
    .loop(@n) when (@n > 0) {
        .box-@{n} {
            width: 100px * @n;
        }
        .loop(@n - 1);
    }
    .loop(3);
    ```
