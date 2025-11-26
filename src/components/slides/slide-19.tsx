import netlify from "@/assets/images/netlify.webp";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>11. Deploy to Netlify</h2>

		<p>Ship it! 🚀</p>

		<img src={netlify} alt="Netlify deploy settings" class="rounded-lg" />

		<TaskCheckbox taskNumber={11} />
	</>
);

export default Slide;
