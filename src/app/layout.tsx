import { Inter } from 'next/font/google';

import { ToastsContainer } from '@/components/ToastsContainer';
import { ToastsProvider } from '@/contexts/toasts';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TechSphere',
  description:
    'Uma rede social inovadora focada em comunidades da área de tecnologia. Ela serve como um hub para profissionais, entusiastas e estudantes de tecnologia se conectarem, compartilharem ideias e colaborarem em projetos. TechSphere possui fóruns de discussão para troca de ideias, grupos de interesse específico para áreas focadas da tecnologia, uma plataforma para compartilhamento de recursos educacionais e ferramentas, além de eventos virtuais para aprendizado e networking. Em resumo, TechSphere é um espaço virtual dinâmico que promove a aprendizagem, a discussão e a inovação na área de tecnologia.',
  icons: {
    icon: './icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <ToastsProvider>
        <body className={inter.className + ' overflow-x-hidden'}>
          {children}
          <ToastsContainer />
        </body>
      </ToastsProvider>
    </html>
  );
}
