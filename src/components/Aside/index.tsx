import { SignOut, UserCircle } from '../../components/PhosphorIcons';

export function Aside() {
  return (
    <aside className="fixed flex w-screen items-center justify-between bg-black-800 px-9 py-4 text-blue-500 lg:relative lg:w-fit lg:flex-col lg:justify-between lg:px-9 lg:py-16">
      <UserCircle className="h-8 w-8" />
      <SignOut className="h-8 w-8" />
    </aside>
  );
}
