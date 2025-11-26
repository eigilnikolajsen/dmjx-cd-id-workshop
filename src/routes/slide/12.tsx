import { createFileRoute } from "@tanstack/solid-router";
import bun from "../../assets/images/bun.webp";
import { CodeBlock } from "../../components/code-block";
import { SlideLayout } from "../../components/slide-layout";
import { TaskCheckbox } from "../../components/task-checkbox";

const code = `bun --version
# > 1.3.2`;

const Route = createFileRoute("/slide/12")({
	preload: true,
	component: () => (
		<SlideLayout index={12}>
			<h2>4. Install Bun</h2>

			<p class="text-gray-600">Install using Homebrew. Verify with:</p>
			<CodeBlock code={code} lang="sh" />

			<img src={bun} alt="Bun installation command" class="rounded-lg" />

			<TaskCheckbox taskNumber={4} />
		</SlideLayout>
	),
});

export { Route };
