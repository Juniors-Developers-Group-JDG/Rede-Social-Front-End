'use client';

import Link from 'next/link';
import { ChangeEvent, FormEvent, useEffect, useState, useContext } from 'react';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { toastsContext } from '@/contexts/toasts';

const backend = process.env.NEXT_PUBLIC_API_URL as string;

const SignUp = () => {
  const context = useContext(toastsContext);

  type userType = {
    name: string;
    email: string;
    password: string;
    roles: string[];
    avatar?: string;
  };

  const [waitingCode, setWaitingCode] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userInfo, setUserInfo] = useState<userType>();

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !userPassword) {
      context.addToast({
        title: 'Ops!',
        type: 'info',
        durationInMs: 5000,
        closeButton: true,
        content: 'Verique se tudo está preenchido.',
      });
      return;
    }
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?).*$/;
    const isEmailValid = regex.test(userEmail);
    if (!isEmailValid) {
      context.addToast({
        title: 'Email inválido!',
        type: 'info',
        durationInMs: 5000,
        closeButton: true,
        content: 'Coloque um email válido!',
      });
      return;
    }
    setUserInfo({
      name: userName,
      email: userEmail,
      password: userPassword,
      roles: ['a37d0151-1721-4bb4-b3b3-154e7e3f76aa'],
    });
  };

  const handleUserCreation = async (data: userType) => {
    try {
      if (!userInfo) return;
      const createUser = await fetch(`${backend}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await createUser.json();
      console.log(result);
      if (result.status === 'Error') {
        console.log('Error');
        console.log(userInfo);
      } else if (result.error) {
        context.addToast({
          title: 'Ops!',
          type: 'error',
          durationInMs: 5000,
          closeButton: true,
          content: 'Este email já está sendo utilizado!',
        });
      } else {
        context.addToast({
          title: 'Parabéns!',
          type: 'success',
          durationInMs: 5000,
          closeButton: true,
          content: 'Sua conta foi criada com sucesso!',
        });
        handleLoginNewUser();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginNewUser = async () => {
    try {
      const loginNewUser = await fetch(`${backend}/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      });
      const result = await loginNewUser.json();
      document.cookie = `token=${result.token}; max-age=900`;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userInfo) return;
    handleUserCreation(userInfo as userType);
    setTimeout(() => {
      window.location.pathname = '/feed';
    }, 5000);
  }, [userInfo]);

  return (
    <>
      <div className="flex h-full w-full items-center justify-center px-8 md:flex-[2]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <span className="mb-6 text-[2rem] font-medium leading-10">
            Cadastre-se
          </span>
          {waitingCode === false ? (
            <div className="flex w-full max-w-xs flex-col items-center justify-center">
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => handleSignUp(e)}
                className="mb-4 flex w-full flex-col items-center gap-y-4"
              >
                <Input
                  textCentered={true}
                  type="text"
                  placeholder="Digite um nome de usuário"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserName(e.target.value)
                  }
                />
                <Input
                  textCentered={true}
                  type="text"
                  placeholder="Digite seu e-mail"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserEmail(e.target.value)
                  }
                />
                <Input
                  textCentered={true}
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserPassword(e.target.value)
                  }
                />
                <Button>Cadastrar</Button>
                {/* <Button onClick={() => setWaitingCode(true)}>Cadastrar</Button> */}
              </form>
              <Link
                href="/sign-in"
                className="ml-4 self-start transition-all hover:text-[#EDF5FD]"
              >
                Já tem conta?
              </Link>
            </div>
          ) : (
            <div className="flex w-full max-w-lg flex-col items-center justify-center">
              <p className="mb-6 mt-36 w-full self-center text-center font-medium">
                Digite o código que enviamos para o seu e-mail cadastrado
              </p>
              <form className="flex w-full max-w-[18.75rem] flex-col">
                <Input
                  type="text"
                  textCentered
                  className="mt-12 w-full text-lg"
                  placeholder="Digite o código"
                />
                {/* <Button className="mt-6" onClick={() => setWaitingCode(false)}>Verificar</Button> */}
                <Button className="mt-6">Verificar</Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
