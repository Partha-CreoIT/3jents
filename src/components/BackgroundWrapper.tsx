'use client';

import { usePathname } from 'next/navigation';
import LightRays from '@/components/LightRays';

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

export default function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {/* LightRays Background - only show on non-home pages */}
      {!isHome && (
        <div className="fixed inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#1a1a1a"
            raysSpeed={0.3}
            lightSpread={1.2}
            rayLength={1.5}
            pulsating={true}
            fadeDistance={0.6}
            saturation={0.3}
            followMouse={true}
            mouseInfluence={0.03}
          />
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 ${isHome ? 'pt-24' : ''}`}>
        {children}
      </div>
    </>
  );
}
