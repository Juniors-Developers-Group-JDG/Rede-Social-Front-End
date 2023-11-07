'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import zod from 'zod';

import { createCookie } from '@/app/actions';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useToasts } from '@/hooks/useToast';

const backendURL = process.env.NEXT_PUBLIC_API_URL as string;

const signUpFormSchema = zod.object({
  name: zod.string().min(1, 'Nome é obrigatório'),
  email: zod.string().min(1, 'Email é obrigatório').email('Email incorreto'),
  password: zod.string().min(1, 'Senha é obrigatória'),
});

type SignUpFormData = zod.infer<typeof signUpFormSchema>;

const SignUp = () => {
  const formMethods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = formMethods;

  const { push } = useRouter();

  const { addToast } = useToasts();

  const handleSignUpFormSubmit = async (formData: SignUpFormData) => {
    try {
      const res = await fetch(`${backendURL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status <= 200 || res.status >= 299) {
        const { message } = await res.json();

        throw new Error(message);
      }

      addToast({
        title: 'Parabéns!',
        type: 'success',
        durationInMs: 5000,
        closeButton: true,
        content: 'Sua conta foi criada com sucesso!',
      });

      await handleLoginNewUser(formData.email, formData.password);

      reset();
    } catch (error) {
      console.error({ error });

      if (error instanceof Error) {
        if (error.message === 'User already Exists') {
          addToast({
            title: 'Ops!',
            type: 'error',
            durationInMs: 5000,
            closeButton: true,
            content: 'Este email já está sendo utilizado!',
          });

          return;
        }

        addToast({
          title: 'Ops!',
          type: 'error',
          durationInMs: 5000,
          closeButton: true,
          content: 'Aconteceu um erro por nossa parte. 😥',
        });
      }
    }
  };

  const handleLoginNewUser = async (email: string, password: string) => {
    try {
      const loginNewUser = await fetch(`${backendURL}/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const res = await loginNewUser.json();

      await createCookie('token', res.token);

      push('/feed');
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <>
      <div className="flex h-full w-full items-center justify-center px-8 md:flex-[2]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <span className="mb-6 text-[2rem] font-medium leading-10">
            Cadastre-se
          </span>
          <div className="flex w-full max-w-xs flex-col items-center justify-center">
            <form
              onSubmit={handleSubmit(handleSignUpFormSubmit)}
              className="mb-4 flex w-full flex-col items-center gap-y-4"
            >
              <Input
                textCentered={true}
                type="text"
                placeholder="Digite um nome de usuário"
                {...register('name')}
              />
              <Input
                textCentered={true}
                type="email"
                placeholder="Digite seu e-mail"
                {...register('email')}
              />
              <Input
                textCentered={true}
                type="password"
                placeholder="Digite sua senha"
                {...register('password')}
              />
              <Button isProcessing={isSubmitting}>Cadastrar</Button>
            </form>
            <Link
              href="/sign-in"
              className="ml-4 self-start transition-all hover:text-[#EDF5FD]"
            >
              Já tem conta?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
