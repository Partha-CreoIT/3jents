'use client';

import SectionWrapper from '@/components/sections/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Lightbulb, Heart } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import LightRays from '@/components/LightRays';

export default function GetInvolved() {
  return (
    <div className="min-h-screen relative">
      <LightRays
        raysOrigin="bottom-right"
        raysColor="#FFD700"
        raysSpeed={0.4}
        lightSpread={1.9}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.32}
        className="absolute inset-0"
      />
      <div className="relative z-10">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-white/10 via-gold/5 to-white/20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6">
            Get Involved
          </h1>
          <p className="text-xl md:text-2xl text-grey-light leading-relaxed">
            Join our creative community and be part of something extraordinary.
            Whether you&apos;re an artist, collaborator, or supporter, there&apos;s a place for you here.
          </p>
        </div>
      </SectionWrapper>

      {/* Application Forms */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Join Our Team
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Ready to contribute your talents to our creative projects?
              Apply to become part of our growing community of filmmakers and artists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* New Member Application */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 text-center hover:border-gold/40 transition-colors">
              <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-gold mb-4">New Member Application</h3>
              <p className="text-grey-light mb-6 leading-relaxed">
                Join our core team as a filmmaker, producer, or creative professional.
                Bring your skills and passion to help create amazing projects.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 w-full"
              >
                <a
                  href="https://forms.google.com/new-member-application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* New Works Submission */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 text-center hover:border-gold/40 transition-colors">
              <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-gold mb-4">New Works Submission</h3>
              <p className="text-grey-light mb-6 leading-relaxed">
                Have a project idea or script you'd like to develop with us?
                Submit your creative concepts for consideration and collaboration.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 w-full"
              >
                <a
                  href="https://forms.google.com/works-submission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Submit Your Idea</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Ways to Support */}
      <SectionWrapper className="bg-gradient-to-br from-black/20 via-gold/10 to-black/30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Other Ways to Get Involved
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              There are many ways to support our mission and be part of our creative community,
              even if you&apos;re not ready to join as a full member.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-gold" />,
                title: 'Support Our Work',
                description: 'Help fund our projects through donations and contributions. Every bit helps us create more content and reach wider audiences.',
                action: 'Donate Now',
                link: 'https://gofundme.com/3jeproductions',
              },
              {
                icon: <Users className="h-8 w-8 text-gold" />,
                title: 'Collaborate',
                description: 'Partner with us on a project or provide resources. We love working with other creatives and organizations.',
                action: 'Get in Touch',
                link: '#contact',
              },
              {
                icon: <ExternalLink className="h-8 w-8 text-gold" />,
                title: 'Spread the Word',
                description: 'Share our work with your networks and help us grow our community. Follow us and tag us in your posts!',
                action: 'Follow Us',
                link: 'https://instagram.com/3jeproductions',
              },
            ].map((way) => (
              <div key={way.title} className="bg-black/50 border border-gold/20 rounded-lg p-6 text-center hover:border-gold/40 transition-colors">
                <div className="bg-gold/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {way.icon}
                </div>
                <h3 className="text-xl font-semibold text-gold mb-3">{way.title}</h3>
                <p className="text-grey-light text-sm mb-4 leading-relaxed">{way.description}</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-gold/30 text-gold hover:bg-gold/10"
                >
                  <a
                    href={way.link}
                    target={way.link.startsWith('http') ? '_blank' : undefined}
                    rel={way.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {way.action}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Visual Interest Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Our Community
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              See some of the amazing people and projects that make up our creative family.
            </p>
          </div>

          {/* Placeholder for community photos/logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-grey rounded-lg opacity-50 hover:opacity-75 transition-opacity cursor-pointer"
                title={`Community member ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="bg-gradient-to-br from-white/10 via-gold/5 to-white/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Questions? Let&apos;s Talk
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Not sure which path is right for you? We'd love to chat about your interests
              and help you find the best way to get involved with 3JE Productions.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
      </div>
    </div>
  );
}
