import { CodeBlock } from "@/components/code-block";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const code = `# clone the starter project
gh repo clone eigilnikolajsen/canvas-starter

# rename the repo
mv ./canvas-starter ./shecanplay-visual-identity

# change directory
cd ./shecanplay-visual-identity

# remove git to start fresh
rm -rf .git

# initialize fresh git repo
git init

# stage all files
git add --all

# commit with message "init"
git commit -m "init"`;

const Slide: VoidComponent = () => (
	<>
		<h2>7. Clone the Starter Repo</h2>

		<p class="text-gray-600">Open ~/Developer in terminal:</p>
		<CodeBlock code={code} lang="sh" />

		<TaskCheckbox taskNumber={7} />
	</>
);

export default Slide;
