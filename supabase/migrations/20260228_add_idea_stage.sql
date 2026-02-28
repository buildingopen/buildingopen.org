-- Add stage column to posts table for Idea House pipeline
ALTER TABLE posts ADD COLUMN stage TEXT CHECK (stage IN ('idea', 'prototype', 'live'));
CREATE INDEX idx_posts_stage ON posts (stage) WHERE stage IS NOT NULL;
