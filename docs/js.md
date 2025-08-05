# JavaScript

JavaScript是一种轻量级的编程语言，用于为网页添加交互性。

## 一、js基础

1. **JavaScript 有哪些数据类型？**  
   7种基本类型（`number`、`string`、`boolean`、`null`、`undefined`、`symbol`、`bigint`）和1种引用类型（`object`，包括数组、函数、日期等）。

2. **`null` 和 `undefined` 的区别？**  
   `undefined` 表示未定义（变量声明未赋值、函数无返回值等）；`null` 表示空值（主动赋值表示“无”）。`typeof null` 返回 `object`，`typeof undefined` 返回 `undefined`。

3. **`==` 和 `===` 的区别？**  
   `==` 会进行隐式类型转换后比较值；`===` 严格比较，既比较值也比较类型。例如：`0 == false` 为 `true`，`0 === false` 为 `false`。

4. **什么是变量提升？**  
   JavaScript 会将变量和函数声明“提升”到作用域顶部，但赋值不会提升。例如：`console.log(a); var a = 1;` 不会报错（`a` 提升为 `undefined`）。

5. **函数提升和变量提升的优先级？**  
   函数提升优先级高于变量提升。例如：`var a = 1; function a() {}; console.log(a);` 输出 `1`（函数声明先提升，后被变量赋值覆盖）。

6. **什么是作用域？**  
   变量可访问的范围。包括：全局作用域（整个程序可访问）、函数作用域（函数内可访问）、块级作用域（`{}` 内，由 `let/const` 声明）。

7. **什么是作用域链？**  
   当访问变量时，JS 会从当前作用域向上查找，直到全局作用域，形成的链式结构即为作用域链。用于解决变量访问权限问题。

8. **`let`、`const`、`var` 的区别？**  
    | 特性       | var        | let        | const       |
    |------------|------------|------------|-------------|
    | 作用域     | 函数作用域 | 块级作用域 | 块级作用域  |
    | 变量提升   | 是         | 否         | 否          |
    | 重复声明   | 允许       | 不允许     | 不允许      |
    | 初始值     | 不需要     | 不需要     | 必须提供    |
    | 重新赋值   | 可以       | 可以       | 不可以      |
    使用let和const声明的变量，在声明之前不能被访问，否则会报错（ReferenceError）（暂时性死区）。

9. **什么是全局变量污染？如何避免？**  
   多个脚本定义同名全局变量导致的冲突。避免方式：使用 IIFE、模块（ES6 Module）、命名空间对象包裹变量。

10. **`typeof` 能判断哪些类型？局限性？**  
    可判断基本类型（除 `null` 会返回 `object`）和函数（返回 `function`）。局限性：无法区分 `array`、`null`、`object`（均返回 `object`）。

11. **如何判断一个变量是否为数组？**  
    `Array.isArray(arr)`（最推荐）；`arr instanceof Array`；`Object.prototype.toString.call(arr) === '[object Array]'`；`arr.__proto__ === Array.prototype`；`Array.prototype.isPrototypeOf(arr)`；`arr.constructor === Array`。

12. **什么是隐式类型转换？常见场景？**  
    JS 自动将一种类型转为另一种类型的过程。例如：`'5' - 3` 转为 `5 - 3 = 2`；`'5' + 3` 转为 `'53'`；`if (1)` 中 `1` 转为 `true`。

13. **`0.1 + 0.2 === 0.3` 吗？为什么？**  
    不等。因为 JS 用 IEEE 754 浮点数存储，`0.1` 和 `0.2` 二进制无法精确表示，相加后有精度误差（结果约为 `0.30000000000000004`）。

14. **如何解决浮点数精度问题？**  
    将数值放大为整数计算后再缩小，例如：`(0.1 * 10 + 0.2 * 10) / 10 === 0.3`。

15. **什么是 NaN？如何判断一个值是 NaN？**  
    NaN 表示“非数字”（Not a Number），是 `number` 类型。`typeof NaN === 'number'`；判断方式：`Number.isNaN(value)`（推荐），`value !== value`（NaN 是唯一不等于自身的值）。

16. **`parseInt` 和 `Number` 的区别？**  
    `parseInt` 解析字符串，返回整数；`Number` 转换任意类型为数字。例如：`parseInt('123')` 返回 `123`，`Number('123')` 返回 `123`。

17. **`void 0` 的作用？**  
    `void 0` 是一个表达式，返回 `undefined`。用于获取 `undefined` 值，避免使用 `undefined` 变量（因为 `undefined` 是一个可以被重写的全局变量）。

18. **ES6 模块与 CommonJS 模块的区别？**
    * 语法：ES6 模块使用 `import/export`，CommonJS 模块使用 `require/module.exports`。
    * 加载时间：ES6 模块是静态加载（编译时加载），CommonJS 模块是动态加载（运行时加载）。
    * 循环依赖：ES6 模块可以处理循环依赖（使用 `import()` 延迟加载），CommonJS 模块会导致循环依赖问题。
    * 浏览器支持：ES6 模块在浏览器中得到广泛支持，CommonJS 模块主要用于 Node.js 环境。
    * 树摇优化：ES6 模块支持静态分析，可进行树摇优化（移除未使用代码），CommonJS 模块不支持。
    * 值的引用：ES6 模块是值的引用，CommonJS 模块是值的拷贝。

19. 浅拷贝和深拷贝的区别
    * 浅拷贝：只复制对象的第一层属性，嵌套对象仍引用原对象。
    * 深拷贝：递归复制对象的所有层级属性，嵌套对象也会被复制。 

20. JSON.parse(JSON.stringify(obj)) 实现深拷贝的局限性？
    * 不能复制函数、`undefined`、`Symbol` 等特殊值。
    * 不能复制循环引用对象（会导致栈溢出）。
    * 不能复制 `Date` 对象（会转换为字符串）。
    * 不能复制正则表达式（会转换为字符串）。

21. **什么是事件循环？**
    事件循环是 JS 实现异步编程的机制，通过将任务分为同步任务和异步任务，利用事件循环机制实现非阻塞执行。

22. **什么是同步任务和异步任务？**
    * 同步任务：立即执行，按顺序执行，阻塞后续任务，例如：`console.log('1')`。
    * 异步任务：在后台执行，不阻塞后续任务，例如：`setTimeout`；`setInterval`；`Promise`；`async/await`；`Generator` 函数。

23. **什么是微任务和宏任务？**
    * 微任务：在当前任务结束后立即执行的任务，例如：`Promise.then`；`async/await`；`Generator` 函数。
    * 宏任务：在当前任务结束后，等待下一个事件循环执行的任务，例如：`setTimeout`；`setInterval`；`XMLHttpRequest`。

24. **事件循环的执行顺序**
    1. 执行同步任务。
    2. 执行微任务队列。
    3. 执行宏任务队列。
    4. 重复执行 1-3 步骤。

## 二、js原型与继承
1. **什么是原型？**
    原型是 JS 中实现继承的机制，每个对象都有一个原型对象，原型对象也有原型，形成原型链。
    * 每个对象都有一个 `__proto__` 属性，指向原型对象。
    * 原型对象也有 `__proto__` 属性，指向更上一级的原型对象。
    * 原型链的终点是 `Object.prototype`，`Object.prototype.__proto__` 为 `null`。

2. **prototype 和 __proto__ 的区别**
    * `prototype` 是函数对象的属性，指向原型对象。
    * `__proto__` 是对象的属性，指向原型对象。

3. **继承的方式**
    * 原型链继承：将子类的原型对象指向父类的实例。
    ```js
      function Parent() {
          this.name = 'parent';
      }
      function Child() {
          this.name = 'child';
      }
      Child.prototype = new Parent();
    ```
    * 构造函数继承：在子类构造函数中调用父类构造函数。
    ```js
      function Parent(name) {
          this.name = name;
        }
        function Child(name) {
            Parent.call(this, name);
        }
    ```
    * 组合继承：结合原型链继承和构造函数继承。
    ```js
      function Parent(name) {
          this.name = name;
      }
      function Child(name) {
          Parent.call(this, name);
      }
      Child.prototype = Object.create(Parent.prototype);
      Child.prototype.constructor = Child;
    ```
    * 寄生组合继承：结合组合继承和寄生式继承。
    ```js
      function inheritPrototype(childObj, parentObj) {
        var prototype = Object.create(parentObj.prototype);
        prototype.constructor = childObj;
        childObj.prototype = prototype;
      }
    ```
    * ES6 类继承：使用 `class` 关键字定义类，使用 `extends` 关键字继承父类，使用 `super` 关键字调用父类构造函数。
    ```js
      class Parent {
        constructor(name) {
            this.name = name;
            this.colors = ['red', 'blue', 'green'];
        }
        
        getName() {
            return this.name;
        }
      }
    
      class Child extends Parent {
        constructor(name, age) {
            super(name); // 调用父类构造函数
            this.age = age;
        }
        
        getAge() {
            return this.age;
        }
      }
      
      const child = new Child('Alice', 20);
      console.log(child.getName()); // Alice
      console.log(child.getAge()); // 20
      console.log(child.colors); // ['red', 'blue', 'green']
    ```

## 三、js数组与对象操作
1. **如何判断一个对象是否为空？**  
    `Object.keys(obj).length === 0`；`JSON.stringify(obj) === '{}'`（不推荐，忽略不可枚举属性）

2. **数组的方法**
    * `push`：添加元素到数组末尾。
    * `pop`：删除并返回数组最后一个元素。
    * `shift`：删除并返回数组第一个元素。
    * `unshift`：添加元素到数组开头。
    * `splice`：删除或添加数组元素。
    * `slice`：返回数组的子数组。
    * `concat`：合并数组。
    * `indexOf`：查找元素索引。
    * `lastIndexOf`：查找元素最后出现索引。
    * `forEach`：遍历数组。
    * `map`：映射数组。
    * `filter`：过滤数组。
    * `reduce`：归约数组。
    * `some`：判断是否有元素满足条件。
    * `every`：判断是否所有元素都满足条件。

3. **对象的方法**
    * `Object.keys`：返回对象所有可枚举属性名数组。
    * `Object.values`：返回对象所有可枚举属性值数组。
    * `Object.entries`：返回对象所有可枚举属性键值对数组。
    * `Object.assign`：合并对象（浅拷贝）。
    * `Object.freeze`：冻结对象（不可修改属性）。
    * `Object.seal`：密封对象（不可添加/删除属性）。
    * `Object.is`：判断两个值是否严格相等（处理 `NaN` 问题）。

4. **对象的遍历**
    * `for...in`：遍历对象可枚举属性（包括原型链）。
    * `Object.keys`：返回对象可枚举属性名数组。
    * `Object.values`：返回对象可枚举属性值数组。
    * `Object.entries`：返回对象可枚举属性键值对数组。
    * `Reflect.ownKeys`：返回对象所有属性名（包括不可枚举属性）数组。

5. **创建对象的方式**
    * 字面量方式：`const obj = {}`
    * 构造函数方式：`const obj = new Object()`
    * 工厂函数方式：`function createObj() { return {} }`
    * 类方式：`class MyClass { constructor() { this.prop = 'value' } }`
    * `Object.create`：基于原型链创建对象。


## 四、js函数

1. **什么是函数提升？**  
    函数声明会被提升到作用域顶部，优先于变量提升。

2. **函数的参数传递方式？**  
    按值传递（基本类型）：传递值的副本，函数内修改不影响外部。按引用传递（对象）：传递对象引用，函数内修改影响外部。

3. **函数的 `this` 指向？**  
    全局环境：`this === window`（非严格模式）；严格模式下为 `undefined`。对象方法：`this` 指向调用对象。构造函数：`this` 指向新实例。箭头函数：`this` 继承自外层作用域。

4. **闭包**  
    函数嵌套时，内部函数引用外部函数的变量，且内部函数被外部访问，导致外部函数的变量不会被销毁，这种结构称为闭包。

5. **闭包的作用**  
    实现数据的私有化，延长变量的生命周期，实现柯理化函数，实现闭包的模块化，实现防抖、节流。
  
6. **闭包可能引发的问题**
    内存泄漏（闭包引用外部变量，导致变量不会被销毁）；`this` 指向问题（箭头函数）。

7. **箭头函数与普通函数的区别**
    箭头函数没有 `this`、`arguments`、`super`、`new.target`。箭头函数不能作为构造函数（不能用 `new`）。箭头函数不能使用 `yield`（不能用在生成器中）。

8. **new 操作符的执行过程**
    * 创建一个新对象。
    * 将新对象的原型指向构造函数的 `prototype`。
    * 执行构造函数，将 `this` 绑定到新对象。
    * 如果构造函数返回对象，则返回该对象；否则返回新对象。

9. **什么是 IIFE 的作用？**
    立即执行函数表达式（IIFE），用于创建独立的作用域，避免变量污染全局作用域。

## 五、浏览器与网络

1. **什么是跨域？**
    跨域是指在浏览器中，当一个网页尝试加载另一个域名下的资源时，由于浏览器的同源策略，会阻止加载，这就是跨域。

2. 跨域解决方案有哪些
    * JSONP：利用 `<script>` 标签的 `src` 属性，通过动态创建脚本标签的方式，实现跨域请求。
    * CORS：服务器端设置 `Access-Control-Allow-Origin` 响应头，允许指定域名的请求。
    * 代理服务器：通过服务器端转发请求，实现跨域。

3. **什么是同源策略**
    同源策略是指同一协议、同一域名、同一端口的资源之间可以相互访问，不同源的资源之间不可以直接访问。

4. **http和https的区别**
    * http：超文本传输协议，默认端口为 80，不加密，不安全。
    * https：超文本传输安全协议，默认端口为 443，加密，安全。
    * 加密：https 使用 SSL/TLS 协议加密通信，确保数据在传输过程中不被窃取或篡改。
    * 认证：https 提供服务器认证，确保客户端连接的是可信的服务器。

5. **对称加密与非对称加密；两者混合加密**
    * 对称加密：使用相同的密钥进行加密和解密，速度快，适用于数据量较大的场景。
    * 非对称加密：使用公钥和私钥进行加密和解密，安全性高，适用于数据量较小的场景。
    * 混合加密：结合对称加密和非对称加密，适用于数据量较大的场景；非对称加密用于加密对称密钥，对称加密用于加密数据。

6. **什么是 CSRF 攻击？如何防御？**
    CSRF（Cross-Site Request Forgery）攻击是指攻击者通过伪造用户请求，来执行非本意的操作。
    * 防御：
        * 验证请求来源：检查请求头中的 `Referer` 或 `Origin` 字段，确保请求来源是 trusted 的。
        * 验证请求参数：检查请求参数中是否包含 CSRF 令牌，确保请求是用户发起的。
        * 验证请求方法：限制只允许 GET、POST、PUT、DELETE 等安全方法，不允许执行其他方法。
        * 验证请求头：检查请求头中是否包含 `X-CSRF-Token` 等自定义字段，确保请求是用户发起的。

7. **什么是 XSS 攻击？如何防御？**
    XSS（Cross-Site Scripting）攻击是指攻击者通过注入恶意脚本，来执行非本意的操作。
    * 防御：
        * 对用户输入进行过滤和转义，防止脚本注入。
        * 使用 CSP（Content Security Policy）限制脚本来源。
        * 对输出进行转义，防止脚本执行。

8. **浏览器的缓存机制，强缓存与协商缓存**
    浏览器缓存机制是指浏览器在加载网页时，会将网页的资源（如 HTML、CSS、JavaScript）缓存到本地，以便后续访问相同资源时，直接从缓存中加载，提高加载速度。
    * 强缓存：浏览器在加载资源时，会根据缓存头信息（如 `Cache-Control`、`Expires`）判断是否使用缓存，不使用缓存时，会向服务器请求资源。
      * 优先级：`Cache-Control` 优先级高于 `Expires`。
      * `Cache-Control`：
          * `max-age`：缓存的最大年龄，单位为秒。
          * `no-cache`：缓存必须重新验证，过期后必须向服务器请求资源。
          * `no-store`：不缓存资源。
          * `private`：只缓存个人用户的资源，不缓存公共资源。
          * `public`：缓存公共资源，适用于静态资源。
      * `Expires`：缓存的过期时间，单位为 GMT 时间。

    * 协商缓存：浏览器在加载资源时，会根据缓存头信息（如 `Last-Modified`、`ETag`）与服务器进行协商，判断是否使用缓存，不使用缓存时，会向服务器请求资源。
      * 优先级：`ETag` 优先级高于 `Last-Modified`。
      * `Last-Modified`：资源的最后修改时间，单位为 GMT 时间。
      * `ETag`：资源的唯一标识，用于协商缓存。
      * `If-Modified-Since`：浏览器在请求资源时，会根据缓存头信息（如 `Last-Modified`）与服务器进行协商，判断是否使用缓存，不使用缓存时，会向服务器请求资源。
      * `If-None-Match`：浏览器在请求资源时，会根据缓存头信息（如 `ETag`）与服务器进行协商，判断是否使用缓存，不使用缓存时，会向服务器请求资源。

9. **get请求和post请求的区别**
    * get请求：
        * 数据在url中传输，数据量较小。
        * 数据量较大时，会导致url长度过长，超出浏览器限制。
        * 数据会被缓存，影响数据的实时性。
        * 数据会被浏览器自动编码，如空格会被编码为 `%20`。
        * 参数在 URL 中
    * post请求：
        * 数据在请求体中传输，数据量较大。
        * 数据量较大时，不会导致url长度过长，超出浏览器限制。
        * 数据不会被缓存，影响数据的实时性。
        * 数据不会被浏览器自动编码，如空格不会被编码。
        * 参数在请求体中

10. **Cookie、LocalStorage、SessionStorage 的区别**
    | 特性         | Cookie               | LocalStorage | SessionStorage       |
    |--------------|----------------------|--------------|----------------------|
    | 容量         | 4KB                  | 5-10MB       | 5-10MB               |
    | 生命周期     | 可设置过期时间       | 永久         | 会话结束             |
    | 自动发送     | 每次请求自动发送     | 否           | 否                   |
    | 访问限制     | 同源                 | 同源         | 同源且同标签页       |

11. **cookie的属性**
    | 属性         | 说明                 |
    |--------------|----------------------|
    | name         | cookie的名称         |
    | value        | cookie的值           |
    | domain       | 指定生效的域名（如 .example.com 包含子域名）; 不包含子域名时，默认当前域名 |
    | path         | 指定路径（如 /docs，允许子路径访问）; 默认当前路径 |
    | expires      | Expires：绝对过期时间（HTTP/1.0）。Max-Age：相对有效期（秒，优先级更高）。未设置则为会话Cookie（关闭浏览器失效）|
    | secure       | 仅通过 HTTPS 传输    |
    | httpOnly     | 阻止 JavaScript 访问，防范 XSS 攻击 |
    | sameSite     | 跨站请求设置         |

12. **cookie的SameSite属性**
    * `SameSite=Strict`：严格模式，只有在当前站点下才发送 Cookie。
    * `SameSite=Lax`：宽松模式，在当前站点下和外部站点下都发送 Cookie。
    * `SameSite=None`：不设置 SameSite 属性，在所有站点下都发送 Cookie。
    
13. **从输入 URL 到页面显示的过程？**
    * 输入 URL 后，浏览器会根据 DNS 解析 IP 地址。
    * 浏览器会根据 IP 地址向服务器发送 HTTP 请求。
    * 服务器收到请求后，会返回 HTTP 响应，包含 HTML、CSS、JavaScript 等资源。
    * 浏览器解析 HTML 文档，构建 DOM 树。
    * 浏览器解析 CSS 样式，构建 CSSOM 树。
    * 浏览器将 DOM 树和 CSSOM 树合并，生成渲染树。
    * 浏览器根据渲染树，计算每个节点的位置和大小。
    * 浏览器绘制页面，显示在屏幕上。

14. **什么是 Web Worker？如何实现？**
    * Web Worker 是一种在后台线程中运行 JavaScript 代码的机制，用于在不阻塞主线程的情况下执行耗时的任务。
    * 实现：
        * 创建 Web Worker：使用 `new Worker('worker.js')` 创建一个 Web Worker 实例。
        * 定义 Worker 代码：在 Worker 文件中编写 JavaScript 代码，定义 Worker 的任务。
        * 发送消息：使用 `postMessage()` 方法向 Worker 发送消息。
        * 接收消息：使用 `onmessage` 事件监听 Worker 发送的消息。
        * 终止 Worker：使用 `terminate()` 方法终止 Worker。

15. **什么是PWA?如何实现？**
    * PWA（Progressive Web App）是一种渐进式 Web 应用，它结合了 Web 应用和移动应用的优势。
    * 实现：
        * manifest.json：定义应用的元数据，如应用名称、图标、启动页面等。
        * 注册 Service Worker：使用 `navigator.serviceWorker.register('sw.js')` 注册 Service Worker。
        * 定义 Service Worker 代码：在 Service Worker 文件中编写 JavaScript 代码，定义 Service Worker 的任务。
        * 缓存资源：使用 `caches.open('cache-name')` 打开缓存，使用 `cache.addAll()` 缓存资源。
        * 处理请求：使用 `fetch()` 处理请求，使用 `caches.match()` 匹配缓存资源。
        * 离线访问：当网络断开时，使用缓存资源提供离线访问。

16. **Service Worker实现过程**
    ```js
    // 注册 Service Worker
    navigator.serviceWorker.register('/sw.js');

    // sw.js
    self.addEventListener('install', event => {
      event.waitUntil(
        caches.open('cache-name').then(cache => {
          return cache.addAll([
            '/',
            '/index.html',
            '/styles.css',
            '/script.js'
          ]);
        })
      );
      // 跳过等待
      self.skipWaiting();
    });

    // 激活 Service Worker
    self.addEventListener('activate', event => {
      event.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              if (cacheName !== 'cache-name') {
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
    });
    
    // 处理请求
    self.addEventListener('fetch', event => {
      event.respondWith(
        caches.match(event.request).then(response => {
          // 配置缓存策略
          return response || fetch(event.request);
        })
      );
    });
    ```

17. **什么是重排和重绘?**
    * 重排（Reflow）：当页面中的元素布局发生变化时，浏览器需要重新计算元素的位置和大小，这称为重排。
    * 重绘（Repaint）：当页面中的元素外观发生变化时，浏览器需要重新绘制元素，这称为重绘。 重绘不会导致重排，重排会导致重绘。


18. **选择 DOM 元素的方法**
    * `getElementById()`：根据元素的 id 属性选择元素。
    * `getElementsByClassName()`：根据元素的 class 属性选择元素。
    * `getElementsByTagName()`：根据元素的标签名选择元素。
    * `querySelector()`：根据 CSS 选择器选择元素。
    * `querySelectorAll()`：根据 CSS 选择器选择所有元素。

19. **创建、添加、删除和插入元素** 
    * `createElement()`：创建一个新元素。
    ```js
    createElement(tagName);
    ```
    * `appendChild()`：将元素添加到父元素的子元素列表末尾。
    ```js
    appendChild(element);
    ```
    * `removeChild()`：从父元素的子元素列表中删除指定元素。
    ```js
    removeChild(element);
    ```
    * `insertBefore()`：将元素插入到父元素的子元素列表中的指定位置之前。
    ```js
    insertBefore(newElement, referenceElement);
    ```
    * `replaceChild()`：用新元素替换父元素的子元素列表中的指定元素。
    ```js
    replaceChild(newElement, oldElement);
    ```
20. **元素宽高的获取和获取方法的区别**
    * `offsetWidth`：获取元素的宽度，包括内容区域、内边距和边框。
    * `offsetHeight`：获取元素的高度，包括内容区域、内边距和边框。
    * `clientWidth`：获取元素的宽度，包括内容区域和内边距。
    * `clientHeight`：获取元素的高度，包括内容区域和内边距。
    * `scrollWidth`：获取元素的宽度，包括内容区域、内边距和滚动条。
    * `scrollHeight`：获取元素的高度，包括内容区域、内边距和滚动条。
    * `getBoundingClientRect()`：获取元素的位置和大小，包括内容区域、内边距、边框和滚动条。
    ```js
    getBoundingClientRect();
    ```
## 六、js常见手写题

1. **如何实现一个 简易Promise？**
```js
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = null;
    this.callbacks = [];
    
    const resolve = value => {
      if (this.state !== 'pending') return;
      this.state = 'fulfilled';
      this.value = value;
      this.callbacks.forEach(cb => cb.onFulfilled(value));
    };
    
    const reject = reason => {
      if (this.state !== 'pending') return;
      this.state = 'rejected';
      this.value = reason;
      this.callbacks.forEach(cb => cb.onRejected(reason));
    };
    
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handle = () => {
        try {
          const result = this.state === 'fulfilled' 
            ? onFulfilled?.(this.value) 
            : onRejected?.(this.value);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      };
      
      if (this.state !== 'pending') {
        setTimeout(handle, 0);
      } else {
        this.callbacks.push({
          onFulfilled: () => setTimeout(handle, 0),
          onRejected: () => setTimeout(handle, 0)
        });
      }
    });
  }
}
```

2. **如何实现防抖函数？**
```js
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

3. **如何实现节流函数？**
```js
function throttle(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}
```

4. **如何实现一个简单的发布-订阅模式？**
```js
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  
  emit(event, ...args) {
    const callbacks = this.events[event];
    if (callbacks) {
      callbacks.forEach(cb => cb.apply(this, args));
    }
  }
  
  off(event, callback) {
    const callbacks = this.events[event];
    if (callbacks) {
      this.events[event] = callbacks.filter(cb => cb !== callback);
    }
  }

  once(event, callback) {
    const onceCallback = (...args) => {
      callback.apply(this, args);
      this.off(event, onceCallback);
    };
    this.on(event, onceCallback);
  }
}
```
5. **如何实现数组扁平化?**

```js
function flatten(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return acc.concat(flatten(cur));
    } else {
      return acc.concat(cur);
    }
  }, []);
}
```
6. **如何实现深比较？考虑日期、正则**
```js
function deepEqual(a, b) {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (a instanceof RegExp && b instanceof RegExp) return a.source === b.source && a.flags === b.flags;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}
```
7. **如何实现深拷贝？考虑循环引用**
```js
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (hash.has(obj)) return hash.get(obj);
  const cloneObj = Array.isArray(obj) ? [] : {};
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
```
8. **如何实现call**
```js
Function.prototype.call = function(context, ...args) {
  if (typeof this !== 'function') throw new Error('caller must be a function');
  context = context || window;
  const fn = Symbol('fn');
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
};
```
9. **如何实现apply**
```js
Function.prototype.apply = function(context, args) {
  if (typeof this !== 'function') throw new Error('caller must be a function');
  context = context || window;
  const fn = Symbol('fn');
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
};
```
10. **如何实现bind**
```js
Function.prototype.bind = function(context, ...args) {
  if (typeof this !== 'function') throw new Error('caller must be a function');
  const fn = this;
  return function(...args) {
    if (this instanceof fn) {
      return new fn(...args);
    }
    return fn.apply(context, args);
  };
};
```
11. **如何实现new**
```js
function newOperator(ctor, ...args) {
  const obj = Object.create(ctor.prototype);
  const result = ctor.apply(obj, args);
  return result instanceof Object ? result : obj;
}
```
12. **如何实现instanceof**
```js
function instanceofOperator(instance, ctor) {
  let proto = instance.__proto__;
  while (proto) {
    if (proto === ctor.prototype) return true;
    proto = proto.__proto__;
  }
  return false;
}
```
13. **如何实现Object.create**
```js
function createOperator(proto) {
  function Fn() {}
  Fn.prototype = proto;
  return new Fn();
}
```
14. **如何实现柯里化**
```js
function curry(fn) {
  return function(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...args2) {
      return fn.apply(this, args.concat(args2));
    };
  };
}
```
15. **如何实现compose**
```js
function compose(...fns) {
  return function(...args) {
    let result = args;
    for (let fn of fns) {
      result = [fn.apply(this, result)];
    }
    return result[0];
  };
}
```
16. **实现 LRU 缓存**
```js
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}
```
17. **实现数组乱序（洗牌算法）**
```js
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
```
18. **实现数组的reduce方法**
```js
Array.prototype.reduce = function(callback, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
}
```
