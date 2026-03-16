import { createOGImage, ogSize } from '../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'About - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'Why I build, why I share, and why everything is open source.',
    section: 'About',
  });
}
