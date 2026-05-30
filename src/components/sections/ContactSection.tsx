import { useState, type FormEvent, type ChangeEvent } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { StatusModal } from '../ui/StatusModal';
import type { ContactFormData } from '../../types';

const SERVICE_OPTIONS = [
  'Web Development',
  'Cloud Solutions',
  'Mobile App Development',
  'Software Development',
  'UI/UX Design',
  'Other',
] as const;

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  message: '',
  services: [],
};

/** Type untuk status submission — state machine 4 nilai */
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<SubmitStatus>('idle');

  /** Generic change handler untuk text inputs */
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /** Toggle checkbox di array services */
  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('submitting');

    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.3) resolve();
          else reject(new Error('Simulated network error'));
        }, 1200);
      });

      // Log untuk debugging — bisa dihapus di production
      console.log('Form submitted:', formData);

      setStatus('success');
    } catch (err) {
      console.error('Submit failed:', err);
      setStatus('error');
    }
  };

  const handleSuccessClose = () => {
    setStatus('idle');
    setFormData(initialFormData);
  };

  const handleErrorClose = () => {
    setStatus('idle');
  };

  const isSubmitting = status === 'submitting';

  return (
    <section id='contact' className='py-16 md:py-24'>
      <div className='max-w-300 mx-auto px-5 md:px-8'>
        <SectionHeader
          title="Ready to Start? Let's Talk."
          subtitle="Tell us what you need, and we'll get back to you soon."
        />

        <form
          onSubmit={handleSubmit}
          className='mt-10 max-w-2xl mx-auto space-y-5'
        >
          {/* Name */}
          <div>
            <label
              htmlFor='contact-name'
              className='block text-sm font-medium text-text-light dark:text-text-dark mb-1.5'
            >
              Name
            </label>
            <input
              id='contact-name'
              name='name'
              type='text'
              required
              disabled={isSubmitting}
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Enter your name'
              className='w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-black text-text-light dark:text-text-dark placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors disabled:opacity-60'
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor='contact-email'
              className='block text-sm font-medium text-text-light dark:text-text-dark mb-1.5'
            >
              Email
            </label>
            <input
              id='contact-email'
              name='email'
              type='email'
              required
              disabled={isSubmitting}
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Enter your email'
              className='w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-black text-text-light dark:text-text-dark placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors disabled:opacity-60'
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor='contact-message'
              className='block text-sm font-medium text-text-light dark:text-text-dark mb-1.5'
            >
              Message
            </label>
            <textarea
              id='contact-message'
              name='message'
              required
              rows={4}
              disabled={isSubmitting}
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Enter your message'
              className='w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-black text-text-light dark:text-text-dark placeholder:text-muted-light/60 dark:placeholder:text-muted-dark/60 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors resize-none disabled:opacity-60'
            />
          </div>

          {/* Services */}
          <fieldset disabled={isSubmitting} className='disabled:opacity-60'>
            <legend className='block text-sm font-medium text-text-light dark:text-text-dark mb-2 pb-3.5'>
              Services
            </legend>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              {SERVICE_OPTIONS.map((service) => {
                const checked = formData.services.includes(service);
                return (
                  <label
                    key={service}
                    className='flex items-center gap-3.5 pb-3.5 cursor-pointer text-sm text-text-light dark:text-text-dark'
                  >
                    <input
                      type='checkbox'
                      checked={checked}
                      onChange={() => toggleService(service)}
                      className='sr-only'
                    />
                    <span
                      aria-hidden='true'
                      className={[
                        'inline-flex items-center justify-center w-4 h-4 rounded border-2 transition-colors',
                        checked
                          ? 'bg-brand border-brand'
                          : 'border-border-light dark:border-border-dark',
                      ].join(' ')}
                    >
                      {checked && (
                        <svg
                          width='8'
                          height='8'
                          viewBox='0 0 10 10'
                          fill='none'
                        >
                          <path
                            d='M1 5L4 8L9 2'
                            stroke='white'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      )}
                    </span>
                    {service}
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Submit */}
          <Button
            type='submit'
            variant='primary'
            size='lg'
            className='w-full'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </div>

      <StatusModal
        isOpen={status === 'success'}
        variant='success'
        onClose={handleSuccessClose}
      />
      <StatusModal
        isOpen={status === 'error'}
        variant='error'
        onClose={handleErrorClose}
      />
    </section>
  );
}
