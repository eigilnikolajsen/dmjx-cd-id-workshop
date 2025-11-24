import { createRouter as createTanStackRouter } from "@tanstack/solid-router";
import { PendingComponent } from "./components/pending-component";
import { routeTree } from "./routeTree.gen";

const router = createTanStackRouter({
	routeTree,
	scrollRestoration: true,
	defaultStaleTime: 10 * 1000, // 10 seconds
	defaultPreloadStaleTime: 30 * 1000, // 30 seconds
	defaultGcTime: 30 * 60 * 1000, // 30 minutes
	defaultPendingComponent: PendingComponent,
});

const getRouter = (): typeof router => router;

declare module "@tanstack/solid-router" {
	interface Register {
		router: typeof router;
	}
}

export { getRouter };
