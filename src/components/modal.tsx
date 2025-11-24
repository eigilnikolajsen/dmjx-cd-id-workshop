import { booleanAttribute } from "@/scripts/utils";
import { animate } from "motion/mini";
import type { Accessor, ParentComponent } from "solid-js";
import { createEffect, createResource, createSignal, onCleanup, onMount, Show } from "solid-js";

interface Props {
	state: Accessor<"open" | "closed">;
	onOpen: () => void;
	onClose: () => void;
	onSoftClose?: () => void;
}

const Modal: ParentComponent<Props> = (props) => {
	const [modalBackgroundRef, setModalBackgroundRef] = createSignal<HTMLButtonElement>();
	const [modalContainerRef, setModalContainerRef] = createSignal<HTMLDivElement>();

	const [delayedOpen] = createResource(props.state, async (source) => {
		if (source === "closed") {
			// oxlint-disable promise/avoid-new
			await new Promise((resolve) => setTimeout(resolve, 300));
		}

		return source;
	});

	onMount(() => {
		globalThis.addEventListener("keydown", handleKeyDown);

		onCleanup(() => {
			globalThis.removeEventListener("keydown", handleKeyDown);
		});
	});

	const handleKeyDown = (event: KeyboardEvent): void => {
		if (event.key === "Escape" && props.state() === "open") {
			if (props.onSoftClose) {
				props.onSoftClose();
			} else {
				props.onClose();
			}
		}
	};

	createEffect(() => {
		const modalBackground = modalBackgroundRef();
		const modalContainer = modalContainerRef();
		if (!modalBackground || !modalContainer) {
			return;
		}

		if (props.state() === "open") {
			animate(
				modalBackground,
				{ opacity: [0, 1], backdropFilter: ["blur(0rem)", "blur(0.5rem)"] },
				{ duration: 0.4, ease: [0.22, 1, 0.36, 1], restDelta: 0.01 },
			);

			animate(
				modalContainer,
				{ scale: [0.98, 1], translateY: ["4rem", "0"] },
				{ duration: 0.4, ease: [0.22, 1, 0.36, 1], restDelta: 0.01 },
			);

			document.body.style.overflowY = "hidden";
		}

		if (props.state() === "closed") {
			animate(
				modalBackground,
				{ opacity: [1, 0], backdropFilter: ["blur(0.5rem)", "blur(0rem)"] },
				{ duration: 0.1, ease: [0.12, 0, 0.39, 0] },
			);

			animate(
				modalContainer,
				{ scale: [1, 0.98], translateY: ["0", "4rem"] },
				{ duration: 0.1, ease: [0.12, 0, 0.39, 0] },
			);

			document.body.style.overflowY = "";
		}
	});

	return (
		<Show keyed when={delayedOpen.latest === "open"}>
			<div
				tabIndex={0}
				onKeyDown={(event) => {
					if (event.key === "Enter" || event.key === " ") {
						event.preventDefault();

						if (props.onSoftClose) {
							props.onSoftClose();
						} else {
							props.onClose();
						}
					}
				}}
				onKeyUp={(event) => {
					if (event.key === "Enter" || event.key === " ") {
						event.preventDefault();

						if (props.onSoftClose) {
							props.onSoftClose();
						} else {
							props.onClose();
						}
					}
				}}
				class="bg-fg/20 fixed inset-0 z-50 flex items-center justify-center text-left opacity-0 backdrop-blur-xs"
				data-disabled={booleanAttribute(props.state() === "closed")}
				onClick={(event) => {
					if (event.currentTarget !== event.target) {
						return;
					}

					if (props.onSoftClose) {
						props.onSoftClose();
					} else {
						props.onClose();
					}
				}}
				ref={setModalBackgroundRef}
			>
				<div
					class="bg-white border border-black relative overflow-hidden"
					ref={setModalContainerRef}
				>
					{props.children}
					<button
						type="button"
						class="absolute top-2 right-2 size-4 cursor-pointer"
						onClick={() => {
							props.onClose();
						}}
					>
						Close
					</button>
				</div>
			</div>
		</Show>
	);
};

export { Modal };
