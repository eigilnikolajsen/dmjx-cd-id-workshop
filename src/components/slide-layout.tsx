import { Link } from "@tanstack/solid-router";
import type { ParentComponent } from "solid-js";
import { For } from "solid-js";
import { TOTAL_SLIDES } from "../scripts/const";

interface Props {
	index: number;
}

const SLIDE_PATHS = [
	"/slide/1",
	"/slide/2",
	"/slide/3",
	"/slide/4",
	"/slide/5",
	"/slide/6",
	"/slide/7",
	"/slide/8",
	"/slide/9",
	"/slide/10",
	"/slide/11",
	"/slide/12",
	"/slide/13",
	"/slide/14",
	"/slide/15",
	"/slide/16",
	"/slide/17",
	"/slide/18",
	"/slide/19",
] as const;

const SlideLayout: ParentComponent<Props> = (props) => (
	<>
		<div class="absolute inset-0 items-center overflow-auto">
			<div class="m-8 prose min-w-[65ch] max-w-full">{props.children}</div>
		</div>

		<footer class="absolute bottom-4 right-4 text-right">
			<small>
				Slide {props.index} of {TOTAL_SLIDES}
			</small>

			<nav class="opacity-0 absolute pointer-events-none">
				<For each={SLIDE_PATHS}>{(path) => <Link to={path}>{path}</Link>}</For>
			</nav>
		</footer>
	</>
);

export { SlideLayout };
