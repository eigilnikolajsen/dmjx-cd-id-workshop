import { Placeholder } from "@/components/placeholder";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>9. Follow the README</h2>

		<p class="text-gray-600">
			Open the project in your editor and follow the instructions in <code>README.md</code>
		</p>
		<p>Explore the structure and contents of the project.</p>
		<Placeholder type="image" suggestion="Screenshot: Project file tree in editor sidebar" />

		<TaskCheckbox taskNumber={9} />
	</>
);

export default Slide;
