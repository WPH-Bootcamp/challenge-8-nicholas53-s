import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;

  onClose: () => void;

  children: ReactNode;

  ariaLabel?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  ariaLabel,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      role='dialog'
      aria-modal='true'
      aria-label={ariaLabel}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm modal-fade-in'
    >
      <div className='w-full max-w-md modal-scale-in'>{children}</div>

      {/* Inline keyframes — opsional, hanya untuk polish */}
      <style>{`
        @keyframes modal-fade-in-kf {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modal-scale-in-kf {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .modal-fade-in  { animation: modal-fade-in-kf  0.2s ease-out; }
        .modal-scale-in { animation: modal-scale-in-kf 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>,
    document.body
  );
}
