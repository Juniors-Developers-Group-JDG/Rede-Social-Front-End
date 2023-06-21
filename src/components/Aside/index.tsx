import Image from 'next/image';

import doorIcon from '../../assets/door.svg';
import personIcon from '../../assets/personIcon.svg';

export function Aside() {
  return (
    <aside className="fixed flex w-screen items-center justify-between bg-black-800 px-9 py-4 lg:relative lg:w-fit lg:flex-col lg:justify-between lg:px-9 lg:py-16">
      <Image
        className="h-6 w-6"
        src={personIcon}
        width={24}
        height={24}
        alt="icone representando pessoa"
      />
      <Image
        className="h-6 w-6"
        src={doorIcon}
        width={24}
        height={24}
        alt="icone representando uma porta para sair"
      />
    </aside>
  );
}
