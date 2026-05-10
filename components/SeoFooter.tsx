import { seoFooter } from '@/lib/content';

export default function SeoFooter() {
  return (
    <section
      aria-labelledby="seo-footer-heading"
      className="bg-slate-100 border-t border-ergo-border section-padding"
    >
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <h2
          id="seo-footer-heading"
          className="text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          {seoFooter.h2}
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {seoFooter.blocks.map((block) => (
            <div key={block.h3}>
              <h3 className="text-base font-bold text-gray-900">{block.h3}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
