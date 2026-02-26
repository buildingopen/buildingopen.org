import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Why I stopped paying for software - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'Why I stopped paying for software',
    subtitle: 'January 13, 2026',
    section: 'Blog',
  });
}
