import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'danger';
}

export function IconButton({
  children,
  className,
  variant = 'default',
  ...props
}: IconButtonProps) {
  return (
    <button
      className={classNames(
        'rounded-md p-1 transition-colors',
        {
          'text-[#9CA3AF] hover:bg-[#F3F4F6] hover:text-[#4B5563]':
            variant === 'default',
          'text-[#EF4444] hover:bg-[#FEE2E2] hover:text-[#DC2626]':
            variant === 'danger',
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
