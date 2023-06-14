import Image from 'next/image';
import React from 'react';

import ImageLayout from '../../../assets/ImageLayout.svg';

const ImageLogin = () => {
  return (
    <div className="hidden w-7/12 bg-jdg-500 lg:flex lg:flex-col">
      <div className="mt-20 flex h-20 w-3/4 items-center justify-center rounded-r-2xl bg-jdg-text xl:mt-40">
        <h1 className="text-3xl font-semibold text-jdg-500">
          Welcome to Website
        </h1>
      </div>
      <div className="flex w-3/4 flex-col items-center justify-center p-2">
        <h2 className="my-4 w-2/4 text-justify text-base text-jdg-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English.
        </h2>
        <Image src={ImageLayout} alt="Image Layout" />
      </div>
    </div>
  );
};

export default ImageLogin;
