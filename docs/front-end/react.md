# React

React是一个用于构建用户界面的JavaScript库。

## react常用的hooks

React Hooks是React 16.8版本引入的新特性，它允许我们在不编写类组件的情况下使用状态和其他React特性。下面是一些React中常用的hooks的TSX实现：

1. **useState**\
   用于管理组件状态。

```tsx
import React, { useState } from 'react';

function Counter() {
  // 声明一个名为count的状态变量，初始值为0
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

2. **useEffect**\
   用于处理副作用，如数据获取、订阅或手动修改DOM。

```tsx
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState<number>(0);
  // 相当于componentDidMount和componentDidUpdate
  useEffect(() => {
    // 更新文档标题
    document.title = `You clicked ${count} times`;
    // 清理函数，相当于componentWillUnmount；在依赖项count改变时副作用函数执行前调用
    return () => {
      console.log('Component will unmount');
    };
  }, [count]); // 仅在count改变时执行

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

3. **useContext**\
   用于访问上下文，避免 props  drilling。

```tsx
import React, { useContext, createContext } from 'react';
// 创建上下文
const ThemeContext = createContext<'light' | 'dark'>('light');
function ThemedButton() {
  // 访问上下文
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
```

4. **useReducer**\
   用于更复杂的状态管理，类似于Redux。

```tsx
import React, { useReducer } from 'react';

// 定义状态类型
interface CounterState {
  count: number;
}

// 定义动作类型
type CounterAction = 
  | { type: 'increment' }
  | { type: 'decrement' };

// 定义reducer函数
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unexpected action');
  }
}

function Counter() {
  // 使用useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

5. **useRef**\
   用于访问DOM元素或保存可变值。

```tsx
import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  // 创建ref
  const inputEl = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    // 访问DOM元素
    inputEl.current?.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}
```

6. **useCallback**\
   用于缓存函数引用，避免不必要的重新渲染。

```tsx
import React, { useState, useCallback } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  console.log('Button re-rendered');
  return <button onClick={onClick}>{children}</button>;
}

function App() {
  const [count, setCount] = useState<number>(0);

  // 缓存函数
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}
```

7. **useMemo**\
   用于缓存计算结果，避免不必要的重复计算。

```tsx
import React, { useState, useMemo } from 'react';

interface ExpensiveCalculationProps {
  num: number;
}

function ExpensiveCalculation({ num }: ExpensiveCalculationProps) {
  // 缓存计算结果
  const result = useMemo(() => {
    console.log('Calculating...');
    return num * 2;
  }, [num]);

  return <div>Result: {result}</div>;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [num, setNum] = useState<number>(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Num: {num}</p>
      <button onClick={() => setNum(num + 1)}>Increment Num</button>
      <ExpensiveCalculation num={num} />
    </div>
  );
}
```

8. **useLayoutEffect**\
   用于在DOM更新后同步执行副作用，类似于useEffect但执行时机不同。

```tsx
import React, { useRef, useLayoutEffect } from 'react';

function LayoutEffectExample() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      console.log('Element position:', rect);
    }
  }, []);

  return <div ref={ref}>Hello World</div>;
}
```

9. **useDebugValue**\
   用于在React开发者工具中显示自定义hook的标签。

```tsx
import { useDebugValue, useState } from 'react';

function useCounter(initialValue: number) {
  const [count, setCount] = useState<number>(initialValue);

  // 在开发者工具中显示标签
  useDebugValue(`Count: ${count}`);

  return [count, setCount] as const;
}

function Counter() {
  const [count, setCount] = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

