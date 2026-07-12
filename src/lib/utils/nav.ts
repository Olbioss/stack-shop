/**
 * Returns the single nav href that should render as active for the given
 * pathname.
 *
 * Naive prefix matching marks an index/root item (e.g. a shop "Overview" at
 * `/shop/$slug`) active on every nested route, because its href is a prefix of
 * its siblings. Picking the longest matching href instead keeps only the most
 * specific item active.
 */
export function resolveActiveNavHref(
  pathname: string,
  hrefs: string[]
): string | null {
  let best: string | null = null;
  for (const href of hrefs) {
    const matches = pathname === href || pathname.startsWith(`${href}/`);
    if (matches && (best === null || href.length > best.length)) {
      best = href;
    }
  }
  return best;
}
