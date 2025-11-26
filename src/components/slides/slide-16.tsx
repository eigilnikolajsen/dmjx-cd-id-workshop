import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>8. Install a Code Editor</h2>
		<p class="text-gray-600">VS Code, Cursor, Antigravity, or another VS Code fork</p>
		<h3>Install these extensions:</h3>
		<ul>
			<li>
				<strong>Prettier</strong> — formatting code
			</li>
			<li>
				<strong>Oxc</strong> — linting (advanced)
			</li>
			<li>
				<strong>Tailwind CSS IntelliSense</strong> — better Tailwind DX
			</li>
		</ul>

		<TaskCheckbox taskNumber={8} />
	</>
);

export default Slide;
