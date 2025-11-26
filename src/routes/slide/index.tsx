import { createFileRoute, Link, useNavigate } from "@tanstack/solid-router";

const Route = createFileRoute("/slide/")({
	component: () => {
		const navigate = useNavigate();

		navigate({ to: "/slide/1" });

		return <Link to="/slide/1">Start</Link>;
	},
});

export { Route };
