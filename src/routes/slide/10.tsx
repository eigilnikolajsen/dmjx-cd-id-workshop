import homebrew from "@/assets/images/homebrew.webp";
import { CodeBlock } from "@/components/code-block";
import { SlideLayout } from "@/components/slide-layout";
import { TaskCheckbox } from "@/components/task-checkbox";
import { createFileRoute } from "@tanstack/solid-router";

const code = `brew --version
# > Homebrew 5.0.2`;

const Route = createFileRoute("/slide/10")({
	component: () => (
		<SlideLayout index={10}>
			<h2>2. Install Homebrew</h2>

			<p class="text-gray-600">Find out how by yourself. Verify with:</p>
			<CodeBlock code={code} lang="sh" />

			<img src={homebrew} alt="Brew installation command" class="rounded-lg" />

			<TaskCheckbox taskNumber={2} />
		</SlideLayout>
	),
});

export { Route };
