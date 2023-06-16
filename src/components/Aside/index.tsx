import Image from 'next/image';

import doorIcon from '../../assets/door.svg';
import personIcon from '../../assets/personIcon.svg';

function Aside() {
  return (
    <aside className="fixed flex h-[50px] w-screen flex-row items-center justify-between bg-black-800 lg:z-[-1] lg:h-screen lg:w-[94px] lg:flex-col">
      <Image
        className="ml-10 lg:ml-0 lg:mt-32"
        src={personIcon}
        alt="icone representando pessoa"
      />
      <Image
        className="mr-10 lg:mb-11 lg:mr-0"
        src={doorIcon}
        alt="icone representando uma porta para sair"
      />
    </aside>
  );
}

export default Aside;
