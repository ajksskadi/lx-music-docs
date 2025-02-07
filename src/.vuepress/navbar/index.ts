import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  { text: '主页', icon: 'home', link: '/' },
  {
    text: '常见问题',
    icon: 'docs',
    prefix: '/document/',
    children: [
      { text: '桌面端', icon: 'desktop', link: 'desktop/' },
      { text: '移动端', icon: 'mobile', link: 'mobile/' },
    ],
  },
  { text: '下载', icon: 'download', link: '/download/' },
  { text: '反馈', icon: 'report', link: '/report/' },
  { text: '催更(bushi', icon: 'reminders', link: '/todos/' },
])
