'use client';

import SectionWrapper from '@/components/sections/SectionWrapper';
import TeamCard from '@/components/cards/TeamCard';
import ContactForm from '@/components/forms/ContactForm';

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

const freelancers = [
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

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-b from-black via-grey-dark to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6">
            About 3JE Productions
          </h1>
          <p className="text-xl md:text-2xl text-grey-light leading-relaxed">
            We are a collective of passionate filmmakers, artists, and storytellers
            dedicated to creating impactful, authentic content that resonates with audiences.
          </p>
        </div>
      </SectionWrapper>

      {/* Mission Statement */}
      <SectionWrapper className="bg-black/90">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/60 rounded-lg p-8 md:p-12 border border-gold/20">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6 text-center">
              Our Mission
            </h2>
            <div className="space-y-6 text-grey-light leading-relaxed">
              <p className="text-lg">
                Founded in 2020, 3JE Productions emerged from a shared vision to amplify
                underrepresented voices and create content that challenges conventional
                narratives. What started as a small collaboration between friends has
                evolved into a thriving creative hub that supports artists, filmmakers,
                and storytellers from diverse backgrounds.
              </p>
              <p className="text-lg">
                Our name, 3JE, represents the three founding members and our commitment
                to authenticity (J), excellence (E), and innovation in everything we create.
                We believe that great storytelling has the power to inspire change,
                foster understanding, and build communities.
              </p>
              <p className="text-lg">
                Today, we continue to push boundaries through our work in film production,
                music videos, photography, and emerging media formats. We pride ourselves
                on creating safe, inclusive spaces where creativity can flourish and
                diverse perspectives are celebrated.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Founders Section */}
      <SectionWrapper className="bg-black/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Meet Our Founders
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              The visionaries behind 3JE Productions, bringing together their unique
              talents and experiences to create something truly special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* Freelancers Section */}
      <SectionWrapper className="bg-black/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Our Creative Network
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              A talented community of freelancers, artists, and specialists who bring
              their unique expertise to our productions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freelancers.map((freelancer) => (
              <TeamCard
                key={freelancer.name}
                name={freelancer.name}
                pronouns={freelancer.pronouns}
                role={freelancer.role}
                bio={freelancer.bio}
                imageUrl={freelancer.imageUrl}
                trades={freelancer.trades}
                instagramUrl={freelancer.instagramUrl}
                websiteUrl={freelancer.websiteUrl}
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

      {/* Contact Section */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Join Our Creative Community
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Interested in collaborating or learning more about our work?
              We'd love to hear from you.
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
