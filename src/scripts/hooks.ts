import type { Matches } from "@solid-primitives/media";
import { createBreakpoints } from "@solid-primitives/media";
import { BREAKPOINTS } from "./const";

const useBreakpoints = (): Matches<typeof BREAKPOINTS> => createBreakpoints(BREAKPOINTS);

const onMouseAndTouchStart = <Props>(
	cb: (event: MouseEvent | TouchEvent, props?: Props) => void,
	props?: Props,
): { onMouseDown: (event: MouseEvent) => void; onTouchStart: (event: TouchEvent) => void } => ({
	onMouseDown: (event: MouseEvent): void => {
		cb(event, props);
	},
	onTouchStart: (event: TouchEvent): void => {
		cb(event, props);
	},
});

export { onMouseAndTouchStart, useBreakpoints };
