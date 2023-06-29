import React from 'react';

interface InputProps {
  icon?: React.ReactElement;
  placeholder: string;
}

export const Input = ({ placeholder, icon }: InputProps) => {
  return (
    <div className="my-3 flex h-10 w-full items-center justify-center rounded-md bg-component-bg focus-within:ring focus-within:ring-blue-500">
      <label className="flex ">
        {icon && (
          <i className="flex w-8 items-center justify-center text-blue-500">
            {icon}
          </i>
        )}
      </label>
      <input
        className="w-full bg-transparent p-2 text-text-black outline-none placeholder:text-text-black/60 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
