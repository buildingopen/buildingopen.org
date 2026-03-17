-- Allow comment authors to update and delete their own comments
CREATE POLICY "Authors can update own comments" ON comments
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Authors can delete own comments" ON comments
  FOR DELETE USING (auth.uid() = author_id);
