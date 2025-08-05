import Gitalk from 'gitalk'

export default function initGitalk(path: string) {
    // 初始化 Gitalk
  const gitalk = new Gitalk({
    clientID: 'Ov23likXIL6DPistHezV',
    clientSecret: 'c6dafdc5e090c504ca9b4aee1cea41842f6c0098',
    repo: 'n111l', // 例如: 'my-blog-comments'
    owner: 'nnnnnnil',
    admin: ['nnnnnnil'], // 仓库管理员，可初始化评论
    id: path, // 用于区分不同页面的唯一标识，通常使用路径名
    distractionFreeMode: false, // 是否启用无干扰模式
    language: 'zh-CN' // 语言
  })
  
  // 渲染评论组件
  gitalk.render('gitalk-container')
}
