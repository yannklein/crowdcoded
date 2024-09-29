import { NextRequest, NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'ja']
const defaultLocale = 'en';
const cookieName = "i18nlang";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
  // Get locale from cookie
  if (request.cookies.has(cookieName))
    return request.cookies.get(cookieName)!.value;
  // Get accept language from HTTP headers
  
  const acceptLang = request.headers.get("Accept-Language");
  if (!acceptLang) return defaultLocale;
  // Get match locale
  const headers = { "accept-language": acceptLang };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  
  if (request.nextUrl.pathname.startsWith("/_next")) return NextResponse.next();

  const { pathname } = request.nextUrl;

  console.log(request.nextUrl);

  // Handle lang change
  if (request.nextUrl.searchParams.get('lang')) {    
    const currentLocale = locales.find(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    const newLocale = request.nextUrl.searchParams.get('lang');
    request.nextUrl.pathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    request.nextUrl.searchParams.delete('lang')
    
    const response = NextResponse.redirect(request.nextUrl);
    // Set locale to cookie
    response.cookies.set(cookieName, newLocale);
    // console.log(response.cookies);
    // console.log(newLocale);
    // console.log(request.nextUrl.pathname);
    
    return response;
  }

  // Check if there is any supported locale in the pathname  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;
  

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products
  const response = NextResponse.redirect(request.nextUrl);
  // Set locale to cookie
  response.cookies.set(cookieName, locale);
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};