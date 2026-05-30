import type { ButtonProps } from '../../types';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  // Base classes — selalu apply ke semua button
  const baseClasses = [
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-full',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' ');

  // Variant classes — beda per variant
  const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-brand text-white hover:bg-brand-hover',
    secondary:
      'bg-surface-dark text-text-dark hover:bg-border-dark ' +
      'dark:bg-surface-light dark:text-text-light dark:hover:bg-border-light',
    outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  };

  // Size classes
  const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .join(' ')
    .trim();

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
}
