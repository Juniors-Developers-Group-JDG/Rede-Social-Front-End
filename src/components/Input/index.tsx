import React from 'react';

interface InputProps {
  icon?: React.ReactElement;
  placeholder: string;
}

export const Input = ({ placeholder, icon }: InputProps) => {
  return (
    <div className="my-3 flex items-center justify-center ">
      <label className="flex ">
        {icon && (
          <i className="flex h-10 w-8 items-center justify-center rounded-l-md bg-jdg-component-bg text-jdg-500">
            {icon}
          </i>
        )}
      </label>
      <input
        className=" h-10 w-72 rounded-r-md bg-jdg-component-bg p-2 outline-none placeholder:text-left focus:outline-none focus:ring focus:ring-jdg-500 "
        placeholder={placeholder}
      />
    </div>
  );
};
