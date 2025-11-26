import type { VoidComponent } from "solid-js";
import { Show } from "solid-js";

interface Props {
	selected: boolean;
	onFocus: () => void;
}

const FocusHelper: VoidComponent<Props> = (props) => (
	<Show when={props.selected}>
		<button type="button" class="sr-only" onFocus={props.onFocus} aria-label="Focus helper" />
	</Show>
);

export { FocusHelper };
