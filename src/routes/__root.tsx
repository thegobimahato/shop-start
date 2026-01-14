import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/base/provider/theme-provider";

import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "ShopStart — Build Multi-Tenant Stores Faster",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
      ],
    }),

    shellComponent: RootDocument,
  }
);

const themeScript = `
(function () {
  try {
    const theme = localStorage.getItem("vite-ui-theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (_) {}
})();
`;

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />

        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {children}

          <Toaster richColors position="top-right" />
        </ThemeProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />

        <Scripts />
      </body>
    </html>
  );
}
