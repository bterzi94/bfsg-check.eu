import { notCovered } from '@/lib/content';

export default function NotCovered() {
  return (
    <section aria-labelledby="not-covered-heading" className="bg-slate-50 section-padding">
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <h2
          id="not-covered-heading"
          className="text-3xl font-bold text-gray-900 sm:text-4xl max-w-2xl"
        >
          {notCovered.h2}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {notCovered.topics.map((topic) => (
            <div key={topic.h3} className="rounded-xl border border-ergo-border bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900">{topic.h3}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{topic.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
