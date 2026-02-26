import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Generate your first research paper with OpenDraft - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'Generate your first research paper with OpenDraft',
    subtitle: 'Tutorial - Beginner',
    section: 'Tutorials',
  });
}
