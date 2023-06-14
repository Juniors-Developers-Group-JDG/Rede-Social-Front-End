import React from 'react';

import FormLogin from '@/components/FormLogin';
import ImageLogin from '@/components/ImageLogin/page';

const SignIn = () => {
  return (
    <div className="flex bg-jdg-bg">
      <ImageLogin />

      <FormLogin />
    </div>
  );
};

export default SignIn;
