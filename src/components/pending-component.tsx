import type { VoidComponent } from "solid-js";
import { LoadingSpinner } from "./loading-spinner";

const PendingComponent: VoidComponent = () => (
	<div class="fixed inset-0 flex items-center justify-center opacity-0 pointer-events-none">
		<LoadingSpinner />
	</div>
);

export { PendingComponent };
