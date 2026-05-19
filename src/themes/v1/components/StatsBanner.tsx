'use client'

import React from 'react'
import { Star, ThumbsUp, Briefcase } from 'lucide-react'
import { stats } from '@/data/siteData'

type StatCard = {
  key: 'rating' | 'satisfaction' | 'cases'
  value: string
  label: string
  verb: string
  bg: string
  valueColor: string
  iconColor: string
  bodyColor: string
  Icon: typeof Star
  iconFill?: string
}

const StatsBanner = () => {
  const cards: StatCard[] = []

  if (stats.rating && Number(stats.rating) > 0) {
    cards.push({
      key: 'rating',
      value: String(stats.rating),
      label: 'Positive Reviews',
      verb: stats.ratingVerbalization || '',
      bg: 'bg-secondary',
      valueColor: 'text-white',
      iconColor: 'text-white',
      bodyColor: 'text-white/85',
      Icon: Star,
      iconFill: 'currentColor',
    })
  }

  if (stats.satisfactionRate && Number(stats.satisfactionRate) > 0 && stats.satisfactionLabel) {
    cards.push({
      key: 'satisfaction',
      value: `${stats.satisfactionRate}%`,
      label: stats.satisfactionLabel,
      verb: stats.satisfactionVerbalization || '',
      bg: 'bg-primary',
      valueColor: 'text-secondary',
      iconColor: 'text-secondary',
      bodyColor: 'text-white/80',
      Icon: ThumbsUp,
      iconFill: 'currentColor',
    })
  }

  if (stats.casesHandled && Number(stats.casesHandled) > 0 && stats.casesLabel) {
    cards.push({
      key: 'cases',
      value: `${stats.casesHandled}+`,
      label: stats.casesLabel,
      verb: stats.casesVerbalization || '',
      bg: 'bg-secondary',
      valueColor: 'text-white',
      iconColor: 'text-white',
      bodyColor: 'text-white/85',
      Icon: Briefcase,
    })
  }

  if (cards.length === 0) return null

  const gridCols =
    cards.length === 1
      ? 'sm:grid-cols-1 md:grid-cols-1'
      : cards.length === 2
      ? 'sm:grid-cols-2 md:grid-cols-2'
      : 'sm:grid-cols-2 md:grid-cols-3'

  return (
    <section className="bg-white py-0 md:py-12">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
          {cards.map(({ key, value, label, verb, bg, valueColor, iconColor, bodyColor, Icon, iconFill }) => (
            <div key={key} className={`${bg} rounded-3xl px-6 py-8 md:px-5 md:py-10 text-left`}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <span className={`${valueColor} text-4xl md:text-6xl font-bold`}>{value}</span>
                <Icon size={56} className={iconColor} fill={iconFill} />
              </div>
              <p className="text-white text-xl md:text-2xl font-bold mb-3">{label}</p>
              {verb && (
                <p className={`${bodyColor} text-sm md:text-base leading-relaxed`}>{verb}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBanner
