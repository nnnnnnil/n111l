# HTML

HTML（超文本标记语言）是用于创建网页的标准标记语言。

## 一、基础概念

1.  **什么是 HTML？它的全称是什么？**

    HTML 是超文本标记语言（HyperText Markup Language），是用于创建网页的标准标记语言。它通过标签描述网页的结构和内容，包括文本、图像、链接等元素。

2.  **HTML5 相比 HTML4 有哪些主要改进？**

*   新增语义化标签（如`<header>`、`<footer>`、`<article>`等），增强文档结构的可读性和可维护性。

*   原生支持音频和视频（`</think>`、`<video>`标签），无需依赖插件。

*   引入 Canvas 绘图、SVG 矢量图形等富媒体功能。

*   新增本地存储（localStorage、sessionStorage）、地理定位、Web Worker 等 API。

*   简化 DOCTYPE 声明（`<!DOCTYPE html>`），不再需要复杂的 DTD 引用。

*   增强表单功能，新增多种输入类型（如`email`、`number`）和验证属性（如`required`）。

3.  **DOCTYPE 的作用是什么？HTML5 的 DOCTYPE 如何声明？**

    DOCTYPE（文档类型声明）的作用是告诉浏览器当前文档使用的 HTML 版本规范，以便浏览器正确解析和渲染页面。

    HTML5 的 DOCTYPE 声明为：`<!DOCTYPE html>`，它简洁且不区分大小写。

4.  **什么是 HTML 语义化？它有什么重要性？**

    HTML 语义化是指使用合适的 HTML 标签来描述内容的含义，使标签本身能清晰表达其包含内容的性质。

    重要性：

*   提高代码可读性和可维护性，便于开发者理解页面结构。

*   帮助搜索引擎更好地解析页面内容，提升 SEO 效果。

*   有利于无障碍访问，屏幕阅读器等辅助工具可通过语义标签准确解读内容。

5.  **HTML 中的注释如何书写？**

    HTML 注释以`<!--`开头，以`-->`结尾，例如：`<!-- 这是一条注释 -->`。注释内容不会被浏览器解析显示，但会保留在源代码中，用于开发者标注代码功能。

6.  **网页的基本结构由哪些标签组成？**

    基本结构包括：

*   `<!DOCTYPE html>`：文档类型声明。

*   `<html>`：根标签，包含整个 HTML 文档。

*   `<head>`：头部标签，存放文档的元数据（如标题、字符编码、样式等）。

*   `<title>`：定义网页标题，显示在浏览器标签栏。

*   `<body>`：主体标签，包含网页的可见内容（文本、图像、链接等）。

7.  **HTML 和 XHTML 有什么区别？**

*   语法严格性：XHTML 是 XML 的应用，语法更严格，要求标签必须闭合（如`<br/>`）、标签名小写、属性值必须加引号等；HTML 语法相对宽松。

*   文档声明：XHTML 需要指定严格的 DTD（如`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"...>`）；HTML5 则使用简化的声明。

*   兼容性：XHTML 对旧浏览器兼容性较差，而 HTML 兼容性更广。

8.  **什么是 SGML？HTML 与 SGML 的关系是什么？**

    SGML（Standard Generalized Markup Language，标准通用标记语言）是一种定义标记语言的元语言，用于规定文档的结构和格式。

    HTML 是 SGML 的一个应用实例，早期 HTML（如 HTML4.01）基于 SGML 制定，因此需要在 DOCTYPE 中引用 SGML 的 DTD（文档类型定义）；而 HTML5 不再基于 SGML，因此 DOCTYPE 声明更简洁。

9.  **HTML5 的文档类型声明为什么比 HTML4 简单？**

    HTML4 基于 SGML，需要在 DOCTYPE 中指定复杂的 DTD（文档类型定义）来定义文档的语法规则；而 HTML5 不再基于 SGML，自身包含了完整的语法规范，因此只需简单声明`<!DOCTYPE html>`即可，无需引用外部 DTD。

## 二、标签与元素



1.  `<div>`和`<span>`标签有什么区别？分别在什么场景下使用？

*   显示方式：`<div>`是块级元素，默认独占一行，可设置宽高；`<span>`是行内元素，默认在一行内显示，不能直接设置宽高。

*   使用场景：`<div>`用于划分页面的大块结构（如头部、主体、底部），适合组合块级元素；`<span>`用于包裹行内文本或小范围内容（如突出显示某段文字），适合修饰行内元素。

2.  **列举几种常见的块级元素和行内元素。**

    块级元素：`<div>`、`<p>`、`<h1>`-`<h6>`、`<ul>`、`<ol>`、`<li>`、`<table>`、`<form>`、`<header>`、`<footer>`等。

    行内元素：`<span>`、`<a>`、`<img>`、`<strong>`、`<em>`、`<i>`、`<b>`、`<input>`、`<label>`等。

3.  `<img>`标签的`src`和`alt`属性分别有什么作用？

*   `src`：指定图像的 URL（路径），用于加载并显示图像。

*   `alt`：当图像无法加载时，显示替代文本，帮助用户理解图像内容，同时有利于 SEO 和无障碍访问。

4.  `<a>`标签的`href`和`target`属性有什么作用？`target`的取值有哪些？

*   `href`：指定链接的目标地址（URL），可以是网页、文件、锚点等。

*   `target`：指定链接在何处打开。

    取值包括：


    *   `_self`：默认值，在当前窗口打开。

    *   `_blank`：在新窗口或新标签页打开。

    *   `_parent`：在父框架中打开。

    *   `_top`：在整个窗口中打开，忽略框架。

5.  `<br>`和`<hr>`标签的作用是什么？

*   `<br>`：插入一个换行符，用于在文本中强制换行（行内换行）。

*   `<hr>`：插入一条水平分隔线，用于分隔页面中的不同内容区块，视觉上划分内容。

6.  `<strong>`和`<b>`标签，`<em>`和`<i>`标签有什么区别？

*   `<strong>`和`<b>`：两者都能使文本加粗，但`<strong>`具有语义，强调文本的重要性；`<b>`仅用于视觉加粗，无语义。

*   `<em>`和`<i>`：两者都能使文本斜体，但`<em>`具有语义，强调文本的语气或重点；`<i>`仅用于视觉斜体，无语义（常用于表示外来语、技术术语等）。

7.  `<table>`标签相关的`<tr>`、`<td>`、`<th>`、`<thead>`、`<tbody>`、`<tfoot>`分别表示什么？

*   `<tr>`：表格行（table row），用于定义表格中的一行。

*   `<td>`：表格数据单元格（table data），用于存放表格内容。

*   `<th>`：表格表头单元格（table header），用于定义表头，内容默认加粗居中。

*   `<thead>`：表格头部，包含表格的表头信息，用于组织表格结构。

*   `<tbody>`：表格主体，包含表格的主要数据内容。

*   `<tfoot>`：表格底部，包含表格的汇总信息（如总计）。

8.  `<ul>`、`<ol>`、`<li>`标签的作用是什么？它们之间有什么区别？

*   `<ul>`：无序列表（unordered list），列表项前默认显示圆点等符号，无顺序之分。

*   `<ol>`：有序列表（ordered list），列表项前默认显示数字或字母，有顺序之分。

*   `<li>`：列表项（list item），用于定义`<ul>`或`<ol>`中的每个项，必须嵌套在`<ul>`或`<ol>`中。

    区别：`<ul>`的列表项无顺序，`<ol>`的列表项有明确顺序（如步骤、排名）。

9.  `<form>`标签的作用是什么？它有哪些常用属性？

*   作用：用于创建表单，收集用户输入的数据并提交到服务器。

*   常用属性：


    *   `action`：指定表单数据提交的目标 URL。

    *   `method`：指定提交方式（`get`或`post`）。

    *   `name`：指定表单名称。

    *   `id`：表单唯一标识，用于关联样式或脚本。

    *   `enctype`：指定表单数据的编码方式（如文件上传时需设置为`multipart/form-data`）。

10.  `<label>`标签的作用是什么？如何与表单元素关联？

*   作用：为表单元素定义标签，点击标签时会触发关联的表单元素（如聚焦输入框、选中复选框），提升用户体验。

*   关联方式：


    *   通过`for`属性与表单元素的`id`属性关联，例如：`<label for="username">用户名：</label><input type="text" id="username">`。

    *   将表单元素嵌套在`<label>`标签内，例如：`<label>用户名：<input type="text"></label>`。

11.  `<input>`标签有哪些常见的`type`属性值？分别表示什么输入类型？

    常见值包括：

*   `text`：单行文本输入框。

*   `password`：密码输入框，输入内容以圆点或星号显示。

*   `radio`：单选按钮，用于从多个选项中选择一个。

*   `checkbox`：复选框，用于从多个选项中选择多个。

*   `submit`：提交按钮，用于提交表单数据。

*   `reset`：重置按钮，用于重置表单数据为默认值。

*   `button`：普通按钮，需配合 JavaScript 实现自定义功能。

*   `file`：文件上传控件，用于选择本地文件。

*   `email`：邮箱输入框，会自动验证输入格式是否符合邮箱规则。

*   `number`：数字输入框，只允许输入数字。

*   `date`：日期选择器，用于选择日期。

12.  `<select>`和`<option>`标签如何配合使用？

*   `<select>`用于创建下拉选择框，<br>`<option>`用于定义下拉框中的选项，需嵌套在`<select>`中。例如：



```html
<select name="city">

    <option value="beijing">北京</option>

    <option value="shanghai">上海</option>

</select>
```

用户选择的选项值（`value`）会随表单提交，默认选中项可通过`<option selected>`设置。



13.  `<textarea>`标签与`<input type="text">`有什么区别？

*   输入内容：`<textarea>`用于多行文本输入，可换行；`<input type="text">`用于单行文本输入，不能换行。

*   尺寸设置：`<textarea>`通过`rows`和`cols`属性或 CSS 设置宽高；`<input type="text">`通过`size`属性或 CSS 设置宽度（高度通常由字体大小决定）。

*   默认值：`<textarea>`的默认值写在标签内容中（如`<textarea>默认文本</textarea>`）；`<input type="text">`的默认值通过`value`属性设置。

14.  `<button>`标签的`type`属性有哪些取值？分别有什么作用？

*   `submit`：默认值，点击时提交表单数据。

*   `reset`：点击时重置表单数据为默认值。

*   `button`：普通按钮，无默认行为，需通过 JavaScript 绑定事件实现功能。

15.  `<header>`、`<footer>`、`<nav>`、`<article>`、`<section>`等 HTML5 语义化标签的作用是什么？

*   作用：这些标签增强了文档的语义性，使结构更清晰，便于机器解析和开发者维护。

*   `<header>`：定义页面或区块的头部，通常包含标题、logo、导航等。

*   `<footer>`：定义页面或区块的底部，通常包含版权信息、联系方式等。

*   `<nav>`：定义导航区域，包含链接列表，用于页面内或页面间的导航。

*   `<article>`：定义独立的、完整的内容块（如博客文章、新闻报道），可独立于页面其他内容存在。

*   `<section>`：定义页面中的一个区块，用于组织相关内容，通常包含标题和内容。

## 三、表单相关



1.  **表单提交的方式有哪些？**`get`**和**`post`**有什么区别？**

    常见提交方式有`get`和`post`（通过`<form method>`设置）。

    区别：

*   数据传递：`get`将数据附加在 URL 后（如`?name=xxx&age=20`），可见；`post`将数据放在请求体中，不可见。

*   数据大小：`get`受 URL 长度限制，适合传递少量数据；`post`无严格大小限制，适合传递大量数据（如文件）。

*   安全性：`post`更安全，`get`不适合传递敏感信息（如密码）。

*   缓存：`get`请求可被缓存，`post`请求通常不被缓存。

*   用途：`get`用于获取数据，`post`用于提交数据（如创建、修改资源）。

2.  **如何实现表单的验证？HTML5 提供了哪些表单验证属性？**

    实现方式：

*   HTML5 原生验证：使用内置属性进行验证，无需 JavaScript。

*   自定义验证：通过 JavaScript 编写验证逻辑。

    HTML5 表单验证属性：

*   `required`：表示字段为必填项。

*   `pattern`：指定正则表达式，验证输入内容格式。

*   `min`/`max`：用于数字或日期类型，限制最小值 / 最大值。

*   `minlength`/`maxlength`：限制输入文本的最小 / 最大长度。

*   `type`：通过特定类型（如`email`、`url`）自动验证格式。

*   `step`：用于数字或日期类型，指定步长。

3.  `required`**属性的作用是什么？**

    `required`属性用于指定表单字段为必填项。当表单提交时，若该字段未填写，浏览器会阻止提交并显示提示信息（如 “请填写此字段”），无需额外编写 JavaScript 验证逻辑。

4.  `placeholder`**属性的作用是什么？**

    `placeholder`属性用于在表单输入框中显示提示文本（如输入格式、示例内容），当用户开始输入时，提示文本自动消失。它帮助用户理解字段的输入要求，提升用户体验，例如：`<input type="email" placeholder="请输入邮箱地址">`。

5.  `pattern`**属性如何使用？**

    `pattern`属性用于指定一个正则表达式，验证表单输入字段的内容格式。当用户输入内容不符合正则表达式规则时，表单提交会被阻止，且显示提示信息。

    示例：限制密码为 6-12 位字母或数字：

    `<input type="password" pattern="^[A-Za-z0-9]{6,12}$" title="密码为6-12位字母或数字">`

    其中`title`属性用于设置验证失败时的提示文本。

6.  **什么是表单控件的**`name`**属性？它有什么作用？**

    `name`属性用于为表单控件指定名称，作为表单数据的标识符。当表单提交时，数据以 “`name=value`” 的形式发送到服务器，服务器通过`name`获取对应的值。

    注意：只有设置了`name`属性的表单控件，其数据才会被提交；同一组单选按钮需设置相同的`name`属性，以实现互斥选择。

7.  **如何禁用一个表单元素？**

    可通过`disabled`属性禁用表单元素，禁用后元素不可编辑、不可点击，且其数据不会随表单提交。例如：

    `<input type="text" disabled>`

    `<button type="submit" disabled>提交</button>`

86.  **如何设置表单元素的默认值？**

*   文本输入类（`text`、`password`等）：通过`value`属性设置，例如：`<input type="text" value="默认值">`。

*   单选按钮（`radio`）和复选框（`checkbox`）：通过`checked`属性设置默认选中，例如：`<input type="radio" name="gender" value="male" checked>`。

*   下拉选择框（`<select>`）：在`<option>`标签中添加`selected`属性，例如：`<option value="apple" selected>苹果</option>`。

*   文本域（`<textarea>`）：默认值写在标签内容中，例如：`<textarea>默认文本</textarea>`。

9.  **文件上传控件**`<input type="file">`**有哪些常用属性？**

*   `accept`：指定可上传的文件类型，例如：`accept="image/*"`（仅图片）、`accept=".pdf,.doc"`（仅 PDF 和 Word 文件）。

*   `multiple`：允许选择多个文件，例如：`<input type="file" multiple>`。

*   `name`：指定控件名称，用于表单提交时标识文件数据。

10.  **如何实现表单的重置功能？**

*   可通过`<input type="reset">`或`<button type="reset">`创建重置按钮，点击后表单元素会恢复到默认值。例如：

    `<input type="reset" value="重置">`

    或

    `<button type="reset">重置</button>`

## 四、语义化与结构

1.  **为什么要使用语义化标签？它对搜索引擎和无障碍访问有什么影响？**

    使用语义化标签能让 HTML 文档结构更清晰，标签含义更明确，便于开发者理解和维护代码。

    对搜索引擎：语义化标签能帮助搜索引擎更准确地识别页面内容的核心和层次，提升页面在搜索结果中的排名（SEO 优化）。

    对无障碍访问：屏幕阅读器等辅助工具可通过语义标签快速解析页面结构，为视障用户提供更清晰的内容导航，提升无障碍体验。

2.  **列举几个 HTML5 中新增的语义化标签，并说明其使用场景。**

*   `<main>`：定义页面的主要内容区域，一个页面通常只有一个`<main>`，用于包含与页面核心主题相关的内容。

*   `<aside>`：定义侧边栏内容，通常包含与主内容相关的附加信息（如注释、引用、广告等）。

*   `<figure>`和`<figcaption>`：`<figure>`用于包裹独立的媒体内容（如图像、图表、代码片段），`<figcaption>`为其提供标题，例如：


```html
<figure>

    <img src="image.jpg" alt="示例图片">

    <figcaption>这是一张示例图片</figcaption>

</figure>
```



*   `<time>`：用于表示日期或时间，便于机器识别，例如：`<time datetime="2024-05-20">2024年5月20日</time>`。

3.  **如何构建一个语义化的页面结构？**

*   合理使用 HTML5 语义化标签（如`<header>`、`<nav>`、`<main>`、`<article>`、`<section>`、`<footer>`等）划分页面区块。

*   按内容层级使用标题标签（`<h1>`-`<h6>`），`<h1>`表示最高级标题，依次递减，避免跳过层级使用。

*   对列表内容使用`<ul>`、`<ol>`、`<li>`，对表格内容使用`<table>`及相关标签，确保内容与标签语义匹配。

*   避免滥用`<div>`和`<span>`，仅在无合适语义标签时使用。

4.  **使用非语义化标签（如大量使用**`<div>`**）会有什么问题？**

*   代码可读性差：开发者难以快速理解页面结构和内容含义，增加维护成本。

*   不利于 SEO：搜索引擎无法通过标签识别内容重要性和层次，影响页面排名。

*   无障碍访问体验差：屏幕阅读器无法有效解析内容结构，视障用户难以导航。

*   代码冗余：可能需要添加大量类名或 ID 来区分区块，增加代码量。

5.  **如何让旧版本浏览器支持 HTML5 的语义化标签？**

*   手动创建标签并设置为块级元素：旧版本 IE（如 IE8 及以下）不识别 HTML5 新标签，可通过 JavaScript 创建标签，并在 CSS 中设置为块级元素，例如：



```js
document.createElement('header');

document.createElement('footer');
```



```css
header, footer, nav, article, section { display: block; }
```


## 五、HTML5 新特性



1.  **HTML5 中提供了哪些存储方式？它们有什么区别？**

    HTML5 提供的主要存储方式包括：

*   `localStorage`：本地存储，数据永久保存（除非手动删除），容量较大（通常为 5-10MB），同一域名下的页面可共享数据。

*   `sessionStorage`：会话存储，数据仅在当前会话（页面关闭后消失）有效，容量较小，不同标签页 / 窗口间不共享数据。

*   `Cookie`：数据大小限制严格（约 4KB），可设置过期时间，每次请求会自动携带到服务器，适合存储少量身份验证信息。

*   `IndexedDB`：基于 JavaScript 的对象数据库，支持存储复杂数据，异步操作，容量大，适合存储大量结构化数据。

2.  **什么是 Web Storage？它包括哪两种存储方式？**

    Web Storage 是 HTML5 提供的在客户端存储数据的机制，用于在浏览器中保存键值对数据，相比 Cookie 更安全、容量更大，且不影响服务器性能。

    包括两种存储方式：

*   `localStorage`：数据长期保存，跨会话有效。

*   `sessionStorage`：数据仅在当前会话（页面打开期间）有效，页面关闭后删除。

3.  **Cookie 和 Web Storage 有什么区别？**

*   存储容量：Cookie 约 4KB，Web Storage（`localStorage`/`sessionStorage`）通常为 5-10MB。

*   生命周期：Cookie 可设置过期时间，到期后自动删除；`localStorage`永久保存，`sessionStorage`随会话结束删除。

*   通信方式：Cookie 每次 HTTP 请求都会被携带到服务器；Web Storage 仅在客户端存储，不与服务器交互。

*   安全性：Web Storage 相对更安全，不易被篡改和拦截；Cookie 需注意设置`HttpOnly`等属性防止 XSS 攻击。

1.  **HTML5 中的地理定位 API 如何使用？**

    地理定位 API 用于获取用户的地理位置信息，使用`navigator.geolocation`对象实现，步骤如下：



```js
// 获取当前位置

navigator.geolocation.getCurrentPosition(

// 成功回调
 (position) => {

    const latitude = position.coords.latitude; // 纬度

    const longitude = position.coords.longitude; // 经度

    console.log(`纬度：${latitude}，经度：${longitude}`);

},

 // 失败回调

 (error) => {

    console.error('获取位置失败：', error.message);

 }

);

// 监听位置变化

const watchId = navigator.geolocation.watchPosition((position) => {

    console.log('位置更新：', position.coords);

});

// 停止监听

navigator.geolocation.clearWatch(watchId);
```

注意：使用前需获得用户授权，且在 HTTPS 环境下才能正常工作（本地开发`localhost`除外）。



4.  **什么是 Web Worker？它的作用是什么？**

    Web Worker 是 HTML5 提供的在后台线程中运行 JavaScript 的机制，允许主线程（UI 线程）与工作线程并行处理任务。

    作用：

*   避免复杂计算阻塞主线程，防止页面卡顿或无响应。

*   实现多线程并发处理，提升处理大量数据或耗时操作（如数据分析、大型计算）的效率。

    限制：Web Worker 无法访问 DOM、`window`对象，只能通过消息传递与主线程通信。

5.  **HTML5 中的**`history`**API 有什么作用？**

    `history`API 用于操作浏览器的历史记录，允许在不刷新页面的情况下修改 URL 和历史记录，实现单页应用（SPA）的路由跳转。

    主要方法：

*   `history.pushState(state, title, url)`：添加新的历史记录条目，不触发页面刷新。

*   `history.replaceState(state, title, url)`：替换当前历史记录条目，不触发页面刷新。

*   `history.back()`/`history.forward()`/`history.go(n)`：导航到历史记录中的前一页、后一页或指定页。

    当历史记录变化时，会触发`popstate`事件，可通过监听该事件处理路由变化。

6.  **HTML5 中的应用缓存（Application Cache）有什么作用？**

    应用缓存允许浏览器将网页资源（HTML、CSS、JavaScript、图片等）缓存到本地，使页面在离线时仍可访问，提升页面加载速度和离线体验。

    使用方法：通过`<html manifest="cache.manifest">`指定缓存清单文件（`.manifest`），清单文件中列出需要缓存的资源、不缓存的资源和离线 fallback 页面。

    注意：HTML5 应用缓存已逐渐被 Service Worker 替代，现代开发更推荐使用 Service Worker 实现更灵活的缓存控制。

7.  **HTML5 中新增的事件有哪些？**

    新增事件包括：

*   表单相关：`input`（输入框内容变化时触发）、`invalid`（表单验证失败时触发）。

*   媒体相关：`play`（媒体开始播放时）、`pause`（媒体暂停时）、`ended`（媒体播放结束时）。

*   触摸相关：`touchstart`（触摸开始）、`touchmove`（触摸移动）、`touchend`（触摸结束）。

*   其他：`devicemotion`（设备运动时）、`orientationchange`（设备方向变化时）、`hashchange`（URL 哈希变化时）。

## 六、SVG 与 Canvas



1.  **什么是 SVG？它与位图图像有什么区别？**

    SVG（Scalable Vector Graphics，可缩放矢量图形）是一种基于 XML 的矢量图像格式，通过数学指令描述图形的形状、颜色等信息。

    与位图（如 PNG、JPG）的区别：

*   缩放性：SVG 图像放大或缩小后不会失真，保持清晰；位图放大后会出现像素化模糊。

*   存储方式：SVG 以文本格式存储，体积通常较小，可被搜索引擎索引；位图存储像素信息，放大后文件体积增大。

*   编辑性：SVG 可通过文本编辑器或矢量图形软件修改，支持 CSS 样式和 JavaScript 交互；位图需通过图像编辑软件修改。

*   适用场景：SVG 适合图标、Logo、图表等简单图形；位图适合照片、复杂图像等。

2.  **SVG 和 Canvas 有什么区别？**



| 特性   | SVG                   | Canvas                  |
| ---- | --------------------- | ----------------------- |
| 绘制方式 | 基于矢量图形，通过标签定义图形元素     | 基于像素，通过 JavaScript 绘制图形 |
| 可操作性 | 每个图形元素都是 DOM 节点，可直接操作 | 图形是像素集合，无法直接操作单个元素      |
| 渲染性能 | 复杂图形渲染较慢，适合静态或简单动画    | 适合绘制复杂图形和高性能动画          |
| 缩放性  | 缩放不失真                 | 缩放可能失真（取决于绘制逻辑）         |
| 事件支持 | 支持为单个元素绑定事件           | 需手动计算点击区域，事件处理复杂        |
| 适用场景 | 图标、Logo、静态图形、可交互矢量图   | 游戏、动态图形、数据可视化（大量数据）     |



3.  **如何在 HTML 中嵌入 SVG？**

    嵌入 SVG 的方式包括：

*   直接嵌入：将 SVG 代码直接写在 HTML 中，例如：



```html
<svg width="100" height="100" viewBox="0 0 100 100">

 <circle cx="50" cy="50" r="40" fill="red" />

</svg>
```



*   外部引入：通过`<img>`、`<embed>`、`<object>`标签引入外部 SVG 文件，例如：

    `<img src="image.svg" alt="SVG图像">`

*   作为背景图：在 CSS 中使用`background-image: url('image.svg')`。

4.  **Canvas 的基本使用步骤是什么？**

    Canvas 用于通过 JavaScript 绘制 2D 或 3D 图形，基本步骤：


    1.  在 HTML 中定义`<canvas>`标签，设置宽高和 ID：

        `<canvas id="myCanvas" width="400" height="300"></canvas>`

    2.  在 JavaScript 中获取 Canvas 上下文（2D 或 WebGL）：



```js
const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d'); // 获取2D上下文
```



5.  使用上下文方法绘制图形，例如绘制矩形：



```js
ctx.fillStyle = 'blue'; // 设置填充色

ctx.fillRect(50, 50, 100, 80); // 绘制填充矩形（x, y, 宽, 高）
```



6.  **Canvas 如何绘制路径和形状？**

    使用`beginPath()`开始路径，通过`moveTo()`、`lineTo()`等方法定义路径，最后用`stroke()`（描边）或`fill()`（填充）绘制，例如绘制三角形：



```js
const ctx = canvas.getContext('2d');

ctx.beginPath(); // 开始路径

ctx.moveTo(100, 50); // 移动到起点

ctx.lineTo(200, 50); // 绘制线段到点(200,50)

ctx.lineTo(150, 150); // 绘制线段到点(150,150)

ctx.closePath(); // 闭合路径（连接终点到起点）

ctx.strokeStyle = 'green'; // 描边颜色

ctx.stroke(); // 描边绘制

ctx.fillStyle = 'yellow'; // 填充颜色

ctx.fill(); // 填充绘制
```

7.  **SVG 支持哪些基本图形元素？**

    SVG 提供多种基本图形元素，包括：

*   `<rect>`：矩形，属性`x`、`y`（左上角坐标）、`width`、`height`、`rx`/`ry`（圆角半径）。

*   `<circle>`：圆形，属性`cx`、`cy`（圆心坐标）、`r`（半径）。

*   `<ellipse>`：椭圆，属性`cx`、`cy`（中心坐标）、`rx`（x 轴半径）、`ry`（y 轴半径）。

*   `<line>`：线段，属性`x1`、`y1`（起点）、`x2`、`y2`（终点）。

*   `<polyline>`：折线，属性`points`（点坐标列表，如`"0,0 50,50 100,0"`）。

*   `<polygon>`：多边形，属性`points`（闭合的点坐标列表）。

*   `<path>`：路径，通过`d`属性定义复杂路径（如曲线、弧线），功能最强大。

## 七、其他

1.  **HTML 中的全局属性有哪些？**

    全局属性是所有 HTML 标签都可使用的属性，常见的有：

*   `id`：元素唯一标识符，用于 CSS 选择或 JavaScript 操作。

*   `class`：元素的类名，用于关联 CSS 样式或 JavaScript 选择。

*   `style`：内联样式，直接定义元素的 CSS 样式。

*   `title`：鼠标悬停时显示的提示文本。

*   `lang`：指定元素内容的语言。

*   `hidden`：隐藏元素，使其不显示在页面上。

*   `data-*`：自定义数据属性，用于存储页面或应用的私有数据。

2.  **`data-*`属性的作用是什么？如何在 JavaScript 中获取和设置？**

    `data-*`属性用于在 HTML 元素中存储自定义数据，便于 JavaScript 访问，不影响元素的显示和行为。命名格式为`data-`前缀加自定义名称（如`data-id`、`data-user`）。

    在 JavaScript 中通过`dataset`属性访问：


```html
<div id="myDiv" data-id="123" data-user-name="张三"></div>
```



```js
const div = document.getElementById('myDiv');

// 获取值

console.log(div.dataset.id); // "123"

console.log(div.dataset.userName); // "张三"（自动转换为驼峰命名）

// 设置值

div.dataset.age = "25";

console.log(div.dataset.age); // "25"
```

3.  **什么是实体字符？列举几个常见的实体字符。**

    实体字符用于在 HTML 中表示特殊字符（如小于号、大于号、空格等），避免被浏览器解析为 HTML 标签或语法。

    常见实体字符：

*   `&lt;`：表示`<`（小于号）

*   `&gt;`：表示`>`（大于号）

*   `&amp;`：表示`&`（与号）

*   `&nbsp;`：表示不换行空格

*   `&quot;`：表示`"`（双引号）

*   `&apos;`：表示`'`（单引号）

4.  **什么是 Web Components？HTML5 对其有什么支持？**

    Web Components 是一套技术规范，用于创建可复用的自定义 HTML 元素，实现组件化开发。

    HTML5 支持的核心技术：

```js
class MyComponent extends HTMLElement {

 constructor() {

    super();

    this.textContent = '我的自定义组件';

}

}

customElements.define('my-component', MyComponent);
```

使用：`<my-component></my-component>`



*   自定义元素（Custom Elements）：允许开发者定义新的 HTML 标签（如`<my-component>`），并通过 JavaScript 控制其行为。

*   影子 DOM（Shadow DOM）：为自定义元素创建隔离的 DOM 树，避免样式和脚本冲突。

*   HTML 模板（`<template>`）：定义可复用的 HTML 片段，初始不渲染，需通过 JavaScript 激活。

5.  `<link>`**标签的作用是什么？它的**`rel`**属性有哪些常见取值？**

    `<link>`标签用于链接外部资源到 HTML 文档，通常放在`<head>`中。

    常见`rel`属性取值：

*   `stylesheet`：链接外部 CSS 样式表，例如：`<link rel="stylesheet" href="style.css">`。

*   `icon`：指定页面的图标（favicon），例如：`<link rel="icon" href="favicon.ico">`。

*   `preconnect`：提前建立与外部域名的连接，优化资源加载速度。

*   `prefetch`：预加载可能会用到的资源，提升后续页面加载速度。

6.  `<style>`**标签和**`link`**标签引入 CSS 有什么区别？**

*   位置与形式：`<style>`标签是内嵌样式，CSS 代码写在标签内部；`link`标签是外部样式，通过`href`属性引入外部 CSS 文件。

*   复用性：`<style>`标签的样式仅作用于当前页面，无法复用；`link`标签引入的外部 CSS 可被多个页面共享，利于代码复用和维护。

*   加载顺序：`<style>`标签的样式在页面解析时立即生效；`link`标签引入的 CSS 需先加载文件，再解析生效。

*   性能：外部 CSS 文件可被浏览器缓存，减少重复加载；内嵌样式每次页面加载都需重新解析。

7.  `<script>`**标签的**`defer`**和**`async`**属性有什么作用？**

    两者均用于控制外部 JavaScript 文件的加载和执行方式，避免阻塞 HTML 解析：

*   `defer`：脚本并行加载，在 HTML 解析完成后、`DOMContentLoaded`事件触发前按顺序执行（多个`defer`脚本按引入顺序执行）。

*   `async`：脚本并行加载，加载完成后立即执行（不保证顺序，哪个先加载完就先执行），可能在 HTML 解析过程中执行。

    无两者属性时：脚本加载和执行会阻塞 HTML 解析，直到脚本完成。