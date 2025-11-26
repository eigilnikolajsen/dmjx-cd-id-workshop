import { SlideLayout } from "@/components/slide-layout";
import { createFileRoute } from "@tanstack/solid-router";

const Route = createFileRoute("/slide/6")({
	component: () => (
		<SlideLayout index={6}>
			<h2>How to Win</h2>

			<ul>
				<li>Write down every new term you encounter, the more the better</li>
				<li>Get as far as you can</li>
			</ul>
		</SlideLayout>
	),
});

export { Route };
