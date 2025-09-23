import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/forms/ContactForm';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo/logo.png"
                  alt="3 Jokers Entertainment"
                  width={80}
                  height={80}
                  className="h-28 w-auto"
                />
                <span className="text-3xl font-bold text-gold hover:text-gold-light transition-colors font-heading">
                  3 Jokers Entertainment
                </span>
              </Link>
            </div>
            <p className="text-grey-light max-w-md font-body">
              A dynamic theater and film collective creating compelling stories through
              live performance and cinematic excellence. Dedicated to collaborative storytelling.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/3jents/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-light hover:text-gold transition-colors font-body"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@3JENTS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-light hover:text-gold transition-colors font-body"
              >
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@3jents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-light hover:text-gold transition-colors font-body"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-grey-dark">
          <p className="text-grey text-center">
            © {new Date().getFullYear()} 3JE Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
