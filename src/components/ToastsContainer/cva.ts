import { cva } from 'class-variance-authority';

export const toastCva = cva(
  'max-w-[21rem] w-[21rem] flex items-center py-[0.875rem] text-text-black px-[1.375rem] rounded-md ToastRoot',
  {
    variants: {
      type: {
        info: 'bg-blue-100',
        success: 'bg-success-100',
        error: 'bg-danger-100',
      },
    },
  },
);

export const toastButtonCva = cva('p-1 rounded border-2 leading-none w-fit', {
  variants: {
    type: {
      info: 'border-blue-400 hover:bg-blue-200/25',
      success: 'border-success-400 hover:bg-success-200/hover:bg-blue-200/25',
      error: 'border-danger-400 hover:bg-danger-200/hover:bg-blue-200/25',
    },
  },
});
