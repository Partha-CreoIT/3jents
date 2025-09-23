'use client';

import SectionWrapper from '@/components/sections/SectionWrapper';
import ProjectCard from '@/components/cards/ProjectCard';
import Carousel from '@/components/sections/Carousel';
import ContactForm from '@/components/forms/ContactForm';
import LightRays from '@/components/LightRays';

// Featured projects with actual poster images - theater & film collective
const projects = [
  {
    title: "You Can't Spell Assault Without Us",
    type: 'Theatrical Film',
    posterUrl: '/pastwork/youcant.jpeg',
    bio: 'A powerful drama that explores themes of identity, belonging, and the immigrant experience. This collaborative film project brings together theater and cinema to tell the story of a young immigrant navigating cultural expectations while pursuing their dreams.',
    credits: ['Collective Direction', 'Collaborative Writing', 'Ensemble Cast', 'Community Production', 'Artistic Collaboration'],
  },
  {
    title: 'Sometimes: A Collection of Poems About the Progression of an Ending',
    type: 'Experimental Theater-Film',
    posterUrl: '/pastwork/somtimes_poster.jpeg',
    bio: 'An innovative fusion of live performance and cinematic storytelling. This experimental piece adapts original poetry to explore the emotional journey of relationships, loss, and healing through both stage and screen.',
    credits: ['Artistic Direction', 'Poetry Adaptation', 'Live Performance', 'Cinematic Integration', 'Collaborative Creation'],
  },
  {
    title: 'Slaps',
    type: 'Comedy Performance',
    posterUrl: '/pastwork/slaps.PNG',
    bio: 'A dynamic comedy sketch series that originated as live theater performances before being adapted for film. This collaborative project showcases our collective\'s ability to create laugh-out-loud moments through both stage and screen.',
    credits: ['Collective Writing', 'Ensemble Performance', 'Live Direction', 'Film Adaptation', 'Collaborative Comedy'],
  },
];

// Placeholder carousel items for production stills/shorts
const productionStills = [
  {
    id: 'still-1',
    imageUrl: '/placeholder-still-1.jpg',
    alt: 'Production still from recent shoot',
  },
  {
    id: 'still-2',
    imageUrl: '/placeholder-still-2.jpg',
    alt: 'Behind the scenes photo',
  },
  {
    id: 'still-3',
    imageUrl: '/placeholder-still-3.jpg',
    alt: 'Crew working on set',
  },
  {
    id: 'still-4',
    imageUrl: '/placeholder-still-4.jpg',
    alt: 'Equipment setup',
  },
  {
    id: 'still-5',
    imageUrl: '/placeholder-still-5.jpg',
    alt: 'Director reviewing footage',
  },
];

export default function PastWork() {
  return (
    <div className="min-h-screen relative">
      <LightRays
        raysOrigin="center"
        raysColor="#FFD700"
        raysSpeed={0.5}
        lightSpread={2.1}
        rayLength={1.5}
        followMouse={true}
        mouseInfluence={0.25}
        className="absolute inset-0"
      />
      <div className="relative z-10">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-b from-black via-grey-dark to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6 font-heading">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-grey-light leading-relaxed font-body">
            Explore our portfolio of theatrical productions, films, and collaborative
            projects that showcase our commitment to compelling storytelling.
          </p>
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Featured Projects
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
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

      {/* Production Gallery */}
      <SectionWrapper className="bg-black/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Behind the Scenes
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Glimpses into our creative process, from pre-production planning
              to the final magical moments on set.
            </p>
          </div>
          <Carousel
            items={productionStills}
            autoPlay={true}
            autoPlayInterval={3000}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </SectionWrapper>

      {/* Additional Projects Grid */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              More Projects
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Additional works from our extensive portfolio spanning various genres and styles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Additional project cards would go here */}
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gold mb-4">Coming Soon</h3>
              <p className="text-grey-light">
                More projects and collaborations are currently in development.
                Stay tuned for updates!
              </p>
            </div>
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gold mb-4">Archive</h3>
              <p className="text-grey-light">
                Our complete archive of past projects, experiments, and creative explorations.
              </p>
            </div>
            <div className="bg-black/50 border border-gold/20 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gold mb-4">Collaborations</h3>
              <p className="text-grey-light">
                Special projects created in partnership with other talented creators and artists.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto">
              Have a project in mind or want to discuss collaboration opportunities?
              We'd love to hear your ideas and explore how we can work together.
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
