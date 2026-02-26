import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Golf courses use 30x more water than all US data centers - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'Golf courses use 30x more water than all US data centers',
    subtitle: 'February 18, 2026',
    section: 'Blog',
  });
}
