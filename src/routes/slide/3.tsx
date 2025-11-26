import { SlideLayout } from "@/components/slide-layout";
import { createFileRoute } from "@tanstack/solid-router";

const Route = createFileRoute("/slide/3")({
	component: () => (
		<SlideLayout index={3}>
			<h2>Language</h2>

			<ul>
				<li>Coding world is in English</li>
				<li>Mix of Danish and English</li>
				<li>English coding terms</li>
			</ul>

			<h2>Rules</h2>

			<ul>
				<li>Ask all the stupid questions</li>
				<li>Have things explained, but do it yourself</li>
				<li>
					Filenames in kebab-case: <code>name-of-file.pdf</code>
				</li>
			</ul>
		</SlideLayout>
	),
});

export { Route };
