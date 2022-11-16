import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { svgSpritePlugin } from './src/plugins/svg-sprite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgSpritePlugin({
            originalIconsDirectory: path.resolve(process.cwd(), 'src/assets/icons'),
            outputDirectory: path.resolve(process.cwd(), 'src/assets')
        })
    ],
    build: {
        rollupOptions: {
            output: {
                format: 'es'
            }
        }
    },
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    publicDir: 'static',
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "~/assets/styles/vars.scss";'
            }
        }
    }
});
