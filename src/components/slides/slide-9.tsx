import warp from "@/assets/images/warp.png";
import { CodeBlock } from "@/components/code-block";
import { TaskCheckbox } from "@/components/task-checkbox";
import type { VoidComponent } from "solid-js";

const code = `# make a directory in root called Developer
mkdir ~/Developer

# change directory to the new Developer directory
cd ~/Developer`;

const Slide: VoidComponent = () => (
	<>
		<h2>1. Install a Terminal</h2>

		<p class="text-gray-600">Recommended: Warp or Ghostty</p>
		<CodeBlock code={code} lang="sh" />
		<p class="text-sm text-gray-500">Verify the folder exists in Finder. Pin it to Favourites.</p>

		<img src={warp} alt="Warp terminal interface" class="rounded-lg" />

		<TaskCheckbox taskNumber={1} />
	</>
);

export default Slide;
