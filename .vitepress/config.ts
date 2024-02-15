import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { description } from './config/description'
import { PluginTable } from './plugin'

export default {
  title: 'Anlans', // 网站标题 （Tab标题）
  head: [
    ['link', { rel: 'icon', href: 'https://product-1256871806.cos.ap-shanghai.myqcloud.com/imgs202402152228796.jpg' }]
  ],
  lastUpdated: true, // 最后更新时间
  cacheDir: '../../node_modules',
  description,
  themeConfig: {
    logo: 'https://product-1256871806.cos.ap-shanghai.myqcloud.com/imgs202402152228796.jpg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Anlans'
      }
    ],
    nav,
    sidebar,
    // editLink: {
    //   pattern: 'https://github.com/Anlans/Anlans.github.io/blob/master/docs/:path'
    // }
  },
  markdown: {
    lineNumbers: true,
    // 自定义 markdown 语法
    config: (md) => PluginTable(md)
  }
}
