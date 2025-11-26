import { CodeBlock } from "@/components/code-block";
import { SlideLayout } from "@/components/slide-layout";
import { TaskCheckbox } from "@/components/task-checkbox";
import { createFileRoute } from "@tanstack/solid-router";

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

const Route = createFileRoute("/slide/15")({
	component: () => (
		<SlideLayout index={15}>
			<h2>7. Clone the Starter Repo</h2>

			<p class="text-gray-600">Open ~/Developer in terminal:</p>

			<CodeBlock code={code} lang="sh" />

			<p>Remember to rename the repo and change directory to the new one.</p>

			<TaskCheckbox taskNumber={7} />
		</SlideLayout>
	),
});

export { Route };
