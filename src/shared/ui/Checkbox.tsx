import { InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

export const Checkbox = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="checkbox"
      className={classNames(
        'h-5 w-5 cursor-pointer rounded border-gray-400 text-primary transition-colors focus:ring-primary',
        className,
      )}
      {...props}
    />
  );
});

Checkbox.displayName = 'Checkbox';
