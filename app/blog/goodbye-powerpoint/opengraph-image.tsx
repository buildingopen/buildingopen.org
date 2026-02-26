import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'I genuinely stopped using PowerPoint - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'I genuinely stopped using PowerPoint',
    subtitle: 'February 10, 2026',
    section: 'Blog',
  });
}
