import { createSignal } from "solid-js";

const STORAGE_KEY = "workshop-tasks-completed";

const loadCompletedTasks = (): Set<number> => {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (!stored) {
			return new Set();
		}
		return new Set(JSON.parse(stored) as number[]);
	} catch {
		return new Set();
	}
};

const saveCompletedTasks = (tasks: Set<number>): void => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify([...tasks]));
};

const [completedTasks, setCompletedTasks] = createSignal<Set<number>>(loadCompletedTasks());

const toggleTask = (taskNumber: number): void => {
	setCompletedTasks((prev) => {
		const next = new Set(prev);
		if (next.has(taskNumber)) {
			next.delete(taskNumber);
		} else {
			next.add(taskNumber);
		}
		saveCompletedTasks(next);
		return next;
	});
};

const isTaskCompleted = (taskNumber: number): boolean => completedTasks().has(taskNumber);

export { completedTasks, isTaskCompleted, toggleTask };
