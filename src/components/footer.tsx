import { useNavigate } from "@tanstack/solid-router";
import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js";
import { TOTAL_SLIDES } from "../scripts/const";
import { Modal } from "./modal";
import { TopicsList } from "./topics-list";

const Footer: VoidComponent = () => {
	const [modalState, setModalState] = createSignal<"open" | "closed">("closed");

	const navigate = useNavigate();

	return (
		<footer>
			<button
				type="button"
				onClick={() => setModalState("open")}
				class="fixed bottom-4 right-4 size-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-xl cursor-pointer button-focus z-40"
				title="New Terms"
			>
				📝
			</button>

			<button
				type="button"
				onClick={(): void => {
					const currentSlideIndex = globalThis.location.pathname.split("/").pop();
					if (!currentSlideIndex) {
						return;
					}

					const newSlideIndex = Number(currentSlideIndex) + 1;
					if (newSlideIndex <= TOTAL_SLIDES) {
						navigate({ to: `/slide/${newSlideIndex}`, viewTransition: { types: ["slide-up"] } });
					}
				}}
				class="fixed bottom-4 left-20 size-12 rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-xl cursor-pointer button-focus z-40"
				title="Next"
			>
				→
			</button>

			<button
				type="button"
				onClick={(): void => {
					const currentSlideIndex = globalThis.location.pathname.split("/").pop();
					if (!currentSlideIndex) {
						return;
					}

					const newSlideIndex = Number(currentSlideIndex) - 1;
					if (newSlideIndex > 0) {
						navigate({ to: `/slide/${newSlideIndex}`, viewTransition: { types: ["slide-down"] } });
					}
				}}
				class="fixed bottom-4 left-4 size-12 rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center text-xl cursor-pointer button-focus z-40"
				title="Previous"
			>
				←
			</button>

			<Modal
				state={modalState}
				onOpen={() => setModalState("open")}
				onClose={() => setModalState("closed")}
			>
				<TopicsList />
			</Modal>
		</footer>
	);
};

export { Footer };
