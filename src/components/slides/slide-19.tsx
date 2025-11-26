import { Placeholder } from "@/components/placeholder";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>11. Deploy to Netlify</h2>

		<p>Ship it! 🚀</p>
		<Placeholder
			type="interactive"
			suggestion="Link to Netlify deploy flow or screenshot of deploy settings"
		/>

		<TaskCheckbox taskNumber={11} />
	</>
);

export default Slide;
