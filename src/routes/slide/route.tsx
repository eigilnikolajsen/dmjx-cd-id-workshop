import { TOTAL_SLIDES } from "@/scripts/const";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/solid-router";
import { onCleanup, onMount } from "solid-js";

const Route = createFileRoute("/slide")({
	ssr: false,
	component: () => {
		const navigate = useNavigate();

		onMount(() => {
			addEventListener("keydown", handleKeyDown);
		});

		onCleanup(() => {
			removeEventListener("keydown", handleKeyDown);
		});

		const handleKeyDown = (event: KeyboardEvent): void => {
			const currentSlideIndex = globalThis.location.pathname.split("/").pop();
			if (!currentSlideIndex) {
				return;
			}

			if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
				const newSlideIndex = Number(currentSlideIndex) - 1;
				if (newSlideIndex > 0) {
					navigate({ to: `/slide/${newSlideIndex}`, viewTransition: { types: ["slide-down"] } });
				}
			}

			if (event.key === "ArrowRight" || event.key === "ArrowDown") {
				const newSlideIndex = Number(currentSlideIndex) + 1;
				if (newSlideIndex <= TOTAL_SLIDES) {
					navigate({ to: `/slide/${newSlideIndex}`, viewTransition: { types: ["slide-up"] } });
				}
			}
		};

		return (
			<div
				class="selection:bg-fg selection:fill-bg selection:text-bg text-small wrap-break-word antialiased"
				spellcheck="false"
			>
				<div class="fixed inset-4 flex items-center justify-center @container-[size]">
					<main class="aspect-square max-w-[calc(100cqb)] w-full group">
						<article class="w-full h-full relative @container rounded-md overflow-hidden bg-white group-has-checked:bg-green-100 [view-transition-name:main-content]">
							<Outlet />
						</article>
					</main>
				</div>
			</div>
		);
	},
});

export { Route };
