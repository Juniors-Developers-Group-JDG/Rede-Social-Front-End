import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: React.ReactElement;
}

export const Input = ({
  placeholder,
  icon,
  className,
  ...props
}: InputProps) => {
  return (
    <div className="flex h-10 w-full items-center justify-center rounded-md bg-component-bg focus-within:ring focus-within:ring-blue-500">
      <label className="flex ">
        {icon && (
          <i className="flex w-8 items-center justify-center text-blue-500">
            {icon}
          </i>
        )}
      </label>
      <input
        {...props}
        className={twMerge(
          'w-full bg-transparent p-2 text-text-black outline-none placeholder:text-text-black/60 focus:outline-none',
          className,
        )}
        placeholder={placeholder}
      />
    </div>
  );
};
