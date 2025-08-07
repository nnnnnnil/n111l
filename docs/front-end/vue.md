# Vue

Vue是一个用于构建用户界面的渐进式框架。

## 一、Vue2 与 Vue3 感官上的区别
1. **核心 API 风格**  
   | 特性        | Vue2                                                                                                       | Vue3                                                                                                                     |
   | --------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
   | 核心 API 风格 | Options API（选项式 API）                                                                                       | Composition API（组合式 API）+ Options API（兼容）                                                                                |
   | 代码组织方式    | 按功能划分（data、methods、computed 等）                                                                             | 按逻辑关注点组织（通过 setup 函数）                                                                                                    |
   | 组件入口写法    | `export default { ... }`                                                                                   | 支持 `<script setup>` 语法糖（更简洁）                                                                                             |
   | 多根节点支持    | 不支持（必须有唯一根节点）                                                                                              | 支持（Fragment 片段）                                                                                                          |
   | ts支持          | 较差                                                                                             | 优秀                                                                                                               |
   | 示例代码      | `javascript export default { data() { return { count: 0 } }, methods: { increment() { this.count++ } } } ` | `vue <script setup> import { ref } from 'vue' const count = ref(0) const increment = () => { count.value++ } </script> ` |

2. **生命周期**
   | Vue2 生命周期       | Vue3 生命周期（Composition API） | 说明                            |
   | --------------- | -------------------------- | ----------------------------- |
   | `beforeCreate`  | 无（被 setup 替代）              | 初始化实例前（Vue3 中 setup 执行时机与之接近） |
   | `created`       | 无（被 setup 替代）              | 实例创建后（Vue3 中 setup 执行时机与之接近）  |
   | `beforeMount`   | `onBeforeMount`            | 挂载前                           |
   | `mounted`       | `onMounted`                | 挂载后                           |
   | `beforeUpdate`  | `onBeforeUpdate`           | 更新前                           |
   | `updated`       | `onUpdated`                | 更新后                           |
   | `beforeDestroy` | `onBeforeUnmount`          | 销毁前（Vue3 命名更准确）               |
   | `destroyed`     | `onUnmounted`              | 销毁后（Vue3 命名更准确）               |
   | `errorCaptured` | `onErrorCaptured`          | 错误捕获                          |
   | `renderTracked` | `onRenderTracked`          | 新增：渲染追踪时（开发环境）                |
   | `renderTriggered` | `onRenderTriggered`        | 新增：渲染触发时（开发环境）                |
   | `activated` | `onActivated`              | 新增：组件激活时（keep-alive 缓存组件激活） |
   | `deactivated` | `onDeactivated`            | 新增：组件停用时（keep-alive 缓存组件停用时） |

   * 使用示例\
     vue3
     ```vue
     <script setup>
     import { onMounted } from 'vue'

     onMounted(() => {
       console.log('组件挂载完成')
     })
     </script>
     ```

     vue2
     ```vue
     <script>
     export default {
       mounted() {
         console.log('组件挂载完成')
       }
     }
     </script>
     ```

3. **插件差异**

    | 特性     | Vue2                               | Vue3                                     |
    | ------ | ---------------------------------- | ---------------------------------------- |
    | 安装方式   | `Vue.use(plugin)`                  | `app.use(plugin)`（通过 createApp 创建的实例）    |
    | 插件定义格式 | 插件对象需包含 `install` 方法，接收 `Vue` 构造函数 | 插件对象 `install` 方法接收 `app` 实例（更灵活）        |
    | 全局属性注册 | `Vue.prototype.$xxx = xxx`         | `app.config.globalProperties.$xxx = xxx` |
    | 全局组件注册 | `Vue.component('xxx', component)` | `app.component('xxx', component)`        |

    * 示例\
      vue3
      ```js
      const MyPlugin = {
        install(app) {
          app.config.globalProperties.$myGlobal = 'Hello Vue3!'
        }
      }
      createApp(App).use(MyPlugin).mount('#app')
      ```
      
      vue2
      ```js
      const MyPlugin = {
        install(Vue) {
          Vue.prototype.$myGlobal = 'Hello Vue2!'
        }
      }
      Vue.use(MyPlugin)
      ```

4. **v-model 差异**
    | 特性     | Vue2                                   | Vue3                               |
    | ------ | -------------------------------------- | ---------------------------------- |
    | 默认绑定属性 | `value` （表单元素）/ `modelValue`（自定义组件需配置） | 统一为 `modelValue`                   |
    | 默认触发事件 | `input` （表单元素）/ `input`（自定义组件需配置）      | 统一为 `update:modelValue`            |
    | 修饰符支持  | 基础修饰符（.lazy/.number/.trim）             | 支持自定义修饰符（如 `v-model.capitalize`）   |
    | 多值绑定   | 需通过 `.sync` 修饰符（如 `:title.sync`）       | 直接支持多 `v-model`（如 `v-model:title`） |

5. **其他指令差异**
     | 指令               | Vue2 行为                 | Vue3 行为                               |
     | ---------------- | ----------------------- | ------------------------------------- |
     | v-for 与 v-if 优先级 | v-for 优先级高于 v-if（不推荐同用） | v-if 优先级高于 v-for（避免无效循环）              |
     | v-bind 合并规则      | 同名属性会完全覆盖               | 同名属性会智能合并（如 class/style）              |
     | v-on 事件修饰符       | `.native` 修饰符用于监听原生事件   | 移除 `.native`，通过 `emits` 声明区分组件事件和原生事件 |


6. **vue3 新增组件、Api**
    | 组件、Api     | 说明                            |
    | ------ | ----------------------------- |
    | `<Suspense>` | 新增组件，用于处理异步组件的加载状态 |
    | `<Teleport>` | 新增组件，用于将组件渲染到指定 DOM 节点 |
    | `watchEffect` | 新增 Api，用于响应式地执行副作用函数 |

## 二、vue2 响应式原理

1. **响应式核心 API：`Object.defineProperty`**
    * Vue2 响应式系统的基石是 JavaScript 原生方法 `Object.defineProperty`，其核心能力是**劫持对象属性的读取和修改行为**。\
    通过该方法可以为对象属性设置 `getter` 和 `setter`，从而实现数据变化的监听与响应。
   - **Observer**：通过递归遍历数据对象，将所有属性转换为响应式数据。
   - **Dep**：依赖收集模块，用于管理每个响应式数据的订阅者（Watcher）。
   - **Watcher**：响应式数据的订阅者，当数据变化时触发回调。

   1.1 **Dep类**\
   以下是vue2 Dep类的伪代码，具体请查阅[vue2 Dep类的代码](https://github.com/vuejs/vue/tree/main/src/core/observer/dep.js)
   ```js
   class Dep {
    constructor() {
      this.subs = []
    }
    addSub(sub) {
      this.subs.push(sub)
    }
    removeSub(sub) {
      remove(this.subs, sub)
    }
    depend() {
      if (Dep.target) {
        // Dep.target 是 Watcher 实例, 在 get 方法中会将当前实例赋值给 Dep.target
        Dep.target.addDep(this)
      }
    }
    notify() {
      const subs = this.subs.slice()
      for (let i = 0; i < subs.length; i++) {
        subs[i].update()
      }
    }
   }
   ```
   1.2 **Watcher类**\
   以下是vue2 Watcher类的伪代码，具体请查阅[vue2 Watcher类的代码](https://github.com/vuejs/vue/tree/main/src/core/observer/watcher.js)
   ```js
   class Watcher {
    constructor(vm, expOrFn, cb) {
      this.vm = vm
      this.expOrFn = expOrFn
      this.cb = cb
      this.depIds = {}
      this.value = this.get()
    }
    get() {
      Dep.target = this
      let value = this.expOrFn.call(this.vm, this.vm)
      Dep.target = null
      return value
    }
    update() {
      const oldVal = this.value
      this.value = this.get()
      this.cb.call(this.vm, this.value, oldVal)
    }
    addDep(dep) {
      if (!this.depIds.hasOwnProperty(dep.id)) {
        this.depIds[dep.id] = dep
        dep.addSub(this)
      }
    }
    removeDep(dep) {
      if (this.depIds.hasOwnProperty(dep.id)) {
        delete this.depIds[dep.id]
        dep.removeSub(this)
      }
    }
   }
   ```
   1.3 **Observer类**\
   以下是vue2 Observer类的伪代码，具体请查阅[vue2 Observer类的代码](https://github.com/vuejs/vue/tree/main/src/core/observer)
   ```js
   class Observer {
    constructor(value) {
      this.value = value
      this.dep = new Dep()
      this.walk(value)
      this.vmCount = 0​
      // 给值添加 __ob__ 属性，标记为响应式对象​
      def(value, '__ob__', this)
      if (Array.isArray(value)) {
        this.observeArray(value)
      }
    }
    walk(value) {
      const keys = Object.keys(value)
      for (let i = 0; i < keys.length; i++) {
        defineReactive(value, keys[i], value[keys[i]])
      }
    }
   }
   ```

   1.4  **defineReactive函数**\
   以下是vue2 defineReactive函数的伪代码，具体请查阅[vue2 defineReactive函数的代码](https://github.com/vuejs/vue/tree/main/src/core/observer)
   ```js
   function defineReactive(obj, key, val) {
    const dep = new Dep()
    let childOb = observe(val)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        if (Dep.target) {
          dep.depend()
          if (childOb) {
            childOb.dep.depend()
          }
          if (Array.isArray(value)) {
            dependArray(value)
          }
          return value
        }
        return val
      },
      set: function reactiveSetter(newVal) {
        if (newVal === val) {
          return
        }
        val = newVal
        childOb = observe(newVal)
        dep.notify()
      } 
    })
      return dep
    }
   ```

   1.5  **数组原型方法重写**\
   以下是vue2 数组原型方法重写的伪代码，具体请查阅[vue2 数组方法重新定义的代码](https://github.com/vuejs/vue/tree/main/src/core/observer/array.js)
   ```js
    const arrayProto = Array.prototype
    const arrayMethods = Object.create(arrayProto)
    const methodsToPatch = [
      'push',
      'pop',
      'shift',
      'unshift',
      'splice',
      'sort',
      'reverse'
    ]
    methodsToPatch.forEach(function (method) {
      const original = arrayProto[method]
      def(arrayMethods, method, function mutator(...args) {
        const result = original.apply(this, args)
        const ob = this.__ob__
        let inserted
        switch (method) {
          case 'push':
          case 'unshift':
            inserted = args
            break
          case 'splice':
            inserted = args.slice(2)
            break
        }
        if (inserted) {
          ob.observeArray(inserted)
        }
        ob.dep.notify()
        return result
      })
    })
   ```
  1.6  **vue2 响应式系统的缺陷与限制**
  * 新增 / 删除属性无法监听​\
      原因：Object.defineProperty 只能劫持已存在的属性​\
      解决：使用 Vue.set(obj, key, value) 或 this.$set​
  * 数组索引 / 长度修改无法监听​\
      原因：数组方法重写无法覆盖所有场景​\
      解决：使用 Vue.set(arr, index, value) 或数组变异方法​
  * 性能问题​\
      初始化时需要递归遍历所有属性，大型对象可能导致性能损耗​\
      嵌套对象过深时，递归劫持会增加内存占用​\
      原始类型响应式限制​\
      无法直接监听基本类型（如字符串、数字），需包裹在对象中

## 三、vue2 渲染流程
1. **初始化阶段**
    * 构造函数入口\
      当我们使用 `new Vue()` 实例化一个 Vue 实例时，会调用 Vue 构造函数。\
      以下是伪代码，源码位置：[Vue 构造函数](https://github.com/vuejs/vue/blob/main/src/core/instance/index.ts)
      ```js
      function Vue(options) {
        this._init(options)
      }
      ```
   * 初始化\
   `_init` 方法会初始化 Vue 实例的属性和方法。\
   以下是伪代码，源码位置：[Vue 初始化方法](https://github.com/vuejs/vue/blob/main/src/core/instance/init.ts)
   ```js
   Vue.prototype._init = function(options) {
      const vm = this;
      // 合并配置
      vm.$options = mergeOptions(...);
      
      initLifecycle(vm);    // 初始化生命周期
      initEvents(vm);       // 初始化事件
      initRender(vm);       // 初始化渲染函数 ← 关键步骤
      callHook(vm, 'beforeCreate');
      initInjections(vm);   // 处理inject
      initState(vm);        // 初始化props/methods/data/computed/watch
      initProvide(vm);      // 处理provide
      callHook(vm, 'created');

      if (vm.$options.el) {
        vm.$mount(vm.$options.el); // 触发挂载
      }
    };
   ```

2. **模板编译阶段**
    * $mount 挂载入口\
    获取模板字符串\
    以下是伪代码，源码位置：[Vue 挂载方法](https://github.com/vuejs/vue/blob/main/src/platforms/web/runtime-with-compiler.ts)
    ```js
    const mount = Vue.prototype.$mount;
    Vue.prototype.$mount = function(el) {
      el = document.querySelector(el);
      const options = this.$options;
      
      // 优先级：render > template > el
      if (!options.render) {
        let template = options.template;
        if (!template && el) {
          template = el.outerHTML; // 获取模板字符串
        }
        
        if (template) {
          // 编译核心 ↓
          const { render } = compileToFunctions(template, {...});
          options.render = render; // 保存render函数
        }
      }
      return mount.call(this, el);
    };
    ```
    * 编译核心\
    解析模板生成AST、优化静态节点、生成渲染函数。\
    以下是伪代码，源码位置：[Vue 编译方法](https://github.com/vuejs/vue/blob/main/src/compiler/index.ts)
    ```js
    function compileToFunctions(template, options) {
      const ast = parse(template, options); // 解析模板字符串
      if (options.optimize !== false) {
        optimize(ast, options); // 优化AST
      }
      const code = generate(ast, options); // 生成渲染函数
      return {
        ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
      }
    }
    ```

3. **虚拟DOM生成**

    * mountComponent\
    挂载组件的方法，会调用 `render` 函数生成虚拟 DOM 树。\
    以下是伪代码，源码位置：[Vue 挂载组件方法](https://github.com/vuejs/vue/blob/main/src/core/instance/lifecycle.t)
    ```js
    export function mountComponent(vm, el) {
      vm.$el = el;
      // 核心渲染函数
      const updateComponent = () => {
        vm._update(vm._render(), hydrating);
      };
      // 创建渲染Watcher
      new Watcher(vm, updateComponent, ...);
    }
    ```
   * _render\
    渲染函数，会调用 `render` 函数生成虚拟 DOM 树。\
    以下是伪代码，源码位置：[Vue 渲染方法](https://github.com/vuejs/vue/blob/main/src/core/instance/render.ts)
    ```js
    export function render() {
      const vm = this;
      const { render } = vm.$options;
      return render.call(vm, vm.$createElement);
    }
    ```
   * _createElement\
    创建虚拟 DOM 节点的方法。\
    以下是伪代码，源码位置：[Vue 创建虚拟 DOM 方法](https://github.com/vuejs/vue/blob/main/src/core/vdom/create-element.ts)
    ```js
    export function _createElement(tag, data, children) {
      if (typeof tag === 'function') {
        return createComponent(tag, data, children);
      } else {
      return createElement(tag, data, children);
    }
   }
   ```

4. **组件渲染**

   * createComponent\
    <span style="color: red;">组件渲染从父组件的 patch 过程开始，当遇到组件占位 VNode 时触发组件渲染。</span>\
    创建组件实例的方法。\
    以下是伪代码，源码位置：[Vue 创建组件实例方法](https://github.com/vuejs/vue/blob/main/src/core/vdom/create-component.ts)
    ```js
    // 组件init钩子
      const componentVNodeHooks = {
        init(vnode) {
          const child = vnode.componentInstance = 
          new vnode.componentOptions.Ctor(options);
          child.$mount(undefined); // 子组件挂载
        }
      };

      function createComponent(vnode) {
        if (isDef(vnode.data.hook?.init)) {
          vnode.data.hook.init(vnode); // 触发组件初始化
        }
      }
   ```

5. **更新阶段**
    * _update\
    更新组件的方法，会调用 `patch` 函数对比新旧虚拟 DOM 树，更新真实 DOM。\
    以下是伪代码，源码位置：[Vue 更新方法](https://github.com/vuejs/vue/blob/main/src/core/instance/lifecycle.ts)
    ```js
    export function _update(vm, hydrating) {
      const prevVnode = vm._vnode;
      const vnode = vm._render();
      vm._vnode = vnode;
      if (!prevVnode) {
        // 初始化渲染
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // 对比更新
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
    }
    ```

   * __patch__\
    对比新旧虚拟 DOM 树，更新真实 DOM 的方法。\
    以下是伪代码，源码位置：[Vue 对比更新方法](https://github.com/vuejs/vue/blob/main/src/core/vdom/patch.ts)
    ```js
    export function __patch__(oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(oldVnode)) {
        // 初始化渲染
        return createElm(vnode, insertedVnodeQueue);
      } else {
        // 对比更新
        return patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      }
    }
   ```
6. **挂载阶段**
   * 触发mounted钩子\
   组件挂载完成后触发的钩子函数。\
   以下是伪代码，源码位置：[Vue mounted 钩子](https://github.com/vuejs/vue/blob/main/src/core/instance/lifecycle.ts)
   ```js
   export function mounted() {
     const { mounted } = this.$options;
     if (mounted) {
       mounted.call(this);
     }
   }
   ```

## 四、vue2 渲染流程图
![vue2 渲染流程图](/images/vue2-process.webp)

## 五、vue3 响应式原理

1. **响应式核心 API：`Proxy`**
   * 完整拦截：可拦截对象的所有操作（包括属性添加/删除）
   * 惰性代理：嵌套对象在访问时才转为响应式，减少初始化开销
   * 数组支持：无需重写数组方法，直接支持索引修改和长度变化 

    1.1 **reactive 核心创建逻辑**\
    以下是伪代码，源码位置：[Vue 响应式核心方法](https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L257)
    ```js
    function createReactiveObject(
        target: Target,
        isReadonly: boolean,
        baseHandlers: ProxyHandler<any>,
        collectionHandlers: ProxyHandler<any>,
        proxyMap: WeakMap<Target, any>
      ) {
        // 1. 非对象直接返回
        if (!isObject(target)) return target; 
        
        // 2. 已代理过的对象直接返回缓存
        const existingProxy = proxyMap.get(target);
        if (existingProxy) return existingProxy;
        
        // 3. 检查目标类型（普通对象/集合类型）
        const targetType = getTargetType(target);
        if (targetType === TargetType.INVALID) return target;
        
        // 4. 创建代理
        const proxy = new Proxy(
          target,
          targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
        );
        
        // 5. 缓存并返回
        proxyMap.set(target, proxy);
        return proxy;
      }
      ```

    1.2 **mutableHandlers的setter getter**\
    基础处理器，用于处理普通对象的响应式。\
    以下是伪代码，源码位置：[Vue 基础处理器](https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L136)\
    getter
    ```js
    function createGetter(isReadonly = false, shallow = false) {
      return function get(target, key, receiver) {
        // 1. 触发依赖收集
        track(target, key);
        
        // 2. 递归代理嵌套对象
        const res = Reflect.get(target, key, receiver);
        if (isObject(res)) {
          return reactive(res);
        }
        // 3. 返回属性值
        return res;
      }
    }
    ```
    setter
    ```js
    function createSetter(shallow = false) {
      return function set(
        target: object,
        key: string | symbol,
        value: unknown,
        receiver: object
      ): boolean {
        // 1. 获取旧值
        const oldValue = (target as any)[key];
        
        // 2. 设置新值
        const result = Reflect.set(target, key, value, receiver);
        
        // 3. 触发更新（排除原型链操作）
        if (target === toRaw(receiver)) {
          if (!hadKey) { // 新增属性
            trigger(target, TriggerOpTypes.ADD, key, value);
          } else if (hasChanged(value, oldValue)) { // 修改属性
            trigger(target, TriggerOpTypes.SET, key, value, oldValue);
          }
        }
        return result;
      };
    }
    ```

    1.3 **track 依赖收集**\
    触发依赖收集的方法，会在 getter 中调用。\
    以下是伪代码，源码位置：[Vue 依赖收集方法](https://github.com/vuejs/core/blob/main/packages/reactivity/src/dep.ts#L262)
    ```js
    function track(target: object, type: TrackOpTypes, key: unknown) {
      // 1. 检查是否应收集依赖
      if (!shouldTrack || activeEffect === undefined) return;
      
      // 2. 获取target对应的depsMap
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()));
      }
      
      // 3. 获取key对应的dep集合
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, (dep = createDep()));
      }
      
      // 4. 将当前effect添加到dep
      trackEffects(dep);
    }
    ```

    1.4 **trigger 触发更新**\
    触发依赖更新的方法，会在 setter 中调用。\
    以下是伪代码，源码位置：[Vue 触发更新方法](https://github.com/vuejs/core/blob/main/packages/reactivity/src/dep.ts#L294)
    ```js
    function trigger(
      target: object,
      type: TriggerOpTypes,
      key?: unknown,
      newValue?: unknown,
      oldValue?: unknown
    ) {
      // 1. 获取target对应的depsMap
      const depsMap = targetMap.get(target);
      if (!depsMap) return;
      
      // 2. 收集需要触发的effects
      let deps: (Dep | undefined)[] = [];
      
      // 3. 不同操作类型处理
      if (type === TriggerOpTypes.CLEAR) { // 集合清空
        deps = [...depsMap.values()];
      } else if (key === 'length' && isArray(target)) { // 数组长度变化
        depsMap.forEach((dep, key) => {
          if (key === 'length' || key >= (newValue as number)) {
            deps.push(dep);
          }
        });
      } else { // 常规属性变化
        if (key !== void 0) {
          deps.push(depsMap.get(key));
        }
      }
      
      // 4. 触发所有关联的effects
      const effects: ReactiveEffect[] = [];
      for (const dep of deps) {
        if (dep) effects.push(...dep);
      }
      triggerEffects(createDep(effects));
    }
    ```
    
    1.5 **整体流程图**\
    ![vue3 响应式流程图](/images/reactive.webp)



  ## 六、vue3 渲染流程
