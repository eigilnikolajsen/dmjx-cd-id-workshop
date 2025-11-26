import { CodeBlock } from "@/components/code-block";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>6. Install GitHub CLI & Login</h2>

		<p class="text-gray-600">Use the CLI to find out how to login. Start with:</p>
		<CodeBlock code="gh --help" lang="sh" />
		<p class="text-sm text-gray-500">And go from there...</p>

		<TaskCheckbox taskNumber={6} />
	</>
);

export default Slide;
