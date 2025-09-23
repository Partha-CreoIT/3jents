import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Instagram } from 'lucide-react';
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
  instagramUrl,
  websiteUrl,
  trades = []
}: TeamCardProps) {
  return (
    <Card className="bg-black/50 border-gold/20 overflow-hidden hover:border-gold/40 transition-colors">
      {imageUrl && (
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardContent className={imageUrl ? "p-6" : "p-6 pt-8"}>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gold">{name}</h3>
            {pronouns && (
              <p className="text-sm text-grey-light">{pronouns}</p>
            )}
            <p className="text-white font-medium">{role}</p>
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

          <p className="text-grey-light text-sm leading-relaxed">{bio}</p>

          {websiteUrl && (
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Website</span>
                </a>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
