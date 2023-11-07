'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import zod from 'zod';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Lock } from '@/components/PhosphorIcons';
import { useToasts } from '@/hooks/useToast';

const formSchema = zod
  .object({
    password: zod.string(),
    passwordConfirmation: zod.string(),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'Senhas não são idênticas!',
    path: ['passwordConfirmation'],
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'Senhas não são idênticas!',
    path: ['password'],
  });

type FormData = zod.infer<typeof formSchema>;

export default function ForgotPage() {
  const formMethods = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit, formState } = formMethods;

  const { addToast } = useToasts();

  const { push } = useRouter();

  const token = useSearchParams().get('token');

  async function handleForgotFormSubmit({ password }: FormData) {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/refresh-password/${token}`,
        {
          body: JSON.stringify({ password }),
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      addToast({
        title: 'Senha alterada com sucesso!',
      });

      push('/sign-in');
    } catch (err) {
      console.error({ err });

      addToast({
        title: 'Erro ao alterar a senha!',
      });
    }
  }

  useEffect(() => {
    if (formState.errors.passwordConfirmation) {
      addToast({
        title: 'Senhas não são idênticas!',
        type: 'error',
      });
    }
  }, [formState.errors.passwordConfirmation, addToast]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="flex min-h-screen max-w-[230px] flex-col items-center justify-center md:max-w-[400px]">
        <section className="mb-4 rounded-full border-[3px] border-white p-8 md:border-[6px] md:p-14">
          <Lock
            className="h-14 w-14 leading-none text-blue-500 md:h-28 md:w-28"
            weight="bold"
          />
        </section>
        <form
          onSubmit={handleSubmit(handleForgotFormSubmit)}
          className="flex flex-col items-center"
        >
          <FormProvider {...formMethods}>
            <h1 className="mb-4 text-xl md:text-2xl md:font-medium">
              Crie sua nova senha!
            </h1>
            <Controller
              name="password"
              render={({ field, fieldState }) => (
                <Input
                  wrapperProps={{ 'data-error': !!fieldState.error }}
                  className="mb-4 w-fit px-2 py-7 text-xl data-[error=true]:border-red-400"
                  placeholder="Nova senha"
                  value={field.value}
                  onChange={field.onChange}
                  type="password"
                />
              )}
            />

            <Controller
              name="passwordConfirmation"
              render={({ field, fieldState }) => (
                <Input
                  wrapperProps={{ 'data-error': !!fieldState.error }}
                  className="mb-4 w-fit px-2 py-7 text-xl data-[error=true]:border-red-400"
                  placeholder="Confirmação da nova senha"
                  value={field.value}
                  onChange={field.onChange}
                  type="password"
                />
              )}
            />
            <Button className="mb-4 w-full px-3 py-6 font-normal md:w-fit md:text-xl">
              Trocar
            </Button>
          </FormProvider>
        </form>
      </main>
    </div>
  );
}
