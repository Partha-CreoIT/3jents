'use client'

import { Button } from '@/components/ui/button'
import ContactDialog from '@/components/forms/ContactDialog'

export default function ProductionServicesPage() {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Copied to clipboard:', text);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20 md:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_theme(colors.gold)_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_theme(colors.gold)_0%,_transparent_50%)] opacity-20"></div>
      </div>

      {/* Header Section */}
      <section className="relative py-16 px-4 bg-black/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gold font-heading leading-tight">
              PRODUCTION SERVICES
            </h1>
            <p className="text-xl md:text-2xl text-grey-light max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive production services for theater, film, and multimedia projects.
            </p>
          </div>

          {/* CTA Button */}
          <ContactDialog onClick={() => copyToClipboard('network@3jents.com')}>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-black font-bold px-8 py-3 text-lg rounded-full border-2 border-gold hover:border-gold-light transition-all duration-300"
            >
              Let's get started →
            </Button>
          </ContactDialog>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-16 px-4 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Theater Production */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gold">Theater Production</h3>
                <p className="text-grey-light text-sm leading-relaxed">
                  Full-scale theatrical productions from script development to opening night. We handle everything from casting to technical direction.
                </p>
              </div>
            </div>

            {/* Film Production */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gold">Film Production</h3>
                <p className="text-grey-light text-sm leading-relaxed">
                  Cinematic storytelling through short films, features, and documentaries. Pre-production to post-production services.
                </p>
              </div>
            </div>

            {/* Technical Services */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gold">Technical Services</h3>
                <p className="text-grey-light text-sm leading-relaxed">
                  Lighting, sound, video production, and post-production services. State-of-the-art equipment and expert technicians.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <ContactDialog onClick={() => copyToClipboard('network@3jents.com')}>
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-white font-semibold px-8 py-3 font-accent"
              >
                Get In Touch About Production Services
              </Button>
            </ContactDialog>
          </div>
        </div>
      </section>
    </div>
  )
}
