import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return <div className="flex min-h-screen items-center justify-center bg-white px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold text-[#083305]">404</h1><h2 className="mt-4 text-xl font-semibold text-[#173016]">Página não encontrada</h2><p className="mt-2 text-sm text-[#536153]">A página que você procura não existe ou foi movida.</p><div className="mt-6"><Link to="/" className="inline-flex items-center justify-center rounded-full bg-[#083305] px-4 py-2 text-sm font-bold text-white">Voltar ao início</Link></div></div></div>;
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <div className="flex min-h-screen items-center justify-center bg-white px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold text-[#173016]">Esta página não carregou</h1><p className="mt-2 text-sm text-[#536153]">Ocorreu um problema. Tente novamente ou volte ao início.</p><div className="mt-6 flex justify-center gap-2"><button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-[#083305] px-4 py-2 text-sm font-bold text-white">Tentar novamente</button><a href="/" className="rounded-full border border-[#dce7da] px-4 py-2 text-sm font-bold text-[#173016]">Voltar ao início</a></div></div></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MEU PET - Cuidado e Amor | Pet Shop em Fortaleza" },
      { name: "description", content: "MEU PET - Cuidado e Amor: pet shop, banho e tosa, atendimento veterinário e soluções para o bem-estar dos pets em Fortaleza." },
      { name: "author", content: "MEU PET - Cuidado e Amor" },
      { property: "og:title", content: "MEU PET - Cuidado e Amor | Fortaleza" },
      { property: "og:description", content: "Cuidado profissional, atendimento próximo e soluções para o bem-estar dos pets." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }, { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}
