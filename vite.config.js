import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import postcssConfig from "./postcss.config";

export default defineConfig({
    esbuild: {
        jsxFactory: 'jsx',
        jsxInject: "import jsx from '@/jsx.js'",
    },
    resolve: {
        alias: {
            "@": "/src",
        },
    },

    css: {
        postcss: postcssConfig,
    },

    plugins: [
        ViteImageOptimizer({
            jpg: {
                quality:80,
            },
            png: {
                quality:80,
            },
            webp: {
                quality:80,
            },
            avif: {
                quality:60,
            },
        })
    ]
});