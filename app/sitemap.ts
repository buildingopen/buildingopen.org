import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buildingopen.org';

  const staticPages = [
    '',
    '/projects',
    '/manifesto',
    '/blog',
    '/tutorials',
    '/journey',
    '/community',
    '/ideas',
    '/badge',
  ];

  const blogPosts = [
    'agent-protocol',
    'clawdbot-hinge',
    'golf-vs-datacenters',
    'goodbye-powerpoint',
    'ai-file-context',
    'founder-habits',
    'claude-code-context',
    'startup-learnings',
    'scaile-india',
    'opendraft-seo',
    'opensource-tools',
  ];

  const tutorials = [
    'openclaw-whatsapp-assistant',
    'opendraft-quickstart',
    'openslides-quickstart',
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...tutorials.map((slug) => ({
      url: `${baseUrl}/tutorials/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
