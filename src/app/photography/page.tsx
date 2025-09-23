'use client';

import SectionWrapper from '@/components/sections/SectionWrapper';
import Carousel from '@/components/sections/Carousel';
import ContactForm from '@/components/forms/ContactForm';
import LightRays from '@/components/LightRays';
import { Button } from '@/components/ui/button';
import { Calendar, Camera, Users, Music } from 'lucide-react';

// Placeholder photography portfolio
const photographyItems = [
  {
    id: 'photo-1',
    imageUrl: '/placeholder-photo-1.jpg',
    alt: 'Theater photography - dramatic lighting on stage',
  },
  {
    id: 'photo-2',
    imageUrl: '/placeholder-photo-2.jpg',
    alt: 'Concert photography - musician performing',
  },
  {
    id: 'photo-3',
    imageUrl: '/placeholder-photo-3.jpg',
    alt: 'Headshot - professional portrait',
  },
  {
    id: 'photo-4',
    imageUrl: '/placeholder-photo-4.jpg',
    alt: 'Event photography - group performance',
  },
  {
    id: 'photo-5',
    imageUrl: '/placeholder-photo-5.jpg',
    alt: 'Behind the scenes - photography setup',
  },
  {
    id: 'photo-6',
    imageUrl: '/placeholder-photo-6.jpg',
    alt: 'Studio photography - controlled lighting',
  },
];

const photographers = [
  {
    name: 'Nick Photographer',
    specialties: ['Theater', 'Concert', 'Headshots'],
    experience: '8+ years',
    bio: 'Specializing in live performance and theatrical photography with a focus on capturing authentic moments and dramatic lighting.',
    imageUrl: '/placeholder-nick.jpg',
  },
  {
    name: 'Freelance Photographer 1',
    specialties: ['Events', 'Portraits', 'Documentary'],
    experience: '5+ years',
    bio: 'Versatile photographer with expertise in event coverage and documentary-style storytelling through images.',
    imageUrl: '/placeholder-freelance-1.jpg',
  },
];

export default function Photography() {
  return (
    <div className="min-h-screen relative">
      <LightRays
        raysOrigin="bottom-left"
        raysColor="#FFD700"
        raysSpeed={0.35}
        lightSpread={1.6}
        rayLength={1.7}
        followMouse={true}
        mouseInfluence={0.3}
        className="absolute inset-0"
      />
      <div className="relative z-10">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-white/10 via-gold/5 to-white/20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6">
            Photography Services
          </h1>
          <p className="text-xl md:text-2xl text-grey-light leading-relaxed">
            Professional photography services specializing in theater, concerts,
            and headshots. Capturing the perfect moment with artistic vision.
          </p>
        </div>
      </SectionWrapper>

      {/* Portfolio Carousel */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Our Work
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Explore our photography portfolio featuring theater productions,
              concerts, headshots, and special events.
            </p>
          </div>
          <Carousel
            items={photographyItems}
            autoPlay={true}
            autoPlayInterval={3500}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper className="bg-gradient-to-br from-black/20 via-gold/10 to-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              What We Offer
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Professional photography services tailored to your creative needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="h-8 w-8 text-gold" />,
                title: 'Theater Photography',
                description: 'Capturing the magic of live theater with dramatic lighting and emotional moments.',
              },
              {
                icon: <Music className="h-8 w-8 text-gold" />,
                title: 'Concert Photography',
                description: 'High-energy concert and live music photography with perfect timing and composition.',
              },
              {
                icon: <Users className="h-8 w-8 text-gold" />,
                title: 'Headshots & Portraits',
                description: 'Professional headshots and portraits for actors, musicians, and professionals.',
              },
              {
                icon: <Calendar className="h-8 w-8 text-gold" />,
                title: 'Event Coverage',
                description: 'Complete event photography from corporate functions to special celebrations.',
              },
            ].map((service) => (
              <div key={service.title} className="text-center">
                <div className="bg-gold/10 rounded-lg p-6 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gold mb-2">{service.title}</h3>
                <p className="text-grey-light text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Photographers */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Meet Our Photographers
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Talented photographers with diverse expertise and artistic styles
              ready to capture your vision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {photographers.map((photographer) => (
              <div key={photographer.name} className="bg-black/50 border border-gold/20 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-grey rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gold mb-1">{photographer.name}</h3>
                    <p className="text-grey-light text-sm mb-2">{photographer.experience} experience</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {photographer.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <p className="text-grey-light text-sm leading-relaxed">{photographer.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Booking CTA */}
      <SectionWrapper className="bg-gradient-to-br from-white/10 via-gold/5 to-white/20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
            Ready to Book a Session?
          </h2>
          <p className="text-grey-light text-lg mb-8 max-w-2xl mx-auto">
            Whether you need theater photography, concert coverage, professional headshots,
            or event documentation, we&apos;re here to capture your story beautifully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3"
            >
              <a href="#contact">
                Book a Session
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3"
            >
              View Full Portfolio
            </Button>
          </div>

          {/* Contact Form */}
          <div id="contact" className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
      </div>
    </div>
  );
}
