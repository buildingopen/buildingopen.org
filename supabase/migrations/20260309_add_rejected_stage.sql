-- Add 'rejected' to the allowed stages for Idea House
ALTER TABLE posts DROP CONSTRAINT IF EXISTS posts_stage_check;
ALTER TABLE posts ADD CONSTRAINT posts_stage_check CHECK (stage IN ('idea', 'prototype', 'live', 'rejected'));
