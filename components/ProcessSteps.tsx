import { steps } from '@/lib/content';

export default function ProcessSteps() {
  return (
    <section aria-labelledby="process-heading" className="bg-white section-padding">
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <h2
          id="process-heading"
          className="text-3xl font-bold text-center text-gray-900 sm:text-4xl"
        >
          So läuft dein BFSG Check ab
        </h2>

        <ol
          aria-label="Ablauf des BFSG-Checks in drei Schritten"
          className="mt-12 grid gap-8 sm:grid-cols-3"
        >
          {steps.map((step, i) => (
            <li
              key={i}
              className="relative flex flex-col rounded-xl border border-ergo-border bg-ergo-light p-6"
            >
              <span
                aria-hidden="true"
                className="mb-4 inline-block font-serif text-5xl font-bold text-ergo-red/20 leading-none select-none"
              >
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
