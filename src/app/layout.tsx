import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { MarkerWidget } from '@/components/MarkerWidget'
import SchemaJsonLd from '@/components/SchemaJsonLd'
import { about, attorney, authorProfiles, contact, siteConfig } from '@/data/siteData'
import './globals.css'
import '@/themes/v1/variables.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

const SITE_URL =
  siteConfig.podcastUrl?.replace(/\/$/, '') ||
  contact.website?.replace(/\/$/, '') ||
  'https://podcast-lawrencevillecaraccidentlawyer.vercel.app'
const TITLE = siteConfig.podcastName
const DESCRIPTION = about.description
const hostProfile = Object.values(authorProfiles)[0]
const HOST_NAME = hostProfile?.name || attorney.name
const FIRM_NAME = attorney.firm

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`,
  },
  description: DESCRIPTION,
  applicationName: TITLE,
  authors: [{ name: HOST_NAME, url: contact.website || SITE_URL }],
  keywords: [
    TITLE,
    HOST_NAME,
    FIRM_NAME,
    'Lawrenceville car accident attorney',
    'Lawrenceville personal injury lawyer',
    'Gwinnett County car accident attorney',
    'Gwinnett County truck accident lawyer',
    'Atlanta personal injury lawyer',
    'Atlanta car accident attorney',
    'Georgia personal injury podcast',
    'Georgia wrongful death attorney',
    'truck accident lawyer Lawrenceville GA',
    'motorcycle accident attorney Atlanta',
    'traumatic brain injury attorney Georgia',
    'Spanish speaking personal injury lawyer Atlanta',
    'former prosecutor personal injury Georgia',
  ],
  category: 'Legal Podcast',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${TITLE} — hosted by ${HOST_NAME}, ${FIRM_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/opengraph-image'],
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#283142' },
    { media: '(prefers-color-scheme: dark)', color: '#283142' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <MarkerWidget />
      </body>
    </html>
  )
}
