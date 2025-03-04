import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  children,
  className,
  fullWidth = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'rounded-md px-4 py-2 font-medium transition-colors',
        {
          'bg-primary hover:bg-primary-hover text-white': variant === 'primary',
          'bg-secondary hover:bg-secondary-hover text-gray-800':
            variant === 'secondary',
          'bg-danger hover:bg-danger-hover text-white': variant === 'danger',
          'bg-transparent text-gray-800 hover:bg-gray-100': variant === 'ghost',
          'cursor-not-allowed opacity-50': disabled,
          'w-full': fullWidth,
        },
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
