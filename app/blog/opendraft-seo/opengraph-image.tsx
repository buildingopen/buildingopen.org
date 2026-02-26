import { createOGImage, ogSize } from '../../lib/og-helpers';

export const runtime = 'edge';
export const alt = 'Cracking SEO and AEO - Building Open';
export const size = ogSize;
export const contentType = 'image/png';

export default function OGImage() {
  return createOGImage({
    title: 'How OpenDraft hit #1 on Google, ChatGPT, Perplexity, and Gemini',
    subtitle: 'January 29, 2026',
    section: 'Blog',
  });
}
