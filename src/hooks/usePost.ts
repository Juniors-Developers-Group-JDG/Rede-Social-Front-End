'use client';

import { useContext } from 'react';

import { postContext } from '@/contexts/post';

export function usePost() {
  const context = useContext(postContext);

  if (!context) throw new Error('usePost must be used inside a PostProvider');

  return context;
}
