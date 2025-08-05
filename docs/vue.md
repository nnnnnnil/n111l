# Vue

Vue是一个用于构建用户界面的渐进式框架。

## 基本语法

```vue
<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="changeMessage">更改消息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Vue is amazing!'
    }
  }
}
</script>

<style scoped>
.hello {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```