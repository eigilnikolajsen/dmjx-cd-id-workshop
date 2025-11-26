import bun from "@/assets/images/bun.webp";
import { CodeBlock } from "@/components/code-block";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const code = `bun --version
# > 1.3.2`;

const Slide: VoidComponent = () => (
	<>
		<h2>4. Install Bun</h2>

		<p class="text-gray-600">Install using Homebrew. Verify with:</p>
		<CodeBlock code={code} lang="sh" />

		<img src={bun} alt="Bun installation command" class="rounded-lg" />

		<TaskCheckbox taskNumber={4} />
	</>
);

export default Slide;
