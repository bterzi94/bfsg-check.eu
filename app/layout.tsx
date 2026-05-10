import type { Metadata } from 'next';
import { Fraunces, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/content';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
});

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords:
    'BFSG Check, Barrierefreiheitsstärkungsgesetz, Website BFSG-konform prüfen, Barrierefreiheits-Audit, BFSG Betroffenheit, WCAG 2.1 AA, Bußgeld 100.000 Euro, Stichtag 28. Juni 2025',
  metadataBase: new URL(site.url),
  alternates: {
    canonical: '/',
    languages: { de: '/' },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: 'de-DE',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${site.url}/?s={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: { '@type': 'ImageObject', url: `${site.url}/logo.svg` },
    },
    {
      '@type': 'Service',
      '@id': `${site.url}/#service`,
      name: 'BFSG Check',
      provider: { '@id': `${site.url}/#organization` },
      description: site.description,
      serviceType: 'Barrierefreiheits-Audit',
      areaServed: 'DE',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${nunito.variable}`}>
      <head>
        <link rel="alternate" hrefLang="de" href={`${site.url}/`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
