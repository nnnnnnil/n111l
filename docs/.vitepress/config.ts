import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/n111l/',
  title: 'n111l',
  description: 'n111l的个人博客',
  head:[
    ['link', { rel: 'icon', href: '/n111l/images/logo.png' }],
  ],
  themeConfig: {
    logo: '/images/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nnnnnnil' }
    ],
    // 头部导航配置
    nav: [
      {
        link: '/',
        text: '首页'
      }
    ],
    // 启用搜索框
    search: {
      provider: 'local', // 本地搜索
    },
    // 侧边栏配置
    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'HTML', link: '/html' },
          { text: 'CSS', link: '/css' },
          { text: 'JavaScript', link: '/js' },
          { text: 'TypeScript', link: '/ts' },
          { text: 'Vue', link: '/vue' },
          { text: 'React', link: '/react' }
        ]
      },
      {
        text: '后端',
        items: [] // 后端子菜单可根据需要添加
      }
    ],
    outline: {
      label: '目录',
    }
  }
})