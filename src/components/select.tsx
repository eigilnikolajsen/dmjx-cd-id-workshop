import { useWindowSize } from "@solid-primitives/resize-observer";
import { throttle } from "@tanstack/solid-pacer";
import { animate } from "motion/mini";
import type { JSX } from "solid-js";
import { For, createEffect, createSignal, onCleanup } from "solid-js";
import { booleanAttribute, tabIndex } from "../scripts/utils";
import { Button } from "./button";

interface Props<TItem> {
	list: TItem[];
	onSelect?: (item: TItem) => void;
	onFlip?: (flipped: boolean) => void;
	onChange?: (isOpen: boolean) => void;
	itemChildren: (item: TItem) => JSX.Element;
	itemDisabled?: (item: TItem) => boolean;
	itemTabIndex?: number;
	buttonChildren: JSX.Element;
	skipCloseOnSelect?: boolean;
	buttonClass?: string;
	parentClass?: string;
	tabIndex?: number;
	buttonRef?: (element: HTMLButtonElement) => void;
}

const Select = <TItem,>(props: Props<TItem>): JSX.Element => {
	let listElement = undefined as HTMLDivElement | undefined;
	let parentElement = undefined as HTMLDivElement | undefined;

	const [isOpen, setIsOpen] = createSignal(false);
	const [scrollY, setScrollY] = createSignal(0);
	const [flipped, setFlipped] = createSignal(false);

	const windowSize = useWindowSize();

	createEffect(() => {
		if (!isOpen()) {
			return;
		}

		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("click", handleClick);
		globalThis.addEventListener("scroll", handleScroll);

		onCleanup(() => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("click", handleClick);
			globalThis.removeEventListener("scroll", handleScroll);
		});
	});

	createEffect<boolean>((previousFlipped) => {
		if (!listElement || !parentElement || !isOpen() || Number.isNaN(scrollY())) {
			return previousFlipped;
		}

		const { height } = listElement.getBoundingClientRect();
		const { bottom } = parentElement.getBoundingClientRect();
		const shouldFlip = bottom + height > windowSize.height;

		if (shouldFlip !== previousFlipped) {
			setFlipped(shouldFlip);
			return shouldFlip;
		}

		return previousFlipped;
	}, false);

	createEffect(() => {
		props.onFlip?.(flipped());

		if (!listElement) {
			return;
		}

		animate(listElement, { transformOrigin: flipped() ? ["bottom"] : ["top"] }, { duration: 0 });
	});

	createEffect(() => {
		props.onChange?.(isOpen());

		if (!listElement) {
			return;
		}

		animate(
			listElement,
			{
				opacity: isOpen() ? 1 : 0,
				transform: isOpen() ? "scale(1)" : "scale(0.95)",
				pointerEvents: isOpen() ? "auto" : "none",
			},
			{ duration: 0.05, ease: [0.33, 1, 0.68, 1] },
		);
	});

	const handleSelect = (item: TItem): void => {
		props.onSelect?.(item);

		if (!props.skipCloseOnSelect) {
			setIsOpen(false);
		}
	};

	const handleKeyDown = (event: KeyboardEvent): void => {
		if (event.key === "Escape") {
			setIsOpen(false);
		}

		if (event.key === "ArrowUp" || event.key === "ArrowDown") {
			if (!listElement || !document.activeElement) {
				return;
			}

			const buttons = [...listElement.querySelectorAll("& > button")];
			const index = buttons.indexOf(document.activeElement);
			const nextFocusedButton = buttons.at(
				(index + (event.key === "ArrowDown" ? 1 : -Number(index !== -1)) * (event.shiftKey ? 5 : 1))
					% buttons.length,
			);

			if (nextFocusedButton instanceof HTMLButtonElement) {
				event.preventDefault();

				// Skip disabled or hidden buttons
				if (nextFocusedButton.disabled || nextFocusedButton.tabIndex === -1) {
					const nextFocusedButton = buttons.at(
						(index + (event.key === "ArrowDown" ? 1 : -Number(index !== -1)) * 2) % buttons.length,
					);

					if (nextFocusedButton instanceof HTMLButtonElement) {
						nextFocusedButton.focus();
					}

					return;
				}

				// Focus the next button
				nextFocusedButton.focus();
			}
		}
	};

	const handleClick = (event: MouseEvent): void => {
		if (
			event.target instanceof Element
			&& event.target.closest("button")
			&& props.skipCloseOnSelect
		) {
			return;
		}

		setIsOpen(false);
	};

	const handleScroll = throttle(
		() => {
			setScrollY(globalThis.scrollY);
		},
		{ wait: 100 },
	);

	return (
		<div
			class="relative"
			ref={parentElement}
			classList={{ [props.parentClass ?? ""]: !!props.parentClass }}
		>
			<Button
				onClick={() => {
					setIsOpen(!isOpen());
				}}
				selected={isOpen()}
				class={props.buttonClass}
				tabIndex={props.tabIndex}
				ref={props.buttonRef}
			>
				{props.buttonChildren}
			</Button>
			<div
				class="group button-border button-focus absolute top-full left-0 z-2 my-2 min-w-full overflow-hidden opacity-0 data-flipped:top-auto data-flipped:bottom-full"
				data-flipped={booleanAttribute(flipped())}
				ref={listElement}
			>
				<For each={props.list}>
					{(item) => (
						<button
							type="button"
							class="button-color button-no-border button-focus-inner w-full text-left wrap-anywhere whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none"
							onClick={() => {
								handleSelect(item);
							}}
							tabIndex={props.itemTabIndex ?? tabIndex(isOpen())}
							disabled={props.itemDisabled?.(item)}
						>
							{props.itemChildren(item)}
						</button>
					)}
				</For>
			</div>
		</div>
	);
};

export { Select };
