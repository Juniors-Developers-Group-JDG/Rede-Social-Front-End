import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/" className="p-4">
        Home
      </Link>
      <Link href="/sign-up" className="p-4">
        SignUp
      </Link>
    </>
  );
};

export default Home;
