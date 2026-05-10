import { urgency } from '@/lib/content';

export default function UrgencyBlock() {
  return (
    <section
      aria-labelledby="urgency-heading"
      className="bg-ergo-dark section-padding"
    >
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <h2
          id="urgency-heading"
          className="text-3xl font-bold text-white sm:text-4xl max-w-2xl"
        >
          {urgency.h2}
        </h2>

        <ul
          aria-label="Risiken durch Nicht-Konformität mit dem BFSG"
          className="mt-10 grid gap-6 sm:grid-cols-3"
        >
          {urgency.cards.map((card, i) => (
            <li
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <span aria-hidden="true" className="text-3xl" role="img">
                {card.icon}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{card.text}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-300">
          {urgency.body}
        </p>
      </div>
    </section>
  );
}
