const AUTH_PAGES = ["/login", "/signup"];

export const isAuthPages = (url) =>
  AUTH_PAGES.some((page) => page.startsWith(url));
