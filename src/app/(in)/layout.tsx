import { redirect } from 'next/navigation';

import { Aside } from '@/components/Aside';
import { Header } from '@/components/Header';
import { PostProvider } from '@/contexts/post';

import { getCookie } from '../actions';

interface InnerLayoutProps {
  children: React.ReactNode;
}

export default async function InnerLayout({ children }: InnerLayoutProps) {
  const token = await getCookie('token');

  if (!token) {
    redirect('/sign-in');
  }

  return (
    <div className="flex max-h-screen min-h-screen flex-col overflow-y-hidden">
      <PostProvider>
        <Header />
        <div className="flex flex-1 items-stretch lg:overflow-y-hidden">
          <Aside />
          {children}
        </div>
      </PostProvider>
    </div>
  );
}
