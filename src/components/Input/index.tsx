import React from 'react';

interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'className'
  > {
  icon?: React.ReactElement;
}

export const Input = ({ placeholder, icon, ...props }: InputProps) => {
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
        className="w-full bg-transparent p-2 text-text-black outline-none placeholder:text-text-black/60 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
