import type { VoidComponent } from "solid-js";

interface Props {
	/** The width of the spinner in rem. Defaults to 1.5rem. */
	width?: number;
	/** The height of the spinner in rem. Defaults to 1.5rem. */
	height?: number;
}

const LoadingSpinner: VoidComponent<Props> = (props) => (
	<div
		class="box-border inline-block h-6 w-6 animate-spin rounded-full border-current border-b-transparent"
		style={{
			width: props.width ? `${props.width}rem` : undefined,
			height: props.height ? `${props.height}rem` : undefined,
		}}
	/>
);

export { LoadingSpinner };
