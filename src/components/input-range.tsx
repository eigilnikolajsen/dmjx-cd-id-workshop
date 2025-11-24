import { createResizeObserver } from "@solid-primitives/resize-observer";
import type { SpringOptions } from "motion";
import { springValue } from "motion";
import type { JSX, Setter, VoidComponent } from "solid-js";
import { createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js";

interface InputRangeProps {
	min?: number;
	max?: number;
	step?: number;
	initialValue?: number;
	onChange: Setter<number>;
	class?: string;
	style?: JSX.CSSProperties;
	name?: string;
	format?: (value: number) => string;
	tabIndex?: number;
	springOptions?: SpringOptions;
}

const InputRange: VoidComponent<InputRangeProps> = (props) => {
	const [valueRef, setValueRef] = createSignal<HTMLSpanElement>();
	const [inputRef, setInputRef] = createSignal<HTMLInputElement>();

	const min = createMemo(() => props.min ?? 0);
	const max = createMemo(() => props.max ?? 100);
	const step = createMemo(() => props.step ?? 1);

	const [value, setValue] = createSignal(props.initialValue ?? (min() + max()) / 2);

	createEffect(() => {
		const newValue = props.initialValue ?? (min() + max()) / 2;
		easedValue.jump(newValue);
	});

	const easedValue = springValue(value(), props.springOptions ?? { duration: 0 });

	const percent = createMemo(() => {
		const range = max() - min();
		const percent = range === 0 ? 0 : (value() - min()) / range;
		const clampedPercent = Math.max(0, Math.min(1, percent));
		return clampedPercent;
	});

	const change = (value: number): void => {
		props.onChange(value);
		setValue(value);
	};

	onMount(() => {
		const valueElement = valueRef();
		if (!valueElement) {
			return;
		}

		createResizeObserver(valueElement, (rect) => {
			if (rect.width === 0) {
				return;
			}

			valueElement.style.width = `${rect.width}px`;
		});

		easedValue.on("change", change);
		document.addEventListener("keydown", handleKeyDown);

		onCleanup(() => {
			easedValue.destroy();
			document.removeEventListener("keydown", handleKeyDown);
		});
	});

	const handleInput = (
		event: InputEvent & { currentTarget: HTMLInputElement; target: HTMLInputElement },
	): void => {
		const newValue = Number.parseFloat(event.currentTarget.value);
		easedValue.set(newValue);
	};

	const handleKeyDown = (event: KeyboardEvent): void => {
		const inputElement = inputRef();
		if (document.activeElement !== inputElement) {
			return;
		}

		const shiftStep = step() * (event.shiftKey ? 10 : 1);
		const isLowering = event.key === "ArrowDown" || event.key === "ArrowLeft";
		const isRaising = event.key === "ArrowUp" || event.key === "ArrowRight";

		if (!isLowering && !isRaising) {
			return;
		}

		event.preventDefault();

		const newValue = value() + shiftStep * (isLowering ? -1 : 1);
		const clampedValue = Math.max(min(), Math.min(max(), newValue));
		easedValue.set(clampedValue);
	};

	return (
		<label
			class="group text-fg relative flex items-center gap-2 px-2"
			classList={{ [props.class ?? ""]: !!props.class }}
			style={{ ...props.style, "--percent": percent() }}
		>
			<div class="relative flex h-4 w-24 items-center">
				{/* input */}
				<input
					type="range"
					name={props.name}
					min={min()}
					max={max()}
					step={step()}
					value={value()}
					onInput={handleInput}
					class="peer absolute inset-0 m-0 h-full w-full cursor-pointer touch-none appearance-none opacity-0"
					tabIndex={props.tabIndex}
					ref={setInputRef}
				/>

				{/* track */}
				<div class="bg-gray-700 pointer-events-none absolute top-1/2 right-0 left-0 h-0.25 -translate-y-1/2" />

				{/* thumb */}
				<div class="button-color peer-focus-visible:focus-ring bg-bg peer-hover:bg-fg pointer-events-none absolute top-1/2 left-[calc(var(--percent,0)*100%+((1-var(--percent,0))*--spacing(4))---spacing(4))] h-full w-4 -translate-y-1/2" />

				{/* alt track */}
				{/* <div class="rounded-lg bg-bg border-base border-fg pointer-events-none absolute top-1/2 right-0 left-0 h-4 -translate-y-1/2" /> */}

				{/* alt thumb */}
				{/* <div class="button-color peer-focus-visible:focus-ring bg-bg peer-hover:bg-fg pointer-events-none absolute top-1/2 right-[calc(var(--percent,0)*-100%+100%-_--spacing(4)+(var(--percent,0)*--spacing(4)))] left-0 h-full -translate-y-1/2" /> */}
			</div>
			<span class="flex" ref={setValueRef}>
				{props.format?.(value()) ?? value()}
			</span>
		</label>
	);
};

export { InputRange };
