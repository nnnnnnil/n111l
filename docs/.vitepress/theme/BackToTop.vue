<template>
  <div
    class="back-to-top"
    @click="scrollToTop"
    v-show="isVisible"
  >
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="arrow-up"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
      d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z">
      </path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(false)

// 节流
const throttle = (fn: Function, delay: number) => {
  let timer: number | null = null
  return function (...args: any[]) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

// 处理滚动事件
const handleScroll = throttle(() => {
  console.log('滚动事件触发')

  if (window.scrollY > 300) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}, 500)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>   


<style scoped>
.back-to-top {
  position: fixed;
  bottom: 200px;
  right: calc((100vw - 833px) / 2 - 30px);
  font-size: 36px;
  cursor: pointer;
  z-index: 999;
  width: 40px;
  height: 40px;
}
@media (max-width: 1279px) {
  .back-to-top {
    right: 20px;
  }
}
@media (max-width: 768px) {
  .back-to-top {
    right: 5px;
  }
}

</style>
