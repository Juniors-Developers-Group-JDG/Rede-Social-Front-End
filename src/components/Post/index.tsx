import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { ChatCircle, Circle, Heart } from '../../components/PhosphorIcons';

interface PostProps {
  content: React.ReactNode;
  timePostedUtcTimestamp: number;
  userName: string;
}

export function Post({ content, timePostedUtcTimestamp, userName }: PostProps) {
  const timePostedDistanceToNow = formatDistanceToNow(
    new Date(timePostedUtcTimestamp),
    { locale: ptBR, addSuffix: true },
  );

  function handleAlert() {
    alert('Aguarde novas funcionalidades em futuras versoes');
  }

  return (
    <section className="flex h-fit w-full rounded-md bg-black-900 px-7 py-4 lg:w-[40vw] lg:border-none">
      <div className="mt-3 flex flex-1 flex-col">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p className="text-base font-medium leading-none">{userName}</p>
          </div>

          <div className="flex h-fit items-center gap-2">
            <Circle weight="fill" className="h-[0.35rem] w-[0.35rem]" />
            <p className="text-[10px] font-medium leading-3 lg:text-xs lg:leading-4">
              {timePostedDistanceToNow}
            </p>
          </div>
        </div>

        <div
          style={{ wordBreak: 'break-word' }}
          className="mb-4 mt-1 flex-col break-words border-b border-t border-blue-800 px-3 py-[0.625rem] text-sm font-light leading-4 text-text-white"
        >
          {content}
        </div>

        <div className="flex items-center">
          <Heart
            onClick={handleAlert}
            weight="bold"
            className="mr-8 cursor-pointer"
          />
          <div className="flex items-center">
            <ChatCircle
              onClick={handleAlert}
              weight="fill"
              className="mr-1 cursor-pointer"
            />
            <span className="flex flex-row self-center text-[8px] font-medium leading-[10px] text-blue-50">
              Digite sua opinião
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
