import type { Component } from "solid-js";

const Footer: Component = () => (
	<footer class="col-span-full flex flex-col justify-end gap-4">
		<div class="border-t border-black flex flex-wrap items-center gap-2 py-4">
			<p>Eigil Nikolajsen © {new Date().getFullYear()}</p>
		</div>
	</footer>
);

export { Footer };
