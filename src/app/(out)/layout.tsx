import { redirect } from 'next/navigation';

import { getCookie } from '../actions';

interface OuterLayoutProps {
  children: React.ReactNode;
}

export default async function OuterLayout({ children }: OuterLayoutProps) {
  const token = await getCookie('token');

  if (token) {
    redirect('/feed');
  }

  return <>{children}</>;
}
