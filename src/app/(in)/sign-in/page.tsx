import Link from 'next/link';

const SignIn = () => {
  return (
    <>
      <h1>SignIn</h1>
      <Link href="/" className="p-4">
        Home
      </Link>
      <Link href="/sign-up" className="p-4">
        SignUp
      </Link>
      <Link href="/blablabla" className="p-4">
        Error
      </Link>
    </>
  );
};

export default SignIn;
