import Image from 'next/image';

import reactImg from '../../assets/react.png';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import PostArea from '../../components/PostArea';
import Section from '../../components/Section';
import SectionHidden from '../../components/SectionHidden';

const Feed = () => {
  return (
    <div>
      <Header />

      <Aside />

      <main className="mb-[50px] flex flex-col lg:ml-[155px] lg:flex-row">
        <div className="mt-[50px] flex flex-col lg:mt-[116px] lg:grid-cols-2 lg:gap-[34px]">
          <PostArea />

          <Section>
            <div>
              <p className="mb-[13px] mt-[10px] text-[13px] font-light leading-4 text-text-white">
                Eu estou adorando a nova atualização do react router dom.
              </p>
            </div>
          </Section>

          <SectionHidden>
            <p className="mb-[13px] mt-[10px] text-[13px] font-light leading-4 text-text-white">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum .
            </p>
          </SectionHidden>
        </div>
        <div className="flex flex-col lg:ml-[26px] lg:mr-[127px] lg:mt-[116px]">
          <Section>
            <div>
              <p className="mb-[13px] mt-[10px] flex-col text-[13px] font-light leading-4 text-text-white">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum .
              </p>
              <Image
                src={reactImg}
                alt="foto com simbolo do react"
                className="mb-4 aspect-video w-5/6 object-cover pr-2 md:w-4/5 lg:w-full"
              />
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default Feed;
