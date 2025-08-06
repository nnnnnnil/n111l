<template>
  <div id="gitalk-container" />
</template>

<script setup>
import { nextTick, onMounted, watch, ref } from 'vue'
import { useData, useRouter } from 'vitepress'
import initGitalk from './gitalk'
import 'gitalk/dist/gitalk.css'

const { route } = useRouter()
const { page } = useData()

const gitalkRef = ref(null)

const getGitalk = () => {
  if (gitalkRef.value) {
    gitalkRef.value.innerHTML = ''
    initGitalk(route.path)
  }
}

watch(() => route.path, () => {
  nextTick(() => {
    getGitalk()
  })
})


onMounted(() => {

  if (page.value.frontmatter.comment === false) return
  
  if (typeof window === 'undefined') return

  gitalkRef.value = document.getElementById('gitalk-container')

  getGitalk()
})

</script>