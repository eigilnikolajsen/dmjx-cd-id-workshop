import { SlideLayout } from "@/components/slide-layout";
import { createFileRoute } from "@tanstack/solid-router";

const Route = createFileRoute("/slide/7")({
	component: () => (
		<SlideLayout index={7}>
			<h2>Tips</h2>

			<ul>
				<li>
					<kbd>⌥</kbd> + <kbd>←→</kbd> — Move word by word
				</li>
				<li>
					<kbd>⌘</kbd> + <kbd>←→</kbd> — Move to start/end of line
				</li>
				<li>
					<kbd>⌥</kbd> + <kbd>↑↓</kbd> — Move lines up/down
				</li>
				<li>
					<kbd>⌥</kbd> + click — Multiple cursors
				</li>
				<li>
					<kbd>⌥</kbd> + <kbd>esc</kbd> — Launch IntelliSense
				</li>
			</ul>
		</SlideLayout>
	),
});

export { Route };
