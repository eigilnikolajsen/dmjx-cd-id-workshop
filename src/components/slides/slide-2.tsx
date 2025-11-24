import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js";

const Slide1: VoidComponent = () => {
	const [count, setCount] = createSignal(0);

	const handleClick = (): void => {
		setCount(count() + 1);
	};

	return (
		<div>
			<h1>Slide 2</h1>
			<button onClick={handleClick}>Click me</button>
			<p>Count: {count()}</p>
		</div>
	);
};

export default Slide1;
