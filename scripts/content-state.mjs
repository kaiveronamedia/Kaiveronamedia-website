// Reads content front matter at config time, so the sitemap and the build
// agree with the pages about what exists (cleared clips, published posts).
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

function frontMatter(file) {
  const text = readFileSync(file, 'utf8');
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : '';
}

function entries(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => frontMatter(join(dir, f)));
}

const flag = (fm, key) => new RegExp(`^${key}:\\s*true\\s*$`, 'm').test(fm);
const value = (fm, key) => fm.match(new RegExp(`^${key}:\\s*['"]?([^'"\\n]+?)['"]?\\s*$`, 'm'))?.[1];

export function contentState(root) {
  const work = entries(join(root, 'src/content/work'));
  const insights = entries(join(root, 'src/content/insights'));
  return {
    clearedWorkSlugs: work.filter((fm) => flag(fm, 'cleared')).map((fm) => value(fm, 'slug')),
    publishedInsightSlugs: insights.filter((fm) => !flag(fm, 'draft')).map((fm) => value(fm, 'slug')),
    draftInsightSlugs: insights.filter((fm) => flag(fm, 'draft')).map((fm) => value(fm, 'slug')),
  };
}
