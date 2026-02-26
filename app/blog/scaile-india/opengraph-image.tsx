import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'SCAILE goes to India - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'SCAILE goes to India',
    subtitle: 'February 3, 2026',
    section: 'Blog',
  });
}
