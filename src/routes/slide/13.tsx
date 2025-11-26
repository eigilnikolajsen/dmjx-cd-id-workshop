import github from "@/assets/images/github.webp";
import { SlideLayout } from "@/components/slide-layout";
import { TaskCheckbox } from "@/components/task-checkbox";
import { createFileRoute } from "@tanstack/solid-router";

const Route = createFileRoute("/slide/13")({
	component: () => (
		<SlideLayout index={13}>
			<h2>5. Create a GitHub Profile</h2>

			<p class="text-gray-600">
				Create a new repository (e.g. <code>shecanplay-visual-identity</code>)
			</p>

			<img src={github} alt="GitHub new repository creation page" class="rounded-lg" />

			<TaskCheckbox taskNumber={5} />
		</SlideLayout>
	),
});

export { Route };
