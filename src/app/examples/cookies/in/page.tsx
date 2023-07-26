'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { deleteCookie, getCookie } from '@/app/actions';

// PARA ENTENDER PORQUE TUDO RELACIONADO A COOKIE VEM COM "rede-social." ANTES. VERIFIQUE O ARQUIVO DE ONDE VEM OS MÉTODOS DOS COOKIES @/app/actions

export default function CookieExampleIn() {
  const [userName, setUserName] = useState<string | undefined>(''); // Estado que armazena o userName que vai ser pego do cookie quando a página renderizar

  const { push } = useRouter();

  async function handleSignOut() {
    await deleteCookie('user.name'); // Deleta o cookie com nome "rede-social.user.name" usando a server action deleteCookie

    push('/examples/cookies/out'); // Depois de deletar o cookie redireciona o usuário para "fora" da aplicação
  }

  useEffect(() => {
    getCookie('user.name').then(cookie => setUserName(cookie)); // Pega o valor do cookie "rede-social.user.name" e atribui ao estado userName
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
