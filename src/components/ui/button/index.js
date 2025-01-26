import { cva } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
  'inline-flex select-none items-center justify-center whitespace-nowrap rounded-sm font-medium disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-brand-3 text-shade-8 hover:bg-brand-2',
        secondary: 'bg-shade-6 text-shade-2 hover:bg-shade-5',
        outline: 'border text-shade-2 hover:bg-shade-7',
        ghost: 'text-shade-2 hover:bg-shade-7',
      },
      size: {
        default: 'h-8 px-2.5 py-2',
        icon: 'size-8 shrink-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
