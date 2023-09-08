import classNames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  textCentered?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, icon, className, textCentered, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          'flex h-10 w-full items-center justify-center rounded-md bg-component-bg focus-within:ring focus-within:ring-blue-500',
          className,
        )}
      >
        <label className="flex ">
          {icon && (
            <i className="flex w-8 items-center justify-center text-blue-500">
              {icon}
            </i>
          )}
        </label>
        <input
          {...props}
          className={classNames(
            'w-full bg-transparent p-2 text-text-black outline-none placeholder:text-text-black/60 focus:outline-none',
            { 'text-center': textCentered },
          )}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
