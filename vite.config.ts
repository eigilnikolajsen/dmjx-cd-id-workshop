import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tsConfigPaths(), tanstackStart(), solidPlugin({ ssr: true }), tailwindcss()],
	server: { port: 3000 },
});
