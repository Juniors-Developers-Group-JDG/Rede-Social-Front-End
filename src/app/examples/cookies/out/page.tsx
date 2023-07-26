'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { createCookie } from '@/app/actions';

export default function CookieExampleOut() {
  const [inputUserNameValue, setInputUserNameValue] = useState('');

  const { push } = useRouter();

  async function handleSignIn() {
    if (inputUserNameValue.length > 0) {
      await createCookie('user.name', inputUserNameValue);

      push('/examples/cookies/in');

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
