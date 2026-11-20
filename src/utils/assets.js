/**
 * Builds a URL for a file in /public that works both locally ("/") and on
 * GitHub Pages, where the site is served from a sub-path ("/portfolio/").
 */
export function publicUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
