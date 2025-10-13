# ahooks 理解

ahooks 是一个 React  Hooks 库，提供了一些常用的 Hooks 函数，帮助开发者更方便地使用 React Hooks。/n
ahooks 源码地址：[ahooks](https://github.com/alibaba/hooks)
以下是个人阅读 ahooks 源码的理解。

## 个别源码阅读

1. **useCreation**
   `useCreation` 函数用于保证缓存数据不会被重新创建，除非依赖项发生变化。
   * 实现原理：
   1. 利用 `useRef`  hook  来创建一个 ref 对象，用于存储变量。
   2. 若是没有initial或者deps不相等，就重新对current赋值，最后返回current。
   源码：
   ```ts
    function useCreation<T>(factory: () => T, deps: DependencyList) {
      const { current } = useRef({
        deps,
        obj: undefined as undefined | T,
        initialized: false,
      });
      if (current.initialized === false || !depsAreSame(current.deps, deps)) {
        current.deps = deps;
        current.obj = factory();
        current.initialized = true;
      }
      return current.obj as T;
    }
   ```

2. **useUpdate**
   `useUpdate` 函数用于强制更新组件。
   * 实现原理：
   1. 利用 `useState`  hook  保存空对象，setState 来触发组件更新。
   2. 利用 `useCallback`  hook  来缓存更新函数，避免每次渲染都创建新函数。
   源码：
   ```ts
    function useUpdate() {
      const [, setState] = useState({});
      return useCallback(() => setState({}), []);
    }
   ```

3. **useReactive**
   `useReactive` 函数用于创建一个响应式的对象，当对象的属性发生变化时，会自动触发组件的重新渲染。
   * 实现原理：
   1. 利用 `useUpdate`  hook  来触发组件更新。
   2. 利用 `useRef`  hook  来创建一个 ref 对象，用于存储响应式对象。
   3. 利用 `useCreation`  hook  来缓存监听函数，避免被意外回收。
   4. 利用 proxy 来代理 ref 对象，weakMap来记录代理过的对象和防止代理已经代理过的对象。


4. **useMount**
   `useMount` 函数用于在组件挂载时执行副作用操作。
   * 实现原理：
   1. 利用 `useEffect`  hook  来监听组件挂载事件。
   源码：
   ```ts
    function useMount(fn: () => void) {
      useEffect(() => {
        fn();
      }, []);
    }
   ```

5. **useLatest**
   `useLatest` 函数用于获取最新的函数或值。
   * 实现原理：
   1. 利用 `useRef`  hook  来创建一个 ref 对象，用于存储函数或值。
   2. 每次渲染时，将函数或值赋值给 ref 对象。
   3. 返回 ref 对象的 current 属性。
   源码：
   ```ts
    function useLatest<T>(value: T) {
      const ref = useRef(value);
      ref.current = value;
      return ref;
    }
   ```

6. **useUnmount**
   `useUnmount` 函数用于在组件卸载时执行副作用操作。
   * 实现原理：
   1. 利用 `useEffect`  hook  来监听组件卸载事件。
   2. 利用 `useLatest`  hook  来获取最新的函数或值。
   3. 组件卸载时，调用最新的函数或值。
   源码：
   ```ts
    function useUnmount(fn: () => void) {
      const fnRef = useLatest(fn);
      useEffect(
        () => () => {
          fnRef.current();
        },
        [],
      );
    }
   ```

7. **useMemoizedFn**
   `useMemoizedFn` 函数用于缓存函数，保证函数地址不会改变。
   * 实现原理：
   1. 利用两个 `useRef`  hook  分别保存传入的函数和新构建的函数。
   2. 在新构建的函数中，调用传入的函数。
   3. 返回新构建的函数。
   源码：
   ```ts
    function useMemoizedFn<T extends (...args: any[]) => any>(fn: T) {
      const fnRef = useLatest(fn);
      const memoizedFn = useRef<PickFunction<T>>();
      if (!memoizedFn.current) {
        memoizedFn.current = function (this, ...args) {
          return fnRef.current.apply(this, args);
        };
      }
      return memoizedFn.current as PickFunction<T>;
    }
   ```

8. **useTimeout**
   `useTimeout` 函数用于在指定时间后执行副作用操作。
   * 实现原理：
   1. 利用 `useMemoizedFn`  hook  来缓存参数fn函数，`useRef`  hook  来保存定时器id。
   2. 利用 `useCallback`  hook   保存新建 `clear` 函数，用于清除定时器。
   3. 在 `useEffect`  hook  中，利用 `setTimeout`  来设置定时器，到达指定时间时，调用最新的函数。
   4. 返回 `clear` 函数。
   源码：
   ```ts
    const useTimeout = (fn: () => void, delay?: number) => {
      const timerCallback = useMemoizedFn(fn);
      const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

      const clear = useCallback(() => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }, []);

      useEffect(() => {
        if (!isNumber(delay) || delay < 0) {
          return;
        }
        timerRef.current = setTimeout(timerCallback, delay);
        return clear;
      }, [delay]);

      return clear;
    };
   ```