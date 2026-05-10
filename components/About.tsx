import { about } from '@/lib/content';

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="bg-white section-padding">
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div
              aria-label={`Foto von ${about.name} (Platzhalter)`}
              className="h-64 w-64 rounded-2xl border-2 border-dashed border-ergo-border bg-ergo-light flex items-center justify-center"
            >
              {/* PLACEHOLDER: Replace with actual photo */}
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="mx-auto h-16 w-16 text-ergo-border"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p className="mt-2 text-xs text-ergo-muted">Foto (Platzhalter)</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 id="about-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {about.h2}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">{about.text}</p>

            <ul
              aria-label="Vertrauenspunkte"
              className="mt-8 space-y-4"
            >
              {about.trust.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <svg
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-ergo-red"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
