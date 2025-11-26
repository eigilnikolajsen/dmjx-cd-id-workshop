import { createFileRoute, Link, useNavigate } from "@tanstack/solid-router";

const Route = createFileRoute("/")({
	component: () => {
		const navigate = useNavigate();

		navigate({ to: "/slide/$slideIndex", params: { slideIndex: "1" } });

		return (
			<Link to="/slide/$slideIndex" params={{ slideIndex: "1" }}>
				Start
			</Link>
		);
	},
});

export { Route };
