import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EpisodeHero from '../components/EpisodeHero'
import EpisodeContent from '../components/EpisodeContent'
import OtherEpisodes from '../components/OtherEpisodes'
import FAQ from '../components/FAQ'
import { siteConfig, attorney, contact, episode } from '@/data/siteData'
import type { Episode } from '@/lib/data'
import type { TranscriptSegment } from '@/lib/rss'

const SITE_URL = siteConfig.podcastUrl.replace(/\/$/, '')

type SchemaEpisode = {
  id?: number
  slug?: string
  number: number
  title: string
  description: string
  duration: string
  audioUrl?: string
  audioType?: string
}

export function generateEpisodeSchema(resolvedEpisode: Episode | null | undefined, episodeId: string) {
  const currentEpisode: SchemaEpisode = resolvedEpisode ?? episode
  const slugPart = resolvedEpisode?.slug ?? episodeId
  const episodeUrl = `${SITE_URL}/episode/${slugPart}`
  const rssFeedUrl = (siteConfig as { rssFeedUrl?: string }).rssFeedUrl

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${episodeUrl}#webpage`,
        'url': episodeUrl,
        'name': `${currentEpisode.title} | ${siteConfig.podcastName}`,
        'headline': currentEpisode.title,
        'description': currentEpisode.description,
        'inLanguage': 'en',
        'isPartOf': { '@id': `${SITE_URL}/#website` },
        'speakable': {
          '@type': 'SpeakableSpecification',
          'name': ['headline', 'description'],
        },
      },
      {
        '@type': 'PodcastEpisode',
        '@id': `${episodeUrl}#episode`,
        'name': currentEpisode.title,
        'description': currentEpisode.description,
        'url': episodeUrl,
        'episodeNumber': currentEpisode.number,
        'duration': `PT${currentEpisode.duration.replace(':', 'H').replace(':', 'M')}S`,
        'partOfSeries': { '@id': `${SITE_URL}/#podcast` },
        'productionCompany': { '@id': `${SITE_URL}/#org` },
        'associatedMedia': currentEpisode.audioUrl
          ? {
              '@type': 'MediaObject',
              'contentUrl': currentEpisode.audioUrl,
              'encodingFormat': currentEpisode.audioType || 'audio/mpeg',
            }
          : undefined,
        'speakable': {
          '@type': 'SpeakableSpecification',
          'name': ['name', 'description'],
        },
      },
      
      {
        '@type': ['LegalService', 'Organization'],
        '@id': `${SITE_URL}/#org`,
        'name': attorney.firm,
        'url': contact.website,
        'telephone': contact.phone,
        'email': contact.email,
      },
    ],
  }
}

interface V1EpisodePageProps {
  episodeId: string
  episode?: Episode | null
  allEpisodes?: Episode[]
  transcript?: TranscriptSegment[]
}

const V1EpisodePage = ({ episodeId, episode: rssEpisode, allEpisodes, transcript }: V1EpisodePageProps) => {
  const schema = generateEpisodeSchema(rssEpisode, episodeId)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header variant="light" />

      <main className="pt-[7rem] md:pt-[9rem]">
        <EpisodeHero episode={rssEpisode} />
        <EpisodeContent episode={rssEpisode} transcript={transcript} />
        <OtherEpisodes episodes={allEpisodes} />
        <FAQ />
      </main>

      <Footer episodes={allEpisodes} />
    </div>
  )
}

export default V1EpisodePage
