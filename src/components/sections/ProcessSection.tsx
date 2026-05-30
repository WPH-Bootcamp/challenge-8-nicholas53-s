import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { processSteps } from '../../data/process';
import type { ProcessStep } from '../../types';

export function ProcessSection() {
  // null = tidak ada yang terbuka. number = ID step yang terbuka.
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id='process' className='py-16 md:py-24'>
      <div className='container-page max-w-300 mx-auto px-5 md:px-8'>
        <SectionHeader
          title='Our Process'
          subtitle='Clear steps. Smart execution. Results you can count on.'
        />

        {/* Container untuk timeline + accordion items */}
        <div className='relative mt-12 max-w-4xl mx-auto'>
          {/* Garis vertical timeline (hanya di desktop) */}
          <div
            aria-hidden='true'
            className='hidden lg:block absolute  left-1/2 top-0 bottom-0 w-px bg-border-light dark:bg-border-dark -translate-x-1/2 '
          />

          <div
            aria-hidden='true'
            className='lg:hidden absolute left-4.5 top-0 bottom-0 w-px bg-border-light dark:bg-border-dark -translate-x-1/2'
          />

          <ul className='space-y-4 lg:space-y-6'>
            {processSteps.map((step, index) => {
              // Even index (0, 2, 4) → step di kiri
              // Odd index (1, 3, 5) → step di kanan
              const isLeft = index % 2 === 0;

              return (
                <ProcessRow
                  key={step.number}
                  step={step}
                  isLeft={isLeft}
                  isOpen={openId === step.number}
                  onToggle={() => toggle(step.number)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

interface ProcessRowProps {
  step: ProcessStep;
  isLeft: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

function ProcessRow({ step, isLeft, isOpen, onToggle }: ProcessRowProps) {
  const card = (
    <button
      type='button'
      onClick={onToggle}
      aria-expanded={isOpen}
      className={[
        'w-full text-left',
        'bg-surface-light dark:bg-surface-dark',
        'border border-border-light dark:border-border-dark',
        'rounded-2xl p-4 md:p-5',
        'transition-all hover:border-brand/40',
        'flex items-start justify-between gap-3',
      ].join(' ')}
    >
      <div className='flex-1 min-w-0'>
        <div className='font-semibold  md:text-base text-xl text-text-light dark:text-text-dark'>
          {step.title}
        </div>

        {isOpen && (
          <div className='mt-1 text-sm md:text-md text-muted-light dark: text-#A4A7AE dark:text-sm'>
            {step.description}
          </div>
        )}
      </div>

      {/* Icon yang rotate saat expand */}
      <ChevronDown
        size={18}
        className={[
          'shrink-0 text-muted-light dark:text-muted-dark',
          'transition-transform duration-200',
          isOpen ? 'rotate-180' : 'rotate-0',
        ].join(' ')}
      />
    </button>
  );

  // Number badge
  const badge = (
    <div className='flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-brand text-white font-bold text-sm shadow-lg shadow-brand/30'>
      {step.number}
    </div>
  );

  return (
    <li>
      {/* Mobile layout: badge + card side by side */}
      <div className='lg:hidden flex items-start gap-3 relative z-10 shrink-0'>
        {badge}
        <div className='flex-1'>{card}</div>
      </div>

      {/* Desktop layout: grid 3 kolom dengan zigzag */}
      <div className='hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-6'>
        {/* Left slot */}
        <div>{isLeft && card}</div>

        {/* Center: badge — tanpa background ring, garis lewat di belakang */}
        <div className='relative z-10'>{badge}</div>

        {/* Right slot */}
        <div>{!isLeft && card}</div>
      </div>
    </li>
  );
}
