import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  type: string;
  posterUrl: string;
  bio: string;
  credits: string[];
  vimeoUrl?: string;
  youtubeUrl?: string;
  websiteUrl?: string;
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
}: ProjectCardProps) {
  return (
    <Card className="bg-black/50 border-gold/20 overflow-hidden hover:border-gold/40 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 group py-0">
      <div className="relative h-[32rem] md:h-[36rem] w-full overflow-hidden rounded-t-xl">
        <Image
          src={posterUrl}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6 md:p-8">
        <div className="space-y-4 md:space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gold">{title}</h3>
            <p className="text-white font-medium text-base md:text-lg">{type}</p>
          </div>

          <p className="text-grey-light text-sm md:text-base leading-relaxed">{bio}</p>

          <div>
            <div className="flex items-center space-x-1 mb-2">
              <Users className="h-4 w-4 text-grey-light" />
              <span className="text-sm text-grey-light">Credits:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {credits.map((credit) => (
                <span
                  key={credit}
                  className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full"
                >
                  {credit}
                </span>
              ))}
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
