import { serviceCta, site } from '@/lib/content';

export default function ServiceCTA() {
  return (
    <section
      aria-labelledby="service-cta-heading"
      className="bg-ergo-red section-padding"
    >
      <div className="container-content px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="service-cta-heading"
          className="text-3xl font-bold text-white sm:text-4xl max-w-2xl mx-auto"
        >
          {serviceCta.h2}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-red-100 max-w-xl mx-auto">
          {serviceCta.text}
        </p>
        <a
          href={site.calendlyUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 text-base font-bold text-ergo-red transition hover:bg-red-50 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ergo-red"
        >
          {serviceCta.cta}
        </a>
      </div>
    </section>
  );
}
