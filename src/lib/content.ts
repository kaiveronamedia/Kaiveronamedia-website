import { getCollection, getEntry } from 'astro:content';
import { SHOW_PLACEHOLDERS } from './env';

export async function getHome() {
  const entry = await getEntry('home', 'index');
  if (!entry) throw new Error('Missing src/content/home/index.md');
  return entry.data;
}

export async function getPage(id: string) {
  const entry = await getEntry('pages', id);
  if (!entry) throw new Error(`Missing src/content/pages/${id}.md`);
  return entry;
}

export async function getSectors() {
  const all = await getCollection('sectors');
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Work entries that may be built as pages: only cleared clips (info file §6.8). */
export async function getClearedWork() {
  return getCollection('work', ({ data }) => data.cleared && Boolean(data.youtubeId));
}

/** Featured clips for grids: cleared ones always, placeholder ones in preview only. */
export async function getFeaturedWork() {
  const all = await getCollection('work', ({ data }) => data.featured);
  return all
    .filter(({ data }) => (data.cleared && data.youtubeId) || SHOW_PLACEHOLDERS)
    .sort((a, b) => a.id.localeCompare(b.id));
}

/** Published posts, plus drafts in preview builds. Newest first. */
export async function getInsights({ includeDrafts = SHOW_PLACEHOLDERS } = {}) {
  const all = await getCollection('insights', ({ data }) => includeDrafts || !data.draft);
  return all.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export async function hasPublishedInsights() {
  return (await getCollection('insights', ({ data }) => !data.draft)).length > 0;
}
