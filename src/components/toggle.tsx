import { booleanAttribute } from "@/scripts/utils";
import type { Accessor, Setter, VoidComponent } from "solid-js";

interface Props {
	checked: Accessor<boolean>;
	setChecked: Setter<boolean>;
	disabled?: boolean;
	label?: string;
	name?: string;
}

const Toggle: VoidComponent<Props> = (props) => (
	<button
		type="button"
		class="group inline-flex h-fit cursor-pointer items-center"
		disabled={props.disabled}
		data-toggle
		data-checked={booleanAttribute(props.checked())}
		onClick={() => props.setChecked(!props.checked())}
	>
		<div class="border border-black group-data-checked:bg-selected bg-gray-700 pointer-events-none relative flex h-6 w-12 items-center rounded-full">
			<div class="bg-black pointer-events-none ms-1 h-4 w-4 rounded-full transition-transform content-[''] group-data-checked:translate-x-5.5" />
		</div>
		<span class="text-black ml-3 data-hidden:sr-only" data-hidden={booleanAttribute(!props.label)}>
			{props.label || props.name || "Toggle"}
		</span>
	</button>
);

export { Toggle };
