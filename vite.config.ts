import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import tsconfigPaths from 'vite-tsconfig-paths';

import PluginCsv from './plugins/plugin-csv.js';

// console.log(process.env);
export default defineConfig({
    esbuild: {
        jsxFactory: 'createJSX',
        jsxInject: "import createJSX from 'helpers/createJSX.js';",
    },
    // envPrefix: '',
    plugins: [Inspect(), tsconfigPaths(), PluginCsv(), vue()],
    build: {
        rollupOptions: {
            input: {
                basaPage: resolve(__dirname, 'index.html'),
                elCasino: resolve(__dirname, 'el-casino/index.html'),
                vuePage: resolve(__dirname, 'vuePage/index.html'),
            },
        },
    },
    server: {
        port: 3020,
        strictPort: true,
        host: '0.0.0.0',
        proxy: {
            '/api': {
                changeOrigin: true,
                target: 'https://dummyjson.com',
                // rewrite: (path) => path.replace(/^\/api/, ''),
                bypass(req) {
                    // const referrer = new URL(req.headers.referer!);

                    //
                    // console.log(
                    //   'AAA123213AAAAAAA',
                    //   req.headers.referer,
                    //   new URL(req.headers.referer),
                    //   req.url,
                    // );
                    // eslint-disable-next-line no-param-reassign
                    req.url = `/products`;
                },
            },
        },
    },
});
