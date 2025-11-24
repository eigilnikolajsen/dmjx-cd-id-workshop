import { TOTAL_SLIDES } from "@/scripts/const";
import { Link, useParams } from "@tanstack/solid-router";
import type { ParentComponent } from "solid-js";

const Header: ParentComponent = () => {
	const params = useParams({ from: "/slide/$slideIndex" });

	return (
		<header class="fixed top-0 left-0 right-0 z-1 flex items-center justify-between">
			<div class="flex items-center gap-2 *:p-2 *:bg-gray-100">
				<Link
					to="/slide/$slideIndex"
					params={{ slideIndex: "1" }}
					viewTransition={{ types: ["slide-down"] }}
					class="button-focus"
				>
					&lt;&lt;
				</Link>

				<Link
					to="/slide/$slideIndex"
					params={{ slideIndex: (Number(params().slideIndex) - 1).toString() }}
					viewTransition={{ types: ["slide-down"] }}
					class="button-focus"
				>
					&lt;
				</Link>

				<Link
					to="/slide/$slideIndex"
					params={{ slideIndex: (Number(params().slideIndex) + 1).toString() }}
					viewTransition={{ types: ["slide-up"] }}
					class="button-focus"
				>
					&gt;
				</Link>

				<Link
					to="/slide/$slideIndex"
					params={{ slideIndex: TOTAL_SLIDES.toString() }}
					viewTransition={{ types: ["slide-down"] }}
					class="button-focus"
				>
					&gt;&gt;
				</Link>
			</div>
		</header>
	);
};

export { Header };
