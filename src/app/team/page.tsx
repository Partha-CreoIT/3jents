'use client';

import SectionWrapper from '@/components/sections/SectionWrapper';
import TeamCard from '@/components/cards/TeamCard';
import ContactForm from '@/components/forms/ContactForm';
import LightRays from '@/components/LightRays';

const founders = [
  {
    name: 'Aydin Byrd',
    role: 'Co-Founder & Creative Director',
    bio: 'Visionary filmmaker and creative director bringing innovative storytelling to life through compelling narratives and artistic vision. Specializes in theatrical productions and cinematic experiences that challenge conventions and inspire audiences.',
    imageUrl: '/founder/founder.png',
  },
  {
    name: 'Nick Bella',
    role: 'Co-Founder & Producer',
    bio: 'Dynamic producer and creative force behind 3JENTS, orchestrating seamless productions from concept to completion. Expert in managing complex projects while maintaining artistic integrity and fostering collaborative environments.',
    imageUrl: '/founder/founder_1.png',
  },
  {
    name: 'Vish Ishaan',
    role: 'Co-Founder & Technical Director',
    bio: 'Technical virtuoso and innovative director bridging theater and film through cutting-edge production techniques. Master of visual storytelling, specializing in immersive experiences that push creative boundaries.',
    imageUrl: '/founder/founder_2.png',
  },
];

const collaborators = [
  {
    name: 'Emma Cort',
    role: 'Photographer',
    bio: 'Talented photographer specializing in capturing authentic moments and creating visual narratives that tell compelling stories. Expert in both studio and location shoots with a keen eye for composition and lighting.',
    trades: ['Photography', 'Portraiture', 'Event Photography'],
  },
  {
    name: 'Naira Jain',
    role: 'Photographer & Intimacy Coordinator',
    bio: 'Versatile creative professional combining photography expertise with intimacy coordination skills. Creates safe, respectful environments while capturing beautiful, authentic visual stories.',
    trades: ['Photography', 'Intimacy Coordination', 'Production Support'],
  },
  {
    name: 'Safin Karim',
    role: 'Composer',
    bio: 'Innovative composer creating original scores that enhance emotional depth and narrative impact. Specializes in blending contemporary and traditional elements to create memorable soundscapes.',
    trades: ['Composition', 'Music Production', 'Sound Design'],
  },
  {
    name: 'Olivia Martin',
    role: 'Actress, Stage Manager & Assistant Director',
    bio: 'Multi-talented performer and production professional bringing depth and expertise to both acting and behind-the-scenes roles. Ensures smooth production flow while delivering compelling performances.',
    trades: ['Acting', 'Stage Management', 'Assistant Directing'],
  },
  {
    name: 'Carl Coetzee',
    role: 'DP, Editor & Gaffer',
    bio: 'Technical virtuoso excelling in cinematography, editing, and lighting. Creates visually stunning work from initial capture through final post-production, ensuring every frame serves the story.',
    trades: ['Cinematography', 'Video Editing', 'Lighting Design'],
  },
];

const houseEmployees = {
  founders: ['Nick Bella', 'Vish Ishaan', 'Aydin Byrd'],
  photographers: ['Nick Bella', 'Aidan Samwick'],
  investors: ['Paul Bella', 'Michael Villota'],
  cfo: ['Paul Bella'],
  producers: ['Patrice Yip', 'Nick Bella'],
};

export default function OurTeam() {
  return (
    <div className="min-h-screen relative">
      <LightRays
        raysOrigin="bottom-center"
        raysColor="#FFD700"
        raysSpeed={0.3}
        lightSpread={1.5}
        rayLength={1.8}
        followMouse={true}
        mouseInfluence={0.2}
        className="absolute inset-0"
      />
      <div className="relative z-10">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-b from-black via-grey-dark to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6 font-heading">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-grey-light leading-relaxed font-body">
            Meet the talented artists, directors, and creatives who make up the
            3 Jokers Entertainment collective.
          </p>
        </div>
      </SectionWrapper>

      {/* Founders Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 font-heading">
              Founding Members
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto font-body">
              The creative visionaries who established 3 Jokers Entertainment and continue
              to guide our artistic direction and collaborative spirit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <TeamCard
                key={founder.name}
                name={founder.name}
                pronouns={founder.pronouns}
                role={founder.role}
                bio={founder.bio}
                imageUrl={founder.imageUrl}
                instagramUrl={founder.instagramUrl}
                websiteUrl={founder.websiteUrl}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Collaborators Section */}
      <SectionWrapper className="bg-black/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 font-heading">
              Our Creative Collaborators
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto font-body">
              The talented professionals and artists who work with us to bring
              theatrical and cinematic visions to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborators.map((collaborator) => (
              <TeamCard
                key={collaborator.name}
                name={collaborator.name}
                pronouns={collaborator.pronouns}
                role={collaborator.role}
                bio={collaborator.bio}
                imageUrl={collaborator.imageUrl}
                trades={collaborator.trades}
                instagramUrl={collaborator.instagramUrl}
                websiteUrl={collaborator.websiteUrl}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* House Employees Section */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Our House Team
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              The dedicated professionals who form the core of our operations and drive our vision forward.
            </p>
          </div>
          <div className="bg-black/60 rounded-lg p-8 md:p-12 border border-gold/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gold mb-4">Leadership</h3>
                <div className="space-y-3 text-grey-light">
                  <div>
                    <span className="font-medium text-white">Founders:</span> {houseEmployees.founders.join(', ')}
                  </div>
                  <div>
                    <span className="font-medium text-white">CFO:</span> {houseEmployees.cfo.join(', ')}
                  </div>
                  <div>
                    <span className="font-medium text-white">Producers:</span> {houseEmployees.producers.join(', ')}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gold mb-4">Creative & Operations</h3>
                <div className="space-y-3 text-grey-light">
                  <div>
                    <span className="font-medium text-white">Photographers:</span> {houseEmployees.photographers.join(', ')}
                  </div>
                  <div>
                    <span className="font-medium text-white">Investors:</span> {houseEmployees.investors.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Join Us Section */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/50 rounded-lg p-8 md:p-12 border border-gold/20">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6 font-heading">
              Join Our Collective
            </h2>
            <div className="space-y-6 text-grey-light leading-relaxed">
              <p className="text-lg font-body">
                3 Jokers Entertainment is always looking for passionate artists, 
                performers, and creative professionals to join our collaborative community.
              </p>
              <p className="text-lg font-body">
                Whether you're an experienced professional or an emerging talent,
                we believe in the power of diverse voices and fresh perspectives
                to create meaningful theatrical and cinematic experiences.
              </p>
              <p className="text-lg font-body">
                Interested in collaborating with us? We'd love to hear about your
                artistic vision and explore how we can work together.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 font-heading">
              Get In Touch
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto font-body">
              Ready to collaborate or have questions about joining our collective?
              We'd love to hear from you.
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