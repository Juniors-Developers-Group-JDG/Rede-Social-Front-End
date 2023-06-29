import React from 'react';

interface ButtonProps {
  text: string;
  icon?: React.ReactElement;
}
export const Button = ({ text, icon }: ButtonProps) => {
  return (
    <button className="flex h-10 w-full max-w-xs items-center justify-center rounded-md bg-blue-500 p-2 font-bold hover:bg-component-bg hover:text-blue-500">
      {icon && <div className="mr-2">{icon}</div>}
      {text}
    </button>
  );
};
