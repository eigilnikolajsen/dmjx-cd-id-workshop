import { TOTAL_SLIDES } from "@/scripts/const";
import { useParams } from "@tanstack/solid-router";
import type { ParentComponent } from "solid-js";

const SlideLayout: ParentComponent = (props) => {
	const params = useParams({ from: "/slide/$slideIndex" });

	return (
		<>
			<div class="absolute inset-0 items-center overflow-auto">
				<div class="m-8 prose min-w-[65ch] max-w-full">{props.children}</div>
			</div>
			<footer class="absolute bottom-4 right-4 text-right">
				<small>
					Slide {params().slideIndex} of {TOTAL_SLIDES}
				</small>
			</footer>
		</>
	);
};

export { SlideLayout };
