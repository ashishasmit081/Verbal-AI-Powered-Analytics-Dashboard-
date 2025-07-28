
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'default',
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-800";

  const variantClasses = {
    default: 'bg-primary-600 text-white hover:bg-primary-600/90',
    destructive: 'bg-red-500 text-white hover:bg-red-500/90',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-dark-border dark:hover:text-gray-50',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-200/80 dark:bg-dark-border dark:text-gray-50 dark:hover:bg-dark-border/80',
    ghost: 'hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-dark-border dark:hover:text-gray-50',
    link: 'text-primary-600 underline-offset-4 hover:underline dark:text-primary-400',
  };

  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
      {...props}
    />
  );
};
