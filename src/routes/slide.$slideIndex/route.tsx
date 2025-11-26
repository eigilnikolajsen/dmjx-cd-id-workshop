import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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
					});
				}
			}

			if (event.key === "ArrowRight" || event.key === "ArrowDown") {
				const newSlideIndex = Number(params().slideIndex) + 1;
				if (newSlideIndex <= TOTAL_SLIDES) {
					navigate({
						to: "/slide/$slideIndex",
						params: { slideIndex: newSlideIndex.toString() },
						viewTransition: { types: ["slide-up"] },
					});
				}
			}
		};

		return (
			<div
				class="selection:bg-fg selection:fill-bg selection:text-bg text-small wrap-break-word antialiased"
				spellcheck="false"
			>
				<Header />

				<div class="fixed inset-0 flex items-center justify-center @container-[size]">
					<main class="aspect-video max-w-[calc(100cqb*16/9)] w-full">
						<article class="w-full h-full relative @container bg-white [view-transition-name:main-content]">
							<SlideLayout>
								<Outlet />
							</SlideLayout>
						</article>
					</main>
				</div>

				<Footer />
			</div>
		);
	},
});

export { Route };
