import logoSvg from '../../Assets/logo/logo-symbol.svg';

export const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <img src={logoSvg} alt='Your Logo' className='h-8 w-auto' />
      <span className='font-bold text-base md:text-lg text-text-light dark:text-text-dark'>
        Your Logo
      </span>
    </div>
  );
};
