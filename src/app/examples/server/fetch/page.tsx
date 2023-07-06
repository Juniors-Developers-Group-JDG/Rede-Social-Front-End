import { fetcher } from '@/utils/swrFetcher';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  created_at: string;
}

export default async function ServerSideFetchExamplePage() {
  const users = await fetcher<User[]>({ path: '/users' });

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      {!users || users.length === 0 ? (
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
