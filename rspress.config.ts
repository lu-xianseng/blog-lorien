import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
// import { LastUpdated } from 'rspress/theme';
import readingTime from 'rspress-plugin-reading-time'
// import live2d from 'rspress-plugin-live2d'
// import toc from 'rspress-plugin-toc'

export default defineConfig({
  root: 'docs',
  head: [
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?59d12908ad3d91c301a4851e08586997";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],
  base: '/',
  title: 'Lorien Blog',
  icon: '/logo.png',
  // logo: 'hello.png',
  logoText: 'Hi, 今天你好吗？',
  ssr: 'false',
  themeConfig: {
    lastUpdated: true,
    enableScrollToTop: true,
    enableAppearanceAnimation: true,
    enableContentAnimation: true,
    socialLinks: [
      {
        icon: 'wechat',
        mode: 'text',
        content: '15208446676',
      },
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/lu-xianseng',
      },
    ],
    hideNavbar: 'auto',
    prevPageText: '上一页',
    nextPageText: '下一页',
    outlineTitle: '目录',
    lastUpdatedText: '更新时间',
    searchPlaceholderText: '搜索',
    overview: {
      filterNameText: '快速查找',
      filterPlaceholderText: '输入关键词',
      filterNoResultText: '无搜索结果',
    },
  },
  route:{
  },
  plugins: [
    readingTime({
      defaultLocale: 'zh-CN',
      }),
    ]
});
