'use client'

import { Button } from '@/components/ui/button'

// All unique photography images
const allImages = [
  "/services/ASSAULT-055.webp",
  "/services/ASSAULT-057.webp",
  "/services/ASSAULT-063.webp",
  "/services/ASSAULT-073.webp",
  "/services/Dave and Boris Kill The Cat144.webp",
  "/services/Dave and Boris Kill The Cat146.webp",
  "/services/into the woods--049.webp",
  "/services/into the woods-best--08.webp",
  "/services/into the woods-best--18.webp",
  "/services/into the woods-best--19.webp",
  "/services/into the woods-best--22.webp",
  "/services/into the woods-best--36.webp",
  "/services/into the woods-best--39.webp",
  "/services/into the woods-best--49.webp",
  "/services/dbig-portfol-02.webp",
  "/services/dbig-portfol-04.webp",
  "/services/dbig-portfol-05.webp",
  "/services/dbig-portfol-06.webp",
  "/services/dbig-portfol-07.webp",
  "/services/dbig-portfol-19.webp",
  "/services/dbig-portfol-20.webp",
  "/services/WVVWfeD8.webp",
  "/services/qIvoC0Y4.webp"
]

// ✅ Credits section (Requirement 4.2)
const photoCredits = [
  "‘You Can’t Spell Assault Without Us’ - photographed by Aidan Samwick",
  "‘Don’t Believe in Ghosts at the Mercury Lounge’ - photographed by Nick Bella & Emma Cort",
  "‘Into The Woods, MakeLemonade Productions’ - photographed by Nick Bella",
  "‘Dave and Boris Kill the Cat, LoveChild Theater Co.’ - photographed by Aidan Samwick"
]

export default function PhotographyPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-black/20 via-gold/10 to-black/30 backdrop-blur-md text-white relative pt-20 md:pt-24">

      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-8">
            PROFESSIONAL PHOTOGRAPHY SERVICES
          </h1>
          <p className="text-lg md:text-xl italic text-gray-300 mb-12 leading-relaxed">
            "From the wildest concerts to artist headshots, we've got you covered. 
            3 Jokers Entertainment has several customizable packages to suit your photography needs and budget! 
            Packages start as low as $150 with our amazing in-house photographers. 
            Contact us to learn more."
          </p>

          {/* CTA Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfjprDcsRwg3daCue2P3Gmly1E4BWohu9tAXmkiXLEjzBLeaw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-black font-bold px-10 py-4 text-lg rounded-full border-2 border-gold hover:border-gold-light transition-all duration-300"
            >
              Let’s get started →
            </Button>
          </a>
        </div>
      </section>

      {/* ✅ Image Gallery Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black relative">
        {/* Background overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10">
          <div
            id="masonry-container"
            className="max-w-7xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {allImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="break-inside-avoid mb-4"
              >
                <img
                  src={src}
                  alt={`Photography work ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-800/50"
                  style={{
                    filter: 'brightness(0.95) contrast(1.05)',
                    height: `${[200, 250, 300, 350, 400, 280, 320, 380][index % 8]}px`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer Section */}
      <footer className="py-12 px-4 bg-gradient-to-t from-black via-gray-900/50 to-gray-900/30 border-t-2 border-gold/40 text-center relative">
        {/* Background overlay for better visibility */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gold mb-8 drop-shadow-lg">PHOTO CREDITS</h3>
          <div className="space-y-3 text-gray-200 max-w-3xl mx-auto bg-black/20 p-6 rounded-lg border border-gold/20">
            {photoCredits.map((credit, index) => {
              const [projectName, photographerInfo] = credit.split(' - photographed by ');
              return (
                <p key={index} className="text-sm md:text-base leading-relaxed">
                  <span className="text-gold font-semibold">{projectName.replace(/['"]/g, '')}</span>
                  {' - photographed by '}
                  <span className="text-gray-300">{photographerInfo}</span>
                </p>
              );
            })}
          </div>

          {/* Final CTA Button */}
          <div className="mt-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfjprDcsRwg3daCue2P3Gmly1E4BWohu9tAXmkiXLEjzBLeaw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-black font-bold px-8 py-3 text-base rounded-full border-2 border-gold hover:border-gold-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let’s Get Started →
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}