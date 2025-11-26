import { TOTAL_SLIDES } from "@/scripts/const";
import { useParams } from "@tanstack/solid-router";
import type { ParentComponent } from "solid-js";

const SlideLayout: ParentComponent = (props) => {
	const params = useParams({ from: "/slide/$slideIndex" });

	return (
		<div class="p-4 absolute inset-0">
			<div class="prose">{props.children}</div>
			<footer class="absolute bottom-4 right-4 text-right">
				<p>
					Slide {params().slideIndex} of {TOTAL_SLIDES}
				</p>
			</footer>
		</div>
	);
};

export { SlideLayout };
