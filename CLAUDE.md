# Building Open (buildingopen.org)

## Cross-Posting Blogs with fedeponte.com

Some blog posts appear on both buildingopen.org and fedeponte.com. To avoid Google SEO penalties for duplicate content, use canonical tags.

**buildingopen.org is the canonical source.** Its `metadataBase` is set to `https://buildingopen.org`, so all pages are self-canonical by default.

**On fedeponte.com**, add `canonical` to the MDX frontmatter:

```yaml
---
title: "Post Title"
publishedAt: "2026-02-28"
summary: "Description"
canonical: "https://buildingopen.org/blog/post-slug"
---
```

This renders `<link rel="canonical" href="https://buildingopen.org/blog/post-slug" />`, telling Google to index the buildingopen.org version.

## Domain Setup

- **buildingopen.org** - primary domain (Vercel)
- **buildingopen.com** - 301 redirects to .org (middleware)
- **www.buildingopen.com** - 301 redirects to .org (middleware)
- DNS managed at IONOS, A records point to Vercel (76.76.21.21)

## Supabase

- Project ref: `cbhbfutssknfjvgvavnt`
- Under the `fede` Supabase account (`sb-fede` to switch CLI)
- RLS enabled on all tables

## Idea House

- Posts with `stage IS NOT NULL` are idea pipeline posts
- Stages: idea, prototype, live
- Authors can advance their own ideas
- Admin (depontefede@gmail.com) can advance/demote any idea
- Community page filters out idea posts (`stage IS NULL`)
