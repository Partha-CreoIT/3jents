import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CrewMember {
  name: string;
  role: string;
}

interface ProjectCardProps {
  title: string;
  type: string;
  posterUrl: string;
  bio: string;
  credits: string[];
  vimeoUrl?: string;
  youtubeUrl?: string;
  websiteUrl?: string;
  venue?: string;
  starring?: string[];
  crew?: CrewMember[];
  photos?: string[];
  isReversed?: boolean;
}

export default function ProjectCard({
  title,
  type,
  posterUrl,
  bio,
  credits,
  vimeoUrl,
  youtubeUrl,
  websiteUrl,
  venue,
  starring,
  crew = [],
  photos = [],
  isReversed = false,
}: ProjectCardProps) {
  return (
    <div className="bg-black/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
      <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Project Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg">
            <Image
              src={posterUrl}
              alt={title}
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="w-full lg:w-1/2 space-y-6 text-left">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gold mb-2">{title}</h3>
          <p className="text-white font-medium text-lg md:text-xl">{type}</p>
          {venue && (
            <p className="text-grey-light text-sm md:text-base mt-2">{venue}</p>
          )}
        </div>

        <div className="space-y-3">
          {credits.map((credit, index) => {
            const [label, ...rest] = credit.split(':');
            const value = rest.join(':').trim();
            return (
              <p key={index} className="text-grey-light text-sm md:text-base">
                <span className="text-gold font-semibold">{label}:</span> {value}
              </p>
            );
          })}
        </div>

        {starring && starring.length > 0 && (
          <div>
            <p className="text-gold font-semibold mb-2">Starring:</p>
            <p className="text-grey-light text-sm md:text-base">
              {starring.join(', ')}
            </p>
          </div>
        )}

        <p className="text-grey-light text-sm md:text-base leading-relaxed">
          {bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row gap-3 mt-6">
          {/* Vimeo Button - Only for first project */}
          {title === "You Can't Spell Assault Without Us" && vimeoUrl && (
            <a href={vimeoUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white border-0 px-6 py-3"
              >
                WATCH ON VIMEO
              </Button>
            </a>
          )}

        {/* Learn More Button */}
        <Link
          href={`/projects/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
          onClick={() => {
            // Store current scroll position before navigating
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
          }}
        >
          <Button
            size="lg"
            className="border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-white transition-colors px-8 py-3"
          >
            LEARN MORE
          </Button>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
