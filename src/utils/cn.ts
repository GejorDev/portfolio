/**
 * Utility for conditionally joining class names
 * Simple alternative to clsx or classnames
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
