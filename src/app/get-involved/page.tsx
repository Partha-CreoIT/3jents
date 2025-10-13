'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink, Home } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Photos for the image row
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

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ---------------- BACKGROUND LAYERS ---------------- */}
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />

      {/* Ambient gold lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,215,0,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,215,0,0.1),transparent_70%)]" />

      {/* Subtle animated shimmer */}
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,215,0,0.05),transparent_60%)] animate-spin-slow" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "url('/textures/noise.png')",
          backgroundSize: '150px 150px',
        }}
      />

      {/* ---------------- PAGE CONTENT ---------------- */}
      <div className="relative z-10">
        {/* Home Button */}
        <div className="absolute top-6 left-6 z-20">
          <Button
            asChild
            variant="ghost"
            className="text-gold hover:text-gold-light hover:bg-gold/10"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </Button>
        </div>

        {/* Main Header Section */}
        <section className="relative py-16 px-4 bg-black/70 backdrop-blur-sm border-t border-b border-gold/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gold leading-tight font-heading">
                Submit to be a part of the 3 Jokers
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

        {/* Horizontal Image Scroll */}
        <section className="relative py-8 px-4 bg-black/60 backdrop-blur-md border-t border-b border-gold/10">
          <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 min-w-max">
              {communityPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="w-60 h-60 flex-shrink-0 bg-black/40 rounded-lg overflow-hidden border border-gold/20 hover:border-gold/40 transition-all"
                >
                  <Image
                    src={photo}
                    alt={`Get involved image ${index + 1}`}
                    width={240}
                    height={240}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-16 px-4 bg-black/70 backdrop-blur-md border-t border-gold/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8">CONTACT US</h2>
            <form
              action="https://formspree.io/f/xldpobek"
              method="POST"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            >
              {/* First Name */}
              <div>
                <label className="block text-gold mb-2 font-semibold">First Name</label>
                <input
                  type="text"
                  name="First Name"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 rounded-md bg-black/70 text-white border border-gold/30 focus:border-gold outline-none transition"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gold mb-2 font-semibold">Last Name</label>
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3 rounded-md bg-black/70 text-white border border-gold/30 focus:border-gold outline-none transition"
                  required
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-gold mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-md bg-black/70 text-white border border-gold/30 focus:border-gold outline-none transition"
                  required
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-gold mb-2 font-semibold">Message</label>
                <textarea
                  name="Message"
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-black/70 text-white border border-gold/30 focus:border-gold outline-none transition resize-none"
                  required
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
    </div>
  )
}