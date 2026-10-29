export type Surface = 'surface-ink' | 'surface-stone';

/**
 * Alternate Stone and Ink after an Ink hero, ending on Stone so the closing
 * Ink CTA band never sits against another Ink band.
 */
export function alternate(count: number): Surface[] {
  const out: Surface[] = Array.from({ length: count }, (_, i) => (i % 2 === 0 ? 'surface-stone' : 'surface-ink'));
  if (count > 0 && out[count - 1] === 'surface-ink') out[count - 1] = 'surface-stone';
  return out;
}
