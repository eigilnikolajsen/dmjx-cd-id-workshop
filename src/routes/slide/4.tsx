import { createFileRoute } from "@tanstack/solid-router";
import canvasStarter from "../../assets/images/canvas-starter.webp";
import { SlideLayout } from "../../components/slide-layout";

const Route = createFileRoute("/slide/4")({
	preload: true,
	component: () => (
		<SlideLayout index={4}>
			<h2>What are we building?</h2>

			<img src={canvasStarter} alt="Canvas starter project" class="rounded-lg" />
		</SlideLayout>
	),
});

export { Route };
