import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'I treated my life like a product. Here\'s what I removed. - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'I treated my life like a product.',
    subtitle: 'February 26, 2026',
    section: 'Blog',
  });
}
