import type { ButtonProps } from '../../types';

/**
 * ============================================================================
 * Button Component
 * ============================================================================
 *
 * Reusable button dengan 3 variant dan 3 size.
 *
 * Pattern: "Variant + Compound Class"
 * - Base class = style yang sama untuk semua variant (display, font, transition)
 * - Variant class = style spesifik per variant (warna, border)
 * - Size class = style spesifik per ukuran (padding, font-size)
 *
 * Kenapa pattern ini? Supaya consistent dan mudah maintain.
 * Kalau mau ubah radius semua button, edit di SATU tempat (baseClasses).
 * ============================================================================
 */

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest // semua prop button HTML standard (onClick, type, disabled, dll)
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
      'bg-surface-light text-text-light hover:bg-border-light ' +
      'dark:bg-surface-dark dark:text-text-dark dark:hover:bg-border-dark',
    outline:
      'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  };

  // Size classes
  const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  // Gabungkan semua class jadi satu string.
  // Trim untuk hilangkan whitespace berlebih.
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className, // user-provided class TERAKHIR supaya bisa override
  ].join(' ').trim();

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
}
