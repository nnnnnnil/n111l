
<template>
  <Layout>
    <template #doc-after>
      <!-- 其他内容 -->
      <GitalkComponent />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import GitalkComponent from './GitalkComponent.vue'

const {Layout} = DefaultTheme

</script>