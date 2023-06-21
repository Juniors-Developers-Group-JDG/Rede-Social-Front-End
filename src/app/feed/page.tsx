import Image from 'next/image';

import reactImg from '../../assets/react.png';
import Aside from '../../components/Aside';
import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { PostArea } from '../../components/PostArea';

const Feed = () => {
  return (
    <div className="flex max-h-screen min-h-screen flex-col lg:overflow-y-hidden">
      <Header />

      <div className="flex flex-1 items-stretch lg:overflow-y-hidden">
        <Aside />

        <main className="flex flex-1 flex-col gap-y-10 overflow-y-auto px-10 py-24 lg:flex-row lg:justify-center lg:gap-x-10 lg:px-10 lg:py-6">
          <section className="flex flex-col gap-y-10 lg:gap-y-9">
            <PostArea />

            <Post
              author={{ handle: '@johndoe01', name: 'John Doe' }}
              content={
                <p>Eu estou adorando a nova atualização do react router dom.</p>
              }
              timePostedUtcTimestamp={1687352988}
            />

            <Post
              author={{ handle: '@johndoe03', name: 'John Doe' }}
              content={
                <p>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum .
                </p>
              }
              timePostedUtcTimestamp={1687353088}
            />
          </section>

          <section className="flex flex-col">
            <Post
              author={{ handle: '@johndoe02', name: 'John Doe' }}
              content={
                <>
                  <p>
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
                </>
              }
              timePostedUtcTimestamp={1687362988}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Feed;
