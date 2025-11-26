import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>On AI</h2>
		<div class="grid grid-cols-2 gap-8">
			<div>
				<h3 class="text-green-700">✓ Do use AI</h3>
				<ul>
					<li>For advice</li>
					<li>To explain complex concepts</li>
					<li>To compare technologies</li>
					<li>For side quests and automation</li>
				</ul>
			</div>
			<div>
				<h3 class="text-red-700">✕ Never use AI</h3>
				<ul>
					<li>To write the main logic</li>
					<li>To architect your code</li>
				</ul>
			</div>
		</div>
	</>
);

export default Slide;
