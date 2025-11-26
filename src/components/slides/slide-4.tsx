import canvasStarter from "@/assets/images/canvas-starter.webp";
import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>What are we building?</h2>

		<img src={canvasStarter} alt="Canvas starter project" class="rounded-lg" />
	</>
);

export default Slide;
