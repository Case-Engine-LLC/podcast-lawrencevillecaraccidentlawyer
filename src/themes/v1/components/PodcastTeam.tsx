'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { podcastTeam } from '@/data/siteData'

const PodcastTeam = () => {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const teamMembers = podcastTeam.map(member => ({
    name: member.name,
    title: member.role,
    image: member.photo,
    bio: member.bio,
    slug: member.slug,
  }))

  const nextSlide = () => {
    setDirection('right')
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setDirection('left')
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const handleAuthorClick = (slug: string) => {
    router.push(`/author/${slug}`)
  }

  return (
    <>
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
      <section className="relative bg-primary pt-20 md:pt-28 pb-16 md:pb-20 overflow-hidden">
      {/* Section header */}
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-12 text-center mb-10 md:mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-px bg-secondary" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-secondary">
            The Team
          </span>
          <div className="w-12 h-px bg-secondary" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Behind the Podcast
        </h2>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-12">
        {/* Mobile Slider */}
        <div className="relative md:hidden">
          <div className="w-full overflow-hidden rounded-2xl bg-white/5">
            <img
              key={currentSlide}
              src={teamMembers[currentSlide].image}
              alt={teamMembers[currentSlide].name}
              className="max-h-[34rem] w-full object-contain object-bottom"
              style={{
                animation: direction === 'right'
                  ? 'slideInRight 0.5s ease-out'
                  : 'slideInLeft 0.5s ease-out'
              }}
            />

          </div>

          {/* Keep the profile card below the portrait so it never covers the subject. */}
          <div
            onClick={() => handleAuthorClick(teamMembers[currentSlide].slug)}
            className="mt-4 cursor-pointer rounded-2xl bg-white p-4 shadow-lg transition-shadow hover:shadow-xl"
          >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <img
                    src={teamMembers[currentSlide].image}
                    alt={teamMembers[currentSlide].name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {teamMembers[currentSlide].name}
                    </h3>
                    <p className="text-xs text-gray-600">{teamMembers[currentSlide].title}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleAuthorClick(teamMembers[currentSlide].slug)
                  }}
                  className="bg-secondary hover:bg-secondary-hover text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
                >
                  All Episodes
                </button>
              </div>
              <p className="text-gray-700 text-xs leading-relaxed">{teamMembers[currentSlide].bio}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className={`hidden md:grid gap-6 ${teamMembers.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-2'}`}>
          {teamMembers.map((member, index) => (
            <div key={index} className="flex w-full flex-col">
              <div className="overflow-hidden rounded-2xl bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="max-h-[42rem] w-full object-contain object-bottom"
                />
              </div>

              {/* Keep the profile card below the portrait so it never covers the subject. */}
              <div
                onClick={() => handleAuthorClick(member.slug)}
                className="mt-4 cursor-pointer rounded-2xl bg-white p-5 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.title}</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAuthorClick(member.slug)
                    }}
                    className="bg-secondary hover:bg-secondary-hover text-white text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap"
                  >
                    All Episodes
                  </button>
                </div>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default PodcastTeam
