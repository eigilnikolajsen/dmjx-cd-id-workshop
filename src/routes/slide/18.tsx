import { createFileRoute } from "@tanstack/solid-router";
import { CodeBlock } from "../../components/code-block";
import { SlideLayout } from "../../components/slide-layout";
import { TaskCheckbox } from "../../components/task-checkbox";

const code = `# pull remote changes (no-op if working alone)
git pull

# stage all changes
git add --all

# commit changes with a message
git commit -m "feat: new pattern"

# push to remote
git push`;

const Route = createFileRoute("/slide/18")({
	preload: true,
	component: () => (
		<SlideLayout index={18}>
			<h2>10. Write & Push Code</h2>

			<p class="text-gray-600">Stage, commit and push your new code:</p>
			<CodeBlock code={code} lang="sh" />
			<p class="text-sm text-gray-500">Repeat until satisfied.</p>

			<TaskCheckbox taskNumber={10} />
		</SlideLayout>
	),
});

export { Route };
