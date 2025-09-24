'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ProjectCard from '@/components/cards/ProjectCard';
import TeamCard from '@/components/cards/TeamCard';
import ContactDialog from '@/components/forms/ContactDialog';

// Featured projects with actual poster images
const projects = [
  {
    title: "You Can&apos;t Spell Assault Without Us",
    type: 'Feature Film',
    posterUrl: '/pastwork/youcant.jpeg',
    bio: 'A gripping drama that explores themes of identity, belonging, and the immigrant experience. This feature-length film follows a young immigrant navigating cultural expectations while pursuing their dreams in a new country.',
    credits: ['Director', 'Producer', 'Cinematographer', 'Sound Designer', 'Editor'],
    vimeoUrl: 'https://vimeo.com/123456789',
    youtubeUrl: 'https://youtube.com/watch?v=example1',
  },
  {
    title: 'Sometimes: A Collection of Poems About the Progression of an Ending',
    type: 'Short Film',
    posterUrl: '/pastwork/somtimes_poster.jpeg',
    bio: 'An experimental short film adaptation of original poetry exploring the emotional journey of relationships, loss, and healing. A meditative reflection on the beauty found in life&apos;s transitions.',
    credits: ['Director', 'Poet', 'Cinematographer', 'Composer', 'Editor'],
    vimeoUrl: 'https://vimeo.com/123456790',
    websiteUrl: 'https://sometimes-film.com',
  },
  {
    title: 'Slaps',
    type: 'Comedy Sketch',
    posterUrl: '/pastwork/slaps.PNG',
    bio: 'A hilarious comedy sketch series that takes absurd situations and turns them into laugh-out-loud moments. Quick, witty, and perfectly timed for maximum comedic impact.',
    credits: ['Writer', 'Director', 'Actors', 'Cinematographer', 'Editor'],
    youtubeUrl: 'https://youtube.com/watch?v=example3',
  },
];

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
    imageUrl: '/founder_1.png',
  },
  {
    name: 'Vish Ishaan',
    role: 'Co-Founder & Technical Director',
    bio: 'Technical virtuoso and innovative director bridging theater and film through cutting-edge production techniques. Master of visual storytelling, specializing in immersive experiences that push creative boundaries.',
    imageUrl: '/founder_2.png',
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://minio-4.creox.dev/api/v1/download-shared-object/aHR0cDovLzEyNy4wLjAuMTo5MDAwL3B1YmxpY3N0b3JhZ2UvQnJvb2tseW4lMjBCYWJ5JTIwUHJvbW8lMjAtJTIwTmljayUyMEJlbGxhJTIwXyUyMERCSUcubXA0P1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9MjVMVEpDUUlPSUZZUVY3NVNSTFQlMkYyMDI1MDkyNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA5MjRUMDUwNjQ2WiZYLUFtei1FeHBpcmVzPTQzMjAwJlgtQW16LVNlY3VyaXR5LVRva2VuPWV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoWTJObGMzTkxaWGtpT2lJeU5VeFVTa05SU1U5SlJsbFJWamMxVTFKTVZDSXNJbVY0Y0NJNk1UYzFPRGN6TXpVNU55d2ljR0Z5Wlc1MElqb2liV2x1YVc5aFpHMXBiaUo5LjlzN0lGT0hmaFRGYWFkdXoyNVBpVy1YQVhoaHNCUWcyY21YWlhtdUVVNTdTblM0Mk9ZcnhOMmVUVUpoZEFMQ2NjSXR6aHpkcnc1ajVoalBiWVJDN3hBJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9YmI5ZTBiYjE0YzE2NWZmYTBhMjFhMjY1MmI0MDI4YjQwY2VhOGU0MzJkNjlkMjIwZjA0YzM2MDIzN2ZmNTNjNA" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-gold font-heading"
            >
              Stage to Screen, Seamlessly
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-accent tracking-wide"
            >
              Theater & Film Collective
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/90 max-w-3xl mx-auto font-body"
            >
              Creating compelling stories through live performance and cinematic excellence. A dynamic collective of artists dedicated to collaborative storytelling.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={() => {
                  const workSection = document.getElementById('work');
                  if (workSection) {
                    workSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="lg"
                className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 font-accent"
              >
                  Explore Our Work
              </Button>
              <ContactDialog>
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-white font-semibold px-8 py-3 font-accent"
              >
                Get In Touch
              </Button>
              </ContactDialog>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Past Work Section */}
      <SectionWrapper id="work" className="bg-gradient-to-br from-white/10 via-gold/5 to-white/20 backdrop-blur-md pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-gold mb-8">
            Our Past Work
          </h2>
          <p className="text-xl md:text-2xl text-grey-light leading-relaxed">
            Explore our portfolio of films, music videos, and creative projects
            that showcase our commitment to authentic storytelling.
          </p>
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper className="bg-gradient-to-br from-black/20 via-gold/18 to-black/40 backdrop-blur-md py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Featured Projects
            </h3>
            <p className="text-grey-light max-w-2xl mx-auto text-lg">
              Our most notable works that represent the breadth and depth of our creative vision.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                type={project.type}
                posterUrl={project.posterUrl}
                bio={project.bio}
                credits={project.credits}
                vimeoUrl={project.vimeoUrl}
                youtubeUrl={project.youtubeUrl}
                websiteUrl={project.websiteUrl}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Additional Projects Grid */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              More Projects
            </h3>
            <p className="text-grey-light max-w-2xl mx-auto">
              Additional works from our extensive portfolio spanning various genres and styles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Additional project cards would go here */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 text-center">
              <h4 className="text-xl font-semibold text-gold mb-4">Coming Soon</h4>
              <p className="text-grey-light">
                More projects and collaborations are currently in development.
                Stay tuned for updates!
              </p>
            </div>
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 text-center">
              <h4 className="text-xl font-semibold text-gold mb-4">Archive</h4>
              <p className="text-grey-light">
                Our complete archive of past projects, experiments, and creative explorations.
              </p>
            </div>
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 text-center">
              <h4 className="text-xl font-semibold text-gold mb-4">Collaborations</h4>
              <p className="text-grey-light">
                Special projects created in partnership with other talented creators and artists.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about" className="bg-gradient-to-br from-black/20 via-gold/10 to-black/30 backdrop-blur-md py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-black/60 rounded-lg p-10 md:p-16 border border-gold/20">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-10 text-center">
              Our Mission
            </h3>
            <div className="space-y-8 text-grey-light leading-relaxed">
              <p className="text-lg md:text-xl">
                Founded in 2020, 3JE Productions emerged from a shared vision to amplify
                underrepresented voices and create content that challenges conventional
                narratives. What started as a small collaboration between friends has
                evolved into a thriving creative hub that supports artists, filmmakers,
                and storytellers from diverse backgrounds.
              </p>
              <p className="text-lg md:text-xl">
                Our name, 3JE, represents the three founding members and our commitment
                to authenticity (J), excellence (E), and innovation in everything we create.
                We believe that great storytelling has the power to inspire change,
                foster understanding, and build communities.
              </p>
              <p className="text-lg md:text-xl">
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
      <SectionWrapper className="bg-gradient-to-br from-white/15 via-gold/8 to-white/25 backdrop-blur-md py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Meet Our Founders
            </h3>
            <p className="text-grey-light max-w-2xl mx-auto text-lg">
              The visionaries behind 3JE Productions, bringing together their unique
              talents and experiences to create something truly special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {founders.map((founder) => (
              <TeamCard
                key={founder.name}
                name={founder.name}
                role={founder.role}
                bio={founder.bio}
                imageUrl={founder.imageUrl}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Freelancers Section */}
      <SectionWrapper className="bg-gradient-to-br from-black/25 via-gold/12 to-black/35 backdrop-blur-md py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Our Creative Network
            </h3>
            <p className="text-grey-light max-w-2xl mx-auto text-lg">
              A talented community of freelancers, artists, and specialists who bring
              their unique expertise to our productions.
            </p>
            <div className="mt-8">
              <ContactDialog>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gold text-gold hover:bg-gold hover:text-white font-semibold px-8 py-3 font-accent"
                >
                  Join Our Network
                </Button>
              </ContactDialog>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {freelancers.map((freelancer) => (
              <TeamCard
                key={freelancer.name}
                name={freelancer.name}
                role={freelancer.role}
                bio={freelancer.bio}
                trades={freelancer.trades}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="services" className="bg-gradient-to-br from-gold/5 via-white/10 to-gold/5 backdrop-blur-md py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gold mb-6">
              Our Services
            </h2>
            <p className="text-grey-light max-w-3xl mx-auto text-lg">
              From concept to completion, we provide comprehensive creative services to bring your vision to life through theater, film, and multimedia production.
            </p>
          </div>

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

            {/* Photography */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gold">Photography</h3>
                <p className="text-grey-light text-sm leading-relaxed">
                  Professional photography services for events, portraits, and promotional materials with artistic vision and technical excellence.
                </p>
              </div>
            </div>

            {/* Creative Consultation */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gold">Creative Consultation</h3>
                <p className="text-grey-light text-sm leading-relaxed">
                  Strategic guidance and creative direction for your projects. From concept development to execution planning.
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

            {/* Collaborative Projects */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gold">Collaborative Projects</h3>
                <p className="text-grey-light text-sm leading-relaxed">
                  Join our creative network. We partner with artists, creators, and organizations for unique collaborative ventures.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <ContactDialog>
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-white font-semibold px-8 py-3 font-accent"
              >
                Get In Touch About Services
              </Button>
            </ContactDialog>
          </div>
        </div>
      </SectionWrapper>

      {/* House Employees Section */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Our House Team
            </h3>
            <p className="text-grey-light max-w-2xl mx-auto text-lg">
              The dedicated professionals who form the core of our operations and drive our vision forward.
            </p>
            <div className="mt-8">
              <ContactDialog>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gold text-gold hover:bg-gold hover:text-white font-semibold px-8 py-3 font-accent"
                >
                  Get In Touch
                </Button>
              </ContactDialog>
            </div>
          </div>
          <div className="bg-black/60 rounded-lg p-10 md:p-16 border border-gold/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-gold mb-6">Leadership</h4>
                <div className="space-y-4 text-grey-light">
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
                <h4 className="text-xl font-semibold text-gold mb-6">Creative & Operations</h4>
                <div className="space-y-4 text-grey-light">
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
    </div>
  );
}
