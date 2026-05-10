import { bfsgExplained } from '@/lib/content';

export default function BfsgExplained() {
  return (
    <section aria-labelledby="bfsg-explained-heading" className="bg-slate-50 section-padding">
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="bfsg-explained-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            {bfsgExplained.h2}
          </h2>
          <div className="mt-8 space-y-5">
            {bfsgExplained.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-700">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
