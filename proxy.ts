import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const match = /^\/(About|Team)(?=\/|$)/.exec(pathname);

  if (!match) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${match[1].toLowerCase()}${pathname.slice(match[0].length)}`;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/About/:path*", "/Team/:path*"],
};
