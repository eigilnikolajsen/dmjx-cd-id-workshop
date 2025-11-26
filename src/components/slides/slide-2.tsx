import emptyFileTree from "@/assets/images/empty-file-tree.webp";
import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>Introduction</h2>

		<ul>
			<li>Picking up new tools and experimenting</li>
			<li>Code = most raw tool, most flexible medium</li>
			<li>Endless possibilities, steep learning curve</li>
			<li>A clean file tree is the ultimate blank canvas</li>
		</ul>

		<img src={emptyFileTree} alt="A clean file tree" class="rounded-lg" />
	</>
);

export default Slide;
