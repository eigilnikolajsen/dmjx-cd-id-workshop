import { codeToHtml } from "shiki";
import type { VoidComponent } from "solid-js";
import { createResource, createSignal, Show } from "solid-js";

interface Props {
	code: string;
	lang?: string;
	showLineNumbers?: boolean;
}

const CodeBlock: VoidComponent<Props> = (props) => {
	const [copied, setCopied] = createSignal(false);

	const [html] = createResource(
		() => ({ code: props.code, lang: props.lang ?? "sh" }),
		async ({ code, lang }) => codeToHtml(code, { lang, theme: "snazzy-light" }),
	);

	const handleCopy = async (): Promise<void> => {
		await navigator.clipboard.writeText(props.code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div class="relative group not-prose">
			<button
				type="button"
				onClick={handleCopy}
				class="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity"
			>
				{copied() ? "Copied!" : "Copy"}
			</button>
			<Show
				when={html()}
				fallback={<pre class="bg-gray-900 p-4 rounded-lg text-gray-400 text-sm">{props.code}</pre>}
			>
				<div
					class="[&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:text-sm"
					innerHTML={html()}
				/>
			</Show>
		</div>
	);
};

export { CodeBlock };
