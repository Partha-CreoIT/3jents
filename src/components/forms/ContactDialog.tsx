'use client';

import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

interface ContactDialogProps {
  children: React.ReactNode;
}

export default function ContactDialog({ children }: ContactDialogProps) {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <div onClick={() => setOpen(true)}>
        {children}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-black/95 border border-gold/20 rounded-lg p-6 w-full max-w-md mx-4 backdrop-blur-xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gold">
                Get In Touch
              </h2>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
