import { SectionHeader } from '../ui/SectionHeader';
import { services } from '../../data/services';

export function ServicesSection() {
  return (
    <section id='services' className='py-16 md:py-24'>
      <div className='container-page max-w-[1200px] mx-auto px-5 md:px-8'>
        <SectionHeader
          title='Smart IT Solutions That Grow With You'
          subtitle='Tailored tech to boost efficiency, security, and results.'
        />

        <div className='mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {services.map((service) => (
            <article
              key={service.id}
              className={[
                'bg-surface-light dark:bg-surface-dark',
                'border border-border-light dark:border-border-dark',
                'rounded-2xl p-5 md:p-6',
                'transition-all duration-200',
                'hover:border-brand/40 hover:-translate-y-1',
              ].join(' ')}
            >
              <img
                src={service.iconSrc}
                alt={service.title}
                className='w-16 h-16 object-contain mb-4'
              />

              <h3 className='font-display font-semibold text-base md:text-lg text-text-light dark:text-text-dark'>
                {service.title}
              </h3>
              <p className='mt-2 text-sm text-muted-light dark: text-#A4A7AE dark:text-base leading-relaxed'>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
