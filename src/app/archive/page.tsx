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
    description: 'Mom said we look nice!',
    type: 'Comedy Short'
  },
  {
    title: 'Water With Random Shit Cut Up In It',
    filename: 'WaterWithRandomSh_tCutUpInIt-final.MOV',
    description: 'An experimental piece blending humor and surreal elements.',
    type: 'Experimental Short'
  },
  {
    title: 'Bathroom Restock',
    filename: 'Bathroom-Restock-final-2.mp4',
    description: 'A mother does what she can for her son.',
    type: 'Sketch Comedy'
  },
  {
    title: 'Foot Driver',
    filename: 'FootDriver-FINALMOV.mov',
    description: 'Lemme drive the boat - Kodak Black',
    type: 'Comedy Short'
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
          Shorts & Reels
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-grey-light max-w-2xl mx-auto"
        >
          Our complete archive of shorts, past projects, and creative explorations
        </motion.p>
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

      {/* Instagram CTA Section */}
      <SectionWrapper className="bg-gradient-to-br from-black/60 via-gold/10 to-black/40 backdrop-blur-md py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Check out our Instagram
            </h2>
            <p className="text-lg md:text-xl text-grey-light mb-8">
              Follow <span className="text-gold font-semibold">@3jents</span> for more behind-the-scenes content, project updates, and creative inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full"
              >
                <a
                  href="https://www.instagram.com/3jents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Follow @3jents</span>
                </a>
              </Button>
            </div>
          </motion.div>
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
