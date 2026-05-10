import { whatWeCheck } from '@/lib/content';

const icons: Record<string, string> = {
  Wahrnehmbar: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  Bedienbar: 'M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59',
  Verständlich: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  Robust: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
};

export default function WhatWeCheck() {
  return (
    <section aria-labelledby="check-heading" className="bg-white section-padding">
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <h2
          id="check-heading"
          className="text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          {whatWeCheck.h2}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatWeCheck.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-ergo-border p-6 hover:border-ergo-red/40 transition-colors"
            >
              <div
                aria-hidden="true"
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-ergo-red/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-ergo-red"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={icons[pillar.title]} />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">{pillar.title}</h3>
              <ul className="mt-3 space-y-1" aria-label={`Prüfkriterien: ${pillar.title}`}>
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ergo-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ergo-muted">{whatWeCheck.hinweis}</p>
      </div>
    </section>
  );
}
