import CheckForm from './CheckForm';
import { finalCta } from '@/lib/content';

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-ergo-dark section-padding"
    >
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="final-cta-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            {finalCta.h2}
          </h2>
          <p className="mt-3 text-lg text-gray-400">{finalCta.text}</p>
        </div>

        <div className="mx-auto mt-10 max-w-lg rounded-2xl bg-white p-6 sm:p-8">
          <CheckForm id="final-check-form" />
        </div>

        <ul
          aria-label="Vorteile"
          className="mt-6 flex justify-center flex-wrap gap-4"
        >
          {finalCta.trust.map((t) => (
            <li key={t} className="flex items-center gap-1.5 text-sm text-gray-400">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-ergo-red-bright"
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
      </div>
    </section>
  );
}
