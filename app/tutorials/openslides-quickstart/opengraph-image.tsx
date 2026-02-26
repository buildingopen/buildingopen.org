import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Create a slide deck with OpenSlides - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'Create a slide deck with OpenSlides',
    subtitle: 'Tutorial - Beginner',
    section: 'Tutorials',
  });
}
