import React from 'react';

interface ButtonProps {
  text: string;
  icon?: React.ReactElement;
}
export const Button = ({ text, icon }: ButtonProps) => {
  return (
    <button className=" flex h-10 w-80 items-center justify-center rounded-md bg-jdg-500 p-2 font-bold text-jdg-text hover:bg-jdg-component-bg hover:text-jdg-500">
      {icon && <div className="mr-2">{icon}</div>}
      {text}
    </button>
  );
};
