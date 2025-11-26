import type { JSX, ParentComponent, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import { booleanAttribute } from "../scripts/utils";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	selected?: boolean;
	component?: ValidComponent;
	disabled?: boolean;
}

const Button: ParentComponent<Props> = (props) => (
	<Dynamic
		{...props}
		component={props.component ?? "button"}
		type={props.type ?? props.component ?? "button"}
		tabIndex={props.tabIndex}
		class="button-base button-focus button-disabled"
		classList={{ [props.class ?? ""]: !!props.class }}
		data-selected={booleanAttribute(props.selected)}
		data-disabled={booleanAttribute(props.disabled)}
	>
		{props.children}
	</Dynamic>
);

export { Button };
