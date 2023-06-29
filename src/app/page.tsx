import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center px-16 py-12">
      <h1 className="mb-6 text-xl">Home</h1>

      <ul className="flex list-none flex-col items-center gap-y-2">
        <li>
          <Link href="/sign-in" className="p-4">
            Sign In
          </Link>
        </li>
        <li>
          <Link href="/sign-up" className="p-4">
            Sign Up
          </Link>
        </li>

        <li>
          <Link href="/feed" className="p-4">
            Feed
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
