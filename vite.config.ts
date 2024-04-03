import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
    manifest_version: 3,
    name: "Minskey",
    description: "Chrome extension to use Minskey",
    version: "0.1.0",
    permissions: ["storage", "contextMenus"],
    background: {
        service_worker: "src/background.ts",
    },
});

export default defineConfig({
    server: {
        open: false,
    },
    plugins: [crx({ manifest })],
});
