<template>
  <div id="gitalk-container" />
</template>

<script setup>
import { nextTick, onMounted, watch } from 'vue'
import { useData, useRouter } from 'vitepress'
import initGitalk from './gitalk'
import 'gitalk/dist/gitalk.css'

const { route } = useRouter()
const { page } = useData()

const getGitalk = () => {
  initGitalk(route.path)
}

watch(() => route.path, () => {
  nextTick(() => {
    getGitalk()
  })
})


onMounted(() => {

  if (page.value.frontmatter.comment === false) return
  
  if (typeof window === 'undefined') return

  const container = document.getElementById('gitalk-container')
  if (container) {
    container.innerHTML = ''
    getGitalk()
  }
})

</script>