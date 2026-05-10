import { deliverable } from '@/lib/content';

export default function Deliverable() {
  return (
    <section aria-labelledby="deliverable-heading" className="bg-ergo-light section-padding">
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Mockup placeholder */}
          <div
            aria-label="Vorschau des BFSG-Berichts (Platzhalter)"
            className="flex items-center justify-center rounded-2xl border-2 border-dashed border-ergo-border bg-white p-12 aspect-[4/3]"
          >
            {/* PLACEHOLDER: Replace with actual report mockup image */}
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <p className="mt-3 text-sm font-medium text-ergo-muted">
                Bericht-Mockup
                <br />
                <span className="text-xs">(Platzhalter)</span>
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2
              id="deliverable-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              {deliverable.h2}
            </h2>
            <ul className="mt-8 space-y-4" aria-label="Inhalt deines BFSG-Berichts">
              {deliverable.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ergo-red text-xs font-bold text-white"
                  >
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
