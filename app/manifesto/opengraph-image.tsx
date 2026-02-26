import { createOGImage, ogSize } from '../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Manifesto - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'Equal opportunity through open source',
    subtitle: 'Why Building Open exists and what we believe.',
    section: 'Manifesto',
  });
}
