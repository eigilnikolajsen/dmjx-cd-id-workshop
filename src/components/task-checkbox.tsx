import { isTaskCompleted, toggleTask } from "@/scripts/task-store";
import type { VoidComponent } from "solid-js";

interface Props {
	taskNumber: number;
}

const TaskCheckbox: VoidComponent<Props> = (props) => (
	<label class="inline-flex items-center gap-2 cursor-pointer select-none">
		<input
			type="checkbox"
			checked={isTaskCompleted(props.taskNumber)}
			onChange={() => toggleTask(props.taskNumber)}
			class="w-5 h-5 rounded border-2 border-gray-400 checked:bg-green-500 checked:border-green-500 cursor-pointer"
		/>
		<span
			class={`text-sm ${isTaskCompleted(props.taskNumber) ? "text-green-600 line-through" : "text-gray-600"}`}
		>
			Mark as completed
		</span>
	</label>
);

export { TaskCheckbox };
