import { useState, useEffect } from 'react';

export function useScrollHighlight() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'about', 'services'];
      const scrollPosition = window.scrollY + 200; // Offset for header height

      // Check if we're at the top (home section)
      if (scrollPosition < 500) {
        setActiveSection('home');
        return;
      }

      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}
