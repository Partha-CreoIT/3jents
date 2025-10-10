'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CrewMember {
  name: string;
  role: string;
}

interface Project {
  title: string;
  type: string;
  posterUrl: string;
  credits: string[];
  vimeoUrl?: string;
  venue?: string;
  crew: CrewMember[];
  photos: string[];
  bio?: string;
  starring?: string[];
  youtubeUrl?: string;
  websiteUrl?: string;
}

// Project data - in a real app, this would come from a database or API
const projectsData: Record<string, Project> = {
  'you-can-t-spell-assault-without-us': {
    title: "You Can't Spell Assault Without Us",
    type: 'World Premiere - Theatrical Play',
    posterUrl: '/pastwork/youcant.jpeg',
    credits: ['Written & Directed by Naira Sarin Jain', 'Starring - Leah Davidowitz, Nick Bella, Vivian Hunt'],
    vimeoUrl: 'https://na688.vhx.tv/checkout/you-can-t-spell-assault-without-us/purchase',
    venue: 'NYC Fringe Theater Festival l Chain Theater 312 West 36th Street, NY 10018',
    crew: [
      { name: 'Naira Sarin Jain', role: 'Written and Produced by' },
      { name: '3 Jokers Entertainment', role: 'Executive producer' },
      { name: 'Naira Sarin Jain', role: 'Director' },
      { name: 'Leah Davidowitz', role: 'Natalie' },
      { name: 'Nick Bella', role: 'Aiden' },
      { name: 'Vivian Hunt', role: 'Kid' },
      { name: 'JB Belinato & John Ecker', role: 'Run Crew' },
      { name: 'Zara Lemieux', role: 'Stage Manager' },
      { name: 'Tucker Forebeck', role: 'Sound Designer' },
      { name: 'Aidan Samwick', role: 'Photography' }
    ],
    photos: [
      '/ycsawu/FINAL-WEB-YCSAWU-01.webp',
      '/ycsawu/FINAL-WEB-YCSAWU-03.webp',
      '/ycsawu/FINAL-WEB-YCSAWU-04.webp',
      '/ycsawu/FINAL-WEB-YCSAWU-05.webp',
      '/ycsawu/FINAL-WEB-YCSAWU-06.webp',
      '/ycsawu/FINAL-WEB-YCSAWU-07.webp',
      '/ycsawu/FINAL-WEB-YCSAWU-08.webp',
      '/ycsawu/FINAL-WEB-YCSAWU-09.webp',
      '/ycsawu/FINAL-WEB-YCSAWU-10.webp',
      '/ycsawu/FINAL-WEB-YCSAWU-11.webp',
      '/ycsawu/FINAL-WEB-YCSAWU-12.webp'
    ]
  },
  'sometimes-a-collection-of-poems-about-the-progression-of-an-ending': {
    title: 'Sometimes: A Collection of Poems About the Progression of an Ending',
    type: 'Short Film',
    posterUrl: '/pastwork/somtimes_poster.jpeg',
    credits: ['Produced by: Nick Bella', 'Written & Directed by: Alexandra Blanco & Winter Kay McVey'],
    vimeoUrl: 'https://vimeo.com/123456790',
    websiteUrl: 'https://sometimes-film.com',
    crew: [
      { name: 'Nick Bella', role: 'PRODUCER' },
      { name: 'Alexandra Blanco', role: 'WRITER' },
      { name: 'Winter Cam McVey, Alexandra Blanco', role: 'DIRECTOR' },
      { name: '3 Jokers Entertainment & Nick Bella', role: 'Executive Producer' },
      { name: 'Alexandra Blanco & Aidan Samwick', role: 'CAST' },
      { name: 'Aidam Samwick', role: 'DP' },
      { name: 'Olivia Martin & Nick Bella', role: 'AD' },
      { name: 'Nick Bella', role: 'Camera Op 2' },
      { name: 'Olivia Martin & Nick Bella', role: '2nd AC' },
      { name: 'Jacob Dean', role: 'Editor' },
      { name: 'Alexandra Blanco', role: 'Associate Producer' },
      { name: 'Carl Coetzee', role: 'Gaffer' },
      { name: 'Safin Karim', role: 'Composer' },
      { name: 'Naira Sarin Jain', role: 'Intimacy Coordinator' },
      { name: 'Tom Brecker', role: 'Sound Technician' },
      { name: 'Alexandra Blanco & Nick Bella', role: 'Location scouting' }
    ],
    photos: [
      '/sometimes/FILM-STILL-1.webp',
      '/sometimes/STILL-2-JPEG.webp',
      '/sometimes/STILL-3-JPEG.webp',
      '/sometimes/STILL-4-JPEG.webp',
      '/sometimes/STILL-5-JPEG.webp',
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
      { name: 'Nick Bella', role: 'Written & Produced by' },
      { name: 'Joseph Bodner', role: 'Director' },
      { name: 'Patrice Yip', role: 'Associate Producer' },
      { name: 'Aidan Samwick', role: 'Teacher' },
      { name: 'Olivia Martin', role: 'Stacy' },
      { name: 'Nick Bella', role: 'Dave' },
      { name: 'Sara Angela Gomez', role: 'DP' },
      { name: 'Carl Coetzee', role: 'Gaffer' },
      { name: 'Aydin Byrd', role: 'Grip' },
      { name: 'Philip Drafta', role: 'Swing' },
      { name: 'MengNa Zhang', role: 'Sound Mixer, Boom Operator' },
      { name: 'Naira Sarin Jain', role: 'Production design / Costumes' },
      { name: 'John Ecker', role: 'Production assistant' }
    ],
    photos: [
      '/slaps/1H3.00_00_13_04.Still006.webp',
      '/slaps/1H3.00_00_26_05.Still010.webp',
      '/slaps/1H3.00_00_54_20.Still012.webp',
      '/slaps/1H3.00_01_14_04.Still014.webp',
      '/slaps/1H3.00_02_29_04.Still016.webp',
      '/slaps/1H3.00_02_38_15.Still009.webp',
      '/slaps/1H3.00_06_21_22.Still005.webp',
      '/slaps/1H3.00_06_26_05.Still001.webp'
    ]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug as string;
    const foundProject = projectsData[slug];
    setProject(foundProject);
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black/20 via-gold/10 to-black/30 backdrop-blur-md flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black/20 via-gold/10 to-black/30 backdrop-blur-md flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black/20 via-gold/10 to-black/30 text-white">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="border-gold text-gold hover:bg-gold hover:text-white font-semibold px-8 py-3 font-accent"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>

      <div className="pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Project Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4 font-heading">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white font-accent">
              by {project.credits[0]?.split('by ')[1] || '3 Jokers Entertainment'}
            </p>
          </div>

          {/* Production Photos Scrollable Gallery */}
<div className="mb-12">
  <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8 text-center font-heading">
    PRODUCTION PHOTOS
  </h2>

  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex space-x-4 min-w-max px-2">
      {project.photos.map((photo, index) => (
        <div
          key={index}
          className="flex-shrink-0 rounded-lg overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-300 bg-black/40"
        >
          <Image
            src={photo}
            alt={`${project.title} photo ${index + 1}`}
            width={400}
            height={256}
            className="h-56 md:h-64 w-auto object-contain rounded-lg"
          />
        </div>
      ))}
    </div>
  </div>
</div>

          {/* Crew and Cast Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8 text-center font-heading">
              CAST & CREW
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.crew.map((member: { name: string; role: string }, index: number) => (
                <div key={index} className="bg-black/50 rounded-lg border border-gold/20 p-4 hover:border-gold/40 transition-colors">
                  <div className="space-y-1">
                    <div className="text-gold text-xs font-semibold uppercase tracking-wider leading-tight">
                      {member.role}
                    </div>
                    <div className="text-white font-medium text-sm leading-tight">
                      {member.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          

          {/* Contact Us Section */}
          <div className="bg-black/60 rounded-lg p-8 md:p-12 border border-gold/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 font-heading">
                CONTACT US!
              </h2>
              <p className="text-grey-light text-lg mb-6">
                Interested in working with us or learning more about this project?
              </p>
            </div>

            {/* Contact Form */}
            <div className="max-w-md mx-auto">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-md text-white placeholder-grey-light focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-md text-white placeholder-grey-light focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-md text-white placeholder-grey-light focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Write a message"
                    className="w-full px-4 py-3 bg-white/10 border border-gold/30 rounded-md text-white placeholder-grey-light focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-black font-semibold py-3 px-6 rounded-md transition-colors"
                >
                  Submit
                </Button>
              </form>
              <p className="text-center text-grey-light text-sm mt-4">
                Thanks for submitting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

