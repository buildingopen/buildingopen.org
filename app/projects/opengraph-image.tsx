import { createOGImage, ogSize } from '../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Projects - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'Projects',
    subtitle: 'Free and open source tools. Use them, learn from them, make them yours.',
    section: 'Building Open',
  });
}
