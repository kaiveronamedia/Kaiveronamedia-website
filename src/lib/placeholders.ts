import { SHOW_PLACEHOLDERS } from './env';

export const PLACEHOLDER_RE = /\[\[PLACEHOLDER:\s*([\s\S]*?)\]\]/g;

export type Segment = { type: 'text'; value: string } | { type: 'placeholder'; value: string };

/** True when the string contains a `[[PLACEHOLDER: ...]]` token. */
export function hasPlaceholder(value: unknown): boolean {
  if (typeof value === 'string') return /\[\[PLACEHOLDER:/.test(value);
  if (Array.isArray(value)) return value.some(hasPlaceholder);
  if (value && typeof value === 'object') return Object.values(value).some(hasPlaceholder);
  return false;
}

/** Split a string into plain text and placeholder segments. */
export function segments(value: string): Segment[] {
  const out: Segment[] = [];
  let last = 0;
  for (const match of value.matchAll(PLACEHOLDER_RE)) {
    const start = match.index ?? 0;
    if (start > last) out.push({ type: 'text', value: value.slice(last, start) });
    out.push({ type: 'placeholder', value: match[1].trim() });
    last = start + match[0].length;
  }
  if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
  return out;
}

/**
 * Whether a block should render. Blocks whose content still holds a placeholder
 * show in preview builds and are omitted in production (AGENTS.md hard rule 10).
 */
export function visible(value: unknown): boolean {
  return SHOW_PLACEHOLDERS || !hasPlaceholder(value);
}

/** Keep only the items that may render in this build. */
export function visibleItems<T>(items: T[] | undefined): T[] {
  return (items ?? []).filter((item) => visible(item));
}
