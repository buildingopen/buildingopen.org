import type { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://buildingopen.org';
  const supabase = createClient(supabaseUrl, supabaseKey);

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

  // Fetch dynamic community posts (non-idea posts)
  const { data: communityPosts } = await supabase
    .from('posts')
    .select('id, created_at')
    .is('stage', null)
    .order('created_at', { ascending: false });

  // Fetch dynamic idea posts
  const { data: ideaPosts } = await supabase
    .from('posts')
    .select('id, created_at')
    .not('stage', 'is', null)
    .order('created_at', { ascending: false });

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
    ...(communityPosts ?? []).map((post) => ({
      url: `${baseUrl}/community/${post.id}`,
      lastModified: new Date(post.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    ...(ideaPosts ?? []).map((post) => ({
      url: `${baseUrl}/ideas/${post.id}`,
      lastModified: new Date(post.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
  ];
}
