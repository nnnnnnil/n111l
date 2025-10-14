import { defineConfig } from 'vitepress'

const sidebarConfig = [
  {
    text: '前端',
    items: [
      { text: 'HTML', link: '/front-end/html' },
      { text: 'CSS', link: '/front-end/css' },
      { text: 'JavaScript', link: '/front-end/js' },
      { text: 'TypeScript', link: '/front-end/ts' },
      { text: 'Vue', link: '/front-end/vue' },
      { text: 'React', link: '/front-end/react' },
      { text: 'Ahooks', link: '/front-end/ahooks' }
    ]
  },
  {
    text: '后端',
    items: [
      {
        text: 'Nest',
        link: '/back-end/nest'
      }
    ] // 后端子菜单可根据需要添加
  },
  {
    text: '其他',
    items: [
      {
        text: 'Docker',
        link: '/other/docker'
      }
    ]
  }
]

export default defineConfig({
  base: '/n111l/',
  title: 'n111l',
  description: 'n111l的个人博客',
  head:[
    ['link', { rel: 'icon', href: '/n111l/images/myLogo.webp' }],
  ],
  themeConfig: {
    logo: '/images/myLogo.webp',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nnnnnnil' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present nnnnnnil'
    },
    // 头部导航配置
    nav: [
      {
        link: '/profile',
        text: '关于我'
      },
      {
        link: '/front-end/html',
        text: '指南'
      }
    ],
    // 启用搜索框
    search: {
      provider: 'local', // 本地搜索
    },
    // 侧边栏配置
    sidebar: sidebarConfig,
    outline: {
      label: '目录',
    },
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour12: false,
      },
    },
  }
})