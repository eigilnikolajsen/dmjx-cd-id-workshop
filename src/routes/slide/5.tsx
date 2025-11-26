import { SlideLayout } from "@/components/slide-layout";
import { createFileRoute } from "@tanstack/solid-router";

const Route = createFileRoute("/slide/5")({
	component: () => (
		<SlideLayout index={5}>
			<h2>My Hope</h2>

			<ul>
				<li>Form better opinions through testing</li>
				<li>School = best place to experiment</li>
				<li>More tools → better tool selection</li>
				<li>Improve at learning itself</li>
				<li>Look at new tools with excitement</li>
			</ul>
		</SlideLayout>
	),
});

export { Route };
