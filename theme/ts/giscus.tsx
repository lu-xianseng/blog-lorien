import { useEffect } from 'react';

export default function Giscus() {
    useEffect(() => {
        // 检查是否为浏览器环境
        if (typeof document !== 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://giscus.app/client.js';
            script.async = true;
            script.crossOrigin = 'anonymous';
            script.dataset.repo = 'lu-xianseng/blog-lorien';
            script.dataset.repoId = 'R_kgDON7WVXw';
            script.dataset.category = 'Announcements';
            script.dataset.categoryId = 'DIC_kwDON7WVX84CoepL';
            script.dataset.mapping = 'pathname';
            script.dataset.strict = '0';
            script.dataset.reactionsEnabled = '1';
            script.dataset.emitMetadata = '0';
            script.dataset.inputPosition = 'top';
            script.dataset.theme = 'preferred_color_scheme';
            script.dataset.lang = 'zh-CN';
            script.dataset.loading = 'lazy';

            const container = document.getElementById('giscus-container');
            container?.appendChild(script);

            return () => {
                if (container) {
                    container.innerHTML = '';
                }
            };
        }
    }, []);

    return null;
}
