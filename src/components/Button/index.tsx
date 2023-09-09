import { CircleNotch } from 'phosphor-react-sc';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  (
    | {
        isProcessing: true;
        disabled?: undefined;
      }
    | {
        isProcessing?: undefined | false;
        disabled?: boolean;
      }
  ) & {
    children: string;
    icon?: React.ReactElement;
  };
export const Button = ({
  children,
  icon,
  className,
  disabled,
  isProcessing,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex h-10 w-full items-center justify-center rounded-md bg-blue-500 p-2 font-bold [&:not([data-isProcessing="true"])]:hover:bg-component-bg [&:not([data-isProcessing="true"])]:hover:text-blue-500 [&[data-isProcessing="true"]]:cursor-wait [&[data-isProcessing="true"]]:opacity-70',
        className,
      )}
      data-isProcessing={isProcessing}
      disabled={isProcessing || disabled}
      {...props}
    >
      {isProcessing ? (
        <CircleNotch
          weight="bold"
          className="h-[1em] w-[1em] animate-[spin_850ms_ease-out_infinite]"
        />
      ) : (
        <>
          {icon && <div className="mr-2">{icon}</div>}
          {children}
        </>
      )}
    </button>
  );
};
