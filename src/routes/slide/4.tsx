import canvasStarter from "@/assets/images/canvas-starter.webp";
import { SlideLayout } from "@/components/slide-layout";
import { createFileRoute } from "@tanstack/solid-router";

const Route = createFileRoute("/slide/4")({
	component: () => (
		<SlideLayout index={4}>
			<h2>What are we building?</h2>

			<img src={canvasStarter} alt="Canvas starter project" class="rounded-lg" />
		</SlideLayout>
	),
});

export { Route };
