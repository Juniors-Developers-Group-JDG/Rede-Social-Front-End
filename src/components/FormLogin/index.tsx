'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { createCookie } from '@/app/actions';
import { Password, User } from '@/components/PhosphorIcons';
import { useToasts } from '@/hooks/useToast';

import { Button } from '../Button';
import { Input } from '../Input';

export const FormLogin = () => {
  const router = useRouter();
  const { addToast } = useToasts();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      addToast({
        title: 'Campos vazios!',
        type: 'error',
        durationInMs: 5000,
        closeButton: true,
        content: 'Preencha os campos de email e senha.',
      });
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/sessions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        },
      );

      const resJson = await response.json();

      if (resJson.token) {
        const {
          token,
          user: { id },
        } = resJson;
        await createCookie('token', token);
        await createCookie('id', id);
        router.push('/feed');
      } else {
        addToast({
          title: 'Erro ao fazer o Login!',
          type: 'error',
          durationInMs: 5000,
          closeButton: true,
          content: 'Usuário ou senha incorretos.',
        });
        console.error('Login failed');
      }
    } catch (error) {
      addToast({
        title: 'Erro ao logar!',
        type: 'error',
        durationInMs: 5000,
        closeButton: true,
        content: 'Tente novamente.',
      });
      console.error('An error occurred:', error);
    }
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
          <Link href="/forgot">
            <span className="text-sm">Esqueceu a senha?</span>
          </Link>
          <Link href="/sign-up">
            <span className="text-sm">Não tem conta?</span>
          </Link>
        </div>

        <Button>Entrar</Button>
      </form>
    </div>
  );
};
