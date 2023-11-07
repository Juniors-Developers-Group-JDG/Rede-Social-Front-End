import classNames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  textCentered?: boolean;
  wrapperProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> & {
    [key: `data-${string}`]: unknown;
  };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, icon, className, textCentered, wrapperProps, ...props },
    ref,
  ) => {
    return (
      <div
        className={twMerge(
          'flex h-10 w-full items-center justify-center rounded-md border-2 border-transparent bg-component-bg focus-within:ring focus-within:ring-blue-500',
          className,
        )}
        {...wrapperProps}
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
