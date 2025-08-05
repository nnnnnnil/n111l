import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './custom.css' // 正确的CSS导入位置

export default {
  ...DefaultTheme,
  Layout: MyLayout,

}