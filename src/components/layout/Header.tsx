'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useScrollHighlight } from '@/hooks/useScrollHighlight';

const navigation = [
  { name: 'Home', href: '/', sectionId: 'home' },
  { name: 'Past Work', href: '/#work', sectionId: 'work' },
  { name: 'Our Story', href: '/#about', sectionId: 'about' },
  { name: 'Services', href: '/#services', sectionId: 'services' },
];

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/3jents/', iconPath: '/icons/instagram.png' },
  { name: 'YouTube', href: 'https://www.youtube.com/@3JENTS', iconPath: '/icons/youtube.png' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@3jents', iconPath: '/icons/tik_tok.png' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollHighlight();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string | null) => {
    if (sectionId) {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    closeMobileMenu();
  };

  return (
    <>
      <header className="fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-xl border border-gold/20 rounded-full px-3 md:px-6 py-2 shadow-2xl w-[95%] md:w-auto">
        <div className="flex justify-between items-center space-x-2 md:space-x-8">
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="/logo/logo.png"
              alt="3 Jokers Entertainment"
              width={160}
              height={60}
              className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          {navigation.map((item) => (
            item.sectionId ? (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.sectionId)}
                className={`cursor-pointer transition-colors font-medium text-sm ${
                  activeSection === item.sectionId
                    ? 'text-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors font-medium text-sm ${
                  pathname === item.href
                    ? 'text-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center space-x-1 md:space-x-3">
          <div className="hidden sm:flex items-center space-x-1 md:space-x-3">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-gold/10 rounded-full h-8 w-8 p-1"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <Image
                    src={social.iconPath}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-5 md:h-5 object-contain"
                  />
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-gold hover:bg-gold/10 rounded-full h-8 w-8"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </Button>
        </div>
      </div>
      </header>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm bg-black/90 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 shadow-2xl">
            {/* Navigation Links */}
            <nav className="space-y-4 mb-6">
              {navigation.map((item) => (
                item.sectionId ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.sectionId)}
                    className={`cursor-pointer block py-3 px-4 rounded-lg text-lg font-medium transition-colors w-full text-left ${
                      activeSection === item.sectionId
                        ? 'text-gold bg-gold/10'
                        : 'text-white hover:text-gold hover:bg-gold/10'
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-gold bg-gold/10'
                        : 'text-white hover:text-gold hover:bg-gold/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
            
            {/* Social Links */}
            <div className="pt-4 border-t border-gold/20">
              <p className="text-grey-light text-sm mb-3">Follow us</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-gold/10 rounded-full h-10 w-10 p-2"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Image
                        src={social.iconPath}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
