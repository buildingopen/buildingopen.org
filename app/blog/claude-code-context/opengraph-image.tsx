import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Why Claude Code is my new best friend - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'My friends are jealous of my new best friend.',
    subtitle: 'February 6, 2026',
    section: 'Blog',
  });
}
