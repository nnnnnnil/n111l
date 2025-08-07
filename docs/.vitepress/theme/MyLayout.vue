
<template>
  <Layout>
    <template #doc-bottom>
      <BackToTop />
    </template>
    <template #doc-after>
      <!-- 其他内容 -->
      <GitalkComponent />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import GitalkComponent from './GitalkComponent.vue'
import BackToTop from './BackToTop.vue'

const {Layout} = DefaultTheme

</script>