import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string;
  icon?: React.ReactElement;
}
export const Button = ({
  children,
  icon,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex h-10 w-full items-center justify-center rounded-md bg-blue-500 p-2 font-bold hover:bg-component-bg hover:text-blue-500',
        className,
      )}
      {...props}
    >
      {icon && <div className="mr-2">{icon}</div>}
      {children}
    </button>
  );
};
