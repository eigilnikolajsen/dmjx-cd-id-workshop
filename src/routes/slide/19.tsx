import netlify from "@/assets/images/netlify.webp";
import { SlideLayout } from "@/components/slide-layout";
import { TaskCheckbox } from "@/components/task-checkbox";
import { createFileRoute } from "@tanstack/solid-router";

const Route = createFileRoute("/slide/19")({
	component: () => (
		<SlideLayout index={19}>
			<h2>11. Deploy to Netlify</h2>

			<p>Ship it! 🚀</p>

			<img src={netlify} alt="Netlify deploy settings" class="rounded-lg" />

			<TaskCheckbox taskNumber={11} />
		</SlideLayout>
	),
});

export { Route };
