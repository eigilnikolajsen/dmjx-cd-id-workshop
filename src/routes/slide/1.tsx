import { createFileRoute } from "@tanstack/solid-router";
import { CodeBlock } from "../../components/code-block";
import { SlideLayout } from "../../components/slide-layout";

const whoami = `whoami
# > eini`;

const Route = createFileRoute("/slide/1")({
	preload: true,
	component: () => (
		<SlideLayout index={1}>
			<h1 class="text-4xl font-bold mb-8">DMJX CD ID Workshop</h1>

			<CodeBlock code={whoami} lang="sh" />

			<p>
				<span>Creative Technologist @ </span>
				<a href="https://kontrapunkt.com" target="_blank">
					Kontrapunkt
				</a>
			</p>

			<p>Interactive Design 20-23</p>

			<a href="https://dmjx-cd-id-workshop.netlify.app" target="_blank">
				dmjx-cd-id-workshop.netlify.app
			</a>
		</SlideLayout>
	),
});

export { Route };
