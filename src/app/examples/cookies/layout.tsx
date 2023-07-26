import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { getCookie } from '@/app/actions';

export default async function CookieExampleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const userName = await getCookie('user.name');

  const isAuthenticated = userName && userName.length > 0;

  const currentPath = headers().get('x-invoke-path');

  const currentPathLastRoute = currentPath?.substring(
    currentPath.lastIndexOf('/'),
  );

  console.log({ isAuthenticated, currentPath, currentPathLastRoute });

  if (isAuthenticated) {
    const wrongRoute = currentPathLastRoute === '/out';

    console.log({ wrongRoute });

    if (wrongRoute) {
      redirect('/examples/cookies/in');
    }
  } else {
    const wrongRoute = currentPathLastRoute === '/in';

    if (wrongRoute) {
      redirect('/examples/cookies/out');
    }
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <form className="flex w-fit flex-col items-center">{children}</form>
    </main>
  );
}
