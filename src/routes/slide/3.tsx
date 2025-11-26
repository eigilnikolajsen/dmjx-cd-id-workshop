import { createFileRoute } from "@tanstack/solid-router";
import emptyFileTree from "../../assets/images/empty-file-tree.webp";
import { SlideLayout } from "../../components/slide-layout";

const Route = createFileRoute("/slide/3")({
	preload: true,
	component: () => (
		<SlideLayout index={3}>
			<h2>Thinking programmatically</h2>

			<ul>
				<li>Picking up new tools and experimenting</li>
				<li>Code = most raw tool, most flexible medium</li>
				<li>Endless possibilities, steep learning curve</li>
				<li>A clean file tree is the ultimate blank canvas</li>
			</ul>

			<img src={emptyFileTree} alt="A clean file tree" class="rounded-lg" />
		</SlideLayout>
	),
});

export { Route };
