import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '../ui/Button';
import { faqs } from '../../data/faqs';
import Consultation from '../../Assets/Lets talk/Consultation.svg';

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(faqs[0].id);
  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id='faq' className='py-16 md:py-24'>
      <div className='container-page max-w-300 mx-auto px-5 md:px-8'>
        <div className='lg:grid lg:grid-cols-[1fr_320px] lg:gap-x-12'>
          <div>
            <h2 className='font-display text-2xl md:text-3xl lg:text-4xl font-bold text-text-light dark:text-text-dark'>
              Need Help? Start
              <br />
              Here.
            </h2>

            <p className='mt-3 text-sm text-muted-light dark:text-muted-dark lg:hidden'>
              Everything you need to know — all in one place.
            </p>
          </div>

          <div className='hidden lg:flex items-end'>
            <p className='text-sm text-muted-light dark:text-muted-dark'>
              Everything you need to know — all in one place.
            </p>
          </div>
        </div>

        <div className='mt-8 border-t border-white/10' />

        <div className='lg:grid lg:grid-cols-[1fr_320px] lg:gap-x-12 items-start'>
          <ul className='divide-y divide-white/10'>
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <li key={faq.id}>
                  <button
                    type='button'
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    className='w-full py-5 flex items-start justify-between gap-4 text-left'
                  >
                    <span className='font-semibold text-sm md:text-base text-text-light dark:text-text-dark'>
                      {faq.question}
                    </span>
                    <span className='flex-shrink-0 text-text-light dark:text-text-dark'>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <p className='pb-5 text-sm text-muted-light dark:text-muted-dark'>
                      {faq.answer}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>

          <aside className='mt-8 lg:mt-5 bg-brand rounded-2xl p-6 text-white'>
            <h3 className='font-display text-xl md:text-2xl font-bold'>
              Let's talk it
              <br />
              through
            </h3>
            <p className='mt-2 text-sm text-white/90'>
              book a free consultation with our team.
            </p>

            <div className='mt-5 overflow-hidden rounded-xl aspect-video'>
              <img
                src={Consultation}
                alt='Team in meeting'
                loading='lazy'
                className='w-full h-full object-cover'
              />
            </div>

            <Button
              variant='secondary'
              size='md'
              className='mt-5 w-full font-bold!'
              onClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Free Consultation
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
}
