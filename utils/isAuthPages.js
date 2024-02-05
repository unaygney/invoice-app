const AUTH_PAGES = ["/dashboard"];

export const isAuthPages = (url) =>
  AUTH_PAGES.some((page) => page.startsWith(url));
