'use client';

import * as Toast from '@radix-ui/react-toast';

import { X } from '@/components/PhosphorIcons';
import { useToasts } from '@/hooks/useToast';

import { toastButtonCva, toastCva } from './cva';

export function ToastsContainer() {
  const { toasts } = useToasts();

  return (
    <Toast.Provider swipeDirection="left">
      {toasts.map(({ type, id, durationInMs, title, content, closeButton }) => (
        <Toast.Root key={id} duration={durationInMs} asChild>
          <section className={toastCva({ type })} style={{ zIndex: 100 }}>
            <section className="flex w-full flex-col">
              <Toast.Title asChild>
                <h3 className="text-lg font-medium">{title}</h3>
              </Toast.Title>

              {content && (
                <Toast.Description asChild>
                  <p className="mt-2 text-base">{content}</p>
                </Toast.Description>
              )}
            </section>

            {closeButton && (
              <Toast.Close asChild>
                <button className={toastButtonCva({ type })}>
                  <X weight="bold" className="h-5 w-5" />
                </button>
              </Toast.Close>
            )}
          </section>
        </Toast.Root>
      ))}

      <Toast.Viewport asChild>
        <div className="absolute right-4 top-3 flex w-fit flex-col gap-y-4" />
      </Toast.Viewport>
    </Toast.Provider>
  );
}
