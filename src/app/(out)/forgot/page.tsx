'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import zod from 'zod';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Lock } from '@/components/PhosphorIcons';
import { useToasts } from '@/hooks/useToast';

const formSchema = zod.object({
  email: zod.string().email(),
});

type FormData = zod.infer<typeof formSchema>;

export default function ForgotPage() {
  const { addToast } = useToasts();

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function handleForgotFormSubmit({ email }: FormData) {
    try {
      const baseUrl = new URL(window.location.href).origin;

      const url = baseUrl + '/change-password';

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/send-email`, {
        body: JSON.stringify({ email, url }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      addToast({
        title: 'Email enviado com sucesso!',
      });
    } catch (err) {
      addToast({
        title: 'Erro ao enviar o email!',
        type: 'error',
      });

      console.error({ err });
    }
  }

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
          <h1 className="mb-4 text-xl md:text-2xl md:font-medium">
            Esqueceu a sua senha?
          </h1>
          <p className="mb-4 text-center text-xs md:text-2xl">
            Insira o seu email para enviarmos o link de redefinição de senha.
          </p>
          <Input
            type="email"
            className="mb-4 w-fit px-2 py-7 text-xl"
            placeholder="Email cadastrado"
            {...register('email')}
          />
          <Button className="mb-4 w-full px-3 py-6 font-normal md:w-fit md:text-xl">
            Enviar link para o login
          </Button>
          <Link
            href="/sign-in"
            className="text-[0.625rem] underline decoration-white/60 md:text-base"
          >
            Lembrei a senha
          </Link>
        </form>
      </main>
    </div>
  );
}
