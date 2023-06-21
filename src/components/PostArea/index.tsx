import Image from 'next/image';

import arrowLRIcon from '../../assets/arrowLR.svg';
import pictureIcon from '../../assets/picture.svg';
import AutosizeTextarea from './TextArea';

function PostArea() {
  return (
    <section className="h-fit w-full rounded-md bg-black-900 pb-3 lg:max-w-2xl lg:border-none">
      <div className="flex h-fit flex-col">
        <AutosizeTextarea />

        <div className="ml-5 mr-6 mt-10 flex flex-row justify-between">
          <div className="flex flex-row gap-6">
            <Image src={arrowLRIcon} alt="setas para esquerda e direita" />
            <Image
              src={pictureIcon}
              alt="icone que representa uma imagem de paisagem"
            />
          </div>
          <button className="flex h-9 w-[85px] flex-row justify-center rounded-[5px]  bg-blue-500 pt-1  text-2xl font-normal leading-6 text-blue-50">
            Postar
          </button>
        </div>
      </div>
    </section>
  );
}

export default PostArea;
