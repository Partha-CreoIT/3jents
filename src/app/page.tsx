'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/sections/SectionWrapper';
import ProjectCard from '@/components/cards/ProjectCard';
import TeamCard from '@/components/cards/TeamCard';
import FoundersSection from '@/components/sections/FoundersSection';
import ContactDialog from '@/components/forms/ContactDialog';
import Link from 'next/link';

// Featured projects with actual poster images
const projects = [
  {
    title: "You Can't Spell Assault Without Us",
    type: 'World Premiere - Theatrical Play',
    posterUrl: '/pastwork/youcant.jpeg',
    bio: 'love is a heavy, unwieldy thing; it feels cruel to ask anyone to hold it alone. but any two people can discover and cling to one another out of desperation to experience love, and still find themselves unable to share its load when it arrives. such is the story of natalie and aiden, two young people whose friendship blossoms into romance and quickly turns darker as the world shapes them in ways neither could have expected. how does their love, this enormous abstraction, hold up against the things they know to be truer and more tangible: trauma? gender roles? the exhaustion of growing up? this is not a love story. this is not a love story.',
    credits: ['Written & Directed by: Naira Sarin Jain', 'Starring: Leah Davidowitz, Nick Bella, Vivian Hunt'],
    vimeoUrl: 'https://na688.vhx.tv/checkout/you-can-t-spell-assault-without-us/purchase',
    venue: 'NYC Fringe Theater Festival l Chain Theater 312 West 36th Street, NY 10018',
    crew: [
      { name: 'Naira Sarin Jain', role: 'Writer & Director' },
      { name: 'Leah Davidowitz', role: 'Natalie' },
      { name: 'Nick Bella', role: 'Aiden' },
      { name: 'Vivian Hunt', role: 'Supporting Cast' }
    ],
    photos: [
      '/pastwork/youcant.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/youcant.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/youcant.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/youcant.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/youcant.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/youcant.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/youcant.jpeg'  // Placeholder - replace with actual production photos
    ]
  },
  {
    title: 'Sometimes: A Collection of Poems About the Progression of an Ending',
    type: 'Short Film',
    posterUrl: '/pastwork/somtimes_poster.jpeg',
    bio: 'Sometimes (a collection of poems about the progression of an ending) is a short film depiction of the events told in three short poems, spaced out over the span of three months, as our central character experiences a painful heartbreak. It references on loss, grief, and explores the experience of living a normal day to day in spite of these things we carry, and asks the question of whether or not a person ever truly loses the love they once had for another.',
    credits: ['Produced by: Nick Bella', 'Written & Directed by: Alexandra Blanco & Winter Kay McVey'],
    vimeoUrl: 'https://vimeo.com/123456790',
    websiteUrl: 'https://sometimes-film.com',
    crew: [
      { name: 'Nick Bella', role: 'Producer' },
      { name: 'Alexandra Blanco', role: 'Writer & Director' },
      { name: 'Winter Kay McVey', role: 'Director' }
    ],
    photos: [
      '/pastwork/somtimes_poster.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/somtimes_poster.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/somtimes_poster.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/somtimes_poster.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/somtimes_poster.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/somtimes_poster.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/somtimes_poster.jpeg'  // Placeholder - replace with actual production photos
    ]
  },
  {
    title: 'Slaps',
    type: 'Skit',
    posterUrl: '/pastwork/slaps.jpeg',
    bio: 'Dave and Stacy Mervis attend a parent teacher conference.',
    credits: ['Written & Produced by: Nick Bella', 'Directed by: Joseph Bodner', 'Associate producer: Patrice Yip'],
    starring: ['Aidan Samwick', 'Nick Bella', 'Olivia Martin'],
    youtubeUrl: 'https://youtube.com/watch?v=example3',
    crew: [
      { name: 'Nick Bella', role: 'Writer & Producer' },
      { name: 'Joseph Bodner', role: 'Director' },
      { name: 'Patrice Yip', role: 'Associate Producer' },
      { name: 'Aidan Samwick', role: 'Actor' },
      { name: 'Nick Bella', role: 'Actor' },
      { name: 'Olivia Martin', role: 'Actor' }
    ],
    photos: [
      '/pastwork/slaps.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/slaps.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/slaps.jpeg', // Placeholder - replace with actual production photos

      
      '/pastwork/slaps.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/slaps.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/slaps.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/slaps.jpeg'  // Placeholder - replace with actual production photos
    ]
  },
];

const founders = [
  {
    name: 'Nick Bella',
    role: 'Co-Founder & Producer',
    bio: 'Hi! I\'m Nick Bella, a proud founding member of 3 Jokers and alumni of NYU Tisch. My artistic story began early on, through my childhood fascination with comedy and horror movies. I feel most alive when I\'m laughing… or scared. So when I\'m not working creatively you\'ll likely find me doing something that makes the heart skip. If you suggested skydiving or trying the world\'s hottest pepper? I\'d say, "I\'m in." These interests, along with my affinity for activism and changemaking, eventually led me to NYU. During my time there, I honed my professional skills as an actor, producer, writer, content-creator, and director. I have both led and performed in a variety of professional projects from short films, to theatrical plays! I firmly believe that it is up to young artists of the world to not only entertain, but to question, comment on, and mold the ever-changing world around us in pursuit of something greater. You have the power to change the future. What is the ocean if not just many, many droplets of water? Let\'s create together.',
    imageUrl: '/founder/nick.png',
  },
  {
    name: 'Vish Ishaan',
    role: 'Co-Founder & Technical Director',
    bio: 'Hey, I\'m Vish! I\'m a storyteller at heart with a creative energy that colors outside the lines. I believe entertainment is more than an escape - it\'s a way to connect, heal, and spark change. As a proud first gen Indian-American, my mission extends beyond personal success: I\'m determined to reshape Hollywood so people like myself are not only seen but celebrated. If I\'m not acting: I\'m directing, writing, editing, graphic designing, or pouring my heart out into music. My relentless drive to tell stories with impact is the throughline of it all. Having had the chance to act on major network television and in national commercials, I sharpened my ability to perform under pressure while staying grounded and adaptable. I\'m also an NYU Tisch alum with a minor in the Business of Entertainment, combining artistry with strategy in everything I do. Beyond credentials, what attracts collaborators is my energy - helpful, open-hearted, and empathetic - fueled by my loved ones, comics, tech, and a deep-rooted belief to be in constant pursuit of greatness.',
    imageUrl: '/founder/vish.webp',
  },
  {
    name: 'Aydin Byrd',
    role: 'Co-Founder & Creative Director',
    bio: 'I\'m Aydin Byrd, one of the 3 Jokers. As a recent graduate of NYU Tisch, I double majored in Acting and Political Science, and I\'m grateful for every classroom, rehearsal, and conversation that taught me how stories are made and why they matter. My work is driven by an interest in the complexities and contradictions of ordinary life, and I try to translate that into straightforward, authentic, and entertaining storytelling. Ultimately, I love stories and the people who tell them. I love acting and producing because they let me work alongside amazing artists — people whose unique voices and vulnerability teach me more about the world than any curriculum. And I love learning; currently, I\'m in law school pursuing an education in entertainment law with a focus on Intellectual Property, and I hope to use my legal education to improve legal protections for the working artists that help create the cultural fabric of our world.',
    imageUrl: '/founder/aydin.webp',
  },
];

const freelancers = [
  {
    name: 'Emma Cort',
    role: 'Photographer',
    bio: 'Multi-hyphenated artist bringing her full self to every job.',
    trades: ['Photographer', 'Actor', 'Writer'],
    imageUrl: '/network/emma.webp',
  },
  {
    name: 'Naira Sarin Jain',
    role: 'Photographer, Director',
    bio: 'A versatile creative professional creating safe, respectful environments while capturing authentic visual stories.',
    trades: ['Director', 'Photographer', 'Intimacy coordinator'],
    imageUrl: '/network/naira.jpg',
    websiteUrl: 'https://drive.google.com/drive/folders/1--H1hbacD0zzGJIJDP-KDZKc_IvC1xvG?usp=share_link',
  },
  {
    name: 'Safin Karim',
    role: 'Composer',
    bio: 'Innovative composer creating original scores that enhance emotional depth and narrative impact',
    trades: ['Composition', 'Music Production', 'Sound Design'],
    imageUrl: '/network/safin.webp',
    websiteUrl: 'https://www.safinkarim.com/headshots',
  },
  {
    name: 'Olivia Martin',
    role: 'Actress, Stage Manager & Assistant Director',
    bio: 'Multi-hyphenated artist bringing depth and expertise to both her on screen and behind-the-scenes roles.',
    trades: ['Actor', 'Stage Management', 'Assistant Directing'],
    imageUrl: '/network/olivia.webp',
  },
  {
    name: 'Carl Coetzee',
    role: 'DP, Editor & Gaffer',
    bio: 'Technical virtuoso excelling in cinematography, editing, and lighting.',
    trades: ['Cinematography', 'Video Editing', 'Lighting Design'],
    imageUrl: '/network/carl.webp',
  },
  {
    name: 'Aidan Samwick',
    role: 'Photographer, Actor, DP',
    bio: 'Multi-hyphenated artist and problem solving powerhouse with great hair to match.',
    trades: ['Photographer', 'Actor', 'DP'],
    imageUrl: '/network/aidan.jpg',
  },
];

const contactInfo = {
  email: 'network@3jents.com',
};

export default function Home() {
  // Restore scroll position when returning from project page
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      const position = parseInt(scrollPosition, 10);
      // Use setTimeout to ensure DOM is fully rendered
      setTimeout(() => {
        window.scrollTo({ top: position, behavior: 'instant' });
        sessionStorage.removeItem('scrollPosition');
      }, 100);
    }
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Could add a toast notification here
      console.log('Copied to clipboard:', text);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
          style={{
            pointerEvents: 'none',
            minWidth: '100%',
            minHeight: '100%'
          }}
        >
          <source src="/video/video.mp4" type="video/mp4" />
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
              A dynamic collective of artists dedicated to collaborative storytelling through live performance and cinematic excellence. Empowered voices, Ignited imaginations.
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
              <ContactDialog onClick={() => copyToClipboard(contactInfo.email)}>
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
            Explore our portfolio of films, shorts, and creative projects 
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
              Our most recent and notable works that represent the depth of our creative vision.
            </p>
          </div>
          <div className="space-y-16">
            {projects.map((project, index) => (
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
                venue={project.venue}
                starring={project.starring}
                crew={project.crew}
                photos={project.photos}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Additional Projects Grid */}
      <SectionWrapper className="bg-gradient-to-br from-white/25 via-gold/15 to-white/35 backdrop-blur-md">
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
            <Link href="/archive">
              <div className="bg-black/50 border border-gold/20 rounded-lg p-8 text-center hover:border-gold/40 transition-all duration-300 cursor-pointer hover:bg-black/60">
                <h4 className="text-xl font-semibold text-gold mb-4">Archive</h4>
                <p className="text-grey-light">
                  Our complete archive of past projects, experiments, and creative explorations.
                </p>
                <div className="mt-4 text-gold/60 text-sm">
                  View our shorts & reels →
                </div>
              </div>
            </Link>
            <Link href="/collaborations">
              <div className="bg-black/50 border border-gold/20 rounded-lg p-8 text-center hover:border-gold/40 transition-all duration-300 cursor-pointer hover:bg-black/60">
                <h4 className="text-xl font-semibold text-gold mb-4">Collaborations</h4>
                <p className="text-grey-light">
                  Special projects created in partnership with other talented creators and artists.
                </p>
                <div className="mt-4 text-gold/60 text-sm">
                  View our partnerships →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about" className="bg-gradient-to-br from-black/20 via-gold/10 to-black/30 backdrop-blur-md py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">

        <h3 className="text-3xl md:text-4xl font-bold text-gold mb-10 text-center">
              About Us
            </h3>
          <div className="bg-black/60 rounded-lg p-10 md:p-16 border border-gold/20">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-10 text-center">
              Who Are We?
            </h3>
            <div className="space-y-8 text-grey-light leading-relaxed">
              <p className="text-lg md:text-xl">
                3 Jokers Entertainment is a do-it-all production company specializing in film, content creation, and photography. 3Jents is more than a production company—it&apos;s a mission. Rooted in the belief that young artists are the changemakers of the future, we create stories that entertain while giving back to causes that truly make a change for the better.
              </p>
              <p className="text-lg md:text-xl">
                Founded by a multicultural team of NYU alumni, we are committed to building inclusive, collaborative, and inspiring creative environments. Our team has professional experience working all across the call sheet. See our past-work tab to learn more about some of our previous projects!
              </p>
            </div>
          </div>
          
          <div className="bg-black/60 rounded-lg p-10 md:p-16 border border-gold/20 mt-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-10 text-center">
              Our Story
            </h3>
            <div className="space-y-8 text-grey-light leading-relaxed">
              <p className="text-lg md:text-xl">
                Born from friendship and fire, three NYU Tisch students came together with the passion for uplifting the art of young filmmakers and writers in New York. What began as a dream has blossomed into a flourishing company with focus on creating content both elegantly dramatic, and outrageously funny. Above all, our art makes a statement. Our company is laser-focused on seeking opportunities to give back to the ever changing world around us; The world that inspires us, and drives us to create.
              </p>
              <p className="text-lg md:text-xl">
                Traditionally, a deck of cards holds two jokers, just as the world of theater gives us two masks: comedy and tragedy. Both capture the duality of life. But we believe there&apos;s always a third option- a space where the joyful and the heartbreaking meet, where stories shift from fleeting entertainment to something unforgettable. That&apos;s where 3 Jokers lives: in the extra card, in the hidden mask, in the place where art becomes impact.
              </p>
              <p className="text-lg md:text-xl font-semibold text-gold italic text-center">
                &ldquo;Two jokers make you play the game. The third changes it.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Founders Section */}
      <div id="founders">
        <FoundersSection founders={founders} />
      </div>

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
              <ContactDialog onClick={() => copyToClipboard(contactInfo.email)}>
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
                imageUrl={freelancer.imageUrl}
                websiteUrl={freelancer.websiteUrl}
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
              <div className="text-center space-y-4 min-h-[280px] flex flex-col justify-between">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gold">Theater Production</h3>
                <p className="text-grey-light text-sm leading-relaxed">
                  Full-scale theatrical productions. We work with you from script development to opening night.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjprDcsRwg3daCue2P3Gmly1E4BWohu9tAXmkiXLEjzBLeaw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="bg-gold hover:bg-gold-light text-black font-semibold px-4 py-2 font-accent"
                  >
                    Tell us about your project →
                  </Button>
                </a>
              </div>
            </div>

            {/* Film Production */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4 min-h-[280px] flex flex-col justify-between">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gold">Film Production</h3>
                <p className="text-grey-light text-sm leading-relaxed">
                  We're more than just producers! We offer a wide variety of services from pre-production to post-production.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjprDcsRwg3daCue2P3Gmly1E4BWohu9tAXmkiXLEjzBLeaw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="bg-gold hover:bg-gold-light text-black font-semibold px-4 py-2 font-accent"
                  >
                    Tell us about your project →
                  </Button>
                </a>
              </div>
            </div>

            {/* Photography */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4 min-h-[280px] flex flex-col justify-between">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gold">Photography</h3>
                <p className="text-grey-light text-sm leading-relaxed">
                  Professional photography services for events, headshots, and promotional materials. Did we mention our custom packages fit your budget?
                </p>
                <Link href="/services/photography">
                  <Button
                    size="sm"
                    className="bg-gold hover:bg-gold-light text-black font-semibold px-4 py-2 font-accent"
                  >
                    See More →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Creative Consultation */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4 h-full flex flex-col">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gold">Creative Consultation</h3>
                  <p className="text-grey-light text-sm leading-relaxed">
                    Schedule a script or project consultation with one of our in-house writers or producers. Our writers specialize in developing new works. A premium service built to elevate your creative and commercial potential.
                  </p>
                </div>
                {/* Spacer for button alignment */}
                <div className="h-10"></div>
              </div>
            </div>

            {/* Technical Services */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4 h-full flex flex-col">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gold">Crew Sourcing</h3>
                  <p className="text-grey-light text-sm leading-relaxed">
                    <span className="font-bold text-gold">Creative force, ready to move.</span> Tap into our database of trusted &amp; vetted professionals. We handle outreach, interviews, and recommendations so you don’t waste time chasing availability. <span className="italic text-gold/80">Note: Services applicable only for paid crew.</span>
                  </p>
                </div>
                {/* Spacer for button alignment */}
                <div className="h-10"></div>
              </div>
            </div>

            {/* Collaborative Projects */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <div className="text-center space-y-4 h-full flex flex-col">
                <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gold">Contracts & Onboarding Agreements</h3>
                  <p className="text-grey-light text-sm leading-relaxed">
                    <span className="font-bold text-gold">Behind every great scene is solid paperwork.</span> From onboarding forms to contracts and NDA's, we'll make sure your paperwork is handled, secure, and shoot-ready. Includes custom agreements for cast, crew, collaborators, and more.
                  </p>
                </div>
                {/* Spacer for button alignment */}
                <div className="h-10"></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjprDcsRwg3daCue2P3Gmly1E4BWohu9tAXmkiXLEjzBLeaw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-white font-semibold px-8 py-3 font-accent"
              >
                Get In Touch About Services
              </Button>
            </a>
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
}

