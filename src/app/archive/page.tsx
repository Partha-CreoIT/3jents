'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/sections/SectionWrapper';
import { ArrowLeft } from 'lucide-react';

// Reels data with proper titles and descriptions
const reels = [
  {
    title: 'Shiesty',
    filename: 'Shiesty v2.mov',
    description: 'A dynamic short exploring street culture and urban narratives.',
    type: 'Short Film'
  },
  {
    title: 'Foot Driver',
    filename: 'FootDriver-FINALMOV.mov',
    description: 'An action-packed comedy following an unlikely hero behind the wheel.',
    type: 'Comedy Short'
  },
  {
    title: 'Bathroom Restock',
    filename: 'Bathroom-Restock-final-2.mp4',
    description: 'A hilarious take on everyday workplace absurdity.',
    type: 'Sketch Comedy'
  },
  {
    title: 'Water With Random Shit Cut Up In It',
    filename: 'WaterWithRandomSh_tCutUpInIt-final.MOV',
    description: 'An experimental piece blending humor and surreal elements.',
    type: 'Experimental Short'
  }
];

export default function ArchivePage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});

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
    <div className="min-h-screen bg-gradient-to-br from-black/20 via-gold/10 to-black/30 backdrop-blur-md">
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
          Our Archive
        </motion.h1>
      </div>

      {/* Reels Grid */}
      <SectionWrapper className="bg-gradient-to-br from-black/40 via-gold/5 to-black/20 backdrop-blur-md py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.filename}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/60 border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-all duration-300 cursor-pointer group"
                onClick={() => handleVideoClick(reel.filename)}
              >
                <div className="relative">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-black/80 flex items-center justify-center relative">
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[reel.filename] = el;
                      }}
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
                      <source src={`/reels/${reel.filename}`} type={`video/${reel.filename.split('.').pop() === 'mov' ? 'quicktime' : 'mp4'}`} />
                    </video>

                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-gold/90 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gold group-hover:text-gold-light transition-colors">
                        {reel.title}
                      </h3>
                      <span className="text-xs text-gold/60 bg-gold/10 px-2 py-1 rounded-full ml-2">
                        {reel.type}
                      </span>
                    </div>
                    <p className="text-grey-light text-sm leading-relaxed">
                      {reel.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              src={`/reels/${selectedVideo}`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
