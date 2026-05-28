import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { navItems } from '../../data/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        isScrolled
          ? 'bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className='container-page max-w-300 mx-auto px-5 md:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20 md: gap-5'>
          {/* Left: Logo */}
          <a href='#home' aria-label='Go to homepage'>
            <Logo />
          </a>

          {/* Center: Desktop Nav Links (hidden di mobile/tablet) */}
          <div className='hidden lg:flex items-center justify-between gap-8 max-w-124'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='text-sm font-medium text-text-light dark:text-text-dark hover:text-brand transition-colors'
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: Actions */}
          <div className='flex items-center gap-2 md:gap-3'>
            <ThemeToggle />

            <div className='hidden lg:block'>
              <Button
                variant='primary'
                size='sm'
                className='w-49.25'
                onClick={() => {
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Talk
              </Button>
            </div>

            {/* Hamburger — hanya tampil di mobile/tablet */}
            <button
              type='button'
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className='lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-text-light dark:text-text-dark'
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          Mobile Menu Overlay
          ============================================================ */}
      {isMenuOpen && (
        <div className='lg:hidden absolute top-full left-0 right-0 bg-bg-light dark:bg-bg-dark border-t border-border-light dark:border-border-dark'>
          <div className='px-5 py-6 space-y-1'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className='block px-4 py-3 rounded-lg text-base font-medium text-text-light dark:text-text-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors'
              >
                {item.label}
              </a>
            ))}

            <div className='pt-3'>
              <Button
                variant='primary'
                size='md'
                className='w-full'
                onClick={() => {
                  closeMenu();
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
