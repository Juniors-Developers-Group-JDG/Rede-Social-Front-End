import { PostArea } from '@/components/PostArea';

interface FeedLayout {
  page: React.ReactNode;
}

export default async function FeedLayout({ page }: FeedLayout) {
  return (
    <main className="flex flex-1 flex-col gap-y-10 overflow-y-auto px-10 py-24 lg:ml-24 lg:flex-row lg:justify-start lg:gap-x-10 lg:px-10 lg:py-6">
      <section className="flex flex-col gap-y-10 lg:gap-y-9">
        <PostArea />
        {page}
      </section>
    </main>
  );
}
