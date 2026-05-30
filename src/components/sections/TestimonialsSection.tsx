import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { testimonials } from '../../data/testimonials';
import quoteIcon from '../../Assets/Testimonials/Quote.svg';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const n = testimonials.length;

  const getIdx = (offset: number) => (current + offset + n) % n;

  const next = () => {
    setDirection('left');
    setCurrent(getIdx(1));
  };
  const prev = () => {
    setDirection('right');
    setCurrent(getIdx(-1));
  };
  const goTo = (i: number) => {
    setDirection(i > current ? 'left' : 'right');
    setCurrent(i);
  };

  const arrowClass = `c
    shrink-0 w-10 h-10 rounded-full
    flex items-center justify-center
    bg-surface-light dark:bg-surface-dark
    border border-border-light dark:border-border-dark
    text-text-light dark:text-text-dark
    hover:border-brand hover:text-brand transition-colors duration-200
  `;

  return (
    <section id='testimonials' className='py-16 md:py-24 overflow-hidden'>
      <div className='container-page max-w-300 mx-auto px-5 md:px-8'>
        <SectionHeader
          title='What Partners Say About Working With Us'
          subtitle='Trusted voices. Real experiences. Proven results.'
        />
      </div>

      <div className='mt-10 md:mt-12 flex items-center justify-center gap-4 md:gap-6'>
        {/* Arrow kiri — desktop only */}
        <button
          onClick={prev}
          aria-label='Previous'
          className={`hidden md:flex ${arrowClass}`}
        >
          <ChevronLeft size={18} />
        </button>

        <div
          className='hidden md:block shrink-0 w-148 lg:w-100
            opacity-30 cursor-pointer hover:opacity-50 transition-opacity duration-200'
          onClick={prev}
          aria-hidden='true'
        >
          <TestimonialCard testimonial={testimonials[getIdx(-1)]} />
        </div>

        <div className='flex flex-col items-center w-full max-w-150 shrink-0 px-5 md:px-0'>
          <div
            key={current}
            className={`w-full ${
              direction === 'left'
                ? 'animate-slide-from-right'
                : 'animate-slide-from-left'
            }`}
          >
            <TestimonialCard testimonial={testimonials[current]} active />
          </div>

          {/* Dots — di bawah center card, seperti Figma */}
          <div className='flex items-center gap-2 mt-6'>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={[
                  'h-2 rounded-full transition-all duration-300',
                  i === current
                    ? 'w-6 bg-brand'
                    : 'w-2 bg-border-light dark:bg-border-dark',
                ].join(' ')}
              />
            ))}
          </div>

          {/* Arrows mobile — di bawah dots */}
          <div className='flex gap-4 mt-4 md:hidden'>
            <button onClick={prev} aria-label='Previous' className={arrowClass}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} aria-label='Next' className={arrowClass}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Side card kanan — dimmed */}
        <div
          className='hidden md:block shrink-0 w-85 lg:w-100
            opacity-30 cursor-pointer hover:opacity-50 transition-opacity duration-200'
          onClick={next}
          aria-hidden='true'
        >
          <TestimonialCard testimonial={testimonials[getIdx(1)]} />
        </div>

        {/* Arrow kanan — desktop only */}
        <button
          onClick={next}
          aria-label='Next'
          className={`hidden md:flex ${arrowClass}`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   TestimonialCard — sub-component
   ───────────────────────────────────────────────────────── */
function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
  active?: boolean;
}) {
  return (
    <div className='bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-6 md:p-8'>
      <div className='text-brand text-4xl font-bold leading-none mb-4 select-none'>
        <img src={quoteIcon} alt='' aria-hidden='true' className='relative' />
      </div>

      <div className='flex justify-center gap-1 mb-4'>
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <svg
            key={i}
            className='w-5 h-5 text-yellow-400 fill-current'
            viewBox='0 0 20 20'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>

      <p className='text-sm md:text-base text-text-light dark:text-text-dark text-center leading-relaxed mb-6'>
        "{testimonial.quote}"
      </p>

      <div className='flex flex-col items-center gap-3'>
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className='w-12 h-12 rounded-full object-cover'
        />
        <div className='text-center'>
          <p className='font-semibold text-sm text-text-light dark:text-text-dark'>
            {testimonial.name}
          </p>
          <p className='text-xs text-brand mt-0.5'>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
