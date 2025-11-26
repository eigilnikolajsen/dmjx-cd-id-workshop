import git from "@/assets/images/git.webp";
import { CodeBlock } from "@/components/code-block";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const code = `git --version
# > git version 2.51.2`;

const Slide: VoidComponent = () => (
	<>
		<h2>3. Install Git</h2>

		<p class="text-gray-600">Install using Homebrew. Verify with:</p>
		<CodeBlock code={code} lang="sh" />

		<img src={git} alt="Git installation command" class="rounded-lg" />

		<TaskCheckbox taskNumber={3} />
	</>
);

export default Slide;
