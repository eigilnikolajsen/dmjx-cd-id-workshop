const booleanAttribute = <T>(value: T): string | undefined => (value ? "" : undefined);

const tabIndex = <T>(value: T): number | undefined => (value ? undefined : -1);

const vw = (): number =>
	typeof document === "undefined" ? 0 : (
		Math.max(document.documentElement.clientWidth || 0, globalThis.innerWidth || 0)
	);
const vh = (): number =>
	typeof document === "undefined" ? 0 : (
		Math.max(document.documentElement.clientHeight || 0, globalThis.innerHeight || 0)
	);

const beforeUnloadHandler = (event: BeforeUnloadEvent): void => {
	// Recommended
	event.preventDefault();

	// Included for legacy support, e.g. Chrome/Edge < 119
	// oxlint-disable-next-line no-deprecated
	event.returnValue = true;
};

export { beforeUnloadHandler, booleanAttribute, tabIndex, vh, vw };
