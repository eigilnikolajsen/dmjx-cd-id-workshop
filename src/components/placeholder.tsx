import type { VoidComponent } from "solid-js";

interface Props {
	type: "image" | "video" | "interactive";
	suggestion: string;
}

const Placeholder: VoidComponent<Props> = (props) => {
	const icons = {
		image: "🖼️",
		video: "🎬",
		interactive: "🎮",
	};

	const colors = {
		image: "bg-blue-50 border-blue-200 text-blue-700",
		video: "bg-purple-50 border-purple-200 text-purple-700",
		interactive: "bg-green-50 border-green-200 text-green-700",
	};

	return (
		<div class={`${colors[props.type]} border-2 border-dashed rounded-lg p-6 text-center not-prose`}>
			<span class="text-3xl mb-2 block">{icons[props.type]}</span>
			<p class="text-sm font-medium uppercase tracking-wide mb-1">{props.type} placeholder</p>
			<p class="text-xs opacity-75">{props.suggestion}</p>
		</div>
	);
};

export { Placeholder };

