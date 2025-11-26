import { createFileRoute } from "@tanstack/solid-router";
import { SlideLayout } from "../../components/slide-layout";

const Route = createFileRoute("/slide/8")({
	preload: true,
	component: () => (
		<SlideLayout index={8}>
			<h2>On AI</h2>

			<h3 class="text-green-700">✓ Do use AI</h3>
			<ul>
				<li>For advice</li>
				<li>To explain complex concepts</li>
				<li>To compare technologies</li>
				<li>For side quests and automation</li>
			</ul>

			<h3 class="text-red-700">✕ Never use AI</h3>
			<ul>
				<li>To write the main logic</li>
				<li>To architect your code</li>
			</ul>
		</SlideLayout>
	),
});

export { Route };
