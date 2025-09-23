'use client';

import SectionWrapper from '@/components/sections/SectionWrapper';
import ProjectCard from '@/components/cards/ProjectCard';
import Carousel from '@/components/sections/Carousel';
import ContactForm from '@/components/forms/ContactForm';

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
    bio: 'An experimental short film adaptation of original poetry exploring the emotional journey of relationships, loss, and healing. A meditative reflection on the beauty found in life\&apos;s transitions.',
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

// Production stills carousel - commented out until actual images are available
// const productionStills = [
//   {
//     id: 'still-1',
//     imageUrl: '/production-stills/still-1.jpg',
//     alt: 'Production still from recent shoot',
//   },
//   {
//     id: 'still-2',
//     imageUrl: '/production-stills/still-2.jpg',
//     alt: 'Behind the scenes photo',
//   },
//   {
//     id: 'still-3',
//     imageUrl: '/production-stills/still-3.jpg',
//     alt: 'Crew working on set',
//   },
//   {
//     id: 'still-4',
//     imageUrl: '/production-stills/still-4.jpg',
//     alt: 'Equipment setup',
//   },
//   {
//     id: 'still-5',
//     imageUrl: '/production-stills/still-5.jpg',
//     alt: 'Director reviewing footage',
//   },
// ];

export default function PastWork() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-white/10 via-gold/5 to-white/20 backdrop-blur-md pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-8">
            Our Past Work
          </h1>
          <p className="text-xl md:text-2xl text-grey-light leading-relaxed">
            Explore our portfolio of films, music videos, and creative projects
            that showcase our commitment to authentic storytelling.
          </p>
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Featured Projects
            </h2>
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
      <SectionWrapper className="bg-gradient-to-br from-white/10 via-gold/5 to-white/20 backdrop-blur-md">
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
  );
}
