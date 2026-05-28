import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className='font-display text-2xl md:text-3xl lg:text-4xl font-bold text-text-light dark:text-text-dark'>
        {title}
      </h2>
      {subtitle && (
        <p
          className={[
            'mt-3 text-sm md:text-base text-muted-light dark:text-muted-dark max-w-2xl',
            align === 'center' ? 'mx-auto' : '',
          ].join(' ')}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
