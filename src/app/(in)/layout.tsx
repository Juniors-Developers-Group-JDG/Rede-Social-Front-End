import { redirect } from 'next/navigation';

import { getCookie } from '../actions';

interface InnerLayoutProps {
  children: React.ReactNode;
}

export default async function InnerLayout({ children }: InnerLayoutProps) {
  const token = await getCookie('token');

  if (!token) {
    redirect('/sign-in');
  }

  return <>{children}</>;
}
