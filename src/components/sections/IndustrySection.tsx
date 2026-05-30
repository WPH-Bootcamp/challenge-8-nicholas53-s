import { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { industries } from '../../data/industries';

export function IndustrySection() {
  const [activeId, setActiveId] = useState(industries[0].id);

  const active = industries.find((item) => item.id === activeId)!;

  return (
    <section id='industry' className='py-16 md:py-24'>
      <div className='container-page max-w-300 mx-auto px-5 md:px-8'>
        <SectionHeader
          title='Built for Your Industry'
          subtitle="We've helped companies across industries launch smarter, faster, and more securely."
          align='left'
          className='max-w-3xl'
        />

        <div className='mt-10 grid md:grid-cols-[200px_1fr] gap-8 md:gap-12'>
          <div
            role='tablist'
            aria-label='Industries'
            className='flex flex-col gap-2'
          >
            {industries.map((industry) => {
              const isActive = industry.id === activeId;
              return (
                <button
                  key={industry.id}
                  type='button'
                  role='tab'
                  aria-selected={isActive}
                  onClick={() => setActiveId(industry.id)}
                  className={[
                    'text-left px-3 py-2 border-l-2 transition-all',
                    isActive
                      ? 'border-brand text-text-light dark:text-text-dark font-semibold'
                      : 'border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark',
                  ].join(' ')}
                >
                  {industry.label}
                </button>
              );
            })}
          </div>

          {/* Tab panel: description + image */}
          <div role='tabpanel' aria-labelledby={`tab-${active.id}`}>
            <p className='text-sm md:text-base text-text-light dark:text-text-dark leading-relaxed'>
              {active.description}
            </p>

            <div className='mt-6 overflow-hidden rounded-2xl'>
              <img
                src={active.image}
                alt={active.label}
                className='w-full h-64 md:h-80 object-cover'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
