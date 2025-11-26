import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js";
import { Modal } from "./modal";
import { TopicsList } from "./topics-list";

const Footer: VoidComponent = () => {
	const [modalState, setModalState] = createSignal<"open" | "closed">("closed");

	return (
		<footer class="col-span-full flex flex-col justify-end gap-4">
			<button
				type="button"
				onClick={() => setModalState("open")}
				class="fixed bottom-4 right-4 size-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-xl cursor-pointer button-focus z-40"
				title="New Terms"
			>
				📝
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
