import { createFileRoute, redirect } from "@tanstack/solid-router";

const Route = createFileRoute("/")({
	server: {
		handlers: { GET: () => redirect({ to: "/slide/$slideIndex", params: { slideIndex: "1" } }) },
	},
});

export { Route };
