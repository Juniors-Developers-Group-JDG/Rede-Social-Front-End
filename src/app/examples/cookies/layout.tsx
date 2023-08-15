import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { getCookie } from '@/app/actions';

/*
    Esse layout além de definir um padrão de estilo para as rotas,
    também verifica se o usuário esta acessando a rota certa de acordo com o status de autenticação dele.

    Se ele estiver na rota errada o layout redireciona ele para a rota certa.

    Obs: P layout pode ser uma função assíncrona pois ele é renderizado no servidor

    Status:
    Autenticado se o cookie "rede-social.user.name" existe e não autenticado se não

    PARA ENTENDER PORQUE TUDO RELACIONADO A COOKIE VEM COM "rede-social." ANTES. VERIFIQUE O ARQUIVO DE ONDE VEM OS MÉTODOS DOS COOKIES @/app/actions
*/

export default async function CookieExampleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const userName = await getCookie('user.name'); // Usa a server action getCookie para pegar o valor do cookie rede-social.user.name

  const isAuthenticated = userName && userName.length > 0; // Verifica se o usuário esta autenticado

  const currentPath = headers().get('x-invoke-path'); // Por meio do método header() pega o caminho atual. Exemplo "/examples/cookies/in"

  const currentPathLastRoute = currentPath?.substring(
    currentPath.lastIndexOf('/'),
  ); // Pega qual é a ultima rota do caminho, Exemplo: Em "/examples/cookies/in" o código pegaria "/in"

  if (isAuthenticated) {
    const wrongRoute = currentPathLastRoute === '/out'; // Verifica se o usuário autenticado esta acessando a rota errada("/out")

    if (wrongRoute) {
      redirect('/examples/cookies/in'); // redireciona o usuário se ele estiver na rota errada
    }
  } else {
    const wrongRoute = currentPathLastRoute === '/in'; // Verifica se o usuário não autenticado esta acessando a rota errada("/in")

    if (wrongRoute) {
      redirect('/examples/cookies/out'); // redireciona o usuário se ele estiver na rota errada
    }
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <form className="flex w-fit flex-col items-center">{children}</form>
    </main>
  );
}
