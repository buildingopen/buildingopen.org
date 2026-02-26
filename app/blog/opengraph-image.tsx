import { createOGImage, ogSize } from '../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Blog - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'Blog',
    subtitle: 'Thoughts on building, open source, and the things we learn along the way.',
    section: 'Building Open',
  });
}
