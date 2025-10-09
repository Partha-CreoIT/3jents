'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Hide header on all pages for cleaner design
  const isProjectPage = pathname.startsWith('/projects/');
  const isArchivePage = pathname === '/archive';
  const isCollaborationsPage = pathname === '/collaborations';
  const isGetInvolvedPage = pathname === '/get-involved';

  if (isProjectPage || isArchivePage || isCollaborationsPage || isGetInvolvedPage) {
    return null;
  }

  return <Header />;
}
