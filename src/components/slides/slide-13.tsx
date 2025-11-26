import github from "@/assets/images/github.webp";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>5. Create a GitHub Profile</h2>

		<p class="text-gray-600">
			Create a new repository (e.g. <code>shecanplay-visual-identity</code>)
		</p>

		<img src={github} alt="GitHub new repository creation page" class="rounded-lg" />

		<TaskCheckbox taskNumber={5} />
	</>
);

export default Slide;
