'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Carousel from '@/components/sections/Carousel';
import ContactForm from '@/components/forms/ContactForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Project data - in a real app, this would come from a database or API
const projectsData = {
  'you-cant-spell-assault-without-us': {
    title: "You Can't Spell Assault Without Us",
    type: 'World Premiere - Theatrical Play',
    posterUrl: '/pastwork/youcant.jpeg',
    bio: 'love is a heavy, unwieldy thing; it feels cruel to ask anyone to hold it alone. but any two people can discover and cling to one another out of desperation to experience love, and still find themselves unable to share its load when it arrives. such is the story of natalie and aiden, two young people whose friendship blossoms into romance and quickly turns darker as the world shapes them in ways neither could have expected. how does their love, this enormous abstraction, hold up against the things they know to be truer and more tangible: trauma? gender roles? the exhaustion of growing up? this is not a love story. this is not a love story.',
    credits: ['Written & Directed by Naira Jain', 'Starring - Leah Davidowtiz, Nick Bella, Vivian Hunt'],
    vimeoUrl: 'https://na688.vhx.tv/checkout/you-can-t-spell-assault-without-us/purchase',
    venue: 'NYC Fringe Theater Festival l Chain Theater 312 West 36th Street, NY 10018',
    crew: [
      { name: 'Naira Jain', role: 'Writer & Director' },
      { name: 'Leah Davidowtiz', role: 'Natalie' },
      { name: 'Nick Bella', role: 'Aiden' },
      { name: 'Vivian Hunt', role: 'Supporting Cast' }
    ],
    photos: [
      '/pastwork/youcant.jpeg', // Placeholder - replace with actual production photos
      '/pastwork/youcant.jpeg',
      '/pastwork/youcant.jpeg',
      '/pastwork/youcant.jpeg',
      '/pastwork/youcant.jpeg',
      '/pastwork/youcant.jpeg',
      '/pastwork/youcant.jpeg'
    ]
  },
  'sometimes-a-collection-of-poems': {
    title: 'Sometimes: A Collection of Poems About the Progression of an Ending',
    type: 'Short Film',
    posterUrl: '/pastwork/somtimes_poster.jpeg',
    bio: 'Sometimes (a collection of poems about the progression of an ending) is a short film depiction of the events told in three short poems, spaced out over the span of three months, as our central character experiences a painful heartbreak. It references on loss, grief, and explores the experience of living a normal day to day in spite of these things we carry, and asks the question of whether or not a person ever truly loses the love they once had for another.',
    credits: ['Produced by: Nick Bella', 'Written by Alexandra Blanco', 'Directed by Winter Kay McVey & Alexandra Blanco'],
    vimeoUrl: 'https://vimeo.com/123456790',
    websiteUrl: 'https://sometimes-film.com',
    crew: [
      { name: 'Nick Bella', role: 'Producer' },
      { name: 'Alexandra Blanco', role: 'Writer & Director' },
      { name: 'Winter Kay McVey', role: 'Director' }
    ],
    photos: [
      '/pastwork/somtimes_poster.jpeg',
      '/pastwork/somtimes_poster.jpeg',
      '/pastwork/somtimes_poster.jpeg',
      '/pastwork/somtimes_poster.jpeg',
      '/pastwork/somtimes_poster.jpeg',
      '/pastwork/somtimes_poster.jpeg',
      '/pastwork/somtimes_poster.jpeg'
    ]
  },
  'slaps': {
    title: 'Slaps',
    type: 'Skit',
    posterUrl: '/pastwork/slaps.jpeg',
    bio: 'Dave and Stacy Mervis attend a parent teacher conference.',
    credits: ['Written & Produced by Nick Bella', 'Directed by Joseph Bodner', 'Associate producer: Patrice Yip'],
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
      '/pastwork/slaps.jpeg',
      '/pastwork/slaps.jpeg',
      '/pastwork/slaps.jpeg',
      '/pastwork/slaps.jpeg',
      '/pastwork/slaps.jpeg',
      '/pastwork/slaps.jpeg',
      '/pastwork/slaps.jpeg'
    ]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gold mb-4">Project Not Found</h1>
          <Link href="/#work">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const cast = project.crew.filter(member => 
    member.role.toLowerCase().includes('actor') || 
    member.role.toLowerCase().includes('character') ||
    project.starring?.includes(member.name) ||
    ['Natalie', 'Aiden', 'Supporting Cast'].includes(member.role)
  );

  const directors = project.crew.filter(member => 
    member.role.toLowerCase().includes('director') || 
    member.role.toLowerCase().includes('producer') ||
    member.role.toLowerCase().includes('writer')
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/#work">
          <Button
            variant="outline"
            size="sm"
            className="border-gold text-gold hover:bg-gold hover:text-black"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Project Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4">
              {project.title.toUpperCase()}
            </h1>
            <p className="text-xl md:text-2xl text-white">
              BY {project.credits[0]?.split('by ')[1]?.toUpperCase() || 'UNKNOWN'}
            </p>
          </div>

          {/* Photo Carousel */}
          <div className="mb-16">
            <Carousel
              items={project.photos.map((photo, index) => ({
                id: `${project.title}-photo-${index}`,
                imageUrl: photo,
                alt: `${project.title} production photo ${index + 1}`
              }))}
              autoPlay={true}
              autoPlayInterval={4000}
              showControls={true}
              showIndicators={true}
            />
          </div>

          {/* Cast and Director Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Cast Section - Left Side */}
            <div className="bg-gold/10 rounded-lg p-8 border border-gold/20">
              <h2 className="text-2xl md:text-3xl font-bold text-gold mb-6 text-center">
                CAST
              </h2>
              <div className="space-y-4">
                {cast.map((member, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-black/50 rounded border border-gold/10">
                    <span className="text-white font-medium text-lg">{member.name}</span>
                    <span className="text-gold text-sm">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Director & Production Team - Right Side */}
            <div className="bg-gold/10 rounded-lg p-8 border border-gold/20">
              <h2 className="text-2xl md:text-3xl font-bold text-gold mb-6 text-center">
                DIRECTOR & PRODUCTION
              </h2>
              <div className="space-y-4">
                {directors.map((member, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-black/50 rounded border border-gold/10">
                    <span className="text-white font-medium text-lg">{member.name}</span>
                    <span className="text-gold text-sm">{member.role}</span>
                  </div>
                ))}
              </div>

              {/* Additional Information */}
              <div className="mt-6 space-y-3">
                <div className="p-3 bg-black/30 rounded">
                  <p className="text-gold font-semibold mb-1">Type:</p>
                  <p className="text-white">{project.type}</p>
                </div>
                {project.venue && (
                  <div className="p-3 bg-black/30 rounded">
                    <p className="text-gold font-semibold mb-1">Venue:</p>
                    <p className="text-white text-sm">{project.venue}</p>
                  </div>
                )}
                <div className="p-3 bg-black/30 rounded">
                  <p className="text-gold font-semibold mb-1">Description:</p>
                  <p className="text-white text-sm leading-relaxed">{project.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {project.vimeoUrl && (
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-black px-8"
                onClick={() => window.open(project.vimeoUrl, '_blank')}
              >
                WATCH ON VIMEO
              </Button>
            )}
            {project.youtubeUrl && (
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-black px-8"
                onClick={() => window.open(project.youtubeUrl, '_blank')}
              >
                WATCH ON YOUTUBE
              </Button>
            )}
            {project.websiteUrl && (
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-black px-8"
                onClick={() => window.open(project.websiteUrl, '_blank')}
              >
                VISIT WEBSITE
              </Button>
            )}
          </div>

          {/* Contact Us Section */}
          <div className="bg-gradient-to-br from-gold/5 via-white/10 to-gold/5 backdrop-blur-md rounded-lg p-8 md:p-12 border border-gold/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
                CONTACT US!
              </h2>
              <p className="text-grey-light text-lg">
                Interested in working with us or learning more about this project?
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
