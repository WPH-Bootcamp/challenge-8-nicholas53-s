import { SectionHeader } from '../ui/SectionHeader';
import { stats } from '../../data/stats';

export function StatsSection() {
  return (
    <section id='about' className='py-16 md:py-24'>
      <div className='container-page max-w-[1200px] mx-auto px-5 md:px-8'>
        <SectionHeader
          title='End-to-End IT Solutions That Drive Results'
          subtitle='From strategy to execution, we deliver solutions that grow your business.'
        />

        {/* Grid: 2x2 di mobile, 4x1 di desktop */}
        <div className='mt-10 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={[
                'flex flex-col items-center justify-center',
                'aspect-square rounded-full',
                'bg-surface-light dark:bg-surface-dark',
                'border border-border-light dark:border-border-dark',
                'p-6 md:p-8',
                'transition-transform hover:scale-105',
              ].join(' ')}
            >
              <div className='font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand'>
                {stat.value}
              </div>
              <div className='mt-1 text-xs md:text-sm text-center text-muted-light dark:text-muted-dark'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
