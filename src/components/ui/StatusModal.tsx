import Modal from './Modal';
import { Button } from './Button';

import successIcon from '../../Assets/PopUp/Success.svg';
import failedIcon from '../../Assets/PopUp/Failed.svg';

type StatusVariant = 'success' | 'error';

interface StatusModalProps {
  isOpen: boolean;
  variant: StatusVariant;
  onClose: () => void;
}

const CONFIG: Record<
  StatusVariant,
  {
    title: string;
    description: string;
    buttonLabel: string;
  }
> = {
  success: {
    title: 'Message Received!',
    description:
      "Thanks for reaching out — we'll get back to you as soon as possible.",
    buttonLabel: 'Back to Home',
  },
  error: {
    title: 'Oops! Something went wrong.',
    description:
      "We couldn't send your message. Please try again or check your connection.",
    buttonLabel: 'Try Again',
  },
};

export function StatusModal({ isOpen, variant, onClose }: StatusModalProps) {
  const config = CONFIG[variant];

  // Map variant ke file SVG yang sesuai
  const iconSrc = variant === 'success' ? successIcon : failedIcon;
  const iconAlt = variant === 'success' ? 'Success' : 'Failed';

  return (
    <Modal isOpen={isOpen} onClose={onClose} ariaLabel={config.title}>
      <div className='rounded-2xl overflow-hidden border border-border-light dark:border-border-dark shadow-2xl'>
        {/* Top section: icon dari Figma */}
        <div className='bg-surface-light dark:bg-surface-dark flex items-center justify-center py-10 px-6'>
          {/* GANTI: EnvelopeIcon diganti img dari asset Figma */}
          <img
            src={iconSrc}
            alt={iconAlt}
            className='w-28 h-28 object-contain'
          />
        </div>

        {/* Bottom section: text + action */}
        <div className='bg-bg-light dark:bg-bg-dark p-6 md:p-8 text-center'>
          <h3 className='font-display text-lg md:text-xl font-bold text-text-light dark:text-text-dark'>
            {config.title}
          </h3>
          <p className='mt-2 text-sm text-muted-light dark:text-muted-dark'>
            {config.description}
          </p>

          <Button
            variant='primary'
            size='lg'
            className='mt-6 w-full'
            onClick={onClose}
          >
            {config.buttonLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
