import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={classNames('rounded-lg bg-white p-4 shadow-sm', className)}
      {...props}
    >
      {children}
    </div>
  );
}
