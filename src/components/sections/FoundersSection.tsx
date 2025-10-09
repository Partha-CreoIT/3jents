import Image from 'next/image';
import { motion } from 'framer-motion';

interface Founder {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

interface FoundersSectionProps {
  founders: Founder[];
}

export default function FoundersSection({ founders }: FoundersSectionProps) {
  return (
    <section className="bg-gradient-to-br from-white/15 via-gold/8 to-white/25 backdrop-blur-md py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gold mb-6">
            Meet Our Founders
          </h3>
          <p className="text-grey-light max-w-2xl mx-auto text-lg">
            The visionaries behind 3JE Productions, bringing together their unique
            talents and experiences to create something truly special.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Image Section */}
              <div className="flex-shrink-0 w-full lg:w-1/2">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-2xl group cursor-pointer transition-all duration-500 border-2 border-transparent hover:border-gold">
                  <Image
                    src={founder.imageUrl}
                    alt={founder.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-500 group-hover:from-black/40" />
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content Section */}
              <div className={`flex-1 text-left ${
                index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
              }`}>
                <div className={`space-y-6 ${index === 1 ? '' : ''}`} style={index === 1 ? { maxWidth: '600px' } : {}}>
                  <div className={`text-left ${index !== 1 && index % 2 !== 0 ? 'lg:text-right' : ''}`}>
                    <h4 className="text-2xl md:text-3xl font-bold text-gold mb-2">
                      {founder.name}
                    </h4>
                    <p className="text-lg md:text-xl text-white font-medium">
                      {founder.role}
                    </p>
                  </div>
                  <div className={`flex flex-col ${index !== 1 && index % 2 !== 0 ? 'lg:items-end' : 'items-start'}`}>
                      <span className="block h-1 w-24 bg-gradient-to-r from-gold to-gold-light rounded-full mb-4" />
                    </div>
                  <p className={`text-grey-light text-lg md:text-xl leading-relaxed max-w-2xl text-left ${
                    index !== 1 && index % 2 !== 0 ? 'lg:text-right lg:ml-auto' : 'mx-auto lg:mx-0'
                  }`}>
                    {founder.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
