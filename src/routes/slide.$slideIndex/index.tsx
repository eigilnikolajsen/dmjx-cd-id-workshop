import { createFileRoute } from "@tanstack/solid-router";
import { lazy, Suspense } from "solid-js";

const Route = createFileRoute("/slide/$slideIndex/")({
	component: () => {
		const params = Route.useParams();
		const Component = lazy(() => import(`@/components/slides/slide-${params().slideIndex}.tsx`));

		return (
			<Suspense fallback={<div>Loading...</div>}>
				<Component />
			</Suspense>
		)
	},
});

export { Route };
