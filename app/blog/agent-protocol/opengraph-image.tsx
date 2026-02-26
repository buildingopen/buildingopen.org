import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'The Agent Protocol Layer - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'The Agent Protocol Layer',
    subtitle: 'February 27, 2026',
    section: 'Blog',
  });
}
