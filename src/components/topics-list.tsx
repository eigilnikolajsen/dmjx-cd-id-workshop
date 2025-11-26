import type { VoidComponent } from "solid-js";
import { createSignal, For, onMount } from "solid-js";

const STORAGE_KEY = "workshop-topics";

const loadTopics = (): string[] => {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (!stored) {
		return [];
	}
	try {
		return JSON.parse(stored) as string[];
	} catch {
		return [];
	}
};

const saveTopics = (topics: string[]): void => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(topics));
};

const TopicsList: VoidComponent = () => {
	const [topics, setTopics] = createSignal<string[]>([]);
	const [newTopic, setNewTopic] = createSignal("");

	onMount(() => {
		setTopics(loadTopics());
	});

	const addTopic = (): void => {
		const topic = newTopic().trim();
		if (!topic) {
			return;
		}
		const updated = [...topics(), topic];
		setTopics(updated);
		saveTopics(updated);
		setNewTopic("");
	};

	const removeTopic = (index: number): void => {
		const updated = topics().filter((_, i) => i !== index);
		setTopics(updated);
		saveTopics(updated);
	};

	const handleKeyDown = (e: KeyboardEvent): void => {
		if (e.key === "Enter") {
			e.preventDefault();
			addTopic();
		}
	};

	return (
		<div class="bg-white rounded-lg p-4 max-w-md">
			<h3 class="font-bold text-lg mb-3">New Terms Encountered</h3>

			<div class="flex gap-2 mb-3">
				<input
					type="text"
					value={newTopic()}
					onInput={(event) => setNewTopic(event.currentTarget.value)}
					onKeyDown={handleKeyDown}
					placeholder="Add a new term..."
					class="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					type="button"
					onClick={addTopic}
					class="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
				>
					Add
				</button>
			</div>

			<ul class="space-y-1 h-48 overflow-y-auto">
				<For each={topics()}>
					{(topic, index) => (
						<li class="flex items-center justify-between bg-gray-100 px-3 py-2 rounded text-sm">
							<span class="font-mono">{topic}</span>
							<button type="button" onClick={() => removeTopic(index())} class="">
								&times;
							</button>
						</li>
					)}
				</For>
			</ul>

			<p class="text-xs text-gray-500 mt-3">Count: {topics().length} terms</p>
		</div>
	);
};

export { TopicsList };
