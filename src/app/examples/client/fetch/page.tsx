'use client';

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

export default function ClientSideFetchExamplePage() {
  const { data: users, isLoading } = useSWR<User[], unknown, FetcherArgs>(
    { path: '/users' },
    fetcher,
  );

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : users?.length === 0 || !users ? (
        <p>Nenhum usuário!</p>
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
