import { ReactNode } from 'react';
interface InnerLayoutProps {
  children: ReactNode;
}

export default function InnerLayout({ children }: InnerLayoutProps) {
  return children;
}
