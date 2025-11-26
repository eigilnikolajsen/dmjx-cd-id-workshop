import { createFileRoute } from "@tanstack/solid-router";
import logos from "../../assets/images/logos.webp";
import { SlideLayout } from "../../components/slide-layout";

const Route = createFileRoute("/slide/6")({
	preload: true,
	component: () => (
		<SlideLayout index={6}>
			<h2>How to Win</h2>

			<ul>
				<li>Write down every new term you encounter, the more the better</li>
				<li>Get as far as you can</li>
			</ul>

			<img src={logos} alt="Logos" class="rounded-lg" />
		</SlideLayout>
	),
});

export { Route };
