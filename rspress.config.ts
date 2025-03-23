import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { LastUpdated } from 'rspress/theme';

export default defineConfig({
  root: 'docs',
  base: '/',
  title: 'Lorien Blog',
  icon: '/logo.png',
  // logo: 'hi.png',
  logoText: 'Hi, 今天你好吗？',
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
    footer: {
      message: `版权所有 © 2020-${new Date().getFullYear()} lorien`
    },
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
  nav: [
    {
      "text": "首页",
      "link": "/index",
      "activeMatch": "/index/"
    },
    {
      "text": "自动化技术",
      "link": "/at/index",
      "activeMatch": "/at/"
    },
    {
      "text": "编程基础",
      "link": "/code/index",
      "activeMatch": "/code/"
    },
    {
      "text": "技术文档",
      "link": "/td",
      "activeMatch": "/td/"
    },
    {
      "text": "经验总结",
      "link": "/exp",
      "activeMatch": "/exp/"
    },
    {
      "text": "阅读",
      "link": "/book",
      "activeMatch": "/book/"
    },
    {
      "text": "关于",
      "link": "/about",
      "activeMatch": "/about/"
    }
  ]
});
