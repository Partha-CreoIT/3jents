import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon?: React.ReactNode;
  comingSoon?: boolean;
}

export default function ServiceCard({
  title,
  description,
  features,
  icon,
  comingSoon = false,
}: ServiceCardProps) {
  return (
    <Card className={`bg-black/50 border-gold/20 hover:border-gold/40 transition-colors h-full flex flex-col ${
      comingSoon ? 'opacity-75' : ''
    }`}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="p-2 bg-gold/10 rounded-lg">
              {icon}
            </div>
          )}
          <div>
            <CardTitle className="text-gold text-xl">{title}</CardTitle>
            {comingSoon && (
              <span className="text-xs text-yellow bg-yellow/10 px-2 py-1 rounded-full">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="flex-grow space-y-4">
          <p className="text-grey-light leading-relaxed">{description}</p>

          <div>
            <h4 className="text-white font-medium mb-2">What we offer:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-grey-light text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button
          className={`w-full mt-6 ${
            comingSoon
              ? 'bg-grey-dark hover:bg-grey-dark text-grey cursor-not-allowed'
              : 'bg-gold hover:bg-gold-light text-black'
          }`}
          disabled={comingSoon}
        >
          {comingSoon ? (
            'Coming Soon'
          ) : (
            <>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
