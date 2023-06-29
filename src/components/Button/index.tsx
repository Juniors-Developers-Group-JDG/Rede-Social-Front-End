import React from 'react';

interface ButtonProps {
  children: string;
  icon?: React.ReactElement;
}
export const Button = ({ children, icon }: ButtonProps) => {
  return (
    <button className="hover:children-blue-500 flex h-10 w-full items-center justify-center rounded-md bg-blue-500 p-2 font-bold hover:bg-component-bg">
      {icon && <div className="mr-2">{icon}</div>}
      {children}
    </button>
  );
};
