'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ContactForm from './ContactForm';

interface ContactDialogProps {
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

export default function ContactDialog({ children, onClick, title = "Get In Touch" }: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleClick = () => {
    console.log('ContactDialog clicked, opening dialog...');
    onClick?.();
    setOpen(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    handleClick();
  };

  const handleMouseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <>
      <div 
        onClick={handleMouseClick}
        onTouchEnd={handleTouchEnd}
        className="cursor-pointer"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {children}
      </div>

      {mounted && open && createPortal(
        <div key="contact-dialog" className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={() => setOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-black/95 border border-gold/20 rounded-lg p-6 w-full max-w-md mx-4 backdrop-blur-xl shadow-2xl z-[9999]">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer absolute top-4 right-4 text-white hover:text-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gold">
                {title}
              </h2>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
