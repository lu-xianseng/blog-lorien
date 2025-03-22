import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  title: 'Lorien Blog',
  icon: '/1.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
