'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/sections/SectionWrapper';
import Carousel from '@/components/sections/Carousel';
import ContactForm from '@/components/forms/ContactForm';

// Placeholder carousel items - replace with actual content
const carouselItems = [
  {
    id: '1',
    imageUrl: '/placeholder-poster-1.jpg',
    alt: 'Production poster 1',
    title: 'Latest Production',
    description: 'Check out our most recent work',
  },
  {
    id: '2',
    imageUrl: '/placeholder-poster-2.jpg',
    alt: 'Production poster 2',
    title: 'Collaborator Spotlight',
    description: 'Featuring amazing talent from our network',
  },
  {
    id: '3',
    imageUrl: '/placeholder-poster-3.jpg',
    alt: 'Production poster 3',
    title: 'Behind the Scenes',
    description: 'See the magic happen',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://minio-4.creox.dev/api/v1/download-shared-object/aHR0cDovLzEyNy4wLjAuMTo5MDAwL3B1YmxpY3N0b3JhZ2UvQnJvb2tseW4lMjBCYWJ5JTIwUHJvbW8lMjAtJTIwTmljayUyMEJlbGxhJTIwXyUyMERCSUcubXA0P1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9OE9JNjFQSEJZNjNCMlVRSjRIVlMlMkYyMDI1MDkyMyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA5MjNUMTEyNjQ0WiZYLUFtei1FeHBpcmVzPTQzMjAwJlgtQW16LVNlY3VyaXR5LVRva2VuPWV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoWTJObGMzTkxaWGtpT2lJNFQwazJNVkJJUWxrMk0wSXlWVkZLTkVoV1V5SXNJbVY0Y0NJNk1UYzFPRFkyT0RnNE5pd2ljR0Z5Wlc1MElqb2liV2x1YVc5aFpHMXBiaUo5LjB2bzNCX0pTeDZZV2V1Um4xMXFqWG5KdnVCLTdma0c4U2JiTF9UUnhPVzdqZlJzalpXclBuTnllRFZLM2d1eFZxZTltN09qYzFXWWtoTWl5MlNaMmRnJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9MjkzMzQwZDNjOTgwNzY2ZWY0Njg0MWJjYTdhODcwODZiNWRjM2ZmNWJhNGQyMDA5NGU5NjBmYjZmYzVmMWI5Yw" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-gold font-heading"
            >
              3 Jokers Entertainment
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-accent tracking-wide"
            >
              Theater & Film Collective
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/90 max-w-3xl mx-auto font-body"
            >
              Creating compelling stories through live performance and cinematic excellence. A dynamic collective of artists dedicated to collaborative storytelling.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 font-accent"
              >
                <Link href="/work">
                  Explore Our Work
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-white font-semibold px-8 py-3 font-accent"
              >
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Media Carousel Section */}
      <SectionWrapper className="bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 font-heading">
              Recent Productions
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto font-body">
              Explore our latest theatrical and cinematic works, featuring incredible talent and collaborative storytelling
            </p>
          </div>
          <Carousel
            items={carouselItems}
            autoPlay={true}
            autoPlayInterval={4000}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 font-heading">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-grey-light max-w-2xl mx-auto font-body">
              Let's collaborate on your next theatrical or cinematic project. Reach out to discuss your vision and how we can bring it to life together.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
