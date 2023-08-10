import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';

import userImg from '../../assets/avatar_placeholder.svg';
import {
  ChatCircle,
  Circle,
  Heart,
  XSquare,
} from '../../components/PhosphorIcons';

interface PostProps {
  content: React.ReactNode;
  timePostedUtcTimestamp: number;
  author: {
    avatarUrl?: string;
    name: string;
    handle: string;
  };
}

export function Post({
  content,
  author: { avatarUrl, handle, name },
  timePostedUtcTimestamp,
}: PostProps) {
  const timePostedDistanceToNow = formatDistanceToNow(
    new Date(timePostedUtcTimestamp),
    { locale: ptBR, addSuffix: true },
  );

  function handleAlert() {
    alert('Aguarde novas funcionalidades em futuras versoes');
  }

  return (
    <section className="flex h-fit w-full rounded-md bg-black-900 px-7 py-4 lg:w-[40vw] lg:border-none">
      <Image
        className="mr-4 h-8 w-8 rounded-full lg:h-12 lg:w-12"
        src={avatarUrl ?? userImg}
        width={50}
        height={50}
        alt="Avatar do autor"
      />

      <div className="mt-3 flex flex-1 flex-col">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <div className="flex gap-1">
              <p className="text-base font-medium leading-5">{name}</p>
              <span className="flex self-center text-xs font-medium leading-4">
                {handle}
              </span>
            </div>

            <span className="text-xs font-light leading-4 text-blue-500">
              Frontend Developer
            </span>
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
            <ChatCircle onClick={handleAlert} weight="fill" className="mr-1 cursor-pointer" />
            <span className="flex flex-row self-center text-[8px] font-medium leading-[10px] text-blue-50">
              Digite sua opinião
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
