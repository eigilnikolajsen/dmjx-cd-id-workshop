import { TOTAL_SLIDES } from "@/scripts/const";
import type { ParentComponent } from "solid-js";

interface Props {
	index: number;
}

const SlideLayout: ParentComponent<Props> = (props) => (
	<>
		<div class="absolute inset-0 items-center overflow-auto">
			<div class="m-8 prose min-w-[65ch] max-w-full">{props.children}</div>
		</div>

		<footer class="absolute bottom-4 right-4 text-right">
			<small>
				Slide {props.index} of {TOTAL_SLIDES}
			</small>
		</footer>
	</>
);

export { SlideLayout };
