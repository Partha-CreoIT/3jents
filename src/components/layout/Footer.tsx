import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black/20 via-gold/10 to-black/30 backdrop-blur-md border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Logo, Company Name, and About Us */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo/logo.png"
                alt="3 Jokers Entertainment"
                width={80}
                height={80}
                className="h-20 w-auto"
              />
            </div>
            <div className="space-y-4 pl-4 md:pl-3">
              <h3 className="text-lg font-semibold text-white font-heading">About Us</h3>
              <p className="text-grey-light max-w-md font-body">
                A dynamic theater and film collective creating compelling stories through
                live performance and cinematic excellence. Dedicated to collaborative storytelling.
              </p>
            </div>
          </div>

          {/* Right Side - Follow Us Only */}
          <div className="space-y-6 pl-4 md:pl-90">
            {/* Social Media Links with Logos */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-white font-heading">Follow Us</h3>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://www.instagram.com/3jents/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-grey-light hover:text-gold transition-colors font-body group"
                  style={{ cursor: 'SystemMouseCursors.click' }}
                >
                  <Image
                    src="/icons/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/@3JENTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-grey-light hover:text-gold transition-colors font-body group"
                  style={{ cursor: 'SystemMouseCursors.click' }}
                >
                  <Image
                    src="/icons/youtube.png"
                    alt="YouTube"
                    width={24}
                    height={24}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://www.tiktok.com/@3jents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-grey-light hover:text-gold transition-colors font-body group"
                  style={{ cursor: 'SystemMouseCursors.click' }}
                >
                  <Image
                    src="/icons/tik_tok.png"
                    alt="TikTok"
                    width={24}
                    height={24}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
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
