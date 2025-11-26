import { codeToHtml } from "shiki";
import type { VoidComponent } from "solid-js";
import { createResource, Show } from "solid-js";

interface Props {
	code: string;
	lang?: string;
	showLineNumbers?: boolean;
}

const CodeBlock: VoidComponent<Props> = (props) => {
	const [html] = createResource(
		() => ({ code: props.code, lang: props.lang ?? "sh" }),
		async ({ code, lang }) => codeToHtml(code, { lang, theme: "catppuccin-latte" }),
	);

	return (
		<div class="relative group not-prose">
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
