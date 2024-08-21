import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        nodePolyfills({
            include: ["buffer"],
            globals: {
                Buffer: true
            }
        })
    ],
    build: {
        sourcemap: false,
    },
    server: {
        port: 3000
    }
});