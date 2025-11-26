import { Placeholder } from "@/components/placeholder";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>5. Create a GitHub Profile</h2>

		<p class="text-gray-600">
			Create a new repository (e.g. <code>shecanplay-visual-identity</code>)
		</p>
		<Placeholder type="image" suggestion="Screenshot: GitHub new repository creation page" />

		<TaskCheckbox taskNumber={5} />
	</>
);

export default Slide;
