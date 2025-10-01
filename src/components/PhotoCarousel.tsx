'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoCarouselProps {
  photos: string[];
  title: string;
}

export default function PhotoCarousel({ photos, title }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const photosPerView = 4;
  const maxIndex = Math.max(0, photos.length - photosPerView);

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying || photos.length <= photosPerView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, photos.length, maxIndex]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  const resumeAutoPlay = () => setIsAutoPlaying(true);

  // Drag scroll logic
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging = true;
    setIsAutoPlaying(false);
    startX = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1; // speed factor
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging = true;
    setIsAutoPlaying(false);
    startX = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft = containerRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    isDragging = false;
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  if (photos.length === 0) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div
        ref={containerRef}
        className="relative h-48 md:h-56 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={resumeAutoPlay}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out h-full"
          style={{
            transform: `translateX(-${(currentIndex * 100) / photosPerView}%)`,
            width: `${(photos.length * 100) / photosPerView}%`,
          }}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative h-full flex-shrink-0"
              style={{ width: `${100 / photos.length}%` }}
            >
              <Image
                src={photo}
                alt={`${title} photo ${index + 1}`}
                fill
                className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 25vw, 20vw"
                priority={index < 4}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Nav Arrows */}
        {photos.length > photosPerView && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full h-10 w-10 opacity-70 hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full h-10 w-10 opacity-70 hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
