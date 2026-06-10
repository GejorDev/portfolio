/* Scroll-triggered reveal */
const revealEls = document.querySelectorAll('[data-reveal]')
if (revealEls.length > 0 && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )
  for (const el of revealEls) {
    observer.observe(el)
  }
} else {
  for (const el of revealEls) {
    el.classList.add('revealed')
  }
}

/* Mobile menu */
const hamburger = document.querySelector<HTMLElement>('[data-hamburger]')
const overlay = document.querySelector<HTMLElement>('[data-overlay]')
const closeBtn = document.querySelector<HTMLElement>('[data-close-menu]')
let isOpen = false

function openMenu(): void {
  if (!overlay || !hamburger) return
  isOpen = true
  overlay.classList.remove('hidden')
  hamburger.setAttribute('aria-expanded', 'true')
  document.body.style.overflow = 'hidden'
  if (closeBtn) closeBtn.focus()
}

function closeMenu(): void {
  if (!overlay || !hamburger) return
  isOpen = false
  overlay.classList.add('hidden')
  hamburger.setAttribute('aria-expanded', 'false')
  document.body.style.overflow = ''
  hamburger.focus()
}

if (hamburger && overlay) {
  hamburger.addEventListener('click', () => {
    if (!isOpen) { openMenu() } else { closeMenu() }
  })

  closeBtn?.addEventListener('click', closeMenu)

  overlay.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).tagName === 'A') {
      closeMenu()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu()
    }
    // Simple focus trap inside overlay
    if (e.key === 'Tab' && isOpen) {
      const focusable = overlay.querySelectorAll<HTMLElement>('button, a, [tabindex]:not([tabindex="-1"])')
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  })
}

/* Active nav link on scroll */
const navSections = document.querySelectorAll<HTMLElement>('[data-section]')
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link[href^="#"]')
const headerHeight = 120

function updateNav(): void {
  let id = 'hero'
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60

  if (atBottom) {
    id = navSections[navSections.length - 1].getAttribute('data-section') ?? 'hero'
  } else {
    for (let i = navSections.length - 1; i >= 0; i--) {
      if (navSections[i].getBoundingClientRect().top <= headerHeight) {
        id = navSections[i].getAttribute('data-section') ?? 'hero'
        break
      }
    }
  }
  for (const link of navLinks) {
    link.classList.toggle('active', link.getAttribute('href') === '#' + id)
  }
}

if (navSections.length > 0 && navLinks.length > 0) {
  window.addEventListener('scroll', updateNav, { passive: true })
  updateNav()
}

/* Language toggle (desktop + mobile) */
const langToggles = document.querySelectorAll<HTMLElement>('[data-lang-toggle]')
for (const toggle of langToggles) {
  toggle.addEventListener('click', function () {
    const nextLang = this.getAttribute('data-next-lang')
    if (!nextLang) return
    document.cookie = 'lang=' + nextLang + '; path=/; max-age=31536000; SameSite=Lax; Secure'
    window.location.href = '/' + nextLang + '/'
  })
}
