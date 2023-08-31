'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { createCookie } from '@/app/actions';
import { GoogleLogo, Password, User } from '@/components/PhosphorIcons';
import useGoogleLogin from '@/hooks/useGoogleLogin';
import { useToasts } from '@/hooks/useToast';

import { Button } from '../Button';
import { Input } from '../Input';

export const FormLogin = () => {
  const router = useRouter();
  const { addToast } = useToasts();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoggingInWithGoogle, setIsLoggingInWithGoogle] =
    useState<boolean>(false);

  const { googleLogin } = useGoogleLogin();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoggingInWithGoogle) {
      googleLogin();
      return;
    }

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
        'https://social-media-back-end.up.railway.app/sessions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        },
      );

      if (response.ok) {
        const { user } = await response.json();
        await createCookie('user', JSON.stringify(user));
        await createCookie('email', email);
        router.push('/feed'); // Redirecionar usando router.push
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

  const handleGoogleLogin = async () => {
    setIsLoggingInWithGoogle(true);
    await googleLogin();
  };

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

        <div className="my-3 inline-flex w-full items-center justify-center">
          <hr className="my-8 h-px w-full border-0 bg-blue-500"></hr>
          <span className="mx-2 text-sm">ou</span>
          <hr className="my-8 h-px w-full border-0 bg-blue-500"></hr>
        </div>

        <Button
          icon={<GoogleLogo className="h-5 w-5" weight="bold" />}
          onClick={handleGoogleLogin}
        >
          Entrar com o Google
        </Button>
      </form>
    </div>
  );
};
