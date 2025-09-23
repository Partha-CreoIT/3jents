'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Past Work', href: '/past-work' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/3jents/', iconPath: '/icons/instagram.png' },
  { name: 'YouTube', href: 'https://www.youtube.com/@3JENTS', iconPath: '/icons/youtube.png' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@3jents', iconPath: '/icons/tik_tok.png' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-xl border border-gold/20 rounded-full px-6 py-2 shadow-2xl">
      <div className="flex justify-between items-center space-x-8">
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="/logo/logo.png"
              alt="3 Jokers Entertainment"
              width={160}
              height={60}
              className="h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
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
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
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
                  className="w-5 h-5 object-contain"
                />
              </a>
            </Button>
          ))}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-gold hover:bg-gold/10 rounded-full h-8 w-8"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
