'use client';

import SectionWrapper from '@/components/sections/SectionWrapper';
import ServiceCard from '@/components/cards/ServiceCard';
import ContactForm from '@/components/forms/ContactForm';
import { Film, Users, Music, Camera, Mic, Settings } from 'lucide-react';

// Service data based on requirements
const services = [
  {
    title: 'Producing & Fundraising',
    description: 'Comprehensive production management from concept to completion. We handle budgeting, scheduling, and all logistical aspects of your project.',
    features: [
      'Project planning and budgeting',
      'Fundraising strategy and execution',
      'Vendor coordination and management',
      'Risk assessment and mitigation',
      'Timeline and milestone management',
    ],
    icon: <Film className="h-8 w-8 text-gold" />,
  },
  {
    title: 'Music Videos',
    description: 'Creative music video production that brings your musical vision to life. From intimate acoustic sessions to large-scale productions.',
    features: [
      'Concept development and storyboarding',
      'Multi-camera shooting techniques',
      'Professional audio recording',
      'Post-production and color grading',
      'Distribution and marketing support',
    ],
    icon: <Music className="h-8 w-8 text-gold" />,
  },
  {
    title: 'Reel Footage',
    description: 'High-quality promotional and demo reels for actors, musicians, and performers. Showcase your talent with professional presentation.',
    features: [
      'Professional headshots and portraits',
      'Performance and demo reels',
      'Behind-the-scenes content',
      'Social media content creation',
      'Portfolio development',
    ],
    icon: <Camera className="h-8 w-8 text-gold" />,
  },
  {
    title: 'Equipment Rental',
    description: 'Access to professional-grade film equipment for your production needs. Cameras, lighting, audio gear, and more.',
    features: [
      'Cinema cameras and lenses',
      'Professional lighting kits',
      'Audio recording equipment',
      'Grip and stabilization gear',
      'Delivery and setup services',
    ],
    icon: <Settings className="h-8 w-8 text-gold" />,
  },
  {
    title: 'Casting & Crew Talent',
    description: 'Connect with skilled professionals for your production. From actors and directors to technical specialists.',
    features: [
      'Talent casting and recruitment',
      'Crew assembly and coordination',
      'Skill assessment and matching',
      'Contract negotiation',
      'On-set management',
    ],
    icon: <Users className="h-8 w-8 text-gold" />,
  },
  {
    title: 'Voice Over Sessions',
    description: 'Professional voice over recording services for commercials, documentaries, audiobooks, and more.',
    features: [
      'Sound-treated recording studio',
      'Professional microphones and equipment',
      'Voice talent casting',
      'Audio editing and processing',
      'Multiple format delivery',
    ],
    icon: <Mic className="h-8 w-8 text-gold" />,
    comingSoon: true,
  },
];

export default function ProductionServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-b from-black via-grey-dark to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6">
            Production Services
          </h1>
          <p className="text-xl md:text-2xl text-grey-light leading-relaxed">
            Comprehensive film production services to bring your creative vision to life.
            From concept to completion, we've got you covered.
          </p>
        </div>
      </SectionWrapper>

      {/* Services Grid */}
      <SectionWrapper className="bg-black/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              What We Offer
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Professional services tailored to meet the unique needs of your project,
              delivered by experienced filmmakers and industry professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                comingSoon={service.comingSoon}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper className="bg-black/80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Our Process
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              A streamlined approach that ensures your project is delivered on time,
              on budget, and exceeds expectations.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'We start by understanding your vision, goals, and requirements. Together we develop a comprehensive plan and timeline.',
              },
              {
                step: '02',
                title: 'Pre-Production',
                description: 'Detailed planning, casting, location scouting, and preparation to ensure everything is ready for smooth production.',
              },
              {
                step: '03',
                title: 'Production',
                description: 'Professional execution of your project with experienced crew, equipment, and attention to every detail.',
              },
              {
                step: '04',
                title: 'Post-Production',
                description: 'Expert editing, color grading, sound design, and finishing touches to deliver a polished final product.',
              },
            ].map((phase) => (
              <div key={phase.step} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xl">{phase.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gold mb-2">{phase.title}</h3>
                  <p className="text-grey-light leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Let's discuss your vision and how our production services can help bring it to life.
              Get in touch for a free consultation and quote.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
