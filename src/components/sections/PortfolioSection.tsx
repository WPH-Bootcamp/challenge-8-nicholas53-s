import { SectionHeader } from '../ui/SectionHeader';
import { portfolio } from '../../data/portfolio';

export function PortfolioSection() {
  return (
    <section id='projects' className='py-16 md:py-24'>
      <div className='container-page max-w-300 mx-auto px-5 md:px-8'>
        <SectionHeader
          title="From Vision to Launch! Projects We're Proud Of"
          subtitle='Take a closer look at our recent work powering startups, enterprises, and everything in between.'
        />

        <div className='mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
          {portfolio.map((item) => (
            <article key={item.id} className='group'>
              {/* Image container — overflow hidden untuk efek hover zoom */}
              <div className='overflow-hidden rounded-2xl aspect-4/3 bg-surface-light dark:bg-surface-dark md:w-93.25 md:h-93.25 w-90.25 h-90.25'>
                <img
                  src={item.image}
                  alt={item.title}
                  loading='lazy'
                  className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
                />
              </div>

              <div className='mt-4'>
                <div className='text-xs font-semibold text-brand uppercase tracking-wide'>
                  {item.category}
                </div>
                <h3 className='mt-1 font-display font-semibold text-base md:text-lg text-text-light dark:text-text-dark'>
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
