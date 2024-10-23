import { defineConfig } from 'vite';
import htmlInject from 'vite-plugin-html-inject';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

export default defineConfig({
	plugins: [
    htmlInject(
        {
            head: '/head.html',
          }
    ), 

      VitePluginSvgSpritemap('./src/assets/*.svg', {
        output: {
            filename: '/spritemap.svg',
        },
    }),
  ],
  
});