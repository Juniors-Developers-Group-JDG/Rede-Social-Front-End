'use client';

import { useState } from 'react';
import useSWR from 'swr';

import { FetcherArgs, fetcher } from '@/utils/swrFetcher';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  created_at: string;
}

export default function ClientSideLazyFetchExamplePage() {
  const [shouldFetchUsers, setShouldFetchUsers] = useState(false);

  const { data: users, isLoading } = useSWR<User[], unknown, FetcherArgs>(
    shouldFetchUsers ? { path: '/users' } : null,
    fetcher,
  );

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : !shouldFetchUsers ? (
        <>
          <p className="mb-4">Usuários não carregados!</p>

          <button onClick={() => setShouldFetchUsers(true)}>
            Carregar Usuários
          </button>
        </>
      ) : !users || users.length === 0 ? (
        <p className="mb-4">Nenhum usuário!</p>
      ) : (
        <>
          <h1 className="mb-4 text-2xl font-semibold">Usuários</h1>

          <ul className="flex flex-col items-center text-lg">
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
