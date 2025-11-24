/// <reference types="vite/client" />

import appleTouchIcon from "@/assets/apple-touch-icon.png?no-inline";
import faviconIco from "@/assets/favicon.ico?no-inline";
import faviconSvg from "@/assets/svgs/favicon.svg?no-inline";
import { PendingComponent } from "@/components/pending-component";
import { queryClient } from "@/scripts/query";
import globalCss from "@/styles/global.css?url";
import { QueryClientProvider } from "@tanstack/solid-query";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/solid-router";
import { HydrationScript } from "solid-js/web";

// export const Route
const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charset: "utf8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "description", content: "DMJX CD ID Workshop" },
			{ name: "robots", content: "noindex, nofollow" },
			{ name: "theme-color", content: "#000000" },
		],
		links: [
			{ rel: "stylesheet", href: globalCss },
			{ rel: "icon", href: faviconSvg, type: "image/svg+xml" },
			{ rel: "icon", href: faviconIco, sizes: "32x32" },
			{ rel: "apple-touch-icon", href: appleTouchIcon },
		],
	}),
	pendingComponent: () => <PendingComponent />,
	pendingMs: 0,
	pendingMinMs: 0,
	shellComponent: (props) => (
		<html lang="en">
			<head>
				<HydrationScript />
			</head>
			<body>
				<HeadContent />
				<QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
				<Scripts />
			</body>
		</html>
	),
});

export { Route };
