'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useScrollHighlight } from '@/hooks/useScrollHighlight';

const navigation = [
  { name: 'Home', href: '/', sectionId: 'home' },
  { name: 'Past Work', href: '/#work', sectionId: 'work' },
  { name: 'Our Story', href: '/#about', sectionId: 'about' },
  { name: 'Services', href: '/#services', sectionId: 'services', hasDropdown: true, dropdownItems: [
    { name: 'Photography', href: '/services/photography' },
    { name: 'Production Services', href: '/services/production' }
  ]},
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Meet Us', href: '/#founders', sectionId: 'founders' },
  { name: 'Press', href: 'https://www.broadwayworld.com/off-off-broadway/article/-YOU-CANT-SPELL-ASSAULT-WITHOUT-US-to-Premiere-at-NYC-Fringe-20250302', external: true },
];

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/3jents/', iconPath: '/icons/instagram.png' },
  { name: 'YouTube', href: 'https://www.youtube.com/@3JENTS', iconPath: '/icons/youtube.png' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@3jents', iconPath: '/icons/tik_tok.png' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const activeSection = useScrollHighlight();

  // Check if we're on a service page
  const isServicePage = pathname === '/services/photography' || pathname === '/services/production';

  // Filter navigation based on current page
  const filteredNavigation = isServicePage
    ? [
        { name: 'Home', href: '/', sectionId: 'home' },
        { name: 'Photography', href: '/services/photography' },
        { name: 'Production Services', href: '/services/production' }
      ]
    : navigation;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string | null, href?: string) => {
    if (sectionId) {
      if (sectionId === 'home') {
        // Navigate to home page and scroll to top
        router.push('/');
        // Also close any open menus
        setActiveDropdown(null);
        closeMobileMenu();
        return;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    // Close mobile menu for any navigation click
    closeMobileMenu();
  };

  return (
    <>
      <header className="fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 
  bg-black/85 backdrop-blur-xl border border-gold/20 rounded-full 
  px-6 md:px-10 py-2 shadow-2xl w-[98%] md:w-auto max-w-6xl">
  
  <div className="flex items-center justify-between w-full space-x-4 md:space-x-8">
    
    {/* Logo */}
    <div className="flex items-center flex-shrink-0">
      <Link href="/" className="block">
        <Image
          src="/logo/logo.png"
          alt="3 Jokers Entertainment"
          width={140}
          height={60}
          className="h-10 md:h-12 w-auto hover:opacity-80 transition-opacity"
        />
      </Link>
    </div>

    {/* Navigation */}
    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
      {filteredNavigation.map((item) => (
        <div key={item.name} className="relative flex items-center">
          {item.sectionId ? (
            <button
              onClick={() => handleNavClick(item.sectionId)}
              onMouseEnter={() => item.hasDropdown && !isServicePage && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
              className={`cursor-pointer transition-colors font-medium text-[15px] px-3 py-1.5 rounded-lg whitespace-nowrap ${
                activeSection === item.sectionId
                  ? 'text-gold bg-gold/10'
                  : 'text-white hover:text-gold hover:bg-gold/5'
              }`}
            >
              {item.name}
              {item.hasDropdown && !isServicePage && (
                <svg className="inline w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          ) : (
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onMouseEnter={() => item.hasDropdown && !isServicePage && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
              className={`!cursor-pointer transition-colors font-medium text-[15px] px-3 py-1.5 rounded-lg whitespace-nowrap ${
                pathname === item.href || (isServicePage && (item.name === 'Photography' || item.name === 'Production Services'))
                  ? 'text-gold bg-gold/10'
                  : 'text-white hover:text-gold hover:bg-gold/5'
              }`}
            >
              {item.name}
              {item.hasDropdown && !isServicePage && (
                <svg className="inline w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
          )}

          {/* Dropdown Menu */}
          {item.hasDropdown && activeDropdown === item.name && !isServicePage && (
            <div
              className="absolute top-full left-0 mt-1 w-48 bg-black/90 backdrop-blur-xl border border-gold/20 rounded-md shadow-xl z-50"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdownItems?.map((dropdownItem) => (
                <Link
                  key={dropdownItem.name}
                  href={dropdownItem.href}
                  className="block px-4 py-2 text-sm text-white hover:text-gold hover:bg-gold/10 transition-colors"
                >
                  {dropdownItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>

    {/* Social Links */}
    <div className="flex items-center space-x-2 md:space-x-3">
      <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-gold/10 rounded-full h-8 w-8 p-1 flex items-center justify-center"
          >
            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              <Image
                src={social.iconPath}
                alt={social.name}
                width={18}
                height={18}
                className="object-contain"
              />
            </a>
          </Button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMobileMenu}
        className="lg:hidden text-white hover:text-gold hover:bg-gold/10 rounded-full h-8 w-8 flex items-center justify-center"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </Button>
    </div>
  </div>
</header>

      {/* Mobile Menu Bottom Sheet */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          {/* Bottom Sheet */}
          <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-gold/20 rounded-t-xl shadow-2xl transform transition-transform duration-300 ease-out">
            {/* Handle */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-12 h-1.5 bg-gold/30 rounded-full"></div>
            </div>

            {/* Navigation Links */}
            <nav className="px-6 pb-6 space-y-1">
              {filteredNavigation.map((item) => (
                <div key={item.name}>
                  {item.sectionId ? (
                    <button
                      onClick={() => handleNavClick(item.sectionId)}
                      className={`!cursor-pointer block py-3 px-4 rounded-lg text-base font-medium transition-colors w-full text-left ${
                        activeSection === item.sectionId
                          ? 'text-gold bg-gold/10'
                          : 'text-white hover:text-gold hover:bg-gold/10'
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && !isServicePage && (
                        <svg className="inline w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={closeMobileMenu}
                      className={`!cursor-pointer block py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                        pathname === item.href || (isServicePage && (item.name === 'Photography' || item.name === 'Production Services'))
                          ? 'text-gold bg-gold/10'
                          : 'text-white hover:text-gold hover:bg-gold/10'
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <svg className="inline w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  )}

                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && !isServicePage && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={closeMobileMenu}
                          className="!cursor-pointer block py-2 px-4 text-sm text-white/80 hover:text-gold hover:bg-gold/5 rounded-md transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Social Links */}
            <div className="px-6 pb-6 pt-4 border-t border-gold/20">
              <p className="text-grey-light text-sm mb-4">Follow us</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-gold/10 rounded-full h-12 w-12 p-3"
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
