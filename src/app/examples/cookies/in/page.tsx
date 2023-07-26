'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { deleteCookie, getCookie } from '@/app/actions';

export default function CookieExampleIn() {
  const [userName, setUserName] = useState<string | undefined>('');

  const { push } = useRouter();

  async function handleSignOut() {
    await deleteCookie('user.name');

    push('/examples/cookies/out');
  }

  useEffect(() => {
    getCookie('user.name').then(cookie => setUserName(cookie));
  }, [setUserName]);

  return (
    <>
      {userName ? (
        <>
          <h1 className="mb-6 text-4xl font-medium text-blue-300">
            Olá {userName}
          </h1>

          <button
            type="button"
            className="w-full rounded bg-black-800 px-4 py-2 text-2xl"
            onClick={handleSignOut}
          >
            Sair
          </button>
        </>
      ) : (
        <h1>Pegando o cookie...</h1>
      )}
    </>
  );
}
