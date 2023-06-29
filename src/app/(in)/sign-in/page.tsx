import { FormLogin } from '@/components/FormLogin';
import { ImageLogin } from '@/components/ImageLogin/page';

const SignIn = () => {
  return (
    <div className="bg-jdg-bg flex">
      <ImageLogin />

      <FormLogin />
    </div>
  );
};

export default SignIn;
