'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

// Get Involved community photos
const communityPhotos = [
  '/getinvolved/_DSC0615.webp',
  '/getinvolved/ASSAULT-104.webp',
  '/getinvolved/DSC06306.webp',
  '/getinvolved/IMG_2602.webp',
  '/getinvolved/IMG_3373.webp',
  '/getinvolved/IMG_3409.webp',
  '/getinvolved/IMG_3515.webp',
  '/getinvolved/IMG_6263.webp',
]

export default function GetInvolvedPage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const nextPhoto = () => setCurrentPhotoIndex((p) => (p + 1) % communityPhotos.length)
  const prevPhoto = () => setCurrentPhotoIndex((p) => (p - 1 + communityPhotos.length) % communityPhotos.length)

  useEffect(() => {
    const timer = setInterval(nextPhoto, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_theme(colors.gold)_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_theme(colors.gold)_0%,_transparent_50%)] opacity-20"></div>
      </div>

      {/* Main Section */}
      <section className="relative py-16 px-4 bg-black/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gold font-heading leading-tight">
              SUBMIT TO STONER COMEDY
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gold font-heading">
              CREATIVE TEAM
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-black font-bold px-8 py-3 text-base rounded-full border-2 border-gold hover:border-gold-light transition-all duration-300"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe1LWiL2EC4YH3apvcswodc3So-IBxWZL6szvis2HrgoShhFw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>NEW MEMBER APPLICATION</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-black font-bold px-8 py-3 text-base rounded-full border-2 border-gold hover:border-gold-light transition-all duration-300"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe1LWiL2EC4YH3apvcswodc3So-IBxWZL6szvis2HrgoShhFw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>NEW WORKS SUBMISSION</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Image Row */}
      <section className="relative py-8 px-4 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 min-w-max">
            {communityPhotos.map((photo, index) => (
              <div
                key={index}
                className="w-60 h-60 flex-shrink-0 bg-black/40 rounded-lg overflow-hidden border border-gold/20 hover:border-gold/40 transition-all"
              >
                <img
                  src={photo}
                  alt={`Get involved image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 px-4 bg-black/70 backdrop-blur-sm text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8">CONTACT US</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          >
            {/* First Name */}
            <div>
              <label className="block text-gold mb-2 font-semibold">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-3 rounded-md bg-black/70 text-white border border-gold/30 focus:border-gold outline-none transition"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gold mb-2 font-semibold">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-3 rounded-md bg-black/70 text-white border border-gold/30 focus:border-gold outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-gold mb-2 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-md bg-black/70 text-white border border-gold/30 focus:border-gold outline-none transition"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gold mb-2 font-semibold">Message</label>
              <textarea
                placeholder="Write your message..."
                rows={5}
                className="w-full px-4 py-3 rounded-md bg-black/70 text-white border border-gold/30 focus:border-gold outline-none transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-4">
              <Button
                type="submit"
                size="lg"
                className="bg-gold hover:bg-gold-light text-black font-bold px-10 py-3 rounded-full border-2 border-gold hover:border-gold-light transition-all duration-300"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}