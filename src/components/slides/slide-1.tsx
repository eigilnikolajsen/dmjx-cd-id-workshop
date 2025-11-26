import { CodeBlock } from "@/components/code-block";
import type { VoidComponent } from "solid-js";

const whoami = `whoami
# > eini`;

const Slide: VoidComponent = () => (
	<>
		<h1 class="text-4xl font-bold mb-8">DMJX CD ID Workshop</h1>

		<CodeBlock code={whoami} lang="sh" />

		<p>
			<span>Creative Technologist @ </span>
			<a href="https://kontrapunkt.com" target="_blank">
				Kontrapunkt
			</a>
		</p>

		<p>Interactive Design 20-23</p>
	</>
);

export default Slide;
