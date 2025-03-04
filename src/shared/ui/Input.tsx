import { InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, fullWidth = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames(
          'rounded-md border border-[#E5E7EB] bg-white px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2563EB]',
          {
            'w-full': fullWidth,
          },
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
