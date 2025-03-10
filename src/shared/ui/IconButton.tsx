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
          'text-gray-400 hover:bg-gray-100 hover:text-gray-600':
            variant === 'default',
          'text-danger hover:bg-[#FEE2E2] hover:text-danger-hover':
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
