'use client';

import { useContext } from 'react';

import { toastsContext } from '@/contexts/toasts';

export function useToasts() {
  const context = useContext(toastsContext);

  if (!context)
    throw new Error('useToasts must be used inside a ToastsProvider');

  return context;
}
