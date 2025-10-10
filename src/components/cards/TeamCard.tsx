import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamCardProps {
  name: string;
  pronouns?: string;
  role: string;
  bio: string;
  imageUrl?: string;
  instagramUrl?: string;
  websiteUrl?: string;
  trades?: string[];
}

export default function TeamCard({
  name,
  pronouns,
  role,
  bio,
  imageUrl,
  websiteUrl,
  trades = []
}: TeamCardProps) {
  return (
    <Card className="bg-black/50 border-gold/20 overflow-hidden hover:border-gold/40 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 group py-0">
      {imageUrl && (
        <div className="relative h-[32rem] md:h-[36rem] w-full overflow-hidden rounded-t-xl">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={576}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              console.error('Image failed to load:', imageUrl, e);
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', imageUrl);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <CardContent className={imageUrl ? "p-6 md:p-8" : "p-6 md:p-8 pt-8"}>
        <div className="space-y-4 md:space-y-6">
          <div className="min-h-[4rem] md:min-h-[5rem]">
            <h3 className="text-xl md:text-2xl font-semibold text-gold">{name}</h3>
            {pronouns && (
              <p className="text-sm text-grey-light">{pronouns}</p>
            )}
            <p className="text-white font-medium text-base md:text-lg leading-tight">{role}</p>
          </div>

          {trades.length > 0 && (
            <div>
              <p className="text-sm text-grey-light mb-2">Trades:</p>
              <div className="flex flex-wrap gap-2">
                {trades.map((trade) => (
                  <span
                    key={trade}
                    className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full"
                  >
                    {trade}
                  </span>
                ))}
              </div>
            </div>
          )}

          <p className="text-grey-light text-sm md:text-base leading-relaxed">{bio}</p>

          {websiteUrl && (
  <div className="flex space-x-2">
    <Button
      size="sm"
      asChild
      className="group border-white text-black bg-white hover:bg-gold hover:text-black hover:border-gold"
    >
      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1"
      >
        <ExternalLink className="h-4 w-4 text-black group-hover:text-black transition-colors duration-200" />
        <span>Portfolio</span>
      </a>
    </Button>
  </div>
)}
        </div>
      </CardContent>
    </Card>
  );
}
