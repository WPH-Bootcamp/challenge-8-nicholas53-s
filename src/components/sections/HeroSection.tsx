import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/Button';

import heroLightImg from '../../assets/Herosection/Property-Light.svg';
import heroDarkImg from '../../assets/Herosection/Property-Dark.svg';

export function HeroSection() {
  const { theme } = useTheme();
  const heroImg = theme === 'dark' ? heroDarkImg : heroLightImg;

  return (
    <section id='home' className='bg-bg-light dark:bg-bg-dark'>
      <div className='lg:hidden'>
        <div className='px-5 pt-28 pb-8 md:pl-35 md:w-163.25'>
          <h1 className='font-display text-[36px] md:text-3xl font-bold font- leading-tight text-text-light dark:text-text-dark'>
            Your Tech Partner for
            <br />
            <span className='text-brand'>Smarter Growth</span>
          </h1>

          <p className='text-[16px] md:text-[20px] mt-4 text-base md:w-163.25 text-muted-light dark:text-muted-dark'>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <div className='mt-6'>
            <Button
              variant='primary'
              size='lg'
              className='w-full justify-center H-[44px]'
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Let's Talk
            </Button>
          </div>
        </div>

        <div className='w-full aspect-square overflow-hidden'>
          <img
            src={heroImg}
            alt='Tech illustration'
            className='w-full h-full object-cover object-top'
            draggable={false}
          />
        </div>
      </div>

      <div className='hidden lg:block relative overflow-hidden min-h-170'>
        <img
          src={heroImg}
          alt=''
          aria-hidden='true'
          className='absolute top-0 right-0 h-full w-auto z-0 select-none pointer-events-none'
          draggable={false}
        />

        <div className='relative z-10 max-w-300 mx-auto px-8 pt-40 pb-28 flex items-center min-h-170'>
          <div className='max-w-lg'>
            <h1 className='font-display text-4xl lg:text-5xl font-bold leading-tight text-text-light dark:text-text-dark'>
              Your Tech Partner for
              <br />
              <span className='text-brand'>Smarter Growth</span>
            </h1>

            <p className='mt-5 text-lg text-muted-light dark:text-muted-dark max-w-md'>
              We deliver tailored IT solutions to help you scale with speed and
              confidence.
            </p>

            <div className='mt-8'>
              <Button
                variant='primary'
                size='lg'
                className='w-50 h-12'
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
