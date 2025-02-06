import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es'],
 
  // Used when no locale matches
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/contacto': {
      en: '/contact',
      es: '/contacto'
    },
    '/resume': {
      en: '/resume',
      es: '/curriculum'
    }
  }
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);