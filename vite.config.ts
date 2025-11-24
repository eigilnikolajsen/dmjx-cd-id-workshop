import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		tsConfigPaths(),
		tanstackStart(),
		solidPlugin({ ssr: true }),
		tailwindcss(),
		nitro({ preset: "bun" }),
	],
	server: { port: 3000 },
});
