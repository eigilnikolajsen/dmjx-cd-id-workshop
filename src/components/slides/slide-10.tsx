import homebrew from "@/assets/images/homebrew.webp";
import { CodeBlock } from "@/components/code-block";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const code = `brew --version
# > Homebrew 5.0.2`;

const Slide: VoidComponent = () => (
	<>
		<h2>2. Install Homebrew</h2>

		<p class="text-gray-600">Find out how by yourself. Verify with:</p>
		<CodeBlock code={code} lang="sh" />

		<img src={homebrew} alt="Brew installation command" class="rounded-lg" />

		<TaskCheckbox taskNumber={2} />
	</>
);

export default Slide;
