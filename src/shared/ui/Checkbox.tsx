import { InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={classNames(
          'h-5 w-5 cursor-pointer rounded border-[#9CA3AF] text-[#2563EB] transition-colors focus:ring-[#2563EB]',
          className,
        )}
        {...props}
      />
    );
  },
);
Checkbox.displayName = 'Checkbox';
