# React

React是一个用于构建用户界面的JavaScript库。

## 基本语法

```jsx
import React, { useState } from 'react';

function HelloWorld() {
  const [message, setMessage] = useState('Hello, React!');

  const changeMessage = () => {
    setMessage('React is amazing!');
  };

  return (
    <div className="hello">
      <h1>{message}</h1>
      <button onClick={changeMessage}>更改消息</button>
    </div>
  );
}

export default HelloWorld;
```