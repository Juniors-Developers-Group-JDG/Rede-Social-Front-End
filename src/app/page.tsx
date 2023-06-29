import { redirect } from 'next/navigation';

const Home = () => {
  redirect('/sign-in');

  return <></>;
};

export default Home;
