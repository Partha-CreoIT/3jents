'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/sections/SectionWrapper';
import { ArrowLeft } from 'lucide-react';

// Collaborations data
const collaborations = [
  {
    title: "Don't Believe in Ghosts Promo",
    filename: 'video.mp4',
    description: "A compelling promotional video showcasing our creative partnership with Don't Believe in Ghosts.",
    
    credits: [
      'In collaboration with Don\'t Believe in Ghosts',
      'Edited by Steven Nathan',
      'Shot by Nick Bella'
    ],
    year: '2024'
  }
];

export default function CollaborationsPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (filename: string) => {
    setSelectedVideo(filename);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          onClick={goBack}
          variant="ghost"
          className="text-gold hover:text-gold-light hover:bg-gold/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      {/* Title */}
      <div className="pt-20 pb-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gold mb-4"
        >
          Collaborations
        </motion.h1>
      </div>

      {/* Collaborations Grid */}
      <SectionWrapper className="bg-gradient-to-br from-black/40 via-gold/5 to-black/20 backdrop-blur-md py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <motion.div
                key={collab.filename}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/60 border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-all duration-300 cursor-pointer group"
                onClick={() => handleVideoClick(collab.filename)}
              >
                <div className="relative">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-black/80 flex items-center justify-center relative overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    >
                      <source src={`/video/${collab.filename}`} type="video/mp4" />
                    </video>

                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-gold/90 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-gold/90 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      {collab.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gold group-hover:text-gold-light transition-colors">
                        {collab.title}
                      </h3>
                    </div>
                    <p className="text-grey-light text-sm leading-relaxed mb-4">
                      {collab.description}
                    </p>

                    {/* Credits */}
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-gold/80 mb-2">Credits:</h4>
                      {collab.credits.map((credit, creditIndex) => (
                        <p key={creditIndex} className="text-xs text-grey-light leading-relaxed">
                          {credit}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: collaborations.length * 0.1 }}
              className="bg-black/60 border border-gold/20 rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gold mb-4">More Coming Soon</h4>
              <p className="text-grey-light text-sm leading-relaxed">
                We're constantly working on exciting new collaborations.
                Stay tuned for future partnerships and creative projects!
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Button
              onClick={closeModal}
              variant="ghost"
              className="absolute -top-12 right-0 text-white hover:text-gold z-10"
            >
              ✕ Close
            </Button>
            <video
              className="w-full h-auto max-h-[90vh] rounded-lg"
              controls
              autoPlay
              src={`/video/${selectedVideo}`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
