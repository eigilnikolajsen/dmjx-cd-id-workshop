import type { VoidComponent } from "solid-js";

const Slide: VoidComponent = () => (
	<>
		<h2>Language</h2>

		<ul>
			<li>Coding world is in English</li>
			<li>Mix of Danish and English</li>
			<li>English coding terms</li>
		</ul>

		<h2>Rules</h2>

		<ul>
			<li>Ask all the stupid questions</li>
			<li>Have things explained, but do it yourself</li>
			<li>
				Filenames in kebab-case: <code>name-of-file.pdf</code>
			</li>
		</ul>
	</>
);

export default Slide;
