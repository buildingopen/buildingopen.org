import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Clawdbot Killed My Hinge Date - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'Clawdbot Killed My Hinge Date',
    subtitle: 'February 22, 2026',
    section: 'Blog',
  });
}
