import { brands } from '../../data/brands';

export const BrandsSection = () => {
  const loop = [...brands, ...brands];

  return (
    <section
      className='py-12 bg-surface overflow-hidden h-59 w-max-360'
      aria-label='Trusted brands'
    >
      <div className='container mx-auto px-4 mb-8'>
        <p className='text-center text-[16px] md:text-[24px] tracking-wider text-muted font-bold'>
          Trusted by Global Innovators & Leading Brands
        </p>
      </div>

      <div
        className='relative
          mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pt-9'
      >
        <div
          className='flex w-max gap-12 animate-marquee
            hover:[animation-play-state:paused]
            motion-reduce:animate-none'
        >
          {loop.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className='shrink-0 flex items-center'
              aria-hidden={i >= brands.length ? true : undefined}
            >
              <img
                src={brand.logoSrc}
                alt={brand.name}
                className='h-8 w-auto
                brightness-0 opacity-50 hover:opacity-80
                dark:invert dark:brightness-0 dark:opacity-60 dark:hover:opacity-90
                transition-opacity duration-200'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
