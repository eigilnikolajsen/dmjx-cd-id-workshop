import { createFileRoute } from "@tanstack/solid-router";
import netlify from "../../assets/images/netlify.webp";
import { SlideLayout } from "../../components/slide-layout";
import { TaskCheckbox } from "../../components/task-checkbox";

const Route = createFileRoute("/slide/19")({
	preload: true,
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
