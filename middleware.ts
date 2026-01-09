import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const languages = ["pt", "en"];
const defaultLanguage = "pt";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Verifica se a URL já tem um dos idiomas suportados
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Se já tiver o idioma na URL, não faz nada e deixa o Next prosseguir
  if (pathnameHasLocale) return NextResponse.next();

  // 2. Se NÃO tiver idioma, vamos decidir para qual redirecionar
  const acceptLanguage = request.headers.get("accept-language");
  let lng = defaultLanguage;

  if (acceptLanguage) {
    // Verifica se o inglês é uma das preferências (simplificado)
    if (acceptLanguage.startsWith("en")) {
      lng = "en";
    }
  }

  // 3. Redireciona para a URL com o idioma (ex: /sales -> /pt/sales)
  return NextResponse.redirect(
    new URL(`/${lng}${pathname}`, request.url)
  );
}

export const config = {
  // O matcher garante que o middleware não rode em arquivos estáticos ou APIs
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\..*).*)",
  ],
};