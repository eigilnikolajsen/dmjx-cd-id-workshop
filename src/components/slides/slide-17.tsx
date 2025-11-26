import readme from "@/assets/images/readme.webp";
import type { VoidComponent } from "solid-js";
import { TaskCheckbox } from "../task-checkbox";

const Slide: VoidComponent = () => (
	<>
		<h2>9. Follow the README</h2>

		<p class="text-gray-600">
			Open the project in your editor and follow the instructions in <code>README.md</code>
		</p>
		<p>Explore the structure and contents of the project.</p>

		<img src={readme} alt="readme file in VS Code" class="rounded-lg" />

		<TaskCheckbox taskNumber={9} />
	</>
);

export default Slide;
