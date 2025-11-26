import { CodeBlock } from "@/components/code-block";
import { SlideLayout } from "@/components/slide-layout";
import { TaskCheckbox } from "@/components/task-checkbox";
import { createFileRoute } from "@tanstack/solid-router";

const Route = createFileRoute("/slide/14")({
	component: () => (
		<SlideLayout index={14}>
			<h2>6. Install GitHub CLI & Login</h2>

			<p class="text-gray-600">Use the CLI to find out how to login. Start with:</p>
			<CodeBlock code="gh --help" lang="sh" />
			<p class="text-sm text-gray-500">And go from there...</p>

			<TaskCheckbox taskNumber={6} />
		</SlideLayout>
	),
});

export { Route };
