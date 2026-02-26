import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Build your own AI WhatsApp assistant - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'Build your own AI WhatsApp assistant for ~5/month',
    subtitle: 'Tutorial - Intermediate',
    section: 'Tutorials',
  });
}
