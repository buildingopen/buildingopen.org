import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = '4 pivots in 1.5 years - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: "4 pivots in 1.5 years: what I'd tell myself before starting",
    subtitle: 'February 4, 2026',
    section: 'Blog',
  });
}
