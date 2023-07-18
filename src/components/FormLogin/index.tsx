'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { GoogleLogo, Password, User } from '@/components/PhosphorIcons';
import { fetcher } from '@/utils/swrFetcher';

import { Button } from '../Button';
import { Input } from '../Input';
import { useState } from 'react';

export const FormLogin = () => {
  const { push } = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    const { user } = await fetch(
      'https://back-social-media-production.up.railway.app/sessions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    );

    console.log(user);
  }

  return (
    <div className="flex h-screen w-full items-center justify-center px-8 md:flex-[2]">
      <form
        className="flex w-full max-w-xs flex-col items-center"
        onSubmit={handleFormSubmit}
      >
        <h1 className="mb-2 text-2xl">Login</h1>
        <Input
          placeholder="Digite seu e-mail"
          icon={<User className="h-5 w-5" />}
          className="mb-4"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          placeholder="Digite sua senha"
          type="password"
          icon={<Password className="h-5 w-5" />}
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="mb-3 flex w-full items-center justify-between gap-4 text-center">
          <Link href="/">
            <span className="text-sm">Esqueceu a senha?</span>
          </Link>
          <Link href="/sign-up">
            <span className="text-sm">Não tem conta?</span>
          </Link>
        </div>

        <Button onClick={() => {}}>Entrar</Button>

        <div className="my-3 inline-flex w-full items-center justify-center">
          <hr className="my-8 h-px w-full border-0 bg-blue-500"></hr>
          <span className="mx-2 text-sm">ou</span>
          <hr className="my-8 h-px w-full border-0 bg-blue-500"></hr>
        </div>

        <Button
          icon={<GoogleLogo className="h-5 w-5" weight="bold" />}
          onClick={() => push('/feed')}
        >
          Entrar com o Google
        </Button>
      </form>
    </div>
  );
};
