import { createFileRoute } from "@tanstack/solid-router";
import git from "../../assets/images/git.webp";
import { CodeBlock } from "../../components/code-block";
import { SlideLayout } from "../../components/slide-layout";
import { TaskCheckbox } from "../../components/task-checkbox";

const code = `git --version
# > git version 2.51.2`;

const Route = createFileRoute("/slide/11")({
	preload: true,
	component: () => (
		<SlideLayout index={11}>
			<h2>3. Install Git</h2>

			<p class="text-gray-600">Install using Homebrew. Verify with:</p>
			<CodeBlock code={code} lang="sh" />

			<img src={git} alt="Git installation command" class="rounded-lg" />

			<TaskCheckbox taskNumber={3} />
		</SlideLayout>
	),
});

export { Route };
