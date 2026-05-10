import CheckForm from './CheckForm';
import { hero, site } from '@/lib/content';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-ergo-dark overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #fff 39px, #fff 40px)',
        }}
      />

      <div className="container-content section-padding relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div>
            <p className="mb-4 inline-block rounded-full bg-ergo-red/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ergo-red-bright">
              Seit 28. Juni 2025 gilt das BFSG
            </p>
            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {hero.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-xl">
              {hero.subheadline}
            </p>

            {/* Trust indicators */}
            <ul
              aria-label="Vorteile des kostenlosen BFSG-Checks"
              className="mt-6 flex flex-wrap gap-3"
            >
              {hero.trust.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-1.5 text-sm text-gray-400"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-ergo-red-bright"
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
                  {t}
                </li>
              ))}
            </ul>

            {/* Secondary CTA */}
            <p className="mt-6 text-sm text-gray-500">
              {hero.secondaryCta}{' '}
              <a
                href={site.calendlyUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="font-semibold text-ergo-red-bright underline underline-offset-2 hover:text-white transition"
              >
                {hero.secondaryCtaLabel} →
              </a>
            </p>
          </div>

          {/* Right: Form */}
          <div
            id="check-form"
            className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            aria-label="Formular: BFSG-Check anfordern"
          >
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              Deine Website kostenlos prüfen lassen
            </h2>
            <p className="mb-6 text-sm text-ergo-muted">Bericht innerhalb von 24 Stunden.</p>
            <CheckForm id="hero-check-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
