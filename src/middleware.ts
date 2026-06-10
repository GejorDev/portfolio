import { defineMiddleware } from 'astro:middleware'

type Locale = 'es' | 'en'

const SUPPORTED_LOCALES: Locale[] = ['es', 'en']
const DEFAULT_LOCALE: Locale = 'es'
const COOKIE_NAME = 'lang'

function parseAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null
  const locales = header
    .split(',')
    .map((s) => s.split(';')[0].trim().slice(0, 2))
  for (const locale of locales) {
    if (SUPPORTED_LOCALES.includes(locale as Locale)) {
      return locale as Locale
    }
  }
  return null
}

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url)
  const pathLang = url.pathname.split('/')[1]

  // Root path — detect and redirect
  if (url.pathname === '/') {
    const cookieLang = context.cookies.get(COOKIE_NAME)?.value as Locale | undefined
    if (cookieLang && SUPPORTED_LOCALES.includes(cookieLang)) {
      return context.redirect(`/${cookieLang}/`, 302)
    }
    const acceptLang = parseAcceptLanguage(
      context.request.headers.get('Accept-Language')
    )
    const locale = acceptLang ?? DEFAULT_LOCALE
    context.cookies.set(COOKIE_NAME, locale, {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax',
    })
    return context.redirect(`/${locale}/`, 302)
  }

  // Valid locale path — pass through
  if (pathLang && SUPPORTED_LOCALES.includes(pathLang as Locale)) {
    context.locals.lang = pathLang as Locale
    return next()
  }

  // Unknown two-letter path — redirect to default
  if (pathLang && pathLang.length === 2) {
    return context.redirect(`/${DEFAULT_LOCALE}/`, 302)
  }

  // Static assets — pass through
  return next()
})
