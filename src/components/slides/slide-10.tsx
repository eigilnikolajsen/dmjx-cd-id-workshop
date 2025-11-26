import { CodeBlock } from "@/components/code-block";
import { Placeholder } from "@/components/placeholder";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const code = `brew --version
# > Homebrew 5.0.2`;

const Slide: VoidComponent = () => (
	<>
		<h2>2. Install Homebrew</h2>

		<p class="text-gray-600">Find out how by yourself. Verify with:</p>
		<CodeBlock code={code} lang="sh" />
		<Placeholder type="interactive" suggestion="Link to brew.sh with installation command" />

		<TaskCheckbox taskNumber={2} />
	</>
);

export default Slide;
