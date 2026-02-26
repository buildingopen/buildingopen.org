import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Better AI answers with file context - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'What if AI could give you 10x better answers - with zero extra effort?',
    subtitle: 'February 6, 2026',
    section: 'Blog',
  });
}
