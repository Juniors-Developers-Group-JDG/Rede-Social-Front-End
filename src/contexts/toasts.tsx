'use client';

import { createContext, useCallback, useState } from 'react';

type ToastType = 'success' | 'info' | 'error';

interface ToastProps {
  durationInMs?: number;
  type?: ToastType;
  title: string;
  content?: React.ReactNode;
  closeButton?: boolean;
  id: string; // title + current timestamp
}

interface toastsContextData {
  toasts: ToastProps[];
  addToast: (newToastData: Omit<ToastProps, 'id'>) => void;
  deleteToast: (id: string) => void;
}

export const toastsContext = createContext<toastsContextData>(
  {} as toastsContextData,
);

interface ToastsProviderProps {
  children: React.ReactNode;
}

export function ToastsProvider({ children }: ToastsProviderProps) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((newToastData: Omit<ToastProps, 'id'>) => {
    const {
      title,
      durationInMs = 5000,
      type = 'info',
      closeButton = true,
    } = newToastData;

    const newToastId = `${title}_${new Date().getTime()}`;

    const newToast: ToastProps = {
      ...newToastData,
      id: newToastId,
      type,
      closeButton,
    };

    setToasts(state => [...state, newToast]);

    setTimeout(() => {
      setToasts(state => {
        const toastExists =
          state.find(toast => toast.id === newToastId) !== undefined;

        if (toastExists) return state.filter(toast => toast.id !== newToastId);

        return state;
      });
    }, durationInMs);
  }, []);

  function deleteToast(id: string) {
    setToasts(state => {
      return state.filter(toast => toast.id !== id);
    });
  }

  console.log({ toasts });

  return (
    <toastsContext.Provider value={{ toasts, addToast, deleteToast }}>
      {children}
    </toastsContext.Provider>
  );
}
