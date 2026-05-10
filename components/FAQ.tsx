'use client';

import { useState } from 'react';
import { faqs } from '@/lib/content';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading" className="bg-white section-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Häufige Fragen zum BFSG Check
        </h2>

        <dl className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;

            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors ${
                  isOpen ? 'border-ergo-red/30 bg-red-50/40' : 'border-ergo-border bg-ergo-light'
                }`}
              >
                <dt>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-gray-900 hover:text-ergo-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ergo-red focus-visible:ring-inset rounded-xl"
                  >
                    <span>{faq.q}</span>
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className={`ml-4 h-5 w-5 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-ergo-red' : 'text-gray-400'
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="px-6 pb-5"
                >
                  <p className="text-sm leading-relaxed text-gray-700">{faq.a}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
