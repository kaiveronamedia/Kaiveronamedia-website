import { hasPlaceholder } from './placeholders';

const plain = (s: string) => s.replace(/\*+([^*]+)\*+/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

/** FAQPage for the Q&As visible on the page; placeholder items are never marked up. */
export function faqPage(items: { question: string; answer: string }[]) {
  const real = items.filter((i) => !hasPlaceholder(i));
  if (real.length === 0) return [];
  return [
    {
      '@type': 'FAQPage',
      mainEntity: real.map((i) => ({
        '@type': 'Question',
        name: plain(i.question),
        acceptedAnswer: { '@type': 'Answer', text: plain(i.answer) },
      })),
    },
  ];
}
