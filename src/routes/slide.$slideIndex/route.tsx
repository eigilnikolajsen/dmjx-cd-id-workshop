import { SlideLayout } from "@/components/slide-layout";
import { TOTAL_SLIDES } from "@/scripts/const";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/solid-router";
import { onCleanup, onMount } from "solid-js";

const Route = createFileRoute("/slide/$slideIndex")({
	head: () => ({ meta: [{ title: "Home" }] }),
	component: () => {
		const navigate = useNavigate();
		const params = Route.useParams();

		onMount(() => {
			addEventListener("keydown", handleKeyDown);
		});

		onCleanup(() => {
			removeEventListener("keydown", handleKeyDown);
		});

		const handleKeyDown = (event: KeyboardEvent): void => {
			if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
				const newSlideIndex = Number(params().slideIndex) - 1;
				if (newSlideIndex > 0) {
					navigate({
						to: "/slide/$slideIndex",
						params: { slideIndex: newSlideIndex.toString() },
						viewTransition: { types: ["slide-down"] },
					}).catch(console.error);
				}
			}

			if (event.key === "ArrowRight" || event.key === "ArrowDown") {
				const newSlideIndex = Number(params().slideIndex) + 1;
				if (newSlideIndex <= TOTAL_SLIDES) {
					navigate({
						to: "/slide/$slideIndex",
						params: { slideIndex: newSlideIndex.toString() },
						viewTransition: { types: ["slide-up"] },
					}).catch(console.error);
				}
			}
		};

		return (
			<div
				class="selection:bg-fg selection:fill-bg selection:text-bg text-small wrap-break-word antialiased"
				spellcheck="false"
			>
				<div class="fixed inset-8 flex items-center justify-center @container-[size]">
					<main class="aspect-square max-w-[calc(100cqb)] w-full">
						<article class="w-full h-full relative @container bg-white [view-transition-name:main-content]">
							<SlideLayout>
								<Outlet />
							</SlideLayout>
						</article>
					</main>
				</div>
			</div>
		);
	},
});

export { Route };
