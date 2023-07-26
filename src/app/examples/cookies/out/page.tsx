'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { createCookie } from '@/app/actions';

// PARA ENTENDER PORQUE TUDO RELACIONADO A COOKIE VEM COM "rede-social." ANTES. VERIFIQUE O ARQUIVO DE ONDE VEM OS MÉTODOS DOS COOKIES @/app/actions

export default function CookieExampleOut() {
  const [inputUserNameValue, setInputUserNameValue] = useState(''); // Estado que armazena o valor do input userName

  const { push } = useRouter();

  async function handleSignIn() {
    if (inputUserNameValue.length > 0) {
      await createCookie('user.name', inputUserNameValue); // Cria um cookie com o nome "rede-social.user.name" com o valor do estado inputUserNameValue usando a server action createCookie

      push('/examples/cookies/in'); // Depois de criar o cookie redireciona o usuário para "dentro" da aplicação

      return;
    }

    window.alert('Me diga seu nome antes de entrar 😐');
  }

  return (
    <>
      <h1 className="mb-6 text-4xl font-medium text-blue-300">
        Olá estranho 👋
      </h1>

      <label className="mb-2 self-start text-xl" htmlFor="userName">
        Oi, sou:
      </label>

      <input
        id="userName"
        placeholder="Qual o seu nome?"
        className="mb-4 w-full rounded px-2 py-1 text-center text-lg text-text-black"
        onChange={e => setInputUserNameValue(e.target.value)}
      />

      <button
        type="button"
        className="w-full rounded bg-black-800 px-4 py-2 text-2xl"
        onClick={handleSignIn}
      >
        Entrar
      </button>
    </>
  );
}
