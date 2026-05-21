import { createRouter as createTanStackRouter } from "@tanstack/solid-router";
import { PendingComponent } from "./components/pending-component";
import { routeTree } from "./routeTree.gen";

// oxlint-disable-next-line explicit-module-boundary-types, explicit-function-return-type
const getRouter = () =>
	createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultStaleTime: 10 * 1000, // 10 seconds
		defaultPreloadStaleTime: 30 * 1000, // 30 seconds
		defaultGcTime: 30 * 60 * 1000, // 30 minutes
		defaultPendingComponent: PendingComponent,
		defaultPreload: "render",
	});

declare module "@tanstack/solid-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}

export { getRouter };
