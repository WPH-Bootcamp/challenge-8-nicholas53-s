import { Logo } from '../ui/Logo';
import { navItems, socialLinks } from '../../data/navigation';

type IconProps = { size?: number };

function FacebookIcon({ size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'
    >
      <path d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z' />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'
    >
      <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17V10H6v7h2.34zM7.17 8.93a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72zM18 17v-3.86c0-2.16-1.17-3.17-2.73-3.17a2.36 2.36 0 0 0-2.13 1.17V10h-2.34v7h2.34v-3.91c0-1.03.2-2.03 1.48-2.03 1.26 0 1.27 1.18 1.27 2.1V17H18z' />
    </svg>
  );
}

function TikTokIcon({ size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'
    >
      <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z' />
    </svg>
  );
}

const iconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  tiktok: TikTokIcon,
} as const;

export function Footer() {
  return (
    <footer className='py-12 md:py-16'>
      <div className='max-w-[1200px] mx-auto px-5 md:px-8'>
        <div className='bg-surface-light dark:bg-surface-dark rounded-3xl p-8 md:p-12'>
          {/* Top row */}
          <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-6'>
            <h2 className='font-display text-2xl md:text-3xl lg:text-4xl font-bold text-text-light dark:text-text-dark leading-tight'>
              LET'S DISCUSS
              <br />
              YOUR IDEAS
            </h2>
            <Logo />
          </div>

          <hr className='my-8 border-border-light dark:border-border-dark' />

          {/* Bottom row */}
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
            <ul className='flex flex-wrap gap-x-6 gap-y-2'>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className='text-sm text-text-light dark:text-text-dark hover:text-brand transition-colors'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className='flex items-center gap-3'>
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <li key={link.icon}>
                    <a
                      href={link.href}
                      aria-label={link.label}
                      className='inline-flex items-center justify-center w-9 h-9 rounded-full border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-brand hover:text-white hover:border-brand transition-colors'
                    >
                      <Icon size={16} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
