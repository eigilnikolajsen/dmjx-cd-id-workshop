import { CodeBlock } from "@/components/code-block";
import type { VoidComponent } from "solid-js";

const whoami = `whoami
# > eini`;

const Slide: VoidComponent = () => (
	<>
		<h1 class="text-4xl font-bold mb-8">DMJX CD ID Workshop</h1>

		<CodeBlock code={whoami} lang="sh" />
	</>
);

export default Slide;
